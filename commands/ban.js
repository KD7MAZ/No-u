const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    const banMember = message.mentions.members.first();

    if (message.content.startsWith('-ban <@321673115891531787>')){
        let serverBanmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Banned!**__")
        .setImage("https://media.giphy.com/media/H99r2HtnYs492/giphy.gif")
        .setColor("#FF0000")
        .addField("User Banned:", `Ahsan#3247 (<@321673115891531787>)`)
        .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
        message.channel.send(`<a:WAVE:437630980480827403> **Ahsan#3247 has just left ${message.guild.name} <a:CRY:437630971693498368> the server now has ${message.guild.memberCount} Members!** \nI guess Ahsan#3247 didnt want to follow the rules!`);
        return message.channel.send(serverBanmsg)}

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(`:x: ${message.author} You do not have ban members permission`);

    if (message.mentions.members.size === 0){
    let Incorrect = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Incorrect Usage**__")
    .setColor("#FF0000")
    .setDescription(`**Description:** Bans a member from the server \n**Usage:** -ban ➡<user>⬅ ➡{reason}⬅ \n**Examples:** \n-ban @Ahsan No u \n-ban @Ahsan Why are u a noob \n**Error:** Did not specify a user to ban nor a reason`)
  return message.channel.send(Incorrect);}

    if (reason.length == 0) {
    let Incorrect = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Incorrect Usage**__")
    .setColor("#FF0000")
    .setDescription(`**Description:** Bans a member from the server \n**Usage:** -ban <user> ➡{reason}⬅ \n**Examples:** \n-ban @Ahsan No u \n-ban @Ahsan Why are u a noob \n**Error:** Did not specify a reason`)
  return message.channel.send(Incorrect);}
  
    if (message.author.id == message.mentions.users.first()) 
      return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
    


  message.delete()
    banMember.ban(reason.join(" ")).then(member => {
     let serverBanmsg = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Banned!**__")
        .setImage("https://media.giphy.com/media/H99r2HtnYs492/giphy.gif")
        .setColor("#FF0000")
        .addField("User Banned:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
        .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
        .addField("Reason:", reason.join(' '));
     message.channel.send(serverBanmsg );
   
     const chanCheck = message.guild.channels.find("name", "logs");
  let bannedMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setImage("https://media.giphy.com/media/H99r2HtnYs492/giphy.gif")
    .setTitle("__**Banned!**__")
    .setColor("#FF0000")
    .addField("Banned From:", `${message.guild.name}`)
    .addField("Banned By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Reason:", reason.join(' '));
   banMember.send(bannedMsg);
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




};
