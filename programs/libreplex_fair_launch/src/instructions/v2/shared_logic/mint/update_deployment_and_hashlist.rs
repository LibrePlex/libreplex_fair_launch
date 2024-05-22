use anchor_lang::prelude::*;

// use libreplex_shared::sysvar_instructions_program;

use crate::{add_to_hashlist, Deployment, MintEvent};

pub fn update_deployment_and_hashlist<'a>(
    deployment: &mut Account<'a, Deployment>,
    hashlist: &mut UncheckedAccount<'a>,
    payer: &Signer<'a>,
    system_program: &Program<'a, System>,
    root_key: Pubkey,
) -> Result<()> {

  
    if deployment.number_of_tokens_issued <= 262144 {
        msg!("updating hashlist");
        

        add_to_hashlist(
            deployment.number_of_tokens_issued as u32,
            hashlist,
            payer,
            system_program,
            &root_key,
            &deployment.key(),
            0,
        )?;
    };

    emit!(MintEvent {
        mint: root_key,
        ticker: deployment.ticker.clone(),
        tokens_minted: deployment.number_of_tokens_issued,
        max_number_of_tokens: deployment.max_number_of_tokens,
    });
    Ok(())
}
