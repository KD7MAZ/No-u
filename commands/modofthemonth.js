const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, reason) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    message.delete()
    const nmofm = message.guild.member(message.mentions.users.first());

    let motm = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Mod Of The Month Reset!**__ | Month: September")
        .setColor("#8F00FF")
        .setDescription('The cold months of autum in full swing!')
        .addField("New Mod Of The Month:", `${nmofm.user.username}#${nmofm.user.discriminator} (${nmofm.user}) and is given the role: (<@&481037960603500544>) \n \nI gave it to manos because he is a really good and hard working moderator, he is active and he enforces punishments on people even though they are his friend thats what i like most about him! Cg keep up with good work :tada:`)
    message.channel.send(motm);
}

