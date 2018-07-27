const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'


exports.run = (bot, message, [mention, ...reason]) => {
    let fortnitedrop = Math.floor(Math.random() * 30) + 1;
    
    if ((fortnitedrop) == 1){
        var rankimg = 'https://i.imgur.com/C6aw91x.png'} 
      else if ((fortnitedrop) == 2){
        var rankimg = 'https://i.imgur.com/eCdg5Gt.png'}
      else if ((fortnitedrop) == 3){
        var rankimg = "https://i.imgur.com/TLLGzse.png"}
      else if ((fortnitedrop) == 4){
        var rankimg = "https://i.imgur.com/Ldp5eKp.png"}
      else if ((fortnitedrop) == 5){
        var rankimg = "https://i.imgur.com/ENgEWTQ.png"}
      else if ((fortnitedrop) == 6){
        var rankimg = "https://i.imgur.com/tvLcq1S.png"}
      else if ((fortnitedrop) == 7){
        var rankimg = "https://i.imgur.com/pxLVrgA.png"}
      else if ((fortnitedrop) == 8){
        var rankimg = "https://i.imgur.com/sO3hzir.png"}
      else if ((fortnitedrop) == 9){
        var rankimg = "https://i.imgur.com/93fGPGV.png"}
      else if ((fortnitedrop) == 10){
        var rankimg = "https://i.imgur.com/cvPenX1.png"}
      else if ((fortnitedrop) == 11){
        var rankimg = "https://i.imgur.com/Bks8Ra8.png"}
      else if ((fortnitedrop) == 12){
        var rankimg = "https://i.imgur.com/JvmLtOb.png"}
      else if ((fortnitedrop) == 13){
        var rankimg = "https://i.imgur.com/w2msWnI.png"}
      else if ((fortnitedrop) == 14){
        var rankimg = "https://i.imgur.com/fQCYYr1.png"}
      else if ((fortnitedrop) == 15){
        var rankimg = "https://i.imgur.com/yUBkq1b.png"}
      else if ((fortnitedrop) == 16){
        var rankimg = "https://i.imgur.com/xtUkQHE.png"}
      else if ((fortnitedrop) == 17){
        var rankimg = "https://i.imgur.com/0J8oZo7.png"}
      else if ((fortnitedrop) == 18){
        var rankimg = "https://i.imgur.com/JnpNwJS.png"}
      else if ((fortnitedrop) == 19){
        var rankimg = "https://i.imgur.com/0g5hu2d.png"}
      else if ((fortnitedrop) == 20){
        var rankimg = "https://i.imgur.com/x3aOpL9.png"}
      else if ((fortnitedrop) == 21){
        var rankimg = "https://i.imgur.com/zHUBY7g.png"}
      else if ((fortnitedrop) == 22){
        var rankimg = "https://i.imgur.com/DdPrK91.png"}
      else if ((fortnitedrop) == 23){
        var rankimg = "https://i.imgur.com/mloTXTR.png"}
      else if ((fortnitedrop) == 24){
        var rankimg = "https://i.imgur.com/F4L5j8k.png"}
      else if ((fortnitedrop) == 25){
        var rankimg = "https://i.imgur.com/6RW4PW7.png"}
      else if ((fortnitedrop) == 26){
        var rankimg = "https://i.imgur.com/1Zcelyw.png"}
      else if ((fortnitedrop) == 27){
        var rankimg = "https://i.imgur.com/qBILXXU.png"}
      else if ((fortnitedrop) == 28){
        var rankimg = "https://i.imgur.com/ZHzGcST.png"}
      else if ((fortnitedrop) == 29){
        var rankimg = "https://i.imgur.com/FFAw7Mo.png"}
      else if ((fortnitedrop) == 30){     
        var rankimg = "https://i.imgur.com/COlmVHV.png"}

    let aEmbed = new Discord.RichEmbed()
       .setTitle(`Here you are ${message.author.username} somewhere to drop, hope you get a victory royale!`)
       .setColor('#8F00FF')
       .setImage(rankimg)
      message.channel.send(aEmbed);


      

};

