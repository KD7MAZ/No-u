const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    message.delete()
    const muteRole = message.guild.roles.find("name", "Muted");

    const unmuteMember = message.mentions.members.first();

    unmuteMember.removeRole(muteRole)



};


