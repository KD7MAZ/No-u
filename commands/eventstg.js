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
    let stgevent = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Event Save The Gold!**__")
        .setColor("#8F00FF")
        .setDescription(`__**Description:**__ \nYour goal is, to collect the Gold Box that are being defended by Event Helpers. In order to do that, you are allowed to use supplies and kill the defenders! \n \n__**Equipment:**__ \n__**Turret:**__ Firebird Isida Freeze \n__**Hull:**__ Hornet/wasp \n__**Protection:**__ Zero \n__**Paint:**__ White\n \n__**Map/Ranks:**__ \n__**Map:**__ Edinbrugh (space) \n__**Ranks:**__ Brig-legend \n \n__**Rules:**__ \n•Shooting Event Helpers is allowed. \n•Shooting your team mates is forbidden. \n•Multing against your team is forbidden. \n•Shooting Event Helpers before "GO" is forbidden, and will result in a straight ban. \n•Placing mines is forbidden \n•Destroying mines before "GO" is also prohibited. \n•Attempting to take the Gold Box, or taking the Gold Box before the Event has started is not allowed. \n•People who break the rules will be banned, you have been warned.\n \n__**Map Link:**__ \n${battlelink} 
\n__**Winners:**__ \nRound  1: \n \n__**Helper For This Event:**__ ${eventhelper1.user.username}#${eventhelper1.user.discriminator} (${eventhelper1.user})`)
    message.channel.send(stgevent);
}

