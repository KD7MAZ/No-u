const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {

  if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`) 
    if(args == 0) return message.channel.send(`${message.author} Please provide a command name to reload`);

    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`${message.author} The command **${args[0]}** has been reloaded`);
  };