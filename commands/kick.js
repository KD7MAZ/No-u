const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(`:x: ${message.author} You do not have kick members permission`);
    
    if (message.mentions.members.size === 0)
      return message.channel.send(`:x: ${message.author} Please mention a valid user to kick`);
    
    if (message.author.id == message.mentions.users.first()) 
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    
    if (message.content.startsWith('-kick <@321673115891531787>'))
      return message.channel.send(`:x: ${message.author} Lol you thought i was gonna kick my own maker, nah m8`)    
      message.delete()
      
      const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
        let serverKickmsg = new Discord.RichEmbed()
            .setTimestamp()
            .setImage("https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif")
            .setTitle("__**Kick**__")
            .setColor("FFFF00")
            .addField("User Kicked:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));

            message.channel.send(serverKickmsg);
          

          const chanCheck = message.guild.channels.find("name", "logs");
        if(!chanCheck) 
          return 
        let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Kick**__")
            .setColor("FFFF00")
            .addField("User Kicked:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
        
           chanCheck.send(logsMsg);
 
 });
 let Kickedmsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Kicked!**__")
    .setImage("https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif")
    .setColor("FFFF00")
    .addField("Kicked from:", `${message.guild.name}`)
    .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
 kickMember.send(Kickedmsg);
};