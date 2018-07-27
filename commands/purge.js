const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (client, message, args) => {
let msg = message.content.toLocaleLowerCase();
  let sender = message.author;
    async function purge() {
message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(`:x: ${message.author} You do not have manage messages permission`);
                        
            if (isNaN(args[0])) {
              message.channel.send(`:x: ${message.author} Please mention a valid number of messages to delete`); 
              return;
          }
          const fetched = await message.channel.fetchMessages({limit: args[0]}); 
          console.log(fetched.size + ' messages found, deleting...'); 
          message.channel.bulkDelete(fetched)
          message.channel.send(`${message.author} You have successfully deleted ${fetched.size} messages!`)    
      }
      purge();
            
      

}
    