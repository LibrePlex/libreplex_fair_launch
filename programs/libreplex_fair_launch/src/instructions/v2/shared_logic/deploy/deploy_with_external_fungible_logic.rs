use anchor_lang::prelude::*;
use anchor_spl::{token_interface::Mint};





use crate::{Deployment, DeploymentActive, Hashlist};


pub mod sysvar_instructions_program {
    use anchor_lang::declare_id;
    declare_id!("Sysvar1nstructions1111111111111111111111111");
}

pub fn deploy_token_2022_external_fungible_logic<'f>(
    hashlist: &mut Account<'f, Hashlist>,
    deployment: &mut Account<'f, Deployment>,
    fungible_mint: &InterfaceAccount<'f, Mint>
) -> Result<()> {
    hashlist.deployment = deployment.key();
    msg!("Set fungible mint to {}", fungible_mint.key());
    deployment.fungible_mint = fungible_mint.key();
   
    msg!("Deployment created with external fungible.");
    emit!(DeploymentActive {
        ticker: deployment.ticker.clone(),
        fungible_mint: fungible_mint.key(),
    });

    Ok(())
}
