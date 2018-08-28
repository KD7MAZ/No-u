const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
  const nobug = message.guild.roles.find("name", "no bug");
  if (!nobug)
    return message.channel.send(":x: To use this command u must make a @no bug role");
  
  if (message.member.roles.has(nobug.id))
    return message.reply(":x: You are banned from using this command due to previous actions");

  if (message.channel.type == 'dm') 
    return;

  bugger = message.mentions.members.first();
  message.delete();
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let text = args.slice(1).join(" ")
    
    let suggestmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Bug Spotted!**__")
    .setColor("#4D7FCB")
    .addField("Spotted In:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Bug:", `${text}`)
    message.guild.channels.find("name", "suggestions").send(suggestmsg);

    
    let dmsuggestMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Bug Spotted!**__")
    .setColor("#4D7FCB")
    .addField("Spotted In:", `${message.guild.name}`)
    .addField("Spotted by:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Bug:", `${text}`);
   message.author.send(dmsuggestMsg);
   
   message.channel.send(`${message.author} your suggestion has been sent in!`)
    
   const chanCheck = message.guild.channels.find("name", "logs");
    if(!chanCheck) 
      return
    let logsMsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Bug Spotted!**__")
        .setColor("#4D7FCB")
        .addField("Spotted In:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Spotted by:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Bug:", `${text}`);
    chanCheck.send(logsMsg);
    
  
}
