const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'



exports.run = async (client, message, args) => {
    let correct = Math.floor(Math.random() * 10000) + 1;




    message.channel.send(`${message.author}`)
    let test = new Discord.RichEmbed()
        .setColor("#8F00FF")
        .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ● `)
    const m = await message.channel.send(test);

    if (correct < 2) {

        let test2 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●`)
        setTimeout(function () {
            m.edit(test2)
        }, 500);

        let test3 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ● `)
        setTimeout(function () {
            m.edit(test3)
        }, 1000);

        let test4 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ●               ● `)
        setTimeout(function () {
            m.edit(test4)
        }, 1500);

        let test5 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ●               ●               ● `)
        setTimeout(function () {
            m.edit(test5)
        }, 2000);

        let test6 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setThumbnail(`https://cdn.discordapp.com/attachments/445625402174603274/465207576855052288/ItE28099s-your-Lucky-DayE2809D.png`)
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \nYour offically LUCKY! to claim your prize \nplease send ahsan a screenshot of you \nwinning!, dont forget ur now a winner!`)
        setTimeout(function () {
            m.edit(test6)
        }, 2500);


    }
    else {

        let test7 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●`)
        setTimeout(function () {
            m.edit(test7)
        }, 500);

        let test8 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ● `)
        setTimeout(function () {
            m.edit(test8)
        }, 1000);

        let test9 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ●               ● `)
        setTimeout(function () {
            m.edit(test9)
        }, 1500);

        let test10 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \n ●               ●               ●               ●               ● `)
        setTimeout(function () {
            m.edit(test10)
        }, 2000);

        let test11 = new Discord.RichEmbed()
            .setColor("#8F00FF")
            .setThumbnail(`https://cdn.discordapp.com/attachments/445625402174603274/465208437295284234/43087610-bad-luck-red-stamp-text-on-white.png`)
            .setDescription(`**${message.author.username} Are you lucky?, Time to find out!** \n \n \n \n \nBad luck ${message.author.username} try again!`)
        setTimeout(function () {
            m.edit(test11)
        }, 2500);
    }

};




