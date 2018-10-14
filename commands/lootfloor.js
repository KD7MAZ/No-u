exports.run = (client, message, args) => {
    let rngalpha = Math.floor(Math.random() * 1000) + 1;
    if (rngalpha < 215) {
        message.channel.send(`Oh no ${message.author}, this floor is empty!`)
    }
    else {
        if (rngalpha < 358) {
            let rngbeta = Math.floor(Math.random() * 1000) + 1;
            if (rngbeta < 287) {
                message.channel.send(`${message.author} You found 12 Light Bullets!, You can now throw bullets at people!`, {
                    files: [
                        `./commands/Fnpics/ammo/lightbullets.png`
                    ]
                })
            }
            else {
                if (rngbeta < 573) {
                    message.channel.send(`${message.author} You found 10 Medium Bullets!, You can now throw bullets at people!`, {
                        files: [
                            `./commands/Fnpics/ammo/mediumbullets.png`
                        ]
                    })
                }
                else {
                    if (rngbeta < 802) {
                        message.channel.send(`${message.author} You found 5 Shells!, You can now throw bullets at people!`, {
                            files: [
                                `./commands/Fnpics/ammo/shells.png`
                            ]
                        })
                    }
                    else {
                        if (rngbeta < 945) {
                            message.channel.send(`${message.author} You found 6 Heavy Bullets!, You can now throw bullets at people!`, {
                                files: [
                                    `./commands/Fnpics/ammo/heavybullets.png`
                                ]
                            })
                        }
                        else {
                            message.channel.send(`${message.author} You found 2 Rockets!, You can now throw rockets at people!`, {
                                files: [
                                    `./commands/Fnpics/ammo/rockets.png`
                                ]
                            })
                        }
                    }
                }
            }
        }
        else {
            if (rngalpha < 472) {
                let rngbeta = Math.floor(Math.random() * 1000) + 1;
                if (rngbeta < 274) {
                    message.channel.send(`${message.author} You found 5 Bandages!`, {
                        files: [
                            `./commands/Fnpics/consumables/bandage.png`
                        ]
                    })
                }
                else {
                    if (rngbeta < 469) {
                        message.channel.send(`${message.author} You found a Shield Potion!`, {
                            files: [
                                `./commands/Fnpics/consumables/shieldpotion.png`
                            ]
                        })
                    }
                    else {
                        if (rngbeta < 625) {
                            message.channel.send(`${message.author} You found 3 Grenades!`, {
                                files: [
                                    `./commands/Fnpics/consumables/grenade.png`
                                ]
                            })
                        }
                        else {
                            if (rngbeta < 781) {
                                message.channel.send(`${message.author} You found 3 Small Shield Potions!`, {
                                    files: [
                                        `./commands/Fnpics/consumables/smallshieldpotion.png`
                                    ]
                                })
                            }
                            else {
                                if (rngbeta < 859) {
                                    message.channel.send(`${message.author} You found a Med Kit!`, {
                                        files: [
                                            `./commands/Fnpics/consumables/medkit.png`
                                        ]
                                    })
                                }
                                else {
                                    if (rngbeta < 921) {
                                        message.channel.send(`${message.author} You found a Slurp Juice!`, {
                                            files: [
                                                `./commands/Fnpics/consumables/slurpjuice.png`
                                            ]
                                        })
                                    }
                                    else {
                                        if (rngbeta < 961) {
                                            message.channel.send(`${message.author} You found 4 Remote Eplosives!`, {
                                                files: [
                                                    `./commands/Fnpics/consumables/remoteexplosives.png`
                                                ]
                                            })
                                        }
                                        else {
                                            message.channel.send(`${message.author} You found 3 Clingers!`, {
                                                files: [
                                                    `./commands/Fnpics/consumables/clinger.png`
                                                ]
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (rngalpha < 558) {
                    let rngbeta = Math.floor(Math.random() * 1000) + 1;
                    if (rngbeta < 477) {
                        message.channel.send(`${message.author} You found 30 Wood!`, {
                            files: [
                                `./commands/Fnpics/resources/wood.png`
                            ]
                        })
                    }
                    else {
                        if (rngbeta < 834) {
                            message.channel.send(`${message.author} You found 30 Stone!`, {
                                files: [
                                    `./commands/Fnpics/resources/stone.png`
                                ]
                            })
                        }
                        else {
                            message.channel.send(`${message.author} You found 30 Metal!`, {
                                files: [
                                    `./commands/Fnpics/resources/metal.png`
                                ]
                            })
                        }
                    }

                }
                else {
                    if (rngalpha < 632) {
                        let rngbeta = Math.floor(Math.random() * 1000) + 1;
                        if (rngbeta < 708) {
                            message.channel.send(`${message.author} You found a Pistol (Common) and 12 Light Bullets!`, {
                                files: [
                                    `./commands/Fnpics/pistol/common.png`
                                ]
                            })
                        }
                        else {
                            if (rngbeta < 885) {
                                message.channel.send(`${message.author} You found a Pistol (Uncommon) and 12 Light Bullets!`, {
                                    files: [
                                        `./commands/Fnpics/pistol/uncommon.png`
                                    ]
                                })
                            }
                            else {
                                if (rngbeta < 956) {
                                    message.channel.send(`${message.author} You found a Pistol (Rare) and 12 Light Bullets!`, {
                                        files: [
                                            `./commands/Fnpics/pistol/rare.png`
                                        ]
                                    })
                                }
                                else {
                                    if (rngbeta < 991) {
                                        message.channel.send(`${message.author} You found a Supressed Pistol (Epic) and 12 Light Bullets!`, {
                                            files: [
                                                `./commands/Fnpics/pistol/epic.png`
                                            ]
                                        })
                                    }
                                    else {
                                        message.channel.send(`${message.author} You found a Supressed Pistol (Legendary) and 12 Light Bullets!`, {
                                            files: [
                                                `./commands/Fnpics/pistol/legendary.png`
                                            ]
                                        })
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (rngalpha < 703) {
                            let rngbeta = Math.floor(Math.random() * 1000) + 1;
                            if (rngbeta < 715) {
                                message.channel.send(`${message.author} You found a Tactical Shotgun (Common) and 5 Shells!`, {
                                    files: [
                                        `./commands/Fnpics/tacticalshotgun/common.png`
                                    ]
                                })
                            }
                            else {
                                if (rngbeta < 929) {
                                    message.channel.send(`${message.author} You found a Tactical Shotgun (Uncommon) and 5 Shells!`, {
                                        files: [
                                            `./commands/Fnpics/tacticalshotgun/uncommon.png`
                                        ]
                                    })
                                }
                                else {
                                    message.channel.send(`${message.author} You found a Tactical Shotgun (Rare) and 5 Shells!`, {
                                        files: [
                                            `./commands/Fnpics/tacticalshotgun/rare.png`
                                        ]
                                    })
                                }
                            }
                        }
                        else {
                            if (rngalpha < 774) {
                                let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                if (rngbeta < 753) {
                                    message.channel.send(`${message.author} You found a Pump Shotgun (Uncommon) and 5 Shells!`, {
                                        files: [
                                            `./commands/Fnpics/pumpshotgun/uncommon.png`
                                        ]
                                    })
                                }
                                else {
                                    message.channel.send(`${message.author} You found a Pump Shotgun (Rare) and 5 Shells!`, {
                                        files: [
                                            `./commands/Fnpics/pumpshotgun/rare.png`
                                        ]
                                    })
                                }
                            }
                            else {
                                if (rngalpha < 831) {
                                    let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                    if (rngbeta < 493) {
                                        message.channel.send(`${message.author} You found an Assault Rifle (M4) (Common) and 10 Medium Bullets!`, {
                                            files: [
                                                `./commands/Fnpics/assaultrifleauto/acommon.png`
                                            ]
                                        })
                                    }
                                    else {
                                        if (rngbeta < 739) {
                                            message.channel.send(`${message.author} You found an Assault Rifle (M4) (Uncommon) and 10 Medium Bullets!`, {
                                                files: [
                                                    `./commands/Fnpics/assaultrifleauto/auncommon.png`
                                                ]
                                            })
                                        }
                                        else {
                                            if (rngbeta < 837) {
                                                message.channel.send(`${message.author} You found an Assault Rifle (M4) (Rare) and 10 Medium Bullets!`, {
                                                    files: [
                                                        `./commands/Fnpics/assaultrifleauto/arare.png`
                                                    ]
                                                })
                                            }
                                            else {
                                                if (rngbeta < 886) {
                                                    message.channel.send(`${message.author} You found an Assault Rifle (Scoped) (Rare) and 10 Medium Bullets!`, {
                                                        files: [
                                                            `./commands/Fnpics/assaultrifleauto/srare.png`
                                                        ]
                                                    })
                                                }
                                                else {
                                                    if (rngbeta < 923) {
                                                        message.channel.send(`${message.author} You found an Assault Rifle (SCAR) (Epic) and 10 Medium Bullets!`, {
                                                            files: [
                                                                `./commands/Fnpics/assaultrifleauto/aepic.png`
                                                            ]
                                                        })
                                                    }
                                                    else {
                                                        if (rngbeta < 960) {
                                                            message.channel.send(`${message.author} You found a Light Machine Gun (Rare) and 10 Medium Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/assaultrifleauto/lrare.png`
                                                                ]
                                                            })
                                                        }
                                                        else {
                                                            if (rngbeta < 978) {
                                                                message.channel.send(`${message.author} You found an Assault Rifle (Scoped) (Epic) and 10 Medium Bullets!`, {
                                                                    files: [
                                                                        `./commands/Fnpics/assaultrifleauto/sepic.png`
                                                                    ]
                                                                })
                                                            }
                                                            else {
                                                                if (rngbeta < 992) {
                                                                    message.channel.send(`${message.author} You found a Light Machine Gun (Epic) and 10 Medium Bullets!`, {
                                                                        files: [
                                                                            `./commands/Fnpics/assaultrifleauto/lepic.png`
                                                                        ]
                                                                    })
                                                                }
                                                                else {
                                                                    message.channel.send(`${message.author} You found an Assault Rifle (SCAR) (Legendary) and 10 Medium Bullets!`, {
                                                                        files: [
                                                                            `./commands/Fnpics/assaultrifleauto/alegendary.png`
                                                                        ]
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    if (rngalpha < 882) {
                                        let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                        if (rngbeta < 481) {
                                            message.channel.send(`${message.author} You found a Supressed Submachine Gun (Common) and 12 Light Bullets!`, {
                                                files: [
                                                    `./commands/Fnpics/smg/scommon.png`
                                                ]
                                            })
                                        }
                                        else {
                                            if (rngbeta < 721) {
                                                message.channel.send(`${message.author} You found a Tactical Subachine Gun (Uncommon) and 12 Light Bullets!`, {
                                                    files: [
                                                        `./commands/Fnpics/smg/tuncommon.png`
                                                    ]
                                                })
                                            }
                                            else {
                                                if (rngbeta < 849) {
                                                    message.channel.send(`${message.author} You found a Supressed Submachine Gun (Uncommon) and 12 Light Bullets!`, {
                                                        files: [
                                                            `./commands/Fnpics/smg/suncommon.png`
                                                        ]
                                                    })
                                                }
                                                else {
                                                    if (rngbeta < 929) {
                                                        message.channel.send(`${message.author} You found a Tactical Submachine Gun (Rare) and 12 Light Bullets!`, {
                                                            files: [
                                                                `./commands/Fnpics/smg/trare.png`
                                                            ]
                                                        })
                                                    }
                                                    else {
                                                        if (rngbeta < 969) {
                                                            message.channel.send(`${message.author} You found a Tactical Submachine Gun (Epic) and 12 Light Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/smg/tepic.png`
                                                                ]
                                                            })
                                                        }
                                                        else {
                                                            message.channel.send(`${message.author} You found a Supressed Submachine Gun (Rare) and 12 Light Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/smg/srare.png`
                                                                ]
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if (rngalpha < 922) {
                                            let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                            if (rngbeta < 715) {
                                                message.channel.send(`${message.author} You found a Revolver (Common) and 10 Medium Bullets!`, {
                                                    files: [
                                                        `./commands/Fnpics/revolver/common.png`
                                                    ]
                                                })
                                            }
                                            else {
                                                if (rngbeta < 929) {
                                                    message.channel.send(`${message.author} You found a Revolver (Uncommon) and 10 Medium Bullets!`, {
                                                        files: [
                                                            `./commands/Fnpics/revolver/uncommon.png`
                                                        ]
                                                    })
                                                }
                                                else {
                                                    message.channel.send(`${message.author} You found a Revolver (Rare) and 10 Medium Bullets!`, {
                                                        files: [
                                                            `./commands/Fnpics/revolver/rare.png`
                                                        ]
                                                    })
                                                }
                                            }
                                        }
                                        else {
                                            if (rngalpha < 956) {
                                                let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                                if (rngbeta < 799) {
                                                    message.channel.send(`${message.author} You found a Damage Trap!`, {
                                                        files: [
                                                            `./commands/Fnpics/trap/damagetrap.png`
                                                        ]
                                                    })
                                                }
                                                else {
                                                    if (rngbeta < 834) {
                                                        message.channel.send(`${message.author} You found a Launchpad!`, {
                                                            files: [
                                                                `./commands/Fnpics/trap/launchpad.png`
                                                            ]
                                                        })
                                                    }
                                                    else {
                                                        message.channel.send(`${message.author} You found a Cozy Campfire!`, {
                                                            files: [
                                                                `./commands/Fnpics/trap/cozycampfire.png`
                                                            ]
                                                        })
                                                    }
                                                }
                                            }
                                            else {
                                                if (rngalpha < 985) {
                                                    let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                                    if (rngbeta < 609) {
                                                        message.channel.send(`${message.author} You found an Assault Rifle (Burst) (Common) and 10 Medium Bullets!`, {
                                                            files: [
                                                                `./commands/Fnpics/assaultrifleburst/common.png`
                                                            ]
                                                        })
                                                    }
                                                    else {
                                                        if (rngbeta < 852) {
                                                            message.channel.send(`${message.author} You found an Assault Rifle (Burst) (Uncommon) and 10 Medium Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/assaultrifleburst/uncommon.png`
                                                                ]
                                                            })
                                                        }
                                                        else {
                                                            if (rngbeta < 943) {
                                                                message.channel.send(`${message.author} You found an Assault Rifle (Burst) (Rare) and 10 Medium Bullets!`, {
                                                                    files: [
                                                                        `./commands/Fnpics/assaultrifleburst/rare.png`
                                                                    ]
                                                                })
                                                            }
                                                            else {
                                                                if (rngbeta < 989) {
                                                                    message.channel.send(`${message.author}You found an Assault Rifle (Bullpup Burst) (Epic) and 10 Medium Bullets!`, {
                                                                        files: [
                                                                            `./commands/Fnpics/assaultrifleburst/epic.png`
                                                                        ]
                                                                    })
                                                                }
                                                                else {
                                                                    message.channel.send(`${message.author} You found an Assault Rifle (Bullpup Burst) (Legendary) and 12 Light Bullets!`, {
                                                                        files: [
                                                                            `./commands/Fnpics/assaultrifleburst/legendary.png`
                                                                        ]
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (rngalpha < 996) {
                                                        let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                                        if (rngbeta < 395) {
                                                            message.channel.send(`${message.author} You found a Hunting Rifle (Uncommon) and 6 Heavy Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/sniper/huncommon.png`
                                                                ]
                                                            })
                                                        }
                                                        else {
                                                            if (rngbeta < 641) {
                                                                message.channel.send(`${message.author} You found a Bolt-Action Sniper Rifle (Rare) and 6 Heavy Bullets!`, {
                                                                    files: [
                                                                        `./commands/Fnpics/sniper/brare.png`
                                                                    ]
                                                                })
                                                            }
                                                            else {
                                                                if (rngbeta < 789) {
                                                                    message.channel.send(`${message.author} You found a Hunting Rifle (Rare) and 6 Heavy Bullets!`, {
                                                                        files: [
                                                                            `./commands/Fnpics/sniper/hrare.png`
                                                                        ]
                                                                    })
                                                                }
                                                                else {
                                                                    if (rngbeta < 926) {
                                                                        message.channel.send(`${message.author} You found a Semi-Auto Sniper Rifle (Epic) and 6 Heavy Bullets!`, {
                                                                            files: [
                                                                                `./commands/Fnpics/sniper/sepic.png`
                                                                            ]
                                                                        })
                                                                    }
                                                                    else {
                                                                        if (rngbeta < 976) {
                                                                            message.channel.send(`${message.author} You found a Bolt-Action Sniper Rifle (Epic) and 6 Heavy Bullets!`, {
                                                                                files: [
                                                                                    `./commands/Fnpics/sniper/bepic.png`
                                                                                ]
                                                                            })
                                                                        }
                                                                        else {
                                                                            if (rngbeta < 991) {
                                                                                message.channel.send(`${message.author} You found a Semi-Auto Sniper Rifle (Legendary) and 6 Heavy Bullets!`, {
                                                                                    files: [
                                                                                        `./commands/Fnpics/sniper/slegendary.png`
                                                                                    ]
                                                                                })
                                                                            }
                                                                            else {
                                                                                message.channel.send(`${message.author} You found a Bolt-Action Sniper Rifle (Legendary) and 6 Heavy Bullets!`, {
                                                                                    files: [
                                                                                        `./commands/Fnpics/sniper/blegendary.png`
                                                                                    ]
                                                                                })
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        let rngbeta = Math.floor(Math.random() * 1000) + 1;
                                                        if (rngbeta < 801) {
                                                            message.channel.send(`${message.author}You found a Hand Cannon (Epic) and 6 Heavy Bullets!${message.author}`, {
                                                                files: [
                                                                    `./commands/Fnpics/handcannon/epic.png`
                                                                ]
                                                            })
                                                        }
                                                        else {
                                                            message.channel.send(`${message.author} You found a Hand Cannon (Legendary) and 6 Heavy Bullets!`, {
                                                                files: [
                                                                    `./commands/Fnpics/handcannon/legendary.png`
                                                                ]
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
