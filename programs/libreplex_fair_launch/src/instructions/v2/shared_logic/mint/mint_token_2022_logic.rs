use anchor_lang::prelude::*;
use anchor_spl::{associated_token::AssociatedToken};

use solana_program::{program::invoke, system_instruction};
use spl_pod::optional_keys::OptionalNonZeroPubkey;
use spl_token_metadata_interface::state::TokenMetadata;

// use libreplex_shared::sysvar_instructions_program;

use libreplex_shared::{
    create_token_2022_and_metadata, operations::mint_non_fungible_2022_logic, MintAccounts2022,
    SharedError,
};

use crate::{
    errors::FairLaunchError, update_deployment_and_hashlist, Deployment, DeploymentConfig,
    HashlistMarker, MintInput, HYBRID_DEPLOYMENT_TYPE, TOKEN2022_DEPLOYMENT_TYPE,
};

pub fn validate_new_multiplier(
    mint_input: &MintInput,
    config: &DeploymentConfig,
    deployment: &Deployment,
) -> Result<()> {
    if (mint_input.multiplier_denominator != 1 || mint_input.multiplier_numerator != 1)
        && !deployment.require_creator_cosign
    {
        return Err(FairLaunchError::MultiplierMissMatch.into());
    }

    if mint_input.multiplier_denominator != 1 || mint_input.multiplier_numerator != 1 {
        if let Some(limit) = config.multiplier_limits.as_ref() {
            if mint_input.multiplier_denominator < limit.min_denominator
                || mint_input.multiplier_numerator > limit.max_numerator
            {
                return Err(FairLaunchError::MultiplierMissMatch.into());
            }
        } else {
            return Err(FairLaunchError::MultiplierMissMatch.into());
        }
    }

    Ok(())
}

pub struct MintNftToRecipient<'f> {
    pub minter: AccountInfo<'f>,
    pub token_account: AccountInfo<'f>,
    pub associated_token_program: Program<'f, AssociatedToken>,
    pub token_program: UncheckedAccount<'f>,
   
}

pub fn mint_token2022_logic<'info>(
    deployment: &mut Account<'info, Deployment>,
    deployment_config: &mut Account<'info, DeploymentConfig>,
    fee_treasury: &UncheckedAccount<'info>,
    non_fungible_mint: &AccountInfo<'info>,
    system_program: &Program<'info, System>,
    payer: &Signer<'info>,
    hashlist: &mut UncheckedAccount<'info>,
    hashlist_marker: &mut HashlistMarker,
    bump_deployment: u8,
    co_signer: &Signer<'info>,
    nft_mint_accounts: Option<MintNftToRecipient<'info>>,
    mint_input: MintInput,
) -> Result<()> {
    validate_new_multiplier(&mint_input, deployment_config, deployment)?;

    hashlist_marker.multiplier_denominator = mint_input.multiplier_denominator;
    hashlist_marker.multiplier_numerator = mint_input.multiplier_numerator;

    if !deployment.deployment_type.eq(&TOKEN2022_DEPLOYMENT_TYPE)
        && !deployment.deployment_type.eq(&HYBRID_DEPLOYMENT_TYPE)
    {
        return Err(FairLaunchError::IncorrectMintType.into());
    }

    if deployment.number_of_tokens_issued >= deployment.max_number_of_tokens {
        return Err(FairLaunchError::MintedOut.into());
    }

    if deployment.migrated_from_legacy {
        return Err(FairLaunchError::LegacyMigrationsAreMintedOut.into());
    }

    if deployment.require_creator_cosign && !co_signer.key().eq(&deployment.creator.key()) {
        return Err(SharedError::InvalidCreatorCosigner.into());
    }

    let update_authority =
        OptionalNonZeroPubkey::try_from(Some(deployment.key())).expect("Bad update auth");

    deployment.number_of_tokens_issued += 1;

    deployment_config.total_spl_equivalent_minted +=
        deployment.get_fungible_mint_amount(hashlist_marker);

    if deployment_config.allow_burn {
        deployment_config.spl_excess_in_escrow += deployment
            .get_max_fungible_mint_amount_per_token(&deployment_config.multiplier_limits)
            .checked_sub(deployment.get_fungible_mint_amount(hashlist_marker))
            .unwrap();
    }

    let ticker = deployment.ticker.clone();
    let deployment_seeds: &[&[u8]] =
        &["deployment".as_bytes(), ticker.as_ref(), &[bump_deployment]];

    if let Some(x) = nft_mint_accounts {
        // msg!("Create token 2022 w/ metadata");
        create_token_2022_and_metadata(
            MintAccounts2022 {
                authority: deployment.to_account_info(),
                payer: payer.to_account_info(),
                nft_owner: x.minter.to_account_info(),
                nft_mint: non_fungible_mint.to_account_info(),
                spl_token_program: x.token_program.to_account_info(),
            },
            0,
            Some(TokenMetadata {
                name: deployment.ticker.clone(),
                symbol: deployment.ticker.clone(),
                uri: deployment.offchain_url.clone(),
                update_authority,
                mint: non_fungible_mint.key(),
                additional_metadata: vec![
                    ("fld".to_string(), deployment.key().to_string()),
                    (
                        "pos".to_string(),
                        deployment.number_of_tokens_issued.to_string(),
                    ),
                ],
            }),
            None,
            None,
            Some(deployment_seeds),
            None,
            None,
        )?;

        // msg!("Minting 2022");
        mint_non_fungible_2022_logic(
            &non_fungible_mint.to_account_info(),
            &x.token_account.to_account_info(),
            &x.associated_token_program,
            payer,
            &x.minter.to_account_info(),
            system_program,
            &x.token_program,
            &deployment.to_account_info(),
            deployment_seeds,
        )?;
    }

    update_deployment_and_hashlist(
        deployment,
        hashlist,
        payer,
        system_program,
        non_fungible_mint.key(),
    )?;
    // finally send a fee to the creator if a fee is specified
    msg!(
        "Creator fee: {}",
        deployment_config.creator_fee_per_mint_lamports
    );
    if deployment_config.creator_fee_per_mint_lamports > 0 {
        msg!(
            "{} {}",
            payer.key(),
            deployment_config.creator_fee_treasury.key()
        );
        invoke(
            &system_instruction::transfer(
                &payer.key(),
                &deployment_config.creator_fee_treasury,
                deployment_config.creator_fee_per_mint_lamports,
            ),
            &[
                payer.to_account_info(),
                fee_treasury.to_account_info(),
                system_program.to_account_info(),
            ],
        )?;
    }
    Ok(())
}
