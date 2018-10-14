const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, args) => {

    if (message.guild.id !== '323206382147076096') return

    const bears = message.guild.roles.find("name", "Faction: Bears");
    const wolves = message.guild.roles.find("name", "Faction: Wolves");
    const lions = message.guild.roles.find("name", "Faction: Lions");

    if (message.member.roles.find("name", "Faction: Bears")) {
        return message.channel.send(`:x: ${message.author} **You can't join the faction __Lions__, as you are in the faction __Bears__, if this was a mistake please pm a moderator with proof of your paint!**`)

    }
    if (message.member.roles.find("name", "Faction: Wolves")) {
        return message.channel.send(`:x: ${message.author} **You can't join the faction __Lions__, as you are in the faction __Wolves__, if this was a mistake please pm a moderator with proof of your paint!**`)

    }
    if (message.member.roles.find("name", "Faction: Lions")) {
        return message.channel.send(`:x: ${message.author} **You are already in the faction __Lions__**!`)

    }

    message.member.addRole(lions)
    message.channel.send(`:white_check_mark: ${message.author} **You Successfully joined the faction __Lions__, you now have access to <#475280761726173185>!**`)


}

