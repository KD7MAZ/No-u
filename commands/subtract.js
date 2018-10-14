const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'

exports.run = async function (client, message, args) {


  const zero = Number(args[0])
  const one = Number(args[1])
  const outcome = zero - one

  if (!zero) {

    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#8F00FF")
      .setDescription(`**Description:** Subtracts two numbers  \n**Usage:** ` + prefix + `Subtract ➡<number1>⬅ ➡<number2>⬅ \n**Examples:** \n` + prefix + `Subtract 10 2 \n` + prefix + `Subtract 66 75 \n` + prefix + `Subtract 1405 645 \n` + prefix + `Subtract 125498 69451  \n**Error:** Did not specify the first Number`)
    return message.channel.send(Incorrect);
  }

  if (!one) {

    let Incorrect = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("__**Incorrect Usage**__")
      .setColor("#8F00FF")
      .setDescription(`**Description:** Subtracts two numbers  \n**Usage:** ` + prefix + `Subtract <number1> ➡<number2>⬅ \n**Examples:** \n` + prefix + `Subtract 10 2 \n` + prefix + `Subtract 66 75 \n` + prefix + `Subtract 1405 645 \n` + prefix + `Subtract 125498 69451  \n**Error:** Did not specify the second Number`)
    return message.channel.send(Incorrect);
  }




  let multiply = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("__**Subtraction**__")
    .setColor("#8F00FF")
    .setDescription(`${zero} - ${one} = ${outcome}`)
    .setFooter(`${message.author.username} requested some Subtraction!`, message.author.avatarURL)
  return message.channel.send(multiply);


}
