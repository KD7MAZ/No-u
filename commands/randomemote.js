exports.run = (client, message, args) => {
    let rarity = Math.floor(Math.random() * 1000) + 1;
    if ( rarity < 750 ) { 
        let rndmemote = Math.floor(Math.random() * 17) + 1;
        const emotename = require(`./Emotegifs/Uncommon/Names/${rndmemote}.json`);
        message.channel.send(`Here you go ${message.author}, an Uncommon emote called the **${emotename.name}**:`, {
            files: [
                `./commands/Emotegifs/Uncommon/Images/${rndmemote}.gif`
            ]
        }).catch(console.error);
    }
    else
    {
        if ( rarity < 950 ) { 
            let rndmemote = Math.floor(Math.random() * 22) + 1;
            const emotename = require(`./Emotegifs/Rare/Names/${rndmemote}.json`)
            message.channel.send(`Here you go ${message.author}, a Rare emote called the **${emotename.name}**:`, {
                files: [
                    `./commands/Emotegifs/Rare/Images/${rndmemote}.gif`
                ]
            }).catch(console.error);
        }
        else
        {
                let rndmemote = Math.floor(Math.random() * 12) + 1;
                const emotename = require(`./Emotegifs/Epic/Names/${rndmemote}.json`)
                message.channel.send(`Here you go ${message.author}, an Epic emote called the **${emotename.name}**:`, {
                    files: [
                        `./commands/Emotegifs/Epic/Images/${rndmemote}.jpg`
                    ]
                }).catch(console.error); 
            }
        }
 }