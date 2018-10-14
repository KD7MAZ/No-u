exports.run = (client, message, args) => {
    let rarity = Math.floor(Math.random() * 1000) + 1;
    if (rarity < 700) {
        let rndmskin = Math.floor(Math.random() * 22) + 1;
        const skinname = require(`./Skinpics/Uncommon/Names/${rndmskin}.json`);
        message.channel.send(`Congratulations ${message.author} you got a Uncommon skin called the **${skinname.name}**:`, {
            files: [
                `./commands/Skinpics/Uncommon/Images/${rndmskin}.jpg`
            ]
        }).catch(console.error);
    }
    else {
        if (rarity < 900) {
            let rndmskin = Math.floor(Math.random() * 30) + 1;
            const skinname = require(`./Skinpics/Rare/Names/${rndmskin}.json`)
            message.channel.send(`Congratulations ${message.author} you got a Rare skin called the **${skinname.name}**:`, {
                files: [
                    `./commands/Skinpics/Rare/Images/${rndmskin}.jpg`
                ]
            }).catch(console.error);
        }
        else {
            if (rarity < 980) {
                let rndmskin = Math.floor(Math.random() * 26) + 1;
                const skinname = require(`./Skinpics/Epic/Names/${rndmskin}.json`)
                message.channel.send(`Congratulations ${message.author} you got a Epic skin called the **${skinname.name}**:`, {
                    files: [
                        `./commands/Skinpics/Epic/Images/${rndmskin}.jpg`
                    ]
                }).catch(console.error);
            }
            else {
                let rndmskin = Math.floor(Math.random() * 19) + 1;
                const skinname = require(`./Skinpics/Legendary/Names/${rndmskin}.json`)
                message.channel.send(`Congratulations ${message.author} you got a Legendary skin called the **${skinname.name}**:`, {
                    files: [
                        `./commands/Skinpics/Legendary/Images/${rndmskin}.jpg`
                    ]
                }).catch(console.error);
            }
        }
    }
}
