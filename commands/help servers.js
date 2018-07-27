const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
if (message.content === prefix + 'help servers'){
const embed = new Discord.RichEmbed()
.setTitle("Help is now here!")
.setAuthor("Space Bot", bot.user.avatarURL)
.setColor(6703856)
.setFooter("Version 1.0.1 by Ahsan", bot.user.avatarURL)
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setURL("https://discord.gg/D4UqdWh")
.addField("```-servers```", "```Example : -servers```")

message.channel.send({embed});

}};