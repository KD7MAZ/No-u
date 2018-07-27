const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'



exports.run = async function (client, message, args) {
    const loading = client.emojis.find("name", "BUFFER1")
    const m = await message.channel.send(`Request is being proccessed. ${loading}`);
    if (message.author.bot) return;



    if (message.mentions.members.size === 0) {
        setTimeout(function (){m.edit({embed: {
        color: 6703856,
        author: {
            name: "Space Bot 2.0",
            icon_url: client.user.avatarURL,
          },
         
          image: {
            url: message.author.avatarURL,
            proxy_url: message.author.avatarURL,
            heigh: 500,
            width: 500
          },
          title: "Here you are, your avatar",
          description: `[Here is the link to this profile picture.](${message.author.avatarURL})`,
          timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "Requested by " + message.author.username,
    }
    }
    })
    }), 4000}
    else
    {
    const pfpmemb = message.mentions.members.first();
    const pfpurl = pfpmemb.user.avatarURL
    setTimeout(function (){m.edit({embed: {
        color: 6703856,
        author: {
            name: "Space Bot 2.0",
            icon_url: client.user.avatarURL,
          },
          
            
         
          image: {
            url: pfpmemb.user.avatarURL,
            proxy_url: pfpmemb.user.avatarURL,
            width: 500,
            height: 500,
          },
          title: `Here is this users avatar`,
          description: `[Here is the link to this profile picture.](${pfpurl})`,
          timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "Requested by " + message.author.username,
    }
    }
    })}), 4000}}
