use anchor_lang::prelude::*;
use anchor_spl::token_interface::Mint;



use crate::{
    check_deploy_allowed, deploy_hybrid::sysvar_instructions_program, deploy_token_2022_external_fungible_logic, Deployment, Hashlist, TOKEN2022_DEPLOYMENT_TYPE
};

#[derive(Clone, AnchorDeserialize, AnchorSerialize)]
pub struct DeployWithExternalFungibleInput {
    pub require_creator_cosign: bool
}

/*
    Called when fungible mint is specified externally.
    In this scenario, it is the creator's responsibility 
    to place sufficient amount of SPL token into the hybrid escrow
*/

#[derive(Accounts)]
pub struct DeployWithExternalFungibleCtx<'info> {
    #[account(
        mut,
        seeds=["deployment".as_bytes(), deployment.ticker.as_bytes()],
        bump
    )]
    pub deployment: Account<'info, Deployment>,

    #[account(init, seeds = ["hashlist".as_bytes(), 
    deployment.key().as_ref()],
    bump, payer = payer, space = 8 + 32 + 4)]
    pub hashlist: Account<'info, Hashlist>,

    #[account(mut)]
    pub payer: Signer<'info>,

    /* INITIALISE FUNGIBLE ACCOUNTS */
    #[account(mut)]
    pub fungible_mint: InterfaceAccount<'info, Mint>,

    #[account()]
    pub system_program: Program<'info, System>,

    /// CHECK: Id checked in constraint
    #[account(
        constraint = sysvar_instructions.key() == sysvar_instructions_program::ID
    )]
    #[account()]
    pub sysvar_instructions: UncheckedAccount<'info>,
}

pub fn deploy_with_external_fungible_handler(ctx: Context<DeployWithExternalFungibleCtx>) -> Result<()> {


    let hashlist = &mut ctx.accounts.hashlist;
    let deployment = &mut ctx.accounts.deployment;

    let fungible_mint= &ctx.accounts.fungible_mint;
  
    check_deploy_allowed(deployment);

    if deployment.deployment_type != TOKEN2022_DEPLOYMENT_TYPE {
        panic!("Wrong deployment type")
    }

    deploy_token_2022_external_fungible_logic(
        hashlist,
        deployment,
        fungible_mint
    )?;
        

    Ok(())
}
