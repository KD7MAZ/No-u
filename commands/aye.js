const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()
    
    const aye = bot.emojis.get('445663166857347072')
    message.channel.send(`${aye}`)

}; 
