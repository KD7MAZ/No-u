const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = async function (client, message, args) {
    if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)

    
    message.delete();
    if (message.mentions.members.size === 0)
    return message.channel.send(`${message.author} Please mention a user to DDoS.`)
    const ddosMember = message.mentions.members.first();
    const loading = client.emojis.find("name", "BUFFER1")
    const m = await message.channel.send(`${loading} Initializing DDoS ${loading}`);
    let randm = Math.floor(Math.random() * 7891011) + 123456;
    let ranom = Math.floor(Math.random() * 10) + 1;
    setTimeout(function (){m.edit(`${loading} Target Information Acquiring... ${loading}`)
    }, 2000);
    setTimeout(function (){m.edit(`${loading} Target Information Acquired. ${loading}`)
    }, 5000);
    setTimeout(function (){m.edit(`${loading} Obtaining Target's IP Addresses... ${loading}`)
    }, 10000);
    setTimeout(function (){m.edit(`${loading} Obtained Target's IP Addresses. ${loading}`)
    }, 15000);
    setTimeout(function (){m.edit(`${loading} DDoSing Target From ${randm} Host Servers. ${loading}`)
    }, 20000);
    setTimeout(function (){m.edit(`Target ${ddosMember} has been DDoSed and all current infomation has been leaked`)
    }, 25000);
    ddosMember.send(`You are currently under a DDoS attack all of ur infomation has been leaked out to hackers accross the world, your credit card details, your address, your pasports and your phone number. You have also been given criminal records and false hostage claims have been given to the police, be expecting a SWAT team at your house within 30minutes `)
};
