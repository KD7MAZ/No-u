const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
  const nosuggest = message.guild.roles.find("name", "no suggest");
  if (!nosuggest)
    return message.channel.send(":x: To use this command u must make a @no suggest role");

  if (message.member.roles.has(nosuggest.id))
    return message.reply(":x: You are banned from using this command due to previous actions");

  if (message.channel.type == 'dm')
    return;

  suggester = message.mentions.members.first();
  message.delete();
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let text = args.slice(1).join(" ")

  let suggestmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Suggestion!**__")
    .setColor("#0000FF")
    .addField("Suggestion By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Suggestion:", `${text}`)
  message.guild.channels.find("name", "suggestions").send(suggestmsg);


  let dmsuggestMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Suggestion!**__")
    .setColor("#0000FF")
    .addField("Suggested In:", `${message.guild.name}`)
    .addField("Suggested By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Suggestion:", `${text}`);
  message.author.send(dmsuggestMsg);

  message.channel.send(`${message.author} your suggestion has been sent in!`)

  const chanCheck = message.guild.channels.find("name", "logs");
  if (!chanCheck)
    return
  let logsMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Suggestion!**__")
    .setColor("#0000FF")
    .addField("Suggestion By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Suggestion:", `${text}`);
  chanCheck.send(logsMsg);


}





