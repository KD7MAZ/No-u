const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
if (message.content === prefix + 'help weather'){
const embed = new Discord.RichEmbed()
.setTitle("Help is now here!")
.setAuthor("Space Bot", "https://cdn.discordapp.com/avatars/437207592054554643/b1081a2a0d426a1a4fe28c10c732c602.jpg?size=2048")
.setColor(6703856)
.setFooter("Version 1.0.1 by Ahsan", "https://cdn.discordapp.com/avatars/437207592054554643/b1081a2a0d426a1a4fe28c10c732c602.jpg?size=2048")
.setThumbnail("https://cdn.discordapp.com/avatars/437207592054554643/b1081a2a0d426a1a4fe28c10c732c602.jpg?size=2048")
.setTimestamp()
.setURL("https://discord.gg/D4UqdWh")
.addField("```-weatherF/C {location}```", "```Example : -weatherC Oldham OR -weatherF Oldham. For more infomation please see -help weatherC or -help weatherF```")
  
message.channel.send({embed});

}};