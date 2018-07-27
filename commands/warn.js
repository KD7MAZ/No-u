const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {

    const warnRole = message.guild.roles.find("name", "Warned");

    if (!warnRole)
      return message.channel.send("The Warned role does not exist please go and create it");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`${message.author} You do not have manage messages permission`);

    if (message.mentions.members.size === 0)
      return message.channel.send(`${message.author} Please mention a valid user to warn`);
  
    if (message.content.startsWith('-warn <@321673115891531787>'))
       return message.channel.send(`${message.author} Lol you thought i was gonna warn my own maker, nah m8`)    
       
    if (message.author.id == message.mentions.users.first()) 
       return message.channel.send(`${message.author} You cannot do that to yourself, why did you try?`);
   
       message.delete()
      const warnedMember = message.guild.member(message.mentions.users.first());
    warnedMember.addRole(warnRole).then(member => {
    let serverwarnedmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Warned!**__")
        .setColor("#00FFFF")
        .addField("User Warned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(serverwarnedmsg);
    
   const chanCheck = message.guild.channels.find("name", "logs");
    if(!chanCheck) 
      return
    let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Warned!**__")
            .setColor("#00FFFF")
            .addField("User Warned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
    chanCheck.send(logsMsg);
    });
  let warnedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Warned!**__")
    .setColor("#00FFFF")
    .addField("Warned In:", `${message.guild.name}`)
    .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
   warnedMember.send(warnedMsg);

};