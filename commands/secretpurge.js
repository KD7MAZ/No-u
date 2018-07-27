const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
  if (message.author.id !== `${owner}`) return message.channel.send(`**|:exclamation:|  You dont have permission to use this command**`)
  let msg = message.content.toLocaleLowerCase();
  let sender = message.author;
    async function purge() {
message.delete();

            
            if (isNaN(args[0])) {
              message.channel.send(`${message.author} Please mention a valid number of messages to delete`); 
              return;
          }
          const fetched = await message.channel.fetchMessages({limit: args[0]}); 
          console.log(fetched.size + ' messages found, deleting...'); 
          message.channel.bulkDelete(fetched)
          
      }
      purge();
            
      

}