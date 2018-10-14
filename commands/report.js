const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
  const noreport = message.guild.roles.find("name", "no report");
  if (!noreport)
    return message.channel.send(":x: To use this command u must make a @no report role");

  if (message.member.roles.has(noreport.id))
    return message.reply(":x: You are banned from using this command due to previous actions");

  if (message.channel.type == 'dm')
    return;

  message.delete();
  const reported = message.mentions.members.first();

  let text = args.slice(1).join(" ")

  let reportmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Report!**__")
    .setColor("#791E2F")
    .addField("User Reported:", `${reported.user.username}#${reported.user.discriminator} (${reported.user})`)
    .addField("Report By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", `${text}`);
  message.guild.channels.find("name", "reports").send(reportmsg);

  const chanCheck = message.guild.channels.find("name", "logs");
  if (!chanCheck)
    return;
  let logsMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Report!**__")
    .setColor("#791E2F")
    .addField("User Reported:", `${reported.user.username}#${reported.user.discriminator} (${reported.user})`)
    .addField("Report By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", `${text}`);
  chanCheck.send(logsMsg);


  let dmreporterMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Report!**__")
    .setColor("#791E2F")
    .addField("Reported In:", `${message.guild.name}`)
    .addField("User Reported:", `${reported.user.username}#${reported.user.discriminator} (${reported.user})`)
    .addField("Report By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", `${text}`);
  message.author.send(dmreporterMsg);


  let dmreportedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Report!**__")
    .setColor("#791E2F")
    .addField("Reported In:", `${message.guild.name}`)
    .addField("User Reported:", `${reported.user.username}#${reported.user.discriminator} (${reported.user})`)
    .addField("Report By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", `${text}`);

  reported.send(dmreportedMsg);



  message.channel.send(`${message.author} your report about ${reported} has been sent in!`)
}