const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()

    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    
  
   
  const banMember = message.mentions.members.first();
  
    banMember.ban()
};