const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
  const noquestion = message.guild.roles.find("name", "no question");

  if (!noquestion)
    return message.channel.send(":x: To use this command u must make a @no question role");

  if (message.member.roles.has(noquestion.id))
    return message.reply(":x: You are banned from using this command due to previous actions");

  message.delete();

  let text = args.slice(0).join(" ")

  let questionmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Question!**__")
    .setColor("#1E2775")
    .addField("Question By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Question:", `${text}`);
  message.guild.channels.find("name", "questions").send(questionmsg);
  let dmquestionerMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Question!**__")
    .setColor("#1E2775")
    .addField("Question In:", `${message.guild.name}`)
    .addField("Question By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Question:", `${text}`);
  message.author.send(dmquestionerMsg);

  message.channel.send(`${message.author} your question has been sent in!`)

  const chanCheck = message.guild.channels.find("name", "logs");
  if (!chanCheck)
    return;
  let logsMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Question!**__")
    .setColor("#1E2775")
    .addField("Question By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Question:", `${text}`);
  chanCheck.send(logsMsg);
}