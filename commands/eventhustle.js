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
    let lmsevent = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Event Xp/Bp Hustle!**__")
    .setColor("#8F00FF")
    .setDescription(`__**Description:**__ \nXp/Bp Hustle is where your using the Xp/Bp combo (ofc noob) and are trying to push each other of the the platform with only railgun and your tanki, last person on top wins\n \n__**Equipment:**__ \n__**Turret:**__ Rialgun \n__**Hull:**__ Wasp/Hornet \n__**Protection:**__ Zero \n__**Paint:**__ White \n \n__**Map/Ranks:**__ \n__**Map:**__ Madness (space)\n__**Ranks:**__ Brig-legend \n \n__**Rules:**__ \n•Shooting Event Helpers is forbidden. \n•Placing mines is forbidden as it may cause a distraction. \n•Do not attempt to drive back onto the playing zone, if you have died or fallen off the event helpers will kill you. \n•After getting pushed off the players must go to the waiting zone till the round is over. \n•People who go to the opposing team to kill others will be immediatly banned.\n•People who break the rules will be banned, you have been warned.\n \n__**Map Link:**__ \n${battlelink} 
\n__**Winners:**__ \nRound  1: \nRound 2: \nRound 3: \nRound 4: \nRound 5: \n \n__**Helper For This Event:**__ ${eventhelper1.user.username}#${eventhelper1.user.discriminator} (${eventhelper1.user})`)
    message.channel.send(lmsevent);
}

