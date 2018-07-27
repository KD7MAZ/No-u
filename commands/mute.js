const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    
    const muteRole = message.guild.roles.find("name", "Muted");

    if (!muteRole)
      return message.channel.send("The Muted role does not exist please go and create it");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`:x: ${message.author} You do not have manage messages permission`);

    if (message.member.roles.has(muteRole.id))
      return message.channel.send(`:x: ${message.author} This user is already muted!`)

    if (message.mentions.members.size === 0)
      return message.channel.send(`:x: ${message.author} Please mention a valid user to mute`);
    
    if (message.author.id == message.mentions.users.first()) 
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    
    if (message.content.startsWith('-mute <@321673115891531787>'))
      return message.channel.send(`:x: ${message.author} Lol you thought i was gonna mute my own maker, nah m8`)  
      message.delete()
      const muteMember = message.mentions.members.first();
    
    muteMember.addRole(muteRole).then(member => {
        let servermutedmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Muted!**__")
        .setColor("#FF1493")
        .addField("User Muted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(servermutedmsg);
        
   const chanCheck = message.guild.channels.find("name", "logs");
    if(!chanCheck) 
      return;
    let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Muted!**__")
            .setColor("#FF1493")
            .addField("User Muted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
    chanCheck.send(logsMsg);
  });
  let mutedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Muted!**__")
    .setColor("#FF1493")
    .addField("Muted In:", `${message.guild.name}`)
    .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
    muteMember.send(mutedMsg);

};


