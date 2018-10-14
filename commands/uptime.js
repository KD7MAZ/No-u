const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = (bot, message, args) => {
  function format(seconds) {
    function pad(s) {
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }

  var uptime = process.uptime();

  let serverunmutedmsg = new Discord.RichEmbed()
    .setTitle(":clock3: Uptime")
    .setColor("#8F00FF")
    .setDescription(`${bot.user.username} is running for ${format(uptime)}.`)
  message.channel.send(serverunmutedmsg);
};
config: { }



