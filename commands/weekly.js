const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const request = require('request')

exports.run = (client, message, args) => {

  if (message.content === '-weekly') return message.channel.send(`:x: Please mention a valid nickname!`)


  var content = message.content
  var parts = content.split(" ");
  var username = parts[1];

  request('https://ratings.tankionline.com/api/eu/profile/?user=' + (username), { json: true }, (err, res, body) => {

    if (err) { return console.log(err); }
    try {


      if ((body.response.rank) == 1) {
        var rank = 'Recruit'
        var rankimg = 'https://i.imgur.com/ZcBNexc.png'
      }
      else if ((body.response.rank) == 2) {
        var rank = 'Private'
        var rankimg = 'https://i.imgur.com/Jaar0MF.png'
      }
      else if ((body.response.rank) == 3) {
        var rank = "Gefreiter"
        var rankimg = "https://i.imgur.com/j2DfBdW.png"
      }
      else if ((body.response.rank) == 4) {
        var rank = "Corporal"
        var rankimg = "https://i.imgur.com/7Pn4X88.png"
      }
      else if ((body.response.rank) == 5) {
        var rank = "Master Corporal"
        var rankimg = "https://i.imgur.com/WKZ0sVp.png"
      }
      else if ((body.response.rank) == 6) {
        var rank = "Sergeant"
        var rankimg = "https://i.imgur.com/O2WuJAJ.png"
      }
      else if ((body.response.rank) == 7) {
        var rank = "Staff Sergeant"
        var rankimg = "https://i.imgur.com/bTQLm9h.png"
      }
      else if ((body.response.rank) == 8) {
        var rank = "Master Sergeant"
        var rankimg = "https://i.imgur.com/VvivZg0.png"
      }
      else if ((body.response.rank) == 9) {
        var rank = "First Sergeant"
        var rankimg = "https://i.imgur.com/rCkln3K.png"
      }
      else if ((body.response.rank) == 10) {
        var rank = "Sergeant-Major"
        var rankimg = "https://i.imgur.com/xCKvB2G.png"
      }
      else if ((body.response.rank) == 11) {
        var rank = "Warrant Officer 1"
        var rankimg = "https://i.imgur.com/TJKJ4eB.png"
      }
      else if ((body.response.rank) == 12) {
        var rank = "Warrant Officer 2"
        var rankimg = "https://i.imgur.com/Q8U5QIz.png"
      }
      else if ((body.response.rank) == 13) {
        var rank = "Warrant Officer 3"
        var rankimg = "https://i.imgur.com/Ygi65T7.png"
      }
      else if ((body.response.rank) == 14) {
        var rank = "Warrant Officer 4"
        var rankimg = "https://i.imgur.com/rx0zDOR.png"
      }
      else if ((body.response.rank) == 15) {
        var rank = "Warrant Officer 5"
        var rankimg = "https://i.imgur.com/jDmMo5j.png"
      }
      else if ((body.response.rank) == 16) {
        var rank = "Third Lieutenant"
        var rankimg = "https://i.imgur.com/LLvlTZY.png"
      }
      else if ((body.response.rank) == 17) {
        var rank = "Second Lieutenant"
        var rankimg = "https://i.imgur.com/1Oor2V6.png"
      }
      else if ((body.response.rank) == 18) {
        var rank = "First Lieutenant"
        var rankimg = "https://i.imgur.com/03s6YiZ.png"
      }
      else if ((body.response.rank) == 19) {
        var rank = "Captain"
        var rankimg = "https://i.imgur.com/kf8Uo7U.png"
      }
      else if ((body.response.rank) == 20) {
        var rank = "Major"
        var rankimg = "https://i.imgur.com/Zl9q3rP.png"
      }
      else if ((body.response.rank) == 21) {
        var rank = "Lieutenant Colonel"
        var rankimg = "https://i.imgur.com/bmTEps1.png"
      }
      else if ((body.response.rank) == 22) {
        var rank = "Colonel"
        var rankimg = "https://i.imgur.com/Ac9S6w7.png"
      }
      else if ((body.response.rank) == 23) {
        var rank = "Brigadier"
        var rankimg = "https://i.imgur.com/vBo95NA.png"
      }
      else if ((body.response.rank) == 24) {
        var rank = "Major General"
        var rankimg = "https://i.imgur.com/YOuPegl.png"
      }
      else if ((body.response.rank) == 25) {
        var rank = "Lieutenant General"
        var rankimg = "https://i.imgur.com/dYh43EF.png"
      }
      else if ((body.response.rank) == 26) {
        var rank = "General"
        var rankimg = "https://i.imgur.com/59NrDOX.png"
      }
      else if ((body.response.rank) == 27) {
        var rank = "Marshal"
        var rankimg = "https://i.imgur.com/S4smUqx.png"
      }
      else if ((body.response.rank) == 28) {
        var rank = "Field Marshal"
        var rankimg = "https://i.imgur.com/DRmWUfj.png"
      }
      else if ((body.response.rank) == 29) {
        var rank = "Commander"
        var rankimg = "https://i.imgur.com/lZu9Rqt.png"
      }
      else if ((body.response.rank) == 30) {
        var rank = "Generalissimo"
        var rankimg = "https://i.imgur.com/Fggz9xh.png"
      }
      else if ((body.response.rank) > 31) {
        var rankimg = "https://i.imgur.com/NahcZQ9.png"
        var numrank = (body.response.rank) - 30
        var rank = "Legend " + (numrank)
      }
      else if ((body.response.rank) == 31) {
        var rank = "Legend"
        var rankimg = "https://i.imgur.com/NahcZQ9.png"
      }

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

      if (message.content == '-weekly Ahsan') {
        let zEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For Ahsan")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Ahsan (Also know as God) \n \n**Rank:** Legend 999 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**GoldBox Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**Experience Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**Efficiency Ratings:**__ \nPosition: 1 \nValue: 999,999,999`)
        return message.channel.send(zEmbed);
      }

      if (message.content == '-weekly ahsan') {
        let lEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For Ahsan")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Ahsan (Also know as God) \n \n**Rank:** Legend 999 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**GoldBox Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**Experience Ratings:**__ \nPosition: 1 \nValue: 999,999,999 \n \n__**Efficiency Ratings:**__ \nPosition: 1 \nValue: 999,999,999`)
        return message.channel.send(lEmbed);
      }

      if (message.content == '-wweekly Leo') {
        let lEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For Leo")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Leo (Also know as the best Youtber) \n \n**Rank:** Legend 69 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**GoldBox Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**Experience Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**Efficiency Ratings:**__ \nPosition: 3 \nValue: 69`)
        return message.channel.send(lEmbed);
      }

      if (message.content == '-weekly leo') {
        let xEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For Leo")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** Leo (Also know as the best Youtber) \n \n**Rank:** Legend 69 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**GoldBox Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**Experience Ratings:**__ \nPosition: 3 \nValue: 69 \n \n__**Efficiency Ratings:**__ \nPosition: 3 \nValue: 69`)
        return message.channel.send(xEmbed);
      }

      if (message.content == '-weekly AndyisAwesomeYT') {
        let fEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For AndyisAwesomeYT")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** AndyisAwesomeYT (Also know as Hacker) \n \n**Rank:** Legend 0000000 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**GoldBox Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**Experience Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**Efficiency Ratings:**__ \nPosition: 2 \nValue: 0000000`)
        return message.channel.send(fEmbed);
      }

      if (message.content == '-weekly andyisawesomeyt') {
        let dEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For AndyisAwesomeYT")
          .setColor('#FFFF00')
          .setThumbnail('https://i.imgur.com/NahcZQ9.png')
          .setURL("http://ratings.tankionline.com/en/user/Ahsantank/")
          .addField("Profile:", `**Nickname:** AndyisAwesomeYT (Also know as Hacker) \n \n**Rank:** Legend 0000000 \n__**Active Premium:**__ Yes \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**GoldBox Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**Experience Ratings:**__ \nPosition: 2 \nValue: 0000000 \n \n__**Efficiency Ratings:**__ \nPosition: 2 \nValue: 0000000`)
        return message.channel.send(dEmbed);
      }

      if ((body.response.hasPremium) == true) {
        if ((body.response.rank) == 1) {
          var rank = 'Recruit'
          var rankimg = 'https://i.imgur.com/ZcBNexc.png'
        }
        else if ((body.response.rank) == 2) {
          var rank = 'Private'
          var rankimg = 'https://i.imgur.com/Jaar0MF.png'
        }
        else if ((body.response.rank) == 3) {
          var rank = "Gefreiter"
          var rankimg = "https://i.imgur.com/j2DfBdW.png"
        }
        else if ((body.response.rank) == 4) {
          var rank = "Corporal"
          var rankimg = "https://i.imgur.com/7Pn4X88.png"
        }
        else if ((body.response.rank) == 5) {
          var rank = "Master Corporal"
          var rankimg = "https://i.imgur.com/WKZ0sVp.png"
        }
        else if ((body.response.rank) == 6) {
          var rank = "Sergeant"
          var rankimg = "https://i.imgur.com/O2WuJAJ.png"
        }
        else if ((body.response.rank) == 7) {
          var rank = "Staff Sergeant"
          var rankimg = "https://i.imgur.com/bTQLm9h.png"
        }
        else if ((body.response.rank) == 8) {
          var rank = "Master Sergeant"
          var rankimg = "https://i.imgur.com/VvivZg0.png"
        }
        else if ((body.response.rank) == 9) {
          var rank = "First Sergeant"
          var rankimg = "https://i.imgur.com/rCkln3K.png"
        }
        else if ((body.response.rank) == 10) {
          var rank = "Sergeant-Major"
          var rankimg = "https://i.imgur.com/uOXqDLo.png"
        }
        else if ((body.response.rank) == 11) {
          var rank = "Warrant Officer 1"
          var rankimg = "https://i.imgur.com/sEzBbLQ.png"
        }
        else if ((body.response.rank) == 12) {
          var rank = "Warrant Officer 2"
          var rankimg = "https://i.imgur.com/EZJslol.png"
        }
        else if ((body.response.rank) == 13) {
          var rank = "Warrant Officer 3"
          var rankimg = "https://i.imgur.com/xMboj6l.png"
        }
        else if ((body.response.rank) == 14) {
          var rank = "Warrant Officer 4"
          var rankimg = "https://i.imgur.com/qLzwet8.png"
        }
        else if ((body.response.rank) == 15) {
          var rank = "Warrant Officer 5"
          var rankimg = "https://i.imgur.com/0hKtwX2.png"
        }
        else if ((body.response.rank) == 16) {
          var rank = "Third Lieutenant"
          var rankimg = "https://i.imgur.com/Miz0wqt.png"
        }
        else if ((body.response.rank) == 17) {
          var rank = "Second Lieutenant"
          var rankimg = "https://i.imgur.com/qkTXhJR.png"
        }
        else if ((body.response.rank) == 18) {
          var rank = "First Lieutenant"
          var rankimg = "https://i.imgur.com/VeA0ugN.png"
        }
        else if ((body.response.rank) == 19) {
          var rank = "Captain"
          var rankimg = "https://i.imgur.com/INKmQMy.png"
        }
        else if ((body.response.rank) == 20) {
          var rank = "Major"
          var rankimg = "https://i.imgur.com/hJL5fqH.png"
        }
        else if ((body.response.rank) == 21) {
          var rank = "Lieutenant Colonel"
          var rankimg = "https://i.imgur.com/QpggknT.png"
        }
        else if ((body.response.rank) == 22) {
          var rank = "Colonel"
          var rankimg = "https://i.imgur.com/9dg1YYq.png"
        }
        else if ((body.response.rank) == 23) {
          var rank = "Brigadier"
          var rankimg = "https://i.imgur.com/Af6FJjE.png"
        }
        else if ((body.response.rank) == 24) {
          var rank = "Major General"
          var rankimg = "https://i.imgur.com/SYIelDs.png"
        }
        else if ((body.response.rank) == 25) {
          var rank = "Lieutenant General"
          var rankimg = "https://i.imgur.com/J7ob7co.png"
        }
        else if ((body.response.rank) == 26) {
          var rank = "General"
          var rankimg = "https://i.imgur.com/laq0luJ.png"
        }
        else if ((body.response.rank) == 27) {
          var rank = "Marshal"
          var rankimg = "https://i.imgur.com/4QzfKbh.png"
        }
        else if ((body.response.rank) == 28) {
          var rank = "Field Marshal"
          var rankimg = "https://i.imgur.com/LVcFtIW.png"
        }
        else if ((body.response.rank) == 29) {
          var rank = "Commander"
          var rankimg = "https://i.imgur.com/YLKv7Qy.png"
        }
        else if ((body.response.rank) == 30) {
          var rank = "Generalissimo"
          var rankimg = "https://i.imgur.com/i8lKuZh.png"
        }
        else if ((body.response.rank) > 31) {
          var rankimg = "https://i.imgur.com/qK6onnG.png"
          var numrank = (body.response.rank) - 30
          var rank = "Legend " + (numrank)
        }
        else if ((body.response.rank) == 31) {
          var rank = "Legend"
          var rankimg = "https://imgur.com/qK6onnG.png"
        }
        var premium = 'Yes'
        let aEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For" + (body.response.name))
          .setColor('#FFFF00')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("Profile:", `**Nickname:** ${name} \n \n__**Rank:**__ ${rank}  \n__**Active Premium:**__ ${premium} \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: ${crypos} \nValue: ${cryval} \n \n__**GoldBox Ratings:**__ \nPosition: ${gpos} \nValue: ${gval} \n \n__**Experience Ratings:**__ \nPosition: ${expos} \nValue: ${exval} \n \n__**Efficiency Ratings:**__ \nPosition: ${efpos} \nValue: ${efval}`)

        message.channel.send(aEmbed);
      }


      if ((body.response.hasPremium) == false) {
        if ((body.response.rank) == 1) {
          var rank = 'Recruit'
          var rankimg = 'https://i.imgur.com/ZcBNexc.png'
        }
        else if ((body.response.rank) == 2) {
          var rank = 'Private'
          var rankimg = 'https://i.imgur.com/Jaar0MF.png'
        }
        else if ((body.response.rank) == 3) {
          var rank = "Gefreiter"
          var rankimg = "https://i.imgur.com/j2DfBdW.png"
        }
        else if ((body.response.rank) == 4) {
          var rank = "Corporal"
          var rankimg = "https://i.imgur.com/7Pn4X88.png"
        }
        else if ((body.response.rank) == 5) {
          var rank = "Master Corporal"
          var rankimg = "https://i.imgur.com/WKZ0sVp.png"
        }
        else if ((body.response.rank) == 6) {
          var rank = "Sergeant"
          var rankimg = "https://i.imgur.com/O2WuJAJ.png"
        }
        else if ((body.response.rank) == 7) {
          var rank = "Staff Sergeant"
          var rankimg = "https://i.imgur.com/bTQLm9h.png"
        }
        else if ((body.response.rank) == 8) {
          var rank = "Master Sergeant"
          var rankimg = "https://i.imgur.com/VvivZg0.png"
        }
        else if ((body.response.rank) == 9) {
          var rank = "First Sergeant"
          var rankimg = "https://i.imgur.com/rCkln3K.png"
        }
        else if ((body.response.rank) == 10) {
          var rank = "Sergeant-Major"
          var rankimg = "https://i.imgur.com/xCKvB2G.png"
        }
        else if ((body.response.rank) == 11) {
          var rank = "Warrant Officer 1"
          var rankimg = "https://i.imgur.com/TJKJ4eB.png"
        }
        else if ((body.response.rank) == 12) {
          var rank = "Warrant Officer 2"
          var rankimg = "https://i.imgur.com/Q8U5QIz.png"
        }
        else if ((body.response.rank) == 13) {
          var rank = "Warrant Officer 3"
          var rankimg = "https://i.imgur.com/Ygi65T7.png"
        }
        else if ((body.response.rank) == 14) {
          var rank = "Warrant Officer 4"
          var rankimg = "https://i.imgur.com/rx0zDOR.png"
        }
        else if ((body.response.rank) == 15) {
          var rank = "Warrant Officer 5"
          var rankimg = "https://i.imgur.com/jDmMo5j.png"
        }
        else if ((body.response.rank) == 16) {
          var rank = "Third Lieutenant"
          var rankimg = "https://i.imgur.com/LLvlTZY.png"
        }
        else if ((body.response.rank) == 17) {
          var rank = "Second Lieutenant"
          var rankimg = "https://i.imgur.com/1Oor2V6.png"
        }
        else if ((body.response.rank) == 18) {
          var rank = "First Lieutenant"
          var rankimg = "https://i.imgur.com/03s6YiZ.png"
        }
        else if ((body.response.rank) == 19) {
          var rank = "Captain"
          var rankimg = "https://i.imgur.com/kf8Uo7U.png"
        }
        else if ((body.response.rank) == 20) {
          var rank = "Major"
          var rankimg = "https://i.imgur.com/Zl9q3rP.png"
        }
        else if ((body.response.rank) == 21) {
          var rank = "Lieutenant Colonel"
          var rankimg = "https://i.imgur.com/bmTEps1.png"
        }
        else if ((body.response.rank) == 22) {
          var rank = "Colonel"
          var rankimg = "https://i.imgur.com/Ac9S6w7.png"
        }
        else if ((body.response.rank) == 23) {
          var rank = "Brigadier"
          var rankimg = "https://i.imgur.com/vBo95NA.png"
        }
        else if ((body.response.rank) == 24) {
          var rank = "Major General"
          var rankimg = "https://i.imgur.com/YOuPegl.png"
        }
        else if ((body.response.rank) == 25) {
          var rank = "Lieutenant General"
          var rankimg = "https://i.imgur.com/dYh43EF.png"
        }
        else if ((body.response.rank) == 26) {
          var rank = "General"
          var rankimg = "https://i.imgur.com/59NrDOX.png"
        }
        else if ((body.response.rank) == 27) {
          var rank = "Marshal"
          var rankimg = "https://i.imgur.com/S4smUqx.png"
        }
        else if ((body.response.rank) == 28) {
          var rank = "Field Marshal"
          var rankimg = "https://i.imgur.com/DRmWUfj.png"
        }
        else if ((body.response.rank) == 29) {
          var rank = "Commander"
          var rankimg = "https://i.imgur.com/lZu9Rqt.png"
        }
        else if ((body.response.rank) == 30) {
          var rank = "Generalissimo"
          var rankimg = "https://i.imgur.com/Fggz9xh.png"
        }
        else if ((body.response.rank) > 31) {
          var rankimg = "https://i.imgur.com/NahcZQ9.png"
          var numrank = (body.response.rank) - 30
          var rank = "Legend " + (numrank)
        }
        else if ((body.response.rank) == 31) {
          var rank = "Legend"
          var rankimg = "https://i.imgur.com/NahcZQ9.png"
        }
        var premium = 'No'
        let sEmbed = new Discord.RichEmbed()
          .setTitle("Weekly Ratings For" + (body.response.name))
          .setColor('#8F00FF')
          .setThumbnail(rankimg)
          .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
          .addField("Profile:", `**Nickname:** ${name} \n \n__**Rank:**__ ${rank}  \n__**Active Premium:**__ ${premium} \n \n__**Weekly Leaderboard Ratings:**__ \n \n__**Crystal Ratings:**__ \nPosition: ${crypos} \nValue: ${cryval} \n \n__**GoldBox Ratings:**__ \nPosition: ${gpos} \nValue: ${gval} \n \n__**Experience Ratings:**__ \nPosition: ${expos} \nValue: ${exval} \n \n__**Efficiency Ratings:**__ \nPosition: ${efpos} \nValue: ${efval}`)
        message.channel.send(sEmbed);
      }

    } catch (err) {
      if (err) {

        message.channel.send('Player Not Found!');
      }



    }
  })
};
