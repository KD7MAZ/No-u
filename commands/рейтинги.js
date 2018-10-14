const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const request = require('request')

exports.run = (client, message, args) => {
  const nickemoji = `<:Nickname:490985268531298304>`
  const expemoji = `<:Exp:490604143195717632>`
  const nextrankemoji = `<:Arrow:490612308108902441>`
  const premiumemoji = `<:Premium:490264864053526537>`
  const crysemoji = `<:Crystals:490265165892157461>`
  const goldemoji = `<:Goldbox:490264893673439233>`
  const killsemoji = `<:Kills:490268704181977089> `
  const deathemoji = `<:Deaths:490268689715822623>`
  const kdemoji = `<:KD:490605628616867860>`


  var content = message.content
  var parts = content.split(" ");
  var username = parts[1];

  if (message.content === '-рейтинги') return message.channel.send(`:x: ${message.author} Введите действительный псевдоним!`)

  request('https://ratings.tankionline.com/api/eu/profile/?user=' + (username), { json: true }, (err, res, body) => {



    if (err) { return console.log(err); }
    try {





      var num = (body.response.rating.efficiency.value)
      var numrd = Math.round((num) / 100) * 100
      var numm = Number((numrd))
      var numstr = numm.toString().replace(/^0+|0+$/g, "")
      var efval = Number((numstr))

      if ((body.response.rating.efficiency.position) == -1) {
        var efpos = "0"
      } else {
        var efpos = (body.response.rating.efficiency.position).toLocaleString('en')
      }
      if ((body.response.rating.efficiency.value) == -1) {
        var efval = "0"
      } else {
      }
      if ((body.response.rating.score.position) == -1) {
        var expos = "0"
      } else {
        var expos = (body.response.rating.score.position).toLocaleString('en')
      }
      if ((body.response.rating.score.value) == -1) {
        var exval = "0"
      } else {
        var exval = (body.response.rating.score.value).toLocaleString('en')
      }
      if ((body.response.rating.crystals.position) == -1) {
        var crypos = "0"
      } else {
        var crypos = (body.response.rating.crystals.position).toLocaleString('en')
      }
      if ((body.response.rating.crystals.value) == -1) {
        var cryval = "0"
      } else {
        var cryval = (body.response.rating.crystals.value).toLocaleString('en')
      }
      if ((body.response.rating.golds.position) == -1) {
        var gpos = "0"
      } else {
        var gpos = (body.response.rating.golds.position).toLocaleString('en')
      }
      if ((body.response.rating.golds.value) == -1) {
        var gval = "0"
      } else {
        var gval = (body.response.rating.golds.value).toLocaleString('en')
      }
      var kdratio = (body.response.kills) / (body.response.deaths)
      var kdratioround = kdratio.toFixed(2)
      const name = (body.response.name)
      const crys = (body.response.earnedCrystals).toLocaleString('en')
      const golds = (body.response.caughtGolds).toLocaleString('en')
      const kills = (body.response.kills).toLocaleString('en')
      const deaths = (body.response.deaths).toLocaleString('en')
      const kd = (kdratioround)
      var expleft = (body.response.scoreNext) - (body.response.score)
      const exp = (body.response.score).toLocaleString('en') + "/" + (body.response.scoreNext).toLocaleString('en')
      var expleftcommas = (expleft).toLocaleString('en')
      const efposi = (efpos).toString() + " | " + (efval).toLocaleString('en')
      const exposi = (expos).toString() + " | " + (exval).toString()
      const gbposi = (gpos) + " | " + (gval)
      const cryposi = (crypos) + " | " + (cryval)

      if (message.content == '-ratings Ahsan') {
        let zEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Ahsan")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Ahsan (Also know as God) \n \n**Rank:** Legend 999 \n \n**Exp**: 999,999,999 \n \n**Next rank:** 1xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 999,999,999 \n \n**Golds Caught:** 999,999,999 \n \n**Kills:** 999,999,999      **Deaths:** 0      **K/D:** -`)
        return message.channel.send(zEmbed);
      }

      if (message.content == '-ratings ahsan') {
        let lEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Ahsan")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Ahsan (Also know as God) \n \n**Rank:** Legend 999 \n \n**Exp**: 999,999,999 \n \n**Next rank:** 1xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 999,999,999 \n \n**Golds Caught:** 999,999,999 \n \n**Kills:** 999,999,999      **Deaths:** 0      **K/D:** - `)
        return message.channel.send(lEmbed);
      }

      if (message.content == '-ratings Leo') {
        let lEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Leo")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Leo (Also know as the best Youtber) \n \n**Rank:** Legend 69 \n \n**Exp**: 69 \n \n**Next rank:** 31xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 69 \n \n**Golds Caught:** 69 \n \n**Kills:** 69      **Deaths:** 0      **K/D:** -`)
        return message.channel.send(lEmbed);
      }

      if (message.content == '-ratings leo') {
        let xEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Leo")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Leo (Also know as the best Youtuber) \n \n**Rank:** Legend 69 \n \n**Exp**: 69 \n \n**Next rank:** 31xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 69 \n \n**Golds Caught:** 69 \n \n**Kills:** 69      **Deaths:** 0      **K/D:** - `)
        return message.channel.send(xEmbed);
      }

      if (message.content == '-ratings andy') {
        let fEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Andy")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** andy (Also know as Hacker) \n \n**Rank:** Legend 0000000 \n \n**Exp**: 0000000 \n \n**Next rank:** 0xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 0000000 \n \n**Golds Caught:** 0000000 \n \n**Kills:** 0000000     **Deaths:** 0      **K/D:** -`)
        return message.channel.send(fEmbed);
      }

      if (message.content == '-ratings Andy') {
        let dEmbed = new Discord.RichEmbed()
          .setTitle("Stats for Andy")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** andy (Also know as Hacker) \n \n**Rank:** Legend 0000000 \n \n**Exp**: 0000000 \n \n**Next rank:** 0xp \n \n**Active Premium:** Yes \n \n**Crystals Obtained:** 0000000 \n \n**Golds Caught:** 0000000 \n \n**Kills:** 0000000     **Deaths:** 0      **K/D:** -`)
        return message.channel.send(dEmbed);
      }

      if ((body.response.hasPremium) == true) {

        if ((body.response.rank) == 1) {
          var rank = 'Новобранец'
          var rankimg = 'https://i.imgur.com/ZcBNexc.png'
        }
        else if ((body.response.rank) == 2) {
          var rank = 'Рядовой'
          var rankimg = 'https://i.imgur.com/Jaar0MF.png'
        }
        else if ((body.response.rank) == 3) {
          var rank = "Ефрейтор"
          var rankimg = "https://i.imgur.com/j2DfBdW.png"
        }
        else if ((body.response.rank) == 4) {
          var rank = "Капрал"
          var rankimg = "https://i.imgur.com/7Pn4X88.png"
        }
        else if ((body.response.rank) == 5) {
          var rank = "Мастер капрал"
          var rankimg = "https://i.imgur.com/WKZ0sVp.png"
        }
        else if ((body.response.rank) == 6) {
          var rank = "Сержант"
          var rankimg = "https://i.imgur.com/O2WuJAJ.png"
        }
        else if ((body.response.rank) == 7) {
          var rank = "Штаб сержант"
          var rankimg = "https://i.imgur.com/bTQLm9h.png"
        }
        else if ((body.response.rank) == 8) {
          var rank = "Мастер сержант"
          var rankimg = "https://i.imgur.com/VvivZg0.png"
        }
        else if ((body.response.rank) == 9) {
          var rank = "Первый сержант"
          var rankimg = "https://i.imgur.com/rCkln3K.png"
        }
        else if ((body.response.rank) == 10) {
          var rank = " Сержант майор"
          var rankimg = "https://i.imgur.com/uOXqDLo.png"
        }
        else if ((body.response.rank) == 11) {
          var rank = "Уорэнт офицер 1"
          var rankimg = "https://i.imgur.com/sEzBbLQ.png"
        }
        else if ((body.response.rank) == 12) {
          var rank = "Уорэнт офицер 2"
          var rankimg = "https://i.imgur.com/EZJslol.png"
        }
        else if ((body.response.rank) == 13) {
          var rank = "Уорэнт офицер 3"
          var rankimg = "https://i.imgur.com/xMboj6l.png"
        }
        else if ((body.response.rank) == 14) {
          var rank = "Уорэнт офицер 4"
          var rankimg = "https://i.imgur.com/qLzwet8.png"
        }
        else if ((body.response.rank) == 15) {
          var rank = "Уорэнт офицер 5"
          var rankimg = "https://i.imgur.com/0hKtwX2.png"
        }
        else if ((body.response.rank) == 16) {
          var rank = "Младший лейтенант"
          var rankimg = "https://i.imgur.com/Miz0wqt.png"
        }
        else if ((body.response.rank) == 17) {
          var rank = "Лейтенант"
          var rankimg = "https://i.imgur.com/qkTXhJR.png"
        }
        else if ((body.response.rank) == 18) {
          var rank = "Старший лейтенант"
          var rankimg = "https://i.imgur.com/VeA0ugN.png"
        }
        else if ((body.response.rank) == 19) {
          var rank = "Капитан"
          var rankimg = "https://i.imgur.com/INKmQMy.png"
        }
        else if ((body.response.rank) == 20) {
          var rank = "Майор"
          var rankimg = "https://i.imgur.com/hJL5fqH.png"
        }
        else if ((body.response.rank) == 21) {
          var rank = "Подполковник"
          var rankimg = "https://i.imgur.com/QpggknT.png"
        }
        else if ((body.response.rank) == 22) {
          var rank = "Полковник"
          var rankimg = "https://i.imgur.com/9dg1YYq.png"
        }
        else if ((body.response.rank) == 23) {
          var rank = "Бригадир"
          var rankimg = "https://i.imgur.com/Af6FJjE.png"
        }
        else if ((body.response.rank) == 24) {
          var rank = "Генерал майор"
          var rankimg = "https://i.imgur.com/SYIelDs.png"
        }
        else if ((body.response.rank) == 25) {
          var rank = "Генерал лейтенант"
          var rankimg = "https://i.imgur.com/J7ob7co.png"
        }
        else if ((body.response.rank) == 26) {
          var rank = "Генерал"
          var rankimg = "https://i.imgur.com/laq0luJ.png"
        }
        else if ((body.response.rank) == 27) {
          var rank = "Маршал"
          var rankimg = "https://i.imgur.com/4QzfKbh.png"
        }
        else if ((body.response.rank) == 28) {
          var rank = "Фельдмаршал"
          var rankimg = "https://i.imgur.com/LVcFtIW.png"
        }
        else if ((body.response.rank) == 29) {
          var rank = "Командор"
          var rankimg = "https://i.imgur.com/YLKv7Qy.png"
        }
        else if ((body.response.rank) == 30) {
          var rank = "Генералиссимус"
          var rankimg = "https://i.imgur.com/i8lKuZh.png"
        }
        else if ((body.response.rank) > 31) {
          var rankimg = "https://i.imgur.com/qK6onnG.png"
          var numrank = (body.response.rank) - 30
          var rank = "Легенда " + (numrank)
        }
        else if ((body.response.rank) == 31) {
          var rank = "Легенда"
          var rankimg = "https://imgur.com/qK6onnG.png"
        }

        var premium = 'да'
        var gif = `<a:Premium_ranks:491698442729422851>`
        let aEmbed = new Discord.RichEmbed()
          .setTitle("Статистика для " + (body.response.name))
          .setColor('#FFFF00')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/ru/user/" + (body.response.name) + "/")
          .addField("Профиль:", `${nickemoji} __**Ник:**__ ${name} \n \n ${gif} __**Звание:**__ ${rank} \n \n${expemoji} __**Опыт:**__ ${exp} \n \n${nextrankemoji} __**Следующее звание через:**__ ${expleftcommas}xp \n \n${premiumemoji} __**Aктивный Премиум:**__ ${premium} \n \n${crysemoji} __**Заработано кристаллов:**__ ${crys} \n \n${goldemoji} __**Поймано золотых ящиков:**__ ${golds} \n \n${killsemoji} __** Уничтожил:**__ ${kills}      ${deathemoji} __**Подбит:**__ ${deaths}      ${kdemoji} __**У/П:**__ ${kd}`)
        message.channel.send(aEmbed);
      }


      if ((body.response.hasPremium) == false) {

        if ((body.response.rank) == 1) {
          var rank = 'Новобранец'
          var rankimg = 'https://i.imgur.com/ZcBNexc.png'
        }
        else if ((body.response.rank) == 2) {
          var rank = 'Рядовой'
          var rankimg = 'https://i.imgur.com/Jaar0MF.png'
        }
        else if ((body.response.rank) == 3) {
          var rank = "Ефрейтор"
          var rankimg = "https://i.imgur.com/j2DfBdW.png"
        }
        else if ((body.response.rank) == 4) {
          var rank = "Капрал"
          var rankimg = "https://i.imgur.com/7Pn4X88.png"
        }
        else if ((body.response.rank) == 5) {
          var rank = "Мастер капрал"
          var rankimg = "https://i.imgur.com/WKZ0sVp.png"
        }
        else if ((body.response.rank) == 6) {
          var rank = "Сержант"
          var rankimg = "https://i.imgur.com/O2WuJAJ.png"
        }
        else if ((body.response.rank) == 7) {
          var rank = "Штаб cержант"
          var rankimg = "https://i.imgur.com/bTQLm9h.png"
        }
        else if ((body.response.rank) == 8) {
          var rank = "Мастер сержант"
          var rankimg = "https://i.imgur.com/VvivZg0.png"
        }
        else if ((body.response.rank) == 9) {
          var rank = "Первый сержант"
          var rankimg = "https://i.imgur.com/rCkln3K.png"
        }
        else if ((body.response.rank) == 10) {
          var rank = "Сержант майор"
          var rankimg = "https://i.imgur.com/xCKvB2G.png"
        }
        else if ((body.response.rank) == 11) {
          var rank = "Уорэнт офицер 1"
          var rankimg = "https://i.imgur.com/TJKJ4eB.png"
        }
        else if ((body.response.rank) == 12) {
          var rank = "Уорэнт офицер 2"
          var rankimg = "https://i.imgur.com/Q8U5QIz.png"
        }
        else if ((body.response.rank) == 13) {
          var rank = "Уорэнт офицер 3"
          var rankimg = "https://i.imgur.com/Ygi65T7.png"
        }
        else if ((body.response.rank) == 14) {
          var rank = "Уорэнт офицер 4"
          var rankimg = "https://i.imgur.com/rx0zDOR.png"
        }
        else if ((body.response.rank) == 15) {
          var rank = "Уорэнт офицер 5"
          var rankimg = "https://i.imgur.com/jDmMo5j.png"
        }
        else if ((body.response.rank) == 16) {
          var rank = "Младший лейтенант"
          var rankimg = "https://i.imgur.com/LLvlTZY.png"
        }
        else if ((body.response.rank) == 17) {
          var rank = "Лейтенант"
          var rankimg = "https://i.imgur.com/1Oor2V6.png"
        }
        else if ((body.response.rank) == 18) {
          var rank = "Старший лейтенант"
          var rankimg = "https://i.imgur.com/03s6YiZ.png"
        }
        else if ((body.response.rank) == 19) {
          var rank = "Капитан"
          var rankimg = "https://i.imgur.com/kf8Uo7U.png"
        }
        else if ((body.response.rank) == 20) {
          var rank = "Майор"
          var rankimg = "https://i.imgur.com/Zl9q3rP.png"
        }
        else if ((body.response.rank) == 21) {
          var rank = "Подполковник"
          var rankimg = "https://i.imgur.com/bmTEps1.png"
        }
        else if ((body.response.rank) == 22) {
          var rank = "Полковник"
          var rankimg = "https://i.imgur.com/Ac9S6w7.png"
        }
        else if ((body.response.rank) == 23) {
          var rank = "Бригадир"
          var rankimg = "https://i.imgur.com/vBo95NA.png"
        }
        else if ((body.response.rank) == 24) {
          var rank = "Генерал майор"
          var rankimg = "https://i.imgur.com/YOuPegl.png"
        }
        else if ((body.response.rank) == 25) {
          var rank = "Генерал лейтенант"
          var rankimg = "https://i.imgur.com/dYh43EF.png"
        }
        else if ((body.response.rank) == 26) {
          var rank = "Генерал"
          var rankimg = "https://i.imgur.com/59NrDOX.png"
        }
        else if ((body.response.rank) == 27) {
          var rank = "Маршал"
          var rankimg = "https://i.imgur.com/S4smUqx.png"
        }
        else if ((body.response.rank) == 28) {
          var rank = "Фельдмаршал"
          var rankimg = "https://i.imgur.com/DRmWUfj.png"
        }
        else if ((body.response.rank) == 29) {
          var rank = "Командор"
          var rankimg = "https://i.imgur.com/lZu9Rqt.png"
        }
        else if ((body.response.rank) == 30) {
          var rank = "Генералиссимус"
          var rankimg = "https://i.imgur.com/Fggz9xh.png"
        }
        else if ((body.response.rank) > 31) {
          var rankimg = "https://i.imgur.com/NahcZQ9.png"
          var numrank = (body.response.rank) - 30
          var rank = "Легенда " + (numrank)
        }
        else if ((body.response.rank) == 31) {
          var rank = "Легенда"
          var rankimg = "https://i.imgur.com/NahcZQ9.png"
        }


        var premium = 'Нет'
        var gif = `<a:Ranks:491697106441207849>`
        let sEmbed = new Discord.RichEmbed()
          .setTitle("Статистика для " + (body.response.name))
          .setColor('#8F00FF')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/ru/user/" + (body.response.name) + "/")
          .addField("Профиль:", `${nickemoji} __**Ник:**__ ${name} \n \n ${gif} __**Звание:**__ ${rank} \n \n${expemoji} __**Опыт:**__ ${exp} \n \n${nextrankemoji} __**Следующее звание через:**__ ${expleftcommas}xp \n \n${premiumemoji} __**Aктивный Премиум:**__ ${premium} \n \n${crysemoji} __**Заработано кристаллов:**__ ${crys} \n \n${goldemoji} __**Поймано золотых ящиков:**__ ${golds} \n \n${killsemoji} __** Уничтожил:**__ ${kills}      ${deathemoji} __**Подбит:**__ ${deaths}      ${kdemoji} __**У/П:**__ ${kd}`)
        message.channel.send(sEmbed);
      }


    } catch (err) {
      if (err) {

        message.channel.send(`:x: ${message.author} Игрок не найден!`);
      }
    }
  })
};
