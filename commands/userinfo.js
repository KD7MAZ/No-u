const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'



exports.run = async function (client, message, args) {

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("User Info")
    .setColor("FFA500")
    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID", message.author.id)
    .addField("Created at", message.author.createdAt)
    .addField("User Image:", message.author.avatarURL);

  message.channel.send(embed);

}