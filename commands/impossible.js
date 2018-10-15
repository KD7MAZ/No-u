const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const A = '`'

exports.run = (client, message, args) => {
    if (message.author.id == 216156825978929152) {
    let Ggg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**HOW DID U BEAT IT**__")
            .setColor("#8F00FF")
            .addField("User:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Message:", `Congratualtions ${message.author}, you beat the impossible quest!\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??, take a screenshots of this and send it to Ahsan in dm to claim your prize!!`)
        message.channel.send(Ggg);
    } else {
    let correct = Math.floor(Math.random() * 100000000) + 1;
    if (args == 0) return message.channel.send(`:x: ${message.author} Please choose a number!`)
    if (message.content.includes(`${correct}`)) {
        let Gg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**HOW DID U BEAT IT**__")
            .setColor("#8F00FF")
            .addField("User:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Message:", `Congratualtions ${message.author}, you beat the impossible quest!\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??\nHOW??, take a screenshots of this and send it to Ahsan in dm to claim your prize!!`)
        message.channel.send(Gg);



    }
    else {
        message.channel.send(`${message.author} Your never gonna get this hahahah \nThe answer was: ${A}${correct}${A}`)
    }
    }
};


