use anchor_lang::prelude::*;

use crate::Deployment;
use crate::HashlistMarker;


#[derive(Accounts)]
pub struct UpdateCreator<'info> {
    #[account(mut)]
    pub deployment: Account<'info, Deployment>,

    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut,
        constraint = creator.key() == deployment.creator)]
    pub creator: Signer<'info>,
}

pub fn update_creator_handler(ctx: Context<UpdateCreator>, new_creator: Pubkey) -> Result<()> {
    let deployment: &mut Account<'_, Deployment> = &mut ctx.accounts.deployment;
    deployment.creator = new_creator;

    Ok(())
}
