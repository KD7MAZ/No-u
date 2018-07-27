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
let battlelink = "#/battle=2aaaaabae0329357"   
    let lmsevent = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Event Last Man Standing!**__")
    .setColor("#8F00FF")
    .setDescription(`__**Description:**__ \nThe event Last Man Standing is where you are holding on for yourself in the survival of the best, only 1 comes out alive your goal is to destroy other players and be the last player still alive to achieve this, you can shoot other players, place mines and use supplies! \n \n__**Equipment:**__ \n__**Turret:**__ Any \n__**Hull:**__ Any \n__**Protection:**__ Zero \n__**Paint:**__ White \n \n__**Map/Ranks:**__ \n__**Map:**__ Highways \n__**Ranks:**__ Brig-legend \n \n__**Rules:**__ \n•Shooting Event Helpers is forbidden. \n•Placing mines before "GO" is forbidden. \n•Do not attempt to drive back onto the playing zone, if you have died or fallen off the event helpers will kill you. \n•After getting killed the players must go to the waiting zone till the round is over. \n•People who break the rules will be banned, you have been warned.\n \n__**Map Link:**__ \n${battlelink} 
\n__**Winners:**__ \nRound  1: \nRound 2: \nRound 3: \nRound 4: \nRound 5: \n \n__**Helper For This Event:**__ ${eventhelper1.user.username}#${eventhelper1.user.discriminator} (${eventhelper1.user})`)
    message.channel.send(lmsevent);
}

