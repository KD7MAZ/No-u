const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()

    const Role = message.content.slice(prefix.length).trim().split(/ +/g);

    const member = message.mentions.members.first();

    member.addRole(Role).then(member => {
        message.channel.send(`role ${Role} has been added to ${member}`)
    })
}