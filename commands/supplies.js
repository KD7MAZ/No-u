const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const request = require('request')

exports.run = (client, message, args) => {
 

 
 
 var content = message.content 
 var parts = content.split(" "); 
 var username = parts[1];

  if (message.content === '-supplies') {
   message.channel.send(`<a:animatedx:482541818886750218> ${message.author} Please mention a valid nickname!`) 
    return message.react(`a:animatedx:482541818886750218`)
  }
  request('https://ratings.tankionline.com/api/eu/profile/?user=' + (username), { json: true }, (err, res, body) => {
    
  
  
    if (err) { return console.log(err); }
    try {
 


    const mines = body.response.suppliesUsage[0].usages
    const repairs = body.response.suppliesUsage[1].usages
    const speed = body.response.suppliesUsage[2].usages
    const armour = body.response.suppliesUsage[3].usages
    const golds = body.response.suppliesUsage[4].usages
    const damage = body.response.suppliesUsage[5].usages
    const batteries = body.response.suppliesUsage[6].usages
    const total = batteries + damage + speed + armour + golds + repairs + mines



      if ((body.response.hasPremium) == true) {
        
        if ((body.response.rank) == 1) {
            var rank = 'Recruit'
            var rankimg = 'https://i.imgur.com/ZcBNexc.png'}
          else if ((body.response.rank) == 2) {
            var rank = 'Private'
            var rankimg = 'https://i.imgur.com/Jaar0MF.png'}
          else if ((body.response.rank) == 3) {
            var rank = "Gefreiter"
            var rankimg = "https://i.imgur.com/j2DfBdW.png"}
          else if ((body.response.rank) == 4) {
            var rank = "Corporal"
            var rankimg = "https://i.imgur.com/7Pn4X88.png"}
          else if ((body.response.rank) == 5) {
            var rank = "Master Corporal"
            var rankimg = "https://i.imgur.com/WKZ0sVp.png"}
          else if ((body.response.rank) == 6) {
            var rank = "Sergeant"
            var rankimg = "https://i.imgur.com/O2WuJAJ.png"}
          else if ((body.response.rank) == 7) {
            var rank = "Staff Sergeant"
            var rankimg = "https://i.imgur.com/bTQLm9h.png"}
          else if ((body.response.rank) == 8) {
            var rank = "Master Sergeant"
            var rankimg = "https://i.imgur.com/VvivZg0.png"}
          else if ((body.response.rank) == 9) {
            var rank = "First Sergeant"
            var rankimg = "https://i.imgur.com/rCkln3K.png"}
          else if ((body.response.rank) == 10) {
            var rank = "Sergeant-Major"
            var rankimg = "https://i.imgur.com/uOXqDLo.png"}
          else if ((body.response.rank) == 11) {
            var rank = "Warrant Officer 1"
            var rankimg = "https://i.imgur.com/sEzBbLQ.png"}
          else if ((body.response.rank) == 12) {
            var rank = "Warrant Officer 2"
            var rankimg = "https://i.imgur.com/EZJslol.png"}
          else if ((body.response.rank) == 13) {
            var rank = "Warrant Officer 3"
            var rankimg = "https://i.imgur.com/xMboj6l.png"}
          else if ((body.response.rank) == 14) {
            var rank = "Warrant Officer 4"
            var rankimg = "https://i.imgur.com/qLzwet8.png"}
          else if ((body.response.rank) == 15) {
            var rank = "Warrant Officer 5"
            var rankimg = "https://i.imgur.com/0hKtwX2.png"}
          else if ((body.response.rank) == 16) {
            var rank = "Third Lieutenant"
            var rankimg = "https://i.imgur.com/Miz0wqt.png"}
          else if ((body.response.rank) == 17) {
            var rank = "Second Lieutenant"
            var rankimg = "https://i.imgur.com/qkTXhJR.png"}
          else if ((body.response.rank) == 18) {
            var rank = "First Lieutenant"
            var rankimg = "https://i.imgur.com/VeA0ugN.png"}
          else if ((body.response.rank) == 19) {
            var rank = "Captain"
            var rankimg = "https://i.imgur.com/INKmQMy.png"}
          else if ((body.response.rank) == 20) {
            var rank = "Major"
            var rankimg = "https://i.imgur.com/hJL5fqH.png"}
          else if ((body.response.rank) == 21) {
            var rank = "Lieutenant Colonel"
            var rankimg = "https://i.imgur.com/QpggknT.png"}
          else if ((body.response.rank) == 22) {
            var rank = "Colonel"
            var rankimg = "https://i.imgur.com/9dg1YYq.png"}
          else if ((body.response.rank) == 23) {
            var rank = "Brigadier"
            var rankimg = "https://i.imgur.com/Af6FJjE.png"}
          else if ((body.response.rank) == 24) {
            var rank = "Major General"
            var rankimg = "https://i.imgur.com/SYIelDs.png"}
          else if ((body.response.rank) == 25) {
            var rank = "Lieutenant General"
            var rankimg = "https://i.imgur.com/J7ob7co.png"}
          else if ((body.response.rank) == 26) {
            var rank = "General"
            var rankimg = "https://i.imgur.com/laq0luJ.png"}
          else if ((body.response.rank) == 27) {
            var rank = "Marshal"
            var rankimg = "https://i.imgur.com/4QzfKbh.png"}
          else if ((body.response.rank) == 28) {
            var rank = "Field Marshal"
            var rankimg = "https://i.imgur.com/LVcFtIW.png"}
          else if ((body.response.rank) == 29) {
            var rank = "Commander"
            var rankimg = "https://i.imgur.com/YLKv7Qy.png"}
          else if ((body.response.rank) == 30) {
            var rank = "Generalissimo"
            var rankimg = "https://i.imgur.com/i8lKuZh.png"}
          else if ((body.response.rank) > 31) {
           var rankimg = "https://i.imgur.com/qK6onnG.png"
           var numrank = (body.response.rank) - 30
           var rank = "Legend " + (numrank)
           }
          else if ((body.response.rank) == 31) {
            var rank = "Legend"
            var rankimg = "https://imgur.com/qK6onnG.png"}
        
        var premium = 'Yes'
          let aEmbed = new Discord.RichEmbed()
          .setTitle("Stats for " + (body.response.name))
          .setColor('#FFFF00')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("Profile:", `__**Nickname:**__ ${username} \n \n__**Rank:**__ ${rank} \n__**Active Premium:**__ ${premium} \n \n__**Supplies Usages:**__ \n \n__**Repair Kits:**__ ${repairs.toLocaleString('en')} \n \n__**Double Armour:**__ ${armour.toLocaleString('en')} \n \n__**Double Damage:**__ ${damage.toLocaleString('en')} \n \n__**Speed Boost:**__ ${speed.toLocaleString('en')} \n \n__**Mines:**__ ${mines.toLocaleString('en')} \n \n__**Golds:**__ ${golds.toLocaleString('en')} \n \n__**Batteries:**__ ${batteries.toLocaleString('en')} \n \n__**Total Usage:**__ ${total.toLocaleString('en')}`)
        message.channel.send(aEmbed);}
        message.react(`a:animatedtick:482541833805627412`)
        
      if ((body.response.hasPremium) == false) {
        
        if ((body.response.rank) == 1) {
            var rank = 'Recruit'
            var rankimg = 'https://i.imgur.com/ZcBNexc.png'}
          else if ((body.response.rank) == 2) {
            var rank = 'Private'
            var rankimg = 'https://i.imgur.com/Jaar0MF.png'}
          else if ((body.response.rank) == 3) {
            var rank = "Gefreiter"
            var rankimg = "https://i.imgur.com/j2DfBdW.png"}
          else if ((body.response.rank) == 4) {
            var rank = "Corporal"
            var rankimg = "https://i.imgur.com/7Pn4X88.png"}
          else if ((body.response.rank) == 5) {
            var rank = "Master Corporal"
            var rankimg = "https://i.imgur.com/WKZ0sVp.png"}
          else if ((body.response.rank) == 6) {
            var rank = "Sergeant"
            var rankimg = "https://i.imgur.com/O2WuJAJ.png"}
          else if ((body.response.rank) == 7) {
            var rank = "Staff Sergeant"
            var rankimg = "https://i.imgur.com/bTQLm9h.png"}
          else if ((body.response.rank) == 8) {
            var rank = "Master Sergeant"
            var rankimg = "https://i.imgur.com/VvivZg0.png"}
          else if ((body.response.rank) == 9) {
            var rank = "First Sergeant"
            var rankimg = "https://i.imgur.com/rCkln3K.png"}
          else if ((body.response.rank) == 10) {
            var rank = "Sergeant-Major"
            var rankimg = "https://i.imgur.com/xCKvB2G.png"}
          else if ((body.response.rank) == 11) {
            var rank = "Warrant Officer 1"
            var rankimg = "https://i.imgur.com/TJKJ4eB.png"}
          else if ((body.response.rank) == 12) {
            var rank = "Warrant Officer 2"
            var rankimg = "https://i.imgur.com/Q8U5QIz.png"}
          else if ((body.response.rank) == 13) {
            var rank = "Warrant Officer 3"
            var rankimg = "https://i.imgur.com/Ygi65T7.png"}
          else if ((body.response.rank) == 14) {
            var rank = "Warrant Officer 4"
            var rankimg = "https://i.imgur.com/rx0zDOR.png"}
          else if ((body.response.rank) == 15) {
            var rank = "Warrant Officer 5"
            var rankimg = "https://i.imgur.com/jDmMo5j.png"}
          else if ((body.response.rank) == 16) {
            var rank = "Third Lieutenant"
            var rankimg = "https://i.imgur.com/LLvlTZY.png"}
          else if ((body.response.rank) == 17) {
            var rank = "Second Lieutenant"
            var rankimg = "https://i.imgur.com/1Oor2V6.png"}
          else if ((body.response.rank) == 18) {
            var rank = "First Lieutenant"
            var rankimg = "https://i.imgur.com/03s6YiZ.png"}
          else if ((body.response.rank) == 19) {
            var rank = "Captain"
            var rankimg = "https://i.imgur.com/kf8Uo7U.png"}
          else if ((body.response.rank) == 20) {
            var rank = "Major"
            var rankimg = "https://i.imgur.com/Zl9q3rP.png"}
          else if ((body.response.rank) == 21) {
            var rank = "Lieutenant Colonel"
            var rankimg = "https://i.imgur.com/bmTEps1.png"}
          else if ((body.response.rank) == 22) {
            var rank = "Colonel"
            var rankimg = "https://i.imgur.com/Ac9S6w7.png"}
          else if ((body.response.rank) == 23) {
            var rank = "Brigadier"
            var rankimg = "https://i.imgur.com/vBo95NA.png"}
          else if ((body.response.rank) == 24) {
            var rank = "Major General"
            var rankimg = "https://i.imgur.com/YOuPegl.png"}
          else if ((body.response.rank) == 25) {
            var rank = "Lieutenant General"
            var rankimg = "https://i.imgur.com/dYh43EF.png"}
          else if ((body.response.rank) == 26) {
            var rank = "General"
            var rankimg = "https://i.imgur.com/59NrDOX.png"}
          else if ((body.response.rank) == 27) {
            var rank = "Marshal"
            var rankimg = "https://i.imgur.com/S4smUqx.png"}
          else if ((body.response.rank) == 28) {
            var rank = "Field Marshal"
            var rankimg = "https://i.imgur.com/DRmWUfj.png"}
          else if ((body.response.rank) == 29) {
            var rank = "Commander"
            var rankimg = "https://i.imgur.com/lZu9Rqt.png"}
          else if ((body.response.rank) == 30) {
            var rank = "Generalissimo"
            var rankimg = "https://i.imgur.com/Fggz9xh.png"}
          else if ((body.response.rank) > 31) {
           var rankimg = "https://i.imgur.com/NahcZQ9.png"
           var numrank = (body.response.rank) - 30
           var rank = "Legend " + (numrank)
           }
          else if ((body.response.rank) == 31) {
            var rank = "Legend"
            var rankimg = "https://i.imgur.com/NahcZQ9.png"}
        
        
        var premium = 'No'
          let sEmbed = new Discord.RichEmbed()
          .setTitle("Stats for " + (body.response.name))
          .setColor('#8F00FF')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("Profile:", `__**Nickname:**__ ${username} \n \n__**Rank:**__ ${rank} \n__**Active Premium:**__ ${premium} \n \n__**Supplies Usages:**__ \n \n__**Repair Kits:**__ ${repairs.toLocaleString('en')} \n \n__**Double Armour:**__ ${armour.toLocaleString('en')} \n \n__**Double Damage:**__ ${damage.toLocaleString('en')} \n \n__**Speed Boost:**__ ${speed.toLocaleString('en')} \n \n__**Mines:**__ ${mines.toLocaleString('en')} \n \n__**Golds:**__ ${golds.toLocaleString('en')} \n \n__**Batteries:**__ ${batteries.toLocaleString('en')} \n \n__**Total Usage:**__ ${total.toLocaleString('en')}`)
        message.channel.send(sEmbed);}
        message.react(`a:animatedtick:482541833805627412`)

  }  catch (err) {
    if (err) {
    message.react(`a:animatedx:482541818886750218`)
    message.channel.send(`<a:animatedx:482541818886750218> ${message.author} Player Not Found!`); }
}})};
