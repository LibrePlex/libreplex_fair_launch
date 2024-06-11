use anchor_lang::prelude::*;



use crate::
    Deployment
;

pub mod sysvar_instructions_program {
    use anchor_lang::declare_id;
    declare_id!("Sysvar1nstructions1111111111111111111111111");
}

#[derive(Clone, AnchorDeserialize, AnchorSerialize)]
pub struct ToggleSwapCosignerInput {
    pub disable_swap_cosigner: bool,
}

/*
    Deploy takes no input parameters as all of the
    string parameter + decimals have already been set by
    initialise.

    Deploy creates all on-chain objects (inscriptions,
    mints + any metadata) that are required to keep track of the
    launch lifecycle.
*/
#[derive(Accounts)]
pub struct ToggleSwapCosignerCtx<'info> {
    #[account(
        mut,
        seeds=["deployment".as_bytes(), deployment.ticker.as_bytes()],
        bump
    )]
    pub deployment: Account<'info, Deployment>,

    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut,
        constraint = creator.key() == deployment.creator )]
    pub creator: Signer<'info>,
}

pub fn toggle_swap_cosigner_handler(ctx: Context<ToggleSwapCosignerCtx>, input: ToggleSwapCosignerInput) -> Result<()> {

    let deployment = &mut ctx.accounts.deployment;
    deployment.disable_swap_cosigner = input.disable_swap_cosigner;

    Ok(())
}
