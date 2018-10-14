const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
  const warnedMember = message.guild.member(message.mentions.users.first());
    const warnRole = message.guild.roles.find("name", "Warned");

    if (!warnRole)
      return message.channel.send("The Warned role does not exist please go and create it");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`${message.author} You do not have manage messages permission`);
      
    if (message.mentions.members.size === 0){
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#00FFFF")
        .setDescription(`**Description:** Warns a member in the server \n**Usage:** ` + prefix + `warn ➡<user>⬅ ➡[reason]⬅ \n**Examples:** \n` + prefix + `warn @Ahsan No u \n` + prefix + `warn @Ahsan Why are u a noob\n` + prefix + `warn @Ahsan Spamming too much \n` + prefix + `warn @Ahsan Advertising via dms \n**Error:** Did not specify a user to warn nor a reason`)
      return message.channel.send(Incorrect);}
    
      if (reason.length == 0) {
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#00FFFF")
        .setDescription(`**Description:** Warns a member in the server \n**Usage:** ` + prefix + `warn <user> ➡[reason]⬅ \n**Examples:** \n` + prefix + `warn @Ahsan No u \n` + prefix + `warn @Ahsan Why are u a noob\n` + prefix + `warn @Ahsan Spamming too much \n` + prefix + `warn @Ahsan Advertising via dms \n**Error:** Did not specify a reason`)
      return message.channel.send(Incorrect);}
    if (message.content.startsWith(prefix + 'warn <@321673115891531787>'))
       return message.channel.send(`${message.author} i can not warn a God, sorry.`)    
    if (message.content.startsWith(prefix + 'warn <@!321673115891531787>'))
       return message.channel.send(`${message.author} i can not warn a God, sorry.`)    
       
    if (message.mentions.members.first().id === message.author.id){
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    }
       message.delete()
    warnedMember.addRole(warnRole).then(member => {
    let serverwarnedmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Warned!**__")
        .setColor("#00FFFF")
        .addField("User Warned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(serverwarnedmsg);
    
 
   let warnedMsg = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle("__**Warned!**__")
   .setColor("#00FFFF")
   .addField("Warned In:", `${message.guild.name}`)
   .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
   .addField("Reason:", reason.join(' '));
  warnedMember.send(warnedMsg);

  });
const chanCheck = message.guild.channels.find("name", "logs");
if(!chanCheck) 
      return
    let logsMsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Warned!**__")
            .setColor("#00FFFF")
            .addField("User Warned:", `${warnedMember.user.username}#${warnedMember.user.discriminator} (${warnedMember.user})`)
            .addField("Warned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));
    chanCheck.send(logsMsg);
}
