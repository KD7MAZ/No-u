const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()

    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
   
  const kickMember = message.mentions.members.first();
  
  let Kickedmsg = new Discord.RichEmbed()
  .setTimestamp()
  .setTitle("__**Kicked!**__")
  .setColor("FFFF00")
  .addField("Kicked from:", `${message.guild.name}`)
  .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
  .addField("Reason:", reason.join(' '));
kickMember.send(Kickedmsg);
};