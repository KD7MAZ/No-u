const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(`:x: ${message.author} You do not have ban members permission`);

    if (message.mentions.members.size === 0)
      return message.channel.send(`:x: ${message.author} Please mention a valid user to ban`);
    
    if (message.author.id == message.mentions.users.first()) 
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    
    if (message.content.startsWith('-ban <@321673115891531787>'))
      return message.channel.send(`:x: ${message.author} Lol you thought i was gonna ban my own maker, nah m8`)  
    
  const banMember = message.mentions.members.first();
  message.delete()
    banMember.ban(reason.join(" ")).then(member => {
     let serverBanmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Banned!**__")
        .setImage("https://media.giphy.com/media/H99r2HtnYs492/giphy.gif")
        .setColor("FF0000")
        .addField("User Banned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(serverBanmsg );
   
     const chanCheck = message.guild.channels.find("name", "logs");
    if(!chanCheck) 
      return;
    let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Banned!**__")
            .setColor("FF0000")
            .addField("User Banned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
    chanCheck.send(logsMsg);
  });
  let bannedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setImage("https://media.giphy.com/media/H99r2HtnYs492/giphy.gif")
    .setTitle("__**Banned!**__")
    .setColor("FF0000")
    .addField("Banned From:", `${message.guild.name}`)
    .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
   banMember.send(bannedMsg);



   //console.log(`${message.author.username}#${message.author.discriminator} has banned ${banMember.username}#${banmember.user.discriminator} in ${message.guild.name} Reason:`, reason.join(' '))


};