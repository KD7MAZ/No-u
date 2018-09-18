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
 


    const armour = body.response.suppliesUsage[0].usages
    const damage = body.response.suppliesUsage[1].usages
    const mines = body.response.suppliesUsage[2].usages
    const repairs = body.response.suppliesUsage[3].usages
    const golds = body.response.suppliesUsage[4].usages
    const speed = body.response.suppliesUsage[5].usages
    const batteries = body.response.suppliesUsage[6].usages
    const total = batteries + damage + speed + armour + golds + repairs + mines
    //DO NOT TOUCH
    if (body.response.suppliesUsage[0].name == "Repair Kit") {
  var emoji0 = "<:RepairKitIcon:482918499719708683>"
  var name0 = "Repair Kits"
}
else if (body.response.suppliesUsage[0].name == "Double Damage") {
  var emoji0 = "<:DoubleDamageIcon:482918526596939776>"
  var name0 = "Double Damage"
}
else if (body.response.suppliesUsage[0].name == "Speed Boost") {
  var emoji0 = "<:SpeedBoostIcon:482918535786659842>"
  var name0 = "Speed Boost"
}
else if (body.response.suppliesUsage[0].name == "Gold box") {
  var emoji0 = "<:GoldBoxIcon:482918640820289546> "
  var name0 = "Golds"
}
else if (body.response.suppliesUsage[0].name == "Double Armor") {
  var emoji0 = "<:DoubleArmourIcon:482918515834224671>"
  var name0 = "Double Armour"
}
else if (body.response.suppliesUsage[0].name == "Mine") {
  var emoji0 = "<:MineIcon:482918544133324812>"
  var name0 = "Mines"
}
else if (body.response.suppliesUsage[0].name == "Battery") {
  var emoji0 = "<:DroneIcon:482918650102415380>"
  var name0 = "Batteries"
}
//////////////////////////////////////////////
if (body.response.suppliesUsage[1].name == "Repair Kit") {
  var emoji1 = "<:RepairKitIcon:482918499719708683>"
  var name1 = "Repair Kits"
}
else if (body.response.suppliesUsage[1].name == "Double Damage") {
  var emoji1 = "<:DoubleDamageIcon:482918526596939776>"
  var name1 = "Double Damage"
}
else if (body.response.suppliesUsage[1].name == "Speed Boost") {
  var emoji1 = "<:SpeedBoostIcon:482918535786659842>"
  var name1 = "Speed Boost"
}
else if (body.response.suppliesUsage[1].name == "Gold box") {
  var emoji1 = "<:GoldBoxIcon:482918640820289546> "
  var name1 = "Golds"
}
else if (body.response.suppliesUsage[1].name == "Double Armor") {
  var emoji1 = "<:DoubleArmourIcon:482918515834224671>"
  var name1 = "Double Armour"
}
else if (body.response.suppliesUsage[1].name == "Mine") {
  var emoji1 = "<:MineIcon:482918544133324812>"
  var name1 = "Mines"
}
else if (body.response.suppliesUsage[1].name == "Battery") {
  var emoji1 = "<:DroneIcon:482918650102415380>"
  var name1 = "Batteries"
}
///////////////////////
if (body.response.suppliesUsage[2].name == "Repair Kit") {
  var emoji2 = "<:RepairKitIcon:482918499719708683>"
  var name2 = "Repair Kits"
}
else if (body.response.suppliesUsage[2].name == "Double Damage") {
  var emoji2 = "<:DoubleDamageIcon:482918526596939776>"
  var name2 = "Double Damage"
}
else if (body.response.suppliesUsage[2].name == "Speed Boost") {
  var emoji2 = "<:SpeedBoostIcon:482918535786659842>"
  var name2 = "Speed Boost"
}
else if (body.response.suppliesUsage[2].name == "Gold box") {
  var emoji2 = "<:GoldBoxIcon:482918640820289546> "
  var name2 = "Golds"
}
else if (body.response.suppliesUsage[2].name == "Double Armor") {
  var emoji2 = "<:DoubleArmourIcon:482918515834224671>"
  var name2 = "Double Armour"
}
else if (body.response.suppliesUsage[2].name == "Mine") {
  var emoji2 = "<:MineIcon:482918544133324812>"
  var name2 = "Mines"
}
else if (body.response.suppliesUsage[2].name == "Battery") {
  var emoji2 = "<:DroneIcon:482918650102415380>"
  var name2 = "Batteries"
}
///////////////////////////
if (body.response.suppliesUsage[3].name == "Repair Kit") {
  var emoji3 = "<:RepairKitIcon:482918499719708683>"
  var name3 = "Repair Kits"
}
else if (body.response.suppliesUsage[3].name == "Double Damage") {
  var emoji3 = "<:DoubleDamageIcon:482918526596939776>"
  var name3 = "Double Damage"
}
else if (body.response.suppliesUsage[3].name == "Speed Boost") {
  var emoji3 = "<:SpeedBoostIcon:482918535786659842>"
  var name3 = "Speed Boost"
}
else if (body.response.suppliesUsage[3].name == "Gold box") {
  var emoji3 = "<:GoldBoxIcon:482918640820289546> "
  var name3 = "Golds"
}
else if (body.response.suppliesUsage[3].name == "Double Armor") {
  var emoji3 = "<:DoubleArmourIcon:482918515834224671>"
  var name3 = "Double Armour"
}
else if (body.response.suppliesUsage[3].name == "Mine") {
  var emoji3 = "<:MineIcon:482918544133324812>"
  var name3 = "Mines"
}
else if (body.response.suppliesUsage[3].name == "Battery") {
  var emoji3 = "<:DroneIcon:482918650102415380>"
  var name3 = "Batteries"
}
///////////////////////////////
if (body.response.suppliesUsage[4].name == "Repair Kit") {
  var emoji4 = "<:RepairKitIcon:482918499719708683>"
  var name4 = "Repair Kits"
}
else if (body.response.suppliesUsage[4].name == "Double Damage") {
  var emoji4 = "<:DoubleDamageIcon:482918526596939776>"
  var name4 = "Double Damage"
}
else if (body.response.suppliesUsage[4].name == "Speed Boost") {
  var emoji4 = "<:SpeedBoostIcon:482918535786659842>"
  var name4 = "Speed Boost"
}
else if (body.response.suppliesUsage[4].name == "Gold box") {
  var emoji4 = "<:GoldBoxIcon:482918640820289546> "
  var name4 = "Golds"
}
else if (body.response.suppliesUsage[4].name == "Double Armor") {
  var emoji4 = "<:DoubleArmourIcon:482918515834224671>"
  var name4 = "Double Armour"
}
else if (body.response.suppliesUsage[4].name == "Mine") {
  var emoji4 = "<:MineIcon:482918544133324812>"
  var name4 = "Mines"
}
else if (body.response.suppliesUsage[4].name == "Battery") {
  var emoji4 = "<:DroneIcon:482918650102415380>"
  var name4 = "Batteries"
}
//////////////////
if (body.response.suppliesUsage[5].name == "Repair Kit") {
  var emoji5 = "<:RepairKitIcon:482918499719708683>"
  var name5 = "Repair Kits"
}
else if (body.response.suppliesUsage[5].name == "Double Damage") {
  var emoji5 = "<:DoubleDamageIcon:482918526596939776>"
  var name5 = "Double Damage"
}
else if (body.response.suppliesUsage[5].name == "Speed Boost") {
  var emoji5 = "<:SpeedBoostIcon:482918535786659842>"
  var name5 = "Speed Boost"
}
else if (body.response.suppliesUsage[5].name == "Gold box") {
  var emoji5 = "<:GoldBoxIcon:482918640820289546> "
  var name5 = "Golds"
}
else if (body.response.suppliesUsage[5].name == "Double Armor") {
  var emoji5 = "<:DoubleArmourIcon:482918515834224671>"
  var name5 = "Double Armour"
}
else if (body.response.suppliesUsage[5].name == "Mine") {
  var emoji5 = "<:MineIcon:482918544133324812>"
  var name5 = "Mines"
}
else if (body.response.suppliesUsage[5].name == "Battery") {
  var emoji5 = "<:DroneIcon:482918650102415380>"
  var name5 = "Batteries"
}
////////////////////////
if (body.response.suppliesUsage[6].name == "Repair Kit") {
  var emoji6 = "<:RepairKitIcon:482918499719708683>"
  var name6 = "Repair Kits"
}
else if (body.response.suppliesUsage[6].name == "Double Damage") {
  var emoji6 = "<:DoubleDamageIcon:482918526596939776>"
  var name6 = "Double Damage"
}
else if (body.response.suppliesUsage[6].name == "Speed Boost") {
  var emoji6 = "<:SpeedBoostIcon:482918535786659842>"
  var name6 = "Speed Boost"
}
else if (body.response.suppliesUsage[6].name == "Gold box") {
  var emoji6 = "<:GoldBoxIcon:482918640820289546> "
  var name6 = "Golds"
}
else if (body.response.suppliesUsage[6].name == "Double Armor") {
  var emoji6 = "<:DoubleArmourIcon:482918515834224671>"
  var name6 = "Double Armour"
}
else if (body.response.suppliesUsage[6].name == "Mine") {
  var emoji6 = "<:MineIcon:482918544133324812>"
  var name6 = "Mines"
}
else if (body.response.suppliesUsage[6].name == "Battery") {
  var emoji6 = "<:DroneIcon:482918650102415380>"
  var name6 = "Batteries"
}



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
        var gif = `<a:Premium_ranks:491698442729422851>` 
        let aEmbed = new Discord.RichEmbed()
          .setTitle("Stats for " + (body.response.name))
          .setColor('#FFFF00')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
