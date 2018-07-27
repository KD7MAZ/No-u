const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = async function (client, message, args) {
    const blacklisted = message.mentions.members.first();


if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)

    message.channel.send(`${blacklisted} Has been blacklisted by Ahsan, all commands will now not be accessable for them!`)
}