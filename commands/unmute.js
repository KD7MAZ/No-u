const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, [mention, ...reason]) => {
    const unmuteMember = message.mentions.members.first();
    const muteRole = message.guild.roles.find("name", "Muted");
   

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`:x: ${message.author} You do not have manage messages permission`);
      
    if (message.member.roles.has(!muteRole.id))
      return message.channel.send(`:x: ${message.author} That user isnt muted!`)

      if (message.mentions.members.size === 0){
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FF0000")
        .setDescription(`**Description:** Unmutes a member in the server \n**Usage:** -unwarn ➡<user>⬅ ➡{reason}⬅ \n**Examples:** \n-unmute @Ahsan No u \n-unmute @Ahsan Why are u a noob \n-unmute @Ahsan Spamming my dms \n-unmute @Ahsan Not advertising  \n**Error:** Did not specify a user to unmute nor a reason`)
      return message.channel.send(Incorrect);}
    
        if (reason.length == 0) {
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FF0000")
        .setDescription(`**Description:** Unmutes a member in the server \n**Usage:** -unwarn <user> ➡{reason}⬅ \n**Examples:** \n-unmute @Ahsan No u \n-unmute @Ahsan Why are u a noob \n-unmute @Ahsan Spamming my dms \n-unmute @Ahsan Not advertising  \n**Error:** Did not specify a reason`)
      return message.channel.send(Incorrect);}
    
    message.delete()
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
