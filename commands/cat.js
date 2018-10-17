const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const superagent = require('superagent');

exports.run = async (bot, message, [mention, ...reason]) => {
    //if (message.author.id !== owner) return message.channel.send(`${message.author} Sorry for the inconvinience but the cat command doesnt work at the moment.`)
    let {body} = await superagent
    .get('http://aws.random.cat/meow');

    let catembed = new Discord.RichEmbed()
        .setColor('#8F00FF')
        .setTitle("Random Cat Image")
        .setImage(body.file);
    message.channel.send(catembed);

}
