use anchor_lang::prelude::*;
use anchor_spl::token::spl_token;
use anchor_spl::token_interface::Mint;




use crate::MintInput;
use crate::{
    Deployment, HashlistMarker,
    mint_token2022_logic, DeploymentConfig,
};

#[derive(Accounts)]
pub struct JoinCtx<'info> {
    #[account(mut,
        seeds = ["deployment".as_ref(), deployment.ticker.as_ref()], bump)]
    pub deployment: Account<'info, Deployment>,

    #[account(mut,
        seeds = ["deployment_config".as_ref(), deployment.key().as_ref()], bump)]
    pub deployment_config: Account<'info, DeploymentConfig>,

    /// CHECK: checked in constraint
    #[account(mut,
        constraint = deployment_config.creator_fee_treasury == creator_fee_treasury.key())] 
    pub creator_fee_treasury: UncheckedAccount<'info>,

    /// CHECK: It's a fair launch. Anybody can sign, anybody can receive the inscription
    
    #[account(mut, 
        
        seeds = ["hashlist".as_bytes(), 
        deployment.key().as_ref()],
        bump,)]
    pub hashlist: UncheckedAccount<'info>,

    #[account(init, 
        space = 8 + HashlistMarker::INIT_SPACE,
        payer = payer,
        seeds = ["hashlist_marker".as_bytes(), 
        deployment.key().as_ref(),
        non_fungible_mint.key().as_ref()],
        bump,)]
    pub hashlist_marker: Account<'info, HashlistMarker>,

    #[account(mut)]
    pub payer: Signer<'info>,

    // when deployment.require_creator_cosign is true, this must be equal to the creator
    // of the deployment otherwise, can be any signer account
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(mut, 
        constraint = non_fungible_mint.to_account_info().owner.eq(&spl_token_2022::ID)
            || non_fungible_mint.to_account_info().owner.eq(&spl_token::ID))]
    pub non_fungible_mint: InterfaceAccount<'info, Mint>,

    #[account()]
    pub system_program: Program<'info, System>,

}

pub fn join_handler<'info>(ctx: Context<'_, '_, '_, 'info, JoinCtx<'info>>, input: MintInput) -> Result<()> {
    let deployment = &mut ctx.accounts.deployment;
    let deployment_config = &mut ctx.accounts.deployment_config;
    let payer = &ctx.accounts.payer; 
    let signer = &ctx.accounts.signer;
    let non_fungible_mint = &ctx.accounts.non_fungible_mint;
    // let non_fungible_token_account = &ctx.accounts.non_fungible_token_account;
    let system_program = &ctx.accounts.system_program;
   
    let creator_fee_treasury = &mut ctx.accounts.creator_fee_treasury;
    let hashlist = &mut ctx.accounts.hashlist;
    
    if !deployment.require_creator_cosign {
        panic!("Joins require a co signer")
    }
   
    // if non_fungible_token_account.amount != 1 {
    //     panic!("Can only join NFTs")
    // }

    let non_fungible_ai = non_fungible_mint.to_account_info();
    
   
    mint_token2022_logic(
        deployment, 
        deployment_config,
        creator_fee_treasury,
        &non_fungible_ai, 
        system_program, 
        payer, 
        hashlist,
        &mut ctx.accounts.hashlist_marker,
        ctx.bumps.deployment,
        signer, 
        None,
         input)?;

    Ok(())
}