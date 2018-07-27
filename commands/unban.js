const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
  message.delete()
    let serverwarnedmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Unbanned!**__")
    .setColor("#683fj6")
    .addField("User Unabnned:", `『ManosTo』#4130 (<@446364321681768459>)`)
    .addField("Unbanned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
 message.channel.send(serverwarnedmsg);
};