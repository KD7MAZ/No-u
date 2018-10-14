const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    if (message.content === prefix + 'help purge') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-purge {amount}```", "```Example : -purge 30```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help weatherC') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-weatherC {location}```", "```Example : -weatherC England, Oldham.```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help weather') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-weatherF/C {location}```", "```Example : -weatherC Oldham OR -weatherF Oldham. For more infomation please see -help weatherC or -help weatherF```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help show semyon') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-show semyon```", "```Example : -show semyon```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help servers') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-servers```", "```Example : -servers```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help roast') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-roast <user>```", "```Example : -roast @Ahsan#3247```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help ping') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-ping```", "```Example : -ping```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help kick') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-kick <user> {reason}```", "```Example : -kick @Ahsan#3247 being too good at Tanki Online```")

        message.channel.send({ embed });
    }

    if (message.content === prefix + 'help creator') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-invite```", "```Example : -invite```")

        message.channel.send({ embed });

    }

    if (message.content === prefix + 'help depression') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-depression```", "```Example : -depression```")

        message.channel.send({ embed });

    }
    if (message.content === prefix + 'help ban') {
        const embed = new Discord.RichEmbed()
            .setTitle("Help is now here!")
            .setAuthor("Space Bot", bot.user.avatarURL)
            .setColor(6703856)
            .setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setURL("https://discord.gg/D4UqdWh")
            .addField("```-ban <user> {reason}```", "```Example : -ban @Ahsan#3247 being too good at coding bots```")

        message.channel.send({ embed });
    }
    if (message.content === prefix + 'help mute') {
        let embed = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Command: Mute**__")
            .setColor("#FF1493")
            .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** -mute <user> [amount] {reason} \n**Examples:** \n-mute @Ahsan 45m provoking \n-mute @Ahsan 3h Advertising \n-mute @Ahsan 7d Asking for a ban \n-mute @Ahsan forever Being a noob at coding`)
        return message.channel.send(embed);

    }
}