.addField("Profile:", `<:Nickname:490985268531298304> __**Nickname:**__ ${username} \n \n ${gif} __**Rank:**__ ${rank} \n \n<:Premium:490264864053526537> __**Active Premium:**__ ${premium} \n \n__**Supplies Usages:**__ \n \n${emoji3} __**${name3}:**__ ${repairs.toLocaleString('en')} \n \n${emoji0} __**${name0}:**__ ${armour.toLocaleString('en')} \n \n${emoji1} __**${name1}:**__ ${damage.toLocaleString('en')} \n \n${emoji5} __**${name5}:**__ ${speed.toLocaleString('en')} \n \n${emoji2} __**${name2}:**__ ${mines.toLocaleString('en')} \n \n${emoji4} __**${name4}:**__ ${golds.toLocaleString('en')} \n \n${emoji6} __**${name6}:**__ ${batteries.toLocaleString('en')} \n \n<:calculator:482936199455965185> __**Total Usage:**__ ${total.toLocaleString('en')}`)        message.channel.send(aEmbed);}
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
        var gif = `<a:Ranks:491697106441207849>` 
        let sEmbed = new Discord.RichEmbed()
          .setTitle("Stats for " + (body.response.name))
          .setColor('#8F00FF')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("Profile:", `<:Nickname:490985268531298304> __**Nickname:**__ ${username} \n \n ${gif} __**Rank:**__ ${rank} \n \n<:Premium:490264864053526537> __**Active Premium:**__ ${premium} \n \n__**Supplies Usages:**__ \n \n${emoji3} __**${name3}:**__ ${repairs.toLocaleString('en')} \n \n${emoji0} __**${name0}:**__ ${armour.toLocaleString('en')} \n \n${emoji1} __**${name1}:**__ ${damage.toLocaleString('en')} \n \n${emoji5} __**${name5}:**__ ${speed.toLocaleString('en')} \n \n${emoji2} __**${name2}:**__ ${mines.toLocaleString('en')} \n \n${emoji4} __**${name4}:**__ ${golds.toLocaleString('en')} \n \n${emoji6} __**${name6}:**__ ${batteries.toLocaleString('en')} \n \n<:calculator:482936199455965185> __**Total Usage:**__ ${total.toLocaleString('en')}`)
        message.channel.send(sEmbed);}
        message.react(`a:animatedtick:482541833805627412`)

  }  catch (err) {
    if (err) {
    message.react(`a:animatedx:482541818886750218`)
    message.channel.send(`<a:animatedx:482541818886750218> ${message.author} Player Not Found!`); }
}})};
