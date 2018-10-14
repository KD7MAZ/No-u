const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Things have changed a bit")
        .setAuthor("Space Bot 2.0", bot.user.avatarURL)
        /*
        * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
        */

        .setColor(6703856)
        .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        /*
        * Takes a Date object, defaults to current date.
        */
        .setTimestamp()
        .setURL("https://discord.gg/D4UqdWh")
        .addField("```The command for weather has changed a bit please use -weatherC/F {location}```", "```-help weather for more infomation```")

    message.channel.send({ embed });

};