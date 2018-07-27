const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)

message.delete()    
const number1 = message.guild.member(message.mentions.users.first()); 

    let mostactive = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Server Board Monthly Reset!**__ | Month: June")
    .setColor("#8F00FF")
    .setDescription('The most active members of our discord (excluding mods)')
    .addField("1st Place:", `${number1.user.username}#${number1.user.discriminator} (${number1.user}) and is given the role: (<@&418100350520655872>)`)
    .addField("2nd Place:", `DEVIN#3323 (<@168169258235330560>) and is given the role: (<@&417944347791589376>)`)
    .addField("3rd Place:", `Scanner#4797 (<@429118689367949322>) and is given the role: (<@&417782501814173696>) \n \nGood luck this month!, the scoreboard has been reset. \nHow to be first?, simple just chat and have fun!`)
    
    message.channel.send(mostactive);
}
