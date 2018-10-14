const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const gotBanned = new Set(); //new array set

exports.run = (bot, message, [mention, timee, ...reason]) => { //added timee as an arg
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const muteRole = message.guild.roles.find("name", "Muted");

  if (!muteRole)
    return message.channel.send("The Muted role does not exist please go and create it");

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`:x: ${message.author} You do not have manage messages permission`);

  if (gotBanned.has(message.member.id))
    return message.channel.send(`:x: ${message.author} This user is already muted!`); //checks if user is in array

  if (message.member.roles.has(muteRole.id))
    return message.channel.send(`:x: ${message.author} This user is already muted!`)

  if ((message.mentions.members.size === 0) && (timee == undefined) && (reason.length == 0)) {
    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute ➡<user>⬅ ➡[amount]⬅ ➡[reason]⬅ \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a user to mute, a time limit nor a reason`)
    return message.channel.send(Incorrect);
  }

  else if ((message.mentions.members.size === 0) && (timee == undefined)) {
    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute ➡<user>⬅ ➡[amount]⬅ [reason] \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a user to mute`)
    return message.channel.send(Incorrect);
  }

  else if ((message.mentions.members.size === 0) && (reason.length == 0)) {
    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute ➡<user>⬅ [amount] ➡[reason]⬅ \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a user to mute`)
    return message.channel.send(Incorrect);
  }

  else if (message.mentions.members.size === 0) {
    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute ➡<user>⬅ [amount] [reason] \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a user to mute`)
    return message.channel.send(Incorrect);
  }

  if (message.mentions.members.first().id === message.author.id) {
    return message.channel.send(`:x: ${message.author} You cannot do that to yourself, why did you try?`);
  }
  if (message.content.startsWith('-mute <@321673115891531787>'))
    return message.channel.send(`:x: ${message.author} Lol you thought i was gonna mute my own maker, nah m8`)

  const muteMember = message.mentions.members.first();
  const hasNumber = /\d/; //regex for numbers
  const forEver = /[f]/i; //regex for case insensitive "f"
  // if all args are empty
  if ((timee == undefined) && (reason.length == 0)) {
    let sorwon = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute <user> ➡[amount]⬅ ➡[reason]⬅ \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a time limit nor a reason`)
    return message.channel.send(sorwon);

  } else if (timee == undefined || hasNumber.test(timee) == false) { //if timee is empty or doesnt have a number inside
    // if it doesnt have a case insensitive "f" inside
    if (forEver.test(timee) == false) {
      let sorwon = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FF1493")
        .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute <user> ➡[amount]⬅ [reason] \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a time limit`)
      return message.channel.send(sorwon);

      // if it does have a case insensitive "f" but reason is empty
    } else if (reason.length == 0) {
      let sorwon = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("__**Incorrect Usage**__")
        .setColor("#FF1493")
        .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute <user> [amount] ➡[reason]⬅ \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a reason`)
      return message.channel.send(sorwon);
    } else {
      // else just continue :P
      geop = "gay"
    }
  } else if (reason.length == 0) {
    // if reasons are empty
    let sorwon = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#FF1493")
      .setDescription(`**Description:** Mutes a member so they can not type nor add reaction for a specified time limit \n**Usage:** ` + prefix + `mute <user> [amount] ➡[reason]⬅ \n**Examples:** \n` + prefix + `mute @Ahsan 45m No u \n` + prefix + `mute @Ahsan 3h Why are u a noob \n` + prefix + `mute @Ahsan 7d Spamming too much \n` + prefix + `mute @Ahsan forever Advertising via dms \n**Error:** Did not specify a reason`)
    return message.channel.send(sorwon);
  }
  const timeee = timee.toLowerCase(); //lowercase

  if (timeee.indexOf("f") >= 0) {
    var numTime = timeee.replace('f', '')
    var nnnnn = true
  } else if (timeee.indexOf("forever") >= 0) {
    var numTime = timeee.replace('forever', '')
    var nnnnn = true
  } else if (timeee.indexOf("seconds") >= 0) {
    var numTime = timeee.replace('seconds', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 1000
  } else if (timeee.indexOf("s") >= 0) {
    var numTime = timeee.replace('s', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 1000
  } else if (timeee.indexOf("minutes") >= 0) {
    var numTime = timeee.replace('minutes', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 60000
  } else if (timeee.indexOf("m") >= 0) {
    var numTime = timeee.replace('m', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 60000
  } else if (timeee.indexOf("hours") >= 0) {
    var numTime = timeee.replace('hours', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 3600000
  } else if (timeee.indexOf("h") >= 0) {
    var numTime = timeee.replace('h', '')
    var xyx = Number(numTime)
    var unmuteTime = xyx * 3600000
  } else if (timeee.indexOf("day") >= 0) {
    var numTime = timeee.replace('day', '')
    var xyx = Number(numTime)
    var unmuteTime = (xyx * 24) * 3600000
  } else if (timeee.indexOf("days") >= 0) {
    var numTime = timeee.replace('days', '')
    var xyx = Number(numTime)
    var unmuteTime = (xyx * 24) * 3600000
  } else if (timeee.indexOf("d") >= 0) {
    var numTime = timeee.replace('d', '')
    var xyx = Number(numTime)
    var unmuteTime = (xyx * 24) * 3600000
  } else if (isNaN(args[0])) {
    //in case theres none of the above used
  }

  if (message.content.startsWith(prefix + 'mute <@321673115891531787>'))
    return message.channel.send(`${message.author} i can not mute a God, sorry.`)
  if (message.content.startsWith(prefix + 'mute <@!321673115891531787>'))
    return message.channel.send(`${message.author} i can not mute a God, sorry.`)


  message.delete()
  muteMember.addRole(muteRole).then(member => {
    let servermutedmsg = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Muted!**__")
      .setColor("#FF1493")
      .addField("User Muted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
      .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
      .addField("Time:", `${timeee}`) //how long will the user be muted for
      .addField("Reason:", reason.join(' '));
    message.channel.send(servermutedmsg);
    let dmunmutedmsg = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Unmuted!**__")
      .setColor("#00FF00")
      .addField("Unmuted in:", `${message.guild.name}`)
      .addField("User Unmuted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
      .addField("Unmuted By:", `Space Bot 2.0#0626 (<@451417687294345216>)`)
      .addField("Reason:", `Auto unmute ${timee} mute has ended`);

    let serverunmutedmsg = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Unmuted!**__")
      .setColor("#00FF00")
      .addField("User Unmuted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
      .addField("Unmuted By:", `Space Bot 2.0#0626 (<@451417687294345216>)`)
      .addField("Reason:", `Auto unmute ${timee} mute has ended`);
    //checks if forever
    if (nnnnn != true) {
      //unmute
      gotBanned.add(member.user.id);
      setTimeout(() => {
        gotBanned.delete(member.user.id)
        muteMember.removeRole(muteRole)
        message.channel.send(serverunmutedmsg);
        member.send(dmunmutedmsg)
      }, unmuteTime);
    };

    let mutedMsg = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Muted!**__")
      .setColor("#FF1493")
      .addField("Muted In:", `${message.guild.name}`)
      .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
      .addField("Time:", `${timeee}`)
      .addField("Reason:", reason.join(' '));
    muteMember.send(mutedMsg);

  });
  const chanCheck = message.guild.channels.find("name", "logs");
  if (!chanCheck)
    return;
  let logsMsg = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Muted!**__")
    .setColor("#FF1493")
    .addField("User Muted:", `${member.user.username}#${member.user.discriminator} (${member.user})`)
    .addField("Muted By:", `${message.author.username}#${message.author.discriminator} (${message.author})`)
    .addField("Time:", `${timeee}`)
    .addField("Reason:", reason.join(' '));
  chanCheck.send(logsMsg);

};
