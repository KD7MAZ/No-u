const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    
    const betaRole = message.guild.roles.find("name", "BETA TESTER");

    const betaMember = message.mentions.members.first();
const check = "<:check:470611964784017418>"
    if(message.member.roles.has(betaRole.id)) {
    
        betaMember.addRole(betaRole)

            message.channel.send(`:white_check_mark: Changed roles for ${betaMember.user.username}#${betaMember.user.discriminator}, + BETA TESTER`) 
        
    }
    

       // message.channel.send(`:x: ${betaMember.user.username}#${betaMember.user.discriminator} already has BETA TESTER!`)
    
    

}

