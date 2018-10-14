const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    message.delete()
    const eventhelper1 = message.guild.member(message.mentions.users.first());

    let eventhelpers = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Event Helpers So Far!**__")
        .setColor("#8F00FF")
        .addField("Event Organiser:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Event Helper 1:", `${eventhelper1.user.username}#${eventhelper1.user.discriminator} (${eventhelper1.user})`)
        .addField("Event Helper 2:", `Balu2005Hun#4034 (<@326714740879392770>)`)
        .addField("Event Helper 3", `Foxy#2517 (<@376061008101244941>)`)
        .addField("Event Sub 1:", `Matty#0419 (<@245316368554000384>)`)
        .addField("Event Sub 2:", `![no.1]ᗩᖇᑕᑎIGᕼT_ᑎO.1 ツ#9670 (<@340063097949650945>`)

    message.channel.send(eventhelpers);
}