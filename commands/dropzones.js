const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = async function (client, message, args) {
    let Embed = new Discord.RichEmbed()
        .setTitle(`Here you are ${message.author.username} all the drop zones you might be given to get a victory royale!`)
        .setColor('#8F00FF')
        .setImage("https://i.imgur.com/k11LBdA.png")
    message.channel.send(Embed);
};
