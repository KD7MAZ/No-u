const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    message.delete()
    const muteRole = message.guild.roles.find("name", "Muted");
   

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`:x: ${message.author} You do not have manage messages permission`);
      
    if (message.member.roles.has(!muteRole.id))
      return message.channel.send(`:x: ${message.author} That user isnt muted!`)

    if (message.mentions.members.size === 0)
      return message.channel.send(`:x: ${message.author} Please mention a valid user to unmute`);
  
    const unmuteMember = message.mentions.members.first();
    
    unmuteMember.removeRole(muteRole).then(member => {
        let serverunmutedmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Unmuted!**__")
        .setColor("#00FF00")
        .addField("User Unmuted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Unmuted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(serverunmutedmsg);
        
  let unmutedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Unmuted!**__")
    .setColor("#00FF00")
    .addField("Unmuted In:", `${message.guild.name}`)
    .addField("Unmuted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
    unmuteMember.send(unmutedMsg);

  const chanCheck = message.guild.channels.find("name", "logs");
  if(!chanCheck) 
    return
    let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Unmuted!**__")
            .setColor("#00FF00")
            .addField("User Unmuted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
            .addField("Unmuted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
    chanCheck.send(logsMsg);
  });



};


