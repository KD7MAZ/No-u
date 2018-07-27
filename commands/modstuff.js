const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (client, message, args) => {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
    message.delete()    
    let warnedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Staff New Commands!**__")
    .setColor("#8F00FF")
    .addField("Commands For Junior:", `-warn -mute -unmute`)
    .addField("Commands For Moderator", `-warn -mute -unmute -kick`)
    .addField("Commands For Staff Manager", `-warn -mute -unmute -kick -ban`)
    .addField("Purge command", `This is a thing and please do not use it often all staff may use it but please only for cleaning up messy things`)
    .addField("Notes:", `Please refrane from kicking/banning anyone. If you need to use theses commands u must put a reason otherwise they wont work`)
    .addField("Purge", `Example -purge 10`)
    .addField("Warn", `Example: -warn ${message.author} breaking the rules! {prntscn/proof}`)
    .addField("Mute", `Example: -mute ${message.author} breaking the rules! {prntscn/proof}`)
    .addField("Unmute", `Example: -unmute ${message.author} time is up! {prntscn/proof}`)
    .addField("Kick", `Example: -kick ${message.author} breaking the rules! {prntscn/proof}`)
    .addField("Ban", `Example: -ban ${message.author} breaking the rules! {prntscn/proof}`)
    .addField("One last final thing", `Mute command doesnt have a timer and i wont add one so u must unmute them manually when u think that is enough please make sure u dont leave them muted forever!`)
    message.channel.send(warnedMsg);
}