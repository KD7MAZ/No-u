const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {  
if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
message.delete()
const eventhelper1 = message.guild.member(message.mentions.users.first()); 
let battlelink = args[1]      
let driveevent = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Event Drive Challenge!**__")
    .setColor("#8F00FF")
    .setDescription(`__**Description:**__ \nThe challenge Claudiu made on his youtube channel, racing with xp/bp in the map Canyon first one to the end wins in a specific way around the map while you are being shot at with rails that are trying to flip you! \n \n__**Equipment:**__ \n__**Turret:**__ Railgun \n__**Hull:**__ Wasp or Hornet \n__**Protection:**__ Zero \n__**Paint:**__ White \n \n__**Map/Ranks:**__ \n__**Map:**__ Canyon \n__**Ranks:**__ Brig-legend \n \n__**Rules:**__ \n•Mining is not allowed. \n•Double Damage is not allowed. \n•Only targeting 1 person is not allowed. \n•People who break the rules will be banned, you have been warned.\n \n__**Map Link:**__ \n${battlelink} 
\n__**Winners:**__ \nRound  1: \nRound 2: \nRound 3: \nRound 4: \nRound 5: \n \n__**Helper For This Event:**__ ${eventhelper1.user.username}#${eventhelper1.user.discriminator} (${eventhelper1.user})`)
    message.channel.send(driveevent);
}

