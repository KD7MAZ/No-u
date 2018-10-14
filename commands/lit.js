const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()

    const getlit = bot.emojis.get('443868073095725068')
    message.channel.send(`${getlit}`)

}; 