const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    const kickMember = message.mentions.members.first();

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(`:x: ${message.author} You do not have kick members permission`);
     
      if (message.mentions.members.size === 0){
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FFFF00")
        .setDescription(`**Description:** Kicks a member from the server \n**Usage:** `+ prefix +`kick ➡<user>⬅ ➡[reason]⬅ \n**Examples:** \n`+ prefix +`kick @Ahsan No u \n`+ prefix +`kick @Ahsan Why are u a noob \n`+ prefix +`kick @Ahsan Spamming too much \n`+ prefix +`kick @Ahsan Advertising via dms \n**Error:** Did not specify a user to kick nor a reason`)
      return message.channel.send(Incorrect);}
    
        if (reason.length == 0) {
        let Incorrect = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FFFF00")
        .setDescription(`**Description:** Kicks a member from the server \n**Usage:** `+ prefix +`kick <user> ➡[reason]⬅ \n**Examples:** \n`+ prefix +`kick @Ahsan No u \n`+ prefix +`kick @Ahsan Why are u a noob \n`+ prefix +`kick @Ahsan Spamming too much \n`+ prefix +`kick @Ahsan Advertising via dms \n**Error:** Did not specify a reason`)
      return message.channel.send(Incorrect);}
        
    if (message.content.startsWith(prefix + 'kick <@321673115891531787>')){
        let serverkickmsg = new Discord.RichEmbed()
        .setTimestamp()
            .setImage("https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif")
            .setTitle("__**Kick**__")
            .setColor("FFFF00")
            .addField("User Kicked:", `${kickMember.user.username}#${kickMember.user.discriminator} (${kickMember.user})`)
            .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));

        message.channel.send(`<a:WAVE:437630980480827403> **Ahsan#3247 has just left ${message.guild.name} <a:CRY:437630971693498368> the server now has ${message.guild.memberCount} Members!** \nI guess Ahsan#3247 didnt want to follow the rules!`);
        return message.channel.send(serverkickmsg)}
    
    else if (message.content.startsWith(prefix + 'kick <@!321673115891531787>')){
        let serverkickmsg = new Discord.RichEmbed()
        .setTimestamp()
            .setImage("https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif")
            .setTitle("__**Kick**__")
            .setColor("FFFF00")
            .addField("User Kicked:", `${kickMember.user.username}#${kickMember.user.discriminator} (${kickMember.user})`)
            .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
            .addField("Reason:", reason.join(' '));

        message.channel.send(`<a:WAVE:437630980480827403> **Ahsan#3247 has just left ${message.guild.name} <a:CRY:437630971693498368> the server now has ${message.guild.memberCount} Members!** \nI guess Ahsan#3247 didnt want to follow the rules!`);
        return message.channel.send(serverkickmsg)}

if (message.mentions.members.first().id === message.author.id){
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    }
  
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
        
          let Kickedmsg = new Discord.RichEmbed()
          .setTimestamp()
          .setTitle("__**Kicked!**__")
          .setImage("https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif")
          .setColor("FFFF00")
          .addField("Kicked from:", `${message.guild.name}`)
          .addField("Kicked By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
          .addField("Reason:", reason.join(' '));
       kickMember.send(Kickedmsg);
      })
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
 
 
}
