const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    message.delete()    
const nmofm = message.guild.member(message.mentions.users.first()); 

    let motm = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Mod Of The Month Reset!**__ | Month: June")
    .setColor("#8F00FF")
    .setDescription('The month of june is over as the start of the hot weather has started!')
    .addField("New Mod Of The Month:", `${nmofm.user.username}#${nmofm.user.discriminator} (${nmofm.user}) and is given the role: (<@&397741318979190784>) \n \nI decided to give it to Matty becaause we have alot of banter and hes quiet a nice person, hes been helping me by playing tanki with me when im lonely and i think it just suits him to have it. \nCongratulations on this! Keep up the great work.`)
    message.channel.send(motm);
}

