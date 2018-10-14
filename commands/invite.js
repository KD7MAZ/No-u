const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '.'
const owner = '321673115891531787'
const myserver = '323206382147076096'

exports.run = (client, Message, args) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("Space Bot 2.0", client.user.avatarURL)
        .setTitle("Usefull Links!")
        .setColor("#8F00FF")
        .setURL("https://discord.gg/D4UqdWh")
        .addField(":link: Invite Space Bot 2.0", `[Click to invite](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591)`)
        .addField(":house: Join Ahsans Server", `[Click here to join](https://discord.gg/hd2XdQ3)`)
        .addField(":tools: Support Server", `[Click here to join](https://discord.gg/En3DbUV)`)
        .addField(":tada: Upvote The Bot", `[Click here to upvote](https://discordbots.org/bot/451417687294345216)`)
        .setFooter(`Requested by ${Message.author.username}`, Message.author.avatarURL)
        .setThumbnail(client.user.avatarURL)
    Message.channel.send(embed);
};
