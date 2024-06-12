/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/libreplex_fair_launch.json`.
 */
export type LibreplexFairLaunch = {
  "address": "",
  "metadata": {
    "name": "libreplexFairLaunch",
    "version": "0.6.0",
    "spec": "0.1.0",
    "description": "Created with Anchor",
    "repository": "https://github.com/Libreplex/libreplex-program-library"
  },
  "instructions": [
    {
      "name": "burnExcessSpl",
      "discriminator": [
        157,
        22,
        56,
        53,
        178,
        56,
        202,
        88
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "fungibleEscrowTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "claimTransferFeeAuthAsCreator",
      "discriminator": [
        41,
        176,
        89,
        213,
        104,
        212,
        241,
        249
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "creator",
          "writable": true
        },
        {
          "name": "creatorAta",
          "writable": true
        },
        {
          "name": "tokenProgram22",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "sources",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "deployExtFungible",
      "discriminator": [
        198,
        56,
        173,
        140,
        102,
        214,
        163,
        34
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions"
        }
      ],
      "args": []
    },
    {
      "name": "deployHybridUnchecked",
      "discriminator": [
        125,
        206,
        244,
        176,
        151,
        108,
        3,
        227
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint"
        },
        {
          "name": "fungibleEscrowTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "deployRaw",
      "discriminator": [
        115,
        58,
        206,
        193,
        21,
        201,
        134,
        96
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deploymentV2"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "deployToken22",
      "discriminator": [
        206,
        227,
        152,
        1,
        237,
        228,
        32,
        64
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleEscrowTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram2022"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions"
        }
      ],
      "args": []
    },
    {
      "name": "deployhybrid",
      "discriminator": [
        143,
        85,
        60,
        117,
        253,
        94,
        52,
        42
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMasterEdition",
          "writable": true
        },
        {
          "name": "fungibleMetadata",
          "writable": true
        },
        {
          "name": "fungibleEscrowTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions"
        },
        {
          "name": "metadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        }
      ],
      "args": []
    },
    {
      "name": "initialiseRaw",
      "discriminator": [
        217,
        72,
        83,
        76,
        139,
        228,
        78,
        122
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "input.ticker"
              }
            ]
          }
        },
        {
          "name": "fungibleMint"
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "initialiseRawInput"
            }
          }
        }
      ]
    },
    {
      "name": "initialiseV3",
      "discriminator": [
        39,
        27,
        181,
        185,
        137,
        127,
        106,
        82
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "input.ticker"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "initialiseInputV3"
            }
          }
        }
      ]
    },
    {
      "name": "join",
      "discriminator": [
        206,
        55,
        2,
        106,
        113,
        220,
        17,
        163
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "creatorFeeTreasury",
          "writable": true
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlistMarker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "nonFungibleMint",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "mintInput"
            }
          }
        }
      ]
    },
    {
      "name": "joinraw",
      "discriminator": [
        19,
        122,
        16,
        218,
        143,
        254,
        26,
        192
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deploymentV2"
              }
            ]
          }
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlistMarker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "nonFungibleMint"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "mintInput"
            }
          }
        }
      ]
    },
    {
      "name": "migrateToHashlist",
      "discriminator": [
        84,
        60,
        54,
        13,
        48,
        42,
        238,
        5
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "migrationMarker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  103,
                  114,
                  97,
                  116,
                  105,
                  111,
                  110,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "migrationCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  103,
                  114,
                  97,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "hashlist",
          "writable": true
        },
        {
          "name": "hashlistMarker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "inscriptionV3"
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "fungibleTokenAccountEscrow",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": []
    },
    {
      "name": "mintToken22",
      "discriminator": [
        12,
        10,
        190,
        68,
        81,
        106,
        186,
        221
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "creatorFeeTreasury",
          "writable": true
        },
        {
          "name": "hashlist",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlistMarker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "minter",
          "writable": true
        },
        {
          "name": "nonFungibleMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "nonFungibleTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "mintInput"
            }
          }
        }
      ]
    },
    {
      "name": "reduceMintCount",
      "discriminator": [
        157,
        237,
        45,
        50,
        51,
        188,
        99,
        211
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "reduceMintCountInput"
            }
          }
        }
      ]
    },
    {
      "name": "relinquishCosigner",
      "discriminator": [
        69,
        8,
        121,
        143,
        73,
        21,
        58,
        18
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "cosigner",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "swapToFungible22",
      "discriminator": [
        173,
        67,
        166,
        82,
        47,
        116,
        79,
        10
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "hashlistMarker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "fungibleSourceTokenAccount",
          "docs": [
            "this always exists so we can specify the account type explicitly"
          ],
          "writable": true
        },
        {
          "name": "fungibleTargetTokenAccount",
          "writable": true
        },
        {
          "name": "fungibleTargetTokenAccountOwner"
        },
        {
          "name": "nonFungibleMint",
          "writable": true
        },
        {
          "name": "nonFungibleSourceAccountOwner",
          "signer": true
        },
        {
          "name": "nonFungibleSourceTokenAccount",
          "docs": [
            "this always exists (otherwise we couldn't swap), so we can specify the account",
            "type explicitly"
          ],
          "writable": true
        },
        {
          "name": "nonFungibleTargetTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram22",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions"
        }
      ],
      "args": []
    },
    {
      "name": "swapToNonfungible22",
      "discriminator": [
        105,
        81,
        181,
        80,
        169,
        70,
        223,
        42
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "deploymentConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "fungibleSourceTokenAccount",
          "writable": true
        },
        {
          "name": "fungibleTargetTokenAccount",
          "writable": true
        },
        {
          "name": "nonFungibleMint",
          "writable": true
        },
        {
          "name": "nonFungibleSourceTokenAccount",
          "writable": true
        },
        {
          "name": "hashlistMarker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "nonFungibleTargetTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram22",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions"
        }
      ],
      "args": []
    },
    {
      "name": "switchDeploymentType",
      "discriminator": [
        4,
        48,
        136,
        36,
        252,
        203,
        223,
        15
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true
        },
        {
          "name": "deploymentConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "deploymentType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "toggleFreeze",
      "discriminator": [
        136,
        3,
        54,
        90,
        252,
        134,
        158,
        172
      ],
      "accounts": [
        {
          "name": "deployment",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "tokenAccount"
        },
        {
          "name": "delegate",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "toggleSwapCosigner",
      "discriminator": [
        171,
        72,
        117,
        10,
        121,
        117,
        157,
        245
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "toggleSwapCosignerInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateSplMetadata",
      "discriminator": [
        121,
        242,
        104,
        72,
        126,
        4,
        142,
        26
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fungibleMint",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newUri",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateSymbol22",
      "discriminator": [
        202,
        189,
        223,
        193,
        106,
        62,
        27,
        46
      ],
      "accounts": [
        {
          "name": "deployment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployment.ticker",
                "account": "deployment"
              }
            ]
          }
        },
        {
          "name": "hashlistMarker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  104,
                  97,
                  115,
                  104,
                  108,
                  105,
                  115,
                  116,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "deployment"
              },
              {
                "kind": "account",
                "path": "nonFungibleMint"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "nonFungibleMint",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "deployment",
      "discriminator": [
        66,
        90,
        104,
        89,
        183,
        130,
        64,
        178
      ]
    },
    {
      "name": "deploymentConfig",
      "discriminator": [
        13,
        112,
        57,
        81,
        43,
        26,
        156,
        18
      ]
    },
    {
      "name": "deploymentV2",
      "discriminator": [
        48,
        38,
        175,
        59,
        5,
        208,
        85,
        104
      ]
    },
    {
      "name": "hashlist",
      "discriminator": [
        187,
        203,
        134,
        6,
        43,
        198,
        120,
        186
      ]
    },
    {
      "name": "migrationCounter",
      "discriminator": [
        112,
        205,
        130,
        135,
        57,
        50,
        236,
        108
      ]
    },
    {
      "name": "migrationMarker",
      "discriminator": [
        187,
        159,
        18,
        140,
        101,
        139,
        9,
        106
      ]
    }
  ],
  "types": [
    {
      "name": "deployment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "numberOfTokensIssued",
            "type": "u64"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "useInscriptions",
            "type": "bool"
          },
          {
            "name": "deploymentType",
            "type": "u8"
          },
          {
            "name": "requireCreatorCosign",
            "type": "bool"
          },
          {
            "name": "migratedFromLegacy",
            "type": "bool"
          },
          {
            "name": "escrowNonFungibleCount",
            "type": "u64"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "deploymentTemplate",
            "type": "string"
          },
          {
            "name": "mintTemplate",
            "type": "string"
          },
          {
            "name": "fungibleMint",
            "type": "pubkey"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "disableSwapCosigner",
            "docs": [
              "when cosigner is active this can be toggled to disable swap cosigner",
              "while still requiring cosigner for other actions such as join"
            ],
            "type": "bool"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                199
              ]
            }
          }
        ]
      }
    },
    {
      "name": "deploymentActive",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "fungibleMint",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "deploymentConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployment",
            "type": "pubkey"
          },
          {
            "name": "creatorFeeTreasury",
            "type": "pubkey"
          },
          {
            "name": "creatorFeePerMintLamports",
            "type": "u64"
          },
          {
            "name": "transferFeeInBasisPoints",
            "type": "u16"
          },
          {
            "name": "cosignerProgramId",
            "type": "pubkey"
          },
          {
            "name": "multiplierLimits",
            "type": {
              "option": {
                "defined": {
                  "name": "multiplierLimits"
                }
              }
            }
          },
          {
            "name": "transferFeeWithdrawAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "transferFeeTargetWallet",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "totalSplEquivalentMinted",
            "type": "u64"
          },
          {
            "name": "splExcessInEscrow",
            "type": "u64"
          },
          {
            "name": "allowBurn",
            "docs": [
              "used for variable-rate swaps"
            ],
            "type": "bool"
          },
          {
            "name": "allowClaimTransferFeeAuthAsCreator",
            "type": "bool"
          },
          {
            "name": "uncheckedFungible",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "deploymentV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "numberOfTokensIssued",
            "type": "u64"
          },
          {
            "name": "fungibleDecimals",
            "type": "u8"
          },
          {
            "name": "escrowNonFungibleCount",
            "type": "u64"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "fungibleMint",
            "type": "pubkey"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "proxyProgramId",
            "type": "pubkey"
          },
          {
            "name": "cosignerMint",
            "type": "pubkey"
          },
          {
            "name": "cosignerSwapToNft",
            "type": "pubkey"
          },
          {
            "name": "cosignerSwapToSpl",
            "type": "pubkey"
          },
          {
            "name": "fungibleType",
            "type": {
              "defined": {
                "name": "fungibleType"
              }
            }
          },
          {
            "name": "nonFungibleType",
            "type": {
              "defined": {
                "name": "nonFungibleType"
              }
            }
          },
          {
            "name": "deployed",
            "type": "bool"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                200
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fungibleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "tokenKeg"
          },
          {
            "name": "token2022"
          }
        ]
      }
    },
    {
      "name": "hashlist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployment",
            "type": "pubkey"
          },
          {
            "name": "issues",
            "type": {
              "vec": {
                "defined": {
                  "name": "mintAndOrder"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "hashlistEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "deployment",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "initialiseInputV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "deploymentTemplate",
            "type": "string"
          },
          {
            "name": "mintTemplate",
            "type": "string"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "creatorCosignProgramId",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "useInscriptions",
            "type": "bool"
          },
          {
            "name": "deploymentType",
            "type": "u8"
          },
          {
            "name": "creatorFeeTreasury",
            "type": "pubkey"
          },
          {
            "name": "creatorFeePerMintInLamports",
            "type": "u64"
          },
          {
            "name": "multiplierLimits",
            "type": {
              "defined": {
                "name": "multiplierLimits"
              }
            }
          },
          {
            "name": "transferFeeConfig",
            "type": {
              "option": {
                "defined": {
                  "name": "transferFeeInputConfig"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "initialiseRawInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "proxyProgramId",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "cosignerMint",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "cosignerSwapToSpl",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "cosignerSwapToNft",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "fungibleType",
            "type": {
              "defined": {
                "name": "fungibleType"
              }
            }
          },
          {
            "name": "nonFungibleType",
            "type": {
              "defined": {
                "name": "nonFungibleType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "migrationCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployment",
            "type": "pubkey"
          },
          {
            "name": "migrationCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "migrationMarker",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "mintAndOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "order",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mintEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "tokensMinted",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mintInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "multiplierNumerator",
            "type": "u16"
          },
          {
            "name": "multiplierDenominator",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "multiplierLimits",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxNumerator",
            "type": "u16"
          },
          {
            "name": "minDenominator",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "newDeploymentEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "creator",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "newDeploymentV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "offChainUrl",
            "type": "string"
          },
          {
            "name": "requireCoSign",
            "type": "bool"
          },
          {
            "name": "deploymentTemplate",
            "type": "string"
          },
          {
            "name": "mintTemplate",
            "type": "string"
          },
          {
            "name": "usesInscriptions",
            "type": "bool"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "deploymentType",
            "type": "u8"
          },
          {
            "name": "config",
            "type": {
              "option": {
                "defined": {
                  "name": "deploymentConfig"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "nonFungibleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "tokenKeg"
          },
          {
            "name": "token2022"
          },
          {
            "name": "nifty"
          }
        ]
      }
    },
    {
      "name": "reduceMintCountInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "toggleSwapCosignerInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "disableSwapCosigner",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "transferFeeInputConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeInBasisPoints",
            "type": "u16"
          },
          {
            "name": "withdrawAuthority",
            "type": "pubkey"
          },
          {
            "name": "targetWallet",
            "type": "pubkey"
          },
          {
            "name": "allowClaimTransferFeeAuthAsCreator",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
