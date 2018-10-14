const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const superagent = require('superagent');

exports.run = async (bot, message, [mention, ...reason]) => {

    let { body } = await superagent
        .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
        .setColor('#8F00FF')
        .setTitle("Random Dog Image")
        .setImage(body.url);
    message.channel.send(dogembed);

}