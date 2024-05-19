
// this can be done before redeploy
pub mod switch_deployment_type;
pub use switch_deployment_type::*;

pub mod legacy;
pub use legacy::*;

pub mod v2;
pub use v2::*;

pub mod raw;
pub use raw::*;

pub mod toggle_freeze;
pub use toggle_freeze::*;


pub const COMPRESSED_DEPLOYMENT_TYPE: u8 = 2;
pub const STANDARD_DEPLOYMENT_TYPE: u8 = 0;
pub const TOKEN2022_DEPLOYMENT_TYPE: u8 = 3;
pub const HYBRID_DEPLOYMENT_TYPE: u8 = 4; // creates token-2022 NFTs and metaple standard SPLs