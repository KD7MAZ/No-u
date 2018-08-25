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

  if (message.content === '-припасы') {
   message.channel.send(`<a:animatedx:482541818886750218> ${message.author} Введите действительный псевдоним!`) 
    return message.react(`a:animatedx:482541818886750218`)
  }
  request('https://ratings.tankionline.com/api/eu/profile/?user=' + (username), { json: true }, (err, res, body) => {
    
  
  
    if (err) { return console.log(err); }
    try {
 


    const speed = body.response.suppliesUsage[0].usages
    const damage = body.response.suppliesUsage[1].usages
    const repairs = body.response.suppliesUsage[2].usages
    const mines = body.response.suppliesUsage[3].usages
    const golds = body.response.suppliesUsage[4].usages
    const armour = body.response.suppliesUsage[5].usages
    const batteries = body.response.suppliesUsage[6].usages
    const total = batteries + damage + speed + armour + golds + repairs + mines




    if ((body.response.hasPremium) == true) {
        
        if ((body.response.rank) == 1) {
            var rank = 'Новобранец'
            var rankimg = 'https://i.imgur.com/ZcBNexc.png'}
          else if ((body.response.rank) == 2) {
            var rank = 'Рядовой'
            var rankimg = 'https://i.imgur.com/Jaar0MF.png'}
          else if ((body.response.rank) == 3) {
            var rank = "Ефрейтор"
            var rankimg = "https://i.imgur.com/j2DfBdW.png"}
          else if ((body.response.rank) == 4) {
            var rank = "Капрал"
            var rankimg = "https://i.imgur.com/7Pn4X88.png"}
          else if ((body.response.rank) == 5) {
            var rank = "Мастер капрал"
            var rankimg = "https://i.imgur.com/WKZ0sVp.png"}
          else if ((body.response.rank) == 6) {
            var rank = "Сержант"
            var rankimg = "https://i.imgur.com/O2WuJAJ.png"}
          else if ((body.response.rank) == 7) {
            var rank = "Штаб сержант"
            var rankimg = "https://i.imgur.com/bTQLm9h.png"}
          else if ((body.response.rank) == 8) {
            var rank = "Мастер сержант"
            var rankimg = "https://i.imgur.com/VvivZg0.png"}
          else if ((body.response.rank) == 9) {
            var rank = "Первый сержант"
            var rankimg = "https://i.imgur.com/rCkln3K.png"}
          else if ((body.response.rank) == 10) {
            var rank = " Сержант майор"
            var rankimg = "https://i.imgur.com/uOXqDLo.png"}
          else if ((body.response.rank) == 11) {
            var rank = "Уорэнт офицер 1"
            var rankimg = "https://i.imgur.com/sEzBbLQ.png"}
          else if ((body.response.rank) == 12) {
            var rank = "Уорэнт офицер 2"
            var rankimg = "https://i.imgur.com/EZJslol.png"}
          else if ((body.response.rank) == 13) {
            var rank = "Уорэнт офицер 3"
            var rankimg = "https://i.imgur.com/xMboj6l.png"}
          else if ((body.response.rank) == 14) {
            var rank = "Уорэнт офицер 4"
            var rankimg = "https://i.imgur.com/qLzwet8.png"}
          else if ((body.response.rank) == 15) {
            var rank = "Уорэнт офицер 5"
            var rankimg = "https://i.imgur.com/0hKtwX2.png"}
          else if ((body.response.rank) == 16) {
            var rank = "Младший лейтенант"
            var rankimg = "https://i.imgur.com/Miz0wqt.png"}
          else if ((body.response.rank) == 17) {
            var rank = "Лейтенант"
            var rankimg = "https://i.imgur.com/qkTXhJR.png"}
          else if ((body.response.rank) == 18) {
            var rank = "Старший лейтенант"
            var rankimg = "https://i.imgur.com/VeA0ugN.png"}
          else if ((body.response.rank) == 19) {
            var rank = "Капитан"
            var rankimg = "https://i.imgur.com/INKmQMy.png"}
          else if ((body.response.rank) == 20) {
            var rank = "Майор"
            var rankimg = "https://i.imgur.com/hJL5fqH.png"}
          else if ((body.response.rank) == 21) {
            var rank = "Подполковник"
            var rankimg = "https://i.imgur.com/QpggknT.png"}
          else if ((body.response.rank) == 22) {
            var rank = "Полковник"
            var rankimg = "https://i.imgur.com/9dg1YYq.png"}
          else if ((body.response.rank) == 23) {
            var rank = "Бригадир"
            var rankimg = "https://i.imgur.com/Af6FJjE.png"}
          else if ((body.response.rank) == 24) {
            var rank = "Генерал майор"
            var rankimg = "https://i.imgur.com/SYIelDs.png"}
          else if ((body.response.rank) == 25) {
            var rank = "Генерал лейтенант"
            var rankimg = "https://i.imgur.com/J7ob7co.png"}
          else if ((body.response.rank) == 26) {
            var rank = "Генерал"
            var rankimg = "https://i.imgur.com/laq0luJ.png"}
          else if ((body.response.rank) == 27) {
            var rank = "Маршал"
            var rankimg = "https://i.imgur.com/4QzfKbh.png"}
          else if ((body.response.rank) == 28) {
            var rank = "Фельдмаршал"
            var rankimg = "https://i.imgur.com/LVcFtIW.png"}
          else if ((body.response.rank) == 29) {
            var rank = "Командор"
            var rankimg = "https://i.imgur.com/YLKv7Qy.png"}
          else if ((body.response.rank) == 30) {
            var rank = "Генералиссимус"
            var rankimg = "https://i.imgur.com/i8lKuZh.png"}
          else if ((body.response.rank) > 31) {
           var rankimg = "https://i.imgur.com/qK6onnG.png"
           var numrank = (body.response.rank) - 30
           var rank = "Легенда " + (numrank)
           }
          else if ((body.response.rank) == 31) {
            var rank = "Легенда"
            var rankimg = "https://imgur.com/qK6onnG.png"}
        
        var premium = 'да'
          let aEmbed = new Discord.RichEmbed()
          .setTitle("Статистика для " + (body.response.name))
          .setColor('#FFFF00')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("профиль:", `__**кличка:**__ ${username} \n \n__**Ранг:**__ ${rank} \n__**Aктивный Премиум:**__ ${premium} \n \n__**Припасы используемый:**__ \n \n<:RepairKitIcon:482918499719708683> __**Ремкомплект:**__ ${repairs.toLocaleString('en')} \n \n<:DoubleArmourIcon:482918515834224671> __**Двойная защита:**__ ${armour.toLocaleString('en')} \n \n<:DoubleDamageIcon:482918526596939776> __**Двойной урон:**__ ${damage.toLocaleString('en')}\n \n<:SpeedBoostIcon:482918535786659842> __**Ускорение:**__ ${speed.toLocaleString('en')} \n \n<:MineIcon:482918544133324812> __**Мина:**__ ${mines.toLocaleString('en')} \n \n<:GoldBoxIcon:482918640820289546> __**Золотой ящик:**__ ${golds.toLocaleString('en')} \n \n<:DroneIcon:482918650102415380> __**Батарея:**__ ${batteries.toLocaleString('en')} \n \n<:calculator:482936199455965185> __**Всего используемый:**__ ${total.toLocaleString('en')}`)
        message.channel.send(aEmbed);}
        message.react(`a:animatedtick:482541833805627412`)
            
        if ((body.response.hasPremium) == false) {
        
            if ((body.response.rank) == 1) {
                var rank = 'Новобранец'
                var rankimg = 'https://i.imgur.com/ZcBNexc.png'}
              else if ((body.response.rank) == 2) {
                var rank = 'Рядовой'
                var rankimg = 'https://i.imgur.com/Jaar0MF.png'}
              else if ((body.response.rank) == 3) {
                var rank = "Ефрейтор"
                var rankimg = "https://i.imgur.com/j2DfBdW.png"}
              else if ((body.response.rank) == 4) {
                var rank = "Капрал"
                var rankimg = "https://i.imgur.com/7Pn4X88.png"}
              else if ((body.response.rank) == 5) {
                var rank = "Мастер капрал"
                var rankimg = "https://i.imgur.com/WKZ0sVp.png"}
              else if ((body.response.rank) == 6) {
                var rank = "Сержант"
                var rankimg = "https://i.imgur.com/O2WuJAJ.png"}
              else if ((body.response.rank) == 7) {
                var rank = "Штаб cержант"
                var rankimg = "https://i.imgur.com/bTQLm9h.png"}
              else if ((body.response.rank) == 8) {
                var rank = "Мастер сержант"
                var rankimg = "https://i.imgur.com/VvivZg0.png"}
              else if ((body.response.rank) == 9) {
                var rank = "Первый сержант"
                var rankimg = "https://i.imgur.com/rCkln3K.png"}
              else if ((body.response.rank) == 10) {
                var rank = "Сержант майор"
                var rankimg = "https://i.imgur.com/xCKvB2G.png"}
              else if ((body.response.rank) == 11) {
                var rank = "Уорэнт офицер 1"
                var rankimg = "https://i.imgur.com/TJKJ4eB.png"}
              else if ((body.response.rank) == 12) {
                var rank = "Уорэнт офицер 2"
                var rankimg = "https://i.imgur.com/Q8U5QIz.png"}
              else if ((body.response.rank) == 13) {
                var rank = "Уорэнт офицер 3"
                var rankimg = "https://i.imgur.com/Ygi65T7.png"}
              else if ((body.response.rank) == 14) {
                var rank = "Уорэнт офицер 4"
                var rankimg = "https://i.imgur.com/rx0zDOR.png"}
              else if ((body.response.rank) == 15) {
                var rank = "Уорэнт офицер 5"
                var rankimg = "https://i.imgur.com/jDmMo5j.png"}
              else if ((body.response.rank) == 16) {
                var rank = "Младший лейтенант"
                var rankimg = "https://i.imgur.com/LLvlTZY.png"}
              else if ((body.response.rank) == 17) {
                var rank = "Лейтенант"
                var rankimg = "https://i.imgur.com/1Oor2V6.png"}
              else if ((body.response.rank) == 18) {
                var rank = "Старший лейтенант"
                var rankimg = "https://i.imgur.com/03s6YiZ.png"}
              else if ((body.response.rank) == 19) {
                var rank = "Капитан"
                var rankimg = "https://i.imgur.com/kf8Uo7U.png"}
              else if ((body.response.rank) == 20) {
                var rank = "Майор"
                var rankimg = "https://i.imgur.com/Zl9q3rP.png"}
              else if ((body.response.rank) == 21) {
                var rank = "Подполковник"
                var rankimg = "https://i.imgur.com/bmTEps1.png"}
              else if ((body.response.rank) == 22) {
                var rank = "Полковник"
                var rankimg = "https://i.imgur.com/Ac9S6w7.png"}
              else if ((body.response.rank) == 23) {
                var rank = "Бригадир"
                var rankimg = "https://i.imgur.com/vBo95NA.png"}
              else if ((body.response.rank) == 24) {
                var rank = "Генерал майор"
                var rankimg = "https://i.imgur.com/YOuPegl.png"}
              else if ((body.response.rank) == 25) {
                var rank = "Генерал лейтенант"
                var rankimg = "https://i.imgur.com/dYh43EF.png"}
              else if ((body.response.rank) == 26) {
                var rank = "Генерал"
                var rankimg = "https://i.imgur.com/59NrDOX.png"}
              else if ((body.response.rank) == 27) {
                var rank = "Маршал"
                var rankimg = "https://i.imgur.com/S4smUqx.png"}
              else if ((body.response.rank) == 28) {
                var rank = "Фельдмаршал"
                var rankimg = "https://i.imgur.com/DRmWUfj.png"}
              else if ((body.response.rank) == 29) {
                var rank = "Командор"
                var rankimg = "https://i.imgur.com/lZu9Rqt.png"}
              else if ((body.response.rank) == 30) {
                var rank = "Генералиссимус"
                var rankimg = "https://i.imgur.com/Fggz9xh.png"}
              else if ((body.response.rank) > 31) {
               var rankimg = "https://i.imgur.com/NahcZQ9.png"
               var numrank = (body.response.rank) - 30
               var rank = "Легенда " + (numrank)
               }
              else if ((body.response.rank) == 31) {
                var rank = "Легенда"
                var rankimg = "https://i.imgur.com/NahcZQ9.png"}
        
        
        var premium = 'нет'
          let sEmbed = new Discord.RichEmbed()
          .setTitle("Статистика для " + (body.response.name))
          .setColor('#8F00FF')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("профиль:", `__**кличка:**__ ${username} \n \n__**Ранг:**__ ${rank} \n__**Aктивный Премиум:**__ ${premium} \n \n__**Припасы используемый:**__ \n \n<:RepairKitIcon:482918499719708683> __**Ремкомплект:**__ ${repairs.toLocaleString('en')} \n \n<:DoubleArmourIcon:482918515834224671> __**Двойная защита:**__ ${armour.toLocaleString('en')} \n \n<:DoubleDamageIcon:482918526596939776> __**Двойной урон:**__ ${damage.toLocaleString('en')}\n \n<:SpeedBoostIcon:482918535786659842> __**Ускорение:**__ ${speed.toLocaleString('en')} \n \n<:MineIcon:482918544133324812> __**Мина:**__ ${mines.toLocaleString('en')} \n \n<:GoldBoxIcon:482918640820289546> __**Золотой ящик:**__ ${golds.toLocaleString('en')} \n \n<:DroneIcon:482918650102415380> __**Батарея:**__ ${batteries.toLocaleString('en')} \n \n<:calculator:482936199455965185> __**Всего используемый:**__ ${total.toLocaleString('en')}`)
        message.channel.send(sEmbed);}
        message.react(`a:animatedtick:482541833805627412`)

  }  catch (err) {
    if (err) {
    message.react(`a:animatedx:482541818886750218`)
    message.channel.send(`<a:animatedx:482541818886750218> ${message.author} Игрок не найден!`); }
}})};
