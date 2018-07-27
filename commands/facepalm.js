const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    
    message.delete()
   
    const faceplam = bot.emojis.get('398848980110409738')
    message.channel.send(`${faceplam}`)

}; 