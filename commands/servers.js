
const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    
    message.channel.send(`I am with ${bot.users.size} online users, in ${bot.channels.size} channels; in ${bot.guilds.size} servers.`)
}