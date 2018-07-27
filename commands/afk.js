const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
if (message.author.bot) return;
    message.delete();
    let text = args.slice(0).join(" ")

message.channel.send(`${message.author} Set your afk as: ${text}`)
}