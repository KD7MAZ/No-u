const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {
if (message.author.bot) return;

if (message.author.id === `446364321681768459`) return;

if (message.author.id === owner) return;
    if  (swearWords.some(word => message.content.includes(word)) ) {
        message.delete().catch(err => console.log(err));
        message.channel.send(`${message.author} Please do not send any links!`);
}}   
    // ELSE {
    
    message.delete();
    let text = args.slice(0).join(" ")

message.channel.send(`${message.author} Set your afk as: ${text}`)
})// what does this parenthesis close
