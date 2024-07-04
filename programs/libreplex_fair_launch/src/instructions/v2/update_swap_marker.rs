use anchor_lang::prelude::*;

use crate::Deployment;
use crate::HashlistMarker;


#[derive(Accounts)]
pub struct UpdateSwapMarker<'info> {
    #[account(mut)]
    pub deployment: Account<'info, Deployment>,

    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut,
        constraint = creator.key() == deployment.creator)]
    pub creator: Signer<'info>,

    /* non-fungible accounts */
    /// CHECK: checked in constraint
    #[account(mut)]
    pub non_fungible_mint: UncheckedAccount<'info>,

    #[account(mut, seeds = ["hashlist_marker".as_bytes(), 
    deployment.key().as_ref(),
    non_fungible_mint.key().as_ref()],
    bump,)]
    pub hashlist_marker: Account<'info, HashlistMarker>,
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone)]
pub struct UpdateMarkerInput {
    pub new_denominator: u16,
    pub new_numerator: u16,
}

pub fn update_swap_marker_handler(ctx: Context<UpdateSwapMarker>, input: UpdateMarkerInput) -> Result<()> {
    let marker = &mut ctx.accounts.hashlist_marker;

    marker.multiplier_denominator = input.new_denominator;
    marker.multiplier_numerator = input.new_numerator;

    Ok(())
}