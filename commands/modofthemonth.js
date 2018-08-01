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
    .setTitle("__**Mod Of The Month Reset!**__ | Month: July")
    .setColor("#8F00FF")
    .setDescription('The hot month of july is over as as alot of you will go to hot places on holiday!')
    .addField("New Mod Of The Month:", `${nmofm.user.username}#${nmofm.user.discriminator} (${nmofm.user}) and is given the role: (<@&397741318979190784>) \n \nI have given to it my gay clan member black because he is fun to play with in tnaki and hes also very funny in discord and does help me alot with things i need! \nCongratulations on this! Keep up the great work.`)
    message.channel.send(motm);
}

