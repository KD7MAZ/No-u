const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message) => {
    message.delete()

    const blob = bot.emojis.find("name", "RParrot")
    message.channel.send(`${blob}`)

};
