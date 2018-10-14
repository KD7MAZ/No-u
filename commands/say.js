const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    if (message.author.bot) return;
    //if (message.author.id === '290206464423755796') return message.channel.send(`${message.author} You are blacklisted from using this command!`)  
    //if (message.content.includes('@everyone')) return message.channel.send(`${message.author} im not going to ping everyoe!`)
    //if (message.content.includes('@here')) return message.channel.send(`${message.author} im not going to ping here!`)
    //if (message.author.id === '256519441880186880') return message.channel.send(`${message.author} You are blacklisted from using this command!`)

    message.delete();
    let text = args.slice(0).join(" ")
    message.channel.send(text).catch(console.error);


}
