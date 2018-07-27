const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const myserver = '323206382147076096'
//const db = require('quick.db')

bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds. `);

    bot.user.setStatus('Online')

    bot.user.setActivity(`-help | Serving ${bot.users.size} users | ${bot.guilds.size} servers`);

});

bot.on("message", async message => {
if(message.author.bot) return;
if (message.channel.type == 'dm') return;
    


    if (message.content.includes('t!rep <@321673115891531787>')) {   
        message.channel.send(`Thank you ${message.author} for repping Ahsan!`)
    
    }

    if (message.content.includes('t!daily <@321673115891531787>')) {
        message.channel.send(`Thank you ${message.author} for giving ur daily to Ahsan!`)
    
    }
    
    if (message.content === prefix + 'show semyon') {
        message.channel.send(`Here you are ${message.author} the precious Semyon Kirov! \nhttps://media.discordapp.net/attachments/417037461798125589/437241531460485120/maxresdefault.png?width=961&height=541`)
    }
    
if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
      let commandFile = require(`./commands/${command}.js`);
    
    
    if (message.author.id == '198876820727267330')
        return message.channel.send("**|:exclamation:|  You dont have permission to use this command as you have been blacklisted!**")      
       
    if (message.author.id == '447658649758990349')
        return message.channel.send("**|:exclamation:|  You dont have permission to use this command as you have been blacklisted!**")      
     
    if (message.author.id == '376283876487593987')
        return message.channel.send("**|:exclamation:|  You dont have permission to use this command as you have been blacklisted!**")      
          
    commandFile.run(bot, message, args);
      
    
    } catch (err) {
      console.log(err.message);
    } finally {
        console.log(`${message.author.username}#${message.author.discriminator} ran the command: ${command} in ${message.guild.name}`)//.guild.channel.get('323206382147076096').channels.get('450360093012393995').send(`**User:** ${message.author.username} \n **Ran the command:** ${command}`
    }

    if(message.content === prefix + 'ping') {
        const loading = bot.emojis.find("name", "BUFFER1")
        const Ahsan = '`'
        const m = await
        message.channel.send(`${loading} Ping? ${loading}`);
    setTimeout(function (){m.edit(`Pong! Latency is ${Ahsan}${m.createdTimestamp - message.createdTimestamp}ms${Ahsan}. Discord Latency is ${Ahsan}${Math.round(bot.ping)}ms${Ahsan}`);
    }, 500);
  }
    const version = 'Version 1.0.9 by Ahsan'
    const Ahsan = '`'
    const A1 = '**,**'
    if (message.author.bot) return;
        if (message.content === prefix + 'help') {
            const embed = new Discord.RichEmbed()
                .setTitle("Help is now here!")
                .setAuthor("Space Bot 2.0", bot.user.avatarURL)
                .setColor('#8F00FF')
                .setFooter(`${version}`, bot.user.avatarURL)
                .setThumbnail("http://www.pfpenergy.co.uk/media/1184/help-and-support.png")
                .setTimestamp()
                .setURL("https://discord.gg/D4UqdWh")
                .addField("prefix:", `-`)
                .addField("Weather Commands:", `weatherC, weatherF`)
                .addField("Fun Commands:", `afk, Blob, DDoS, depression, lit, lovecalc, lovecalculator, roast, show semyon`, false)
                .addField("Miscellaneous Commands:", `avatar, creator, facepalm, invite, say, servers, `, false)
                .addField("Tanki Online Commands:", `ratings, weekly, open container`)
                .addField("Fortnite Commands: (Collab w/Nelson)", `dropzones, randomdrop, lootfloor, randomskin`, false)
                .addField("Server Commands:", `servercommand help, suggest, report, question`, false)
                .addField("Moderation Commands:", `moderation help, ban, kick, mute, unmute, purge, warn`, true)

            message.channel.send({embed});

        };
});       

bot.on("message", async message => {
        
    if(message.content.toLocaleLowerCase().includes("")) {
         
           const usernames = message.author.username + "#" + message.author.discriminator;
           if (!usernames) return;
           const messageThe = message.content;
           if (!messageThe) return;
           const serverFrom = message.guild.name;
           if (!serverFrom) return;
           const serverFromId = message.guild.id;
           if (!serverFromId) return;
           if (message.author.id == '328231928798904342') {
            let domainmsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Messages:**__")
            .setColor("#00FFB9")
            .addField("From:", `${serverFrom}`)
            .addField("Sever ID:", `(${serverFromId})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
            bot.guilds.get('323206382147076096').channels.get('450360093012393995').send(domainmsg);
           }
           else
           {

           if (message.guild.id == "264445053596991498") return;
           if (message.guild.id == "323206382147076096") return;
           if (message.guild.id == "334666712505122817") {


            let domainmsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Messages:**__")
            .setColor("#8F00FF")
            .addField("From:", `${serverFrom}`)
            .addField("Sever ID:", `(${serverFromId})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
            bot.guilds.get('323206382147076096').channels.get('450360093012393995').send(domainmsg);
        }
        else
        {
        if (message.guild.id == "398568119603429378") {
            
            
            let S4Emsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Messages:**__")
            .setColor('#00idk3')
            .addField("From:", `${serverFrom}`)
            .addField("Sever ID:", `(${serverFromId})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
            bot.guilds.get('323206382147076096').channels.get('468160328354496542').send(S4Emsg);    

        }
        else
        {
        let serversmsg = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Messages:**__")
            .setColor("#8F00FF")
            .addField("From:", `${serverFrom}`)
            .addField("Sever ID:", `(${serverFromId})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
        bot.guilds.get('323206382147076096').channels.get('450971221027323904').send(serversmsg);

        }}}
      
        
};      
})

bot.on("guildCreate", guild => {
    const embed= new Discord.RichEmbed()
     .setTitle("__**ServerAdded!**__")
     .setColor("#DCFF67")
     .addField("Server Name", `${guild.name}`)
     .addField("Owner" , `${guild.owner}`)
     .addField("Amount of Members", `${guild.memberCount}`)
     .addField("Server ID", `${guild.id}`)
     .addField("Owner ID", `${guild.ownerID}`);

      bot.guilds.get('323206382147076096').channels.get('443483970705948682').send(embed);

      console.log(`New server joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`-help | Serving ${bot.users.size} users | ${bot.guilds.size} servers`)
});


bot.on("guildDelete", guild => {
    const embed = new Discord.RichEmbed()
      .setTitle("__**ServerRemoved!**__")
      .setColor("#FF5C00")
      .addField("Server Name", `${guild.name}`)
      .addField("Owner", `${guild.owner}`)
      .addField("Amount of Members", `${guild.memberCount}`)
      .addField("Server ID", `${guild.id}`)
      .addField("Owner ID", `${guild.ownerID}`);

      bot.guilds.get('323206382147076096').channels.get('443483970705948682').send(embed);

      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`-help | Serving ${bot.users.size} users | ${bot.guilds.size} servers`)

});




//bot.on('message', (message) => {
//const version = 'Version 1.0.4 by Ahsan'
//const Ahsan = '`'
///const A1 = '**,**'
///if (message.author.bot) return;
   // if (message.content === prefix + 'help') {
///        const embed = new Discord.RichEmbed()
            //.setTitle("Help is now here!")
            //.setAuthor("Space Bot", "https://cdn.discordapp.com/avatars/437207592054554643/b1081a2a0d426a1a4fe28c10c732c602.jpg?size=2048")
            //.setColor('#8F00FF')
            //.setFooter(`${version}`, "https://cdn.discordapp.com/avatars/437207592054554643/b1081a2a0d426a1a4fe28c10c732c602.jpg?size=2048")
            //.setThumbnail("http://www.pfpenergy.co.uk/media/1184/help-and-support.png")
            //.setTimestamp()
            //.setURL("https://discord.gg/D4UqdWh")
            //.addField("prefix:", `${Ahsan}-${Ahsan}`)
            //.addField("Weather Commands:", `${Ahsan}weatherC${Ahsan}${A1} ${Ahsan}weatherF${Ahsan}`)
            //.addField("Fun Commands:", `${Ahsan}afk${Ahsan}${A1} ${Ahsan}Blob${Ahsan}${A1} ${Ahsan}DDoS${Ahsan}${A1} ${Ahsan}depression${Ahsan}${A1} ${Ahsan}lit${Ahsan}${A1} ${Ahsan}lovecalc${Ahsan}${A1} ${Ahsan}lovecalcualotr${Ahsan}${A1} ${Ahsan}roast${Ahsan}${A1} ${Ahsan}show semyon${Ahsan}${A1} ${Ahsan}ノಠ益ಠ)ノ彡┻━┻${Ahsan}`, false)
            //.addField("Miscellaneous Commands:", `${Ahsan}avatar${Ahsan}${A1} ${Ahsan}creator${Ahsan}${A1} ${Ahsan}invite${Ahsan}${A1} ${Ahsan}say${Ahsan}${A1} ${Ahsan}servers${Ahsan}${A1} ${Ahsan}wtf${Ahsan}`, false)
            //.addField("Fortnite Commands: (Collab w/Nelson)", `${Ahsan}dropzones${Ahsan}${A1} ${Ahsan}randomdrop${Ahsan}${A1} ${Ahsan}lootfloor${Ahsan}${A1} ${Ahsan}randomskin${Ahsan}`, false)
            //.addField("Server Commands:", `${Ahsan}servercommand help${Ahsan}${A1} ${Ahsan}suggest${Ahsan}${A1} ${Ahsan}report${Ahsan}${A1} ${Ahsan}question${Ahsan}`, false)
            //.addField("Moderation Commands", `${Ahsan}moderation help${Ahsan}${A1} ${Ahsan}ban${Ahsan}${A1} ${Ahsan}kick${Ahsan}${A1} ${Ahsan}mute${Ahsan}${A1} ${Ahsan}unmute${Ahsan}${A1} ${Ahsan}purge${Ahsan}${A1} ${Ahsan}warn${Ahsan}`, true)

        //message.channel.send({embed});

    //};


//});

//bot.on('message', (message) => {
   // const args = message.content.slice(prefix.length).trim().split(/ +/g);
   // const command = args.shift().toLowerCase();

 //   db.updateValue(message.author.id + message.guild.id, 1).then(i => {

       //let message;
       //if(i.value == 5) message = 5;
        //else if(i.value == 10) message = 10;
       // else if(i.value == 15) message = 15;

        //if (!isNaN(message)) {
           // db.updateValue(`userlevel_${message.author.id + message.guild.id}`, 1).then(o =>{
        //      //  message.channel.send(`You have successfully sent ${messages} messages, you have leveled up! You are now level ${o.value}`)
  //          })
  //      }
//    }
//)})

bot.on("message", async message => {
    if (message.channel.type == 'dm') return;
    
    if (message.guild.id !== '323206382147076096')return;

    if(message.author.bot) return;

const swearWords = ["Fuck", "Shit", "Bitch", "Ass", "Asshole", "Faggot", "Dick", "Dickhead", "Cock", "Cocksucker", "Cunt", "Nigger", "Kys", "Gfys", "Knobhead","fuck", "shit", "bitch", "ass", "asshole", "faggot", "dick", "dickhead", "cock", "cocksucker", "cunt", "nigger", "kys", "gfys", "knobhead", "pussy", "Pussy", "Pussies", "pussies", "dik", "Dik"];
if (message.author.id === owner) return;
    if  (swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.channel.send(`${message.author} Please do not use bad words!`);

    }

    

});

bot.on("guildMemberAdd", (member) => {
    console.log(`User: ${member.user.username}#${member.user.discriminator} has joined "${member.guild.name} " :) the server now contains ${member.guild.memberCount} members`);
    const wlc = bot.emojis.find("name", "PARTY");
    var test = (member.guild.memberCount)
    var lastone = test.toString().split('').pop();
    if (lastone == 1) {
        var end = "st"
    } else if (lastone == 2) {
        var end = "nd"
    }
    var last = (test) + (end)
    if (lastone == 3) {
        var end = "rd"
    } else if (lastone == 4) {
        var end = "th"
    }
    var last = (test) + (end)
    if (lastone == 5) {
        var end = "th"
    } else if (lastone == 6) {
        var end = "th"
    }
    var last = (test) + (end)
    if (lastone == 7) {
        var end = "th"
    } else if (lastone == 8) {
        var end = "th"
    }
    var last = (test) + (end)
    if (lastone == 9) {
        var end = "th"
    } else if (lastone == 0) {
        var end = "th"
    }
    var last = (test) + (end)

    //my server
    try {
        if (member.guild.id == '323206382147076096') {
            member.guild.channels.get("323528086207594506").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#323211253709275138> and stay out of trouble!`);

        }
        //leos server
        else if (member.guild.id == '294142702151270402') {
            member.guild.channels.get("294142702151270402").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#297719604468514816> and stay out of trouble!`);
        }
        //bossuls server
        else if (member.guild.id == '352216498867142666') {
            member.guild.channels.get("352216498867142667").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#353645969558208513> and stay out of trouble!`);

        }
        //wassils server
        else if (member.guild.id == '456016111251488769') {
            member.guild.channels.get("465702266104446976").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the Rules and stay out of trouble!`);
        let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** <a:PARTY:463006559446892555> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //mattys other server
        else if (member.guild.id == '468839234275639305') {
            member.guild.channels.get("468839234275639326").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#469265572681613312> and stay out of trouble!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** <a:PARTY:463006559446892555> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //princes server
        else if (member.guild.id == '419567438452097027') {
            member.guild.channels.get("466170834604785664").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#465912999152975874> and stay out of trouble!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** <a:PARTY:463006559446892555> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //liams server
        else if (member.guild.id == '466878941026582528') {
            member.guild.channels.get("466879041723695105").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#465912999152975874> and stay out of trouble!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** <a:PARTY:463006559446892555> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //quicks server
        else if (member.guild.id == '353641481304670222') {
            
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** <a:PARTY:463006559446892555> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //scanners server
        else if (member.guild.id == '418001869781205002') {
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:PARTY:463006559446892555> **Hello ${member.user.username}#${member.user.discriminator} Welcome to ${member.guild.name} please join the following server to show your support** ${wlc} **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        } else {
            return
        }

    } catch (err) {
        if (err) {
            console.log("Channel doesnt exist")
        }
    }

});

bot.on('guildMemberRemove', (member) => {
    console.log(`User: ${member.user.username}#${member.user.discriminator} has left "${member.guild.name} " :( the server now contains ${member.guild.memberCount} members`);
    const cry = bot.emojis.find("name", `CRY`);
    const WAVE = bot.emojis.find("name", `WAVE`);

    //my server
    try {
        if (member.guild.id == '323206382147076096') {
            member.guild.channels.get("323528086207594506").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);

        }
        //leos server
        else if (member.guild.id == '294142702151270402') {
           // member.guild.channels.get("294142702151270402").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
           let embed = new Discord.RichEmbed()
           .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //bossuls server
        else if (member.guild.id == '352216498867142666') {
            member.guild.channels.get("352216498867142667").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
        
        }
        //quicks server
        else if (member.guild.id == '353641481304670222') {
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)   
        }
        //wassils server
        else if (member.guild.id == '465702266104446976') {
            member.guild.channels.get("465702420635320320").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //mattys other server
        else if (member.guild.id == '468839234275639305') {
            member.guild.channels.get("468839234275639326").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //laims server
        else if (member.guild.id == '466878941026582528') {
            member.guild.channels.get("466879041723695105").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //prices server
        else if (member.guild.id == '419567438452097027') {
            member.guild.channels.get("466170834604785664").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        } else {
            return
        }
    } catch (err) {
        if (err) {
            console.log("Channel doesnt exist")
        }
    }

});

bot.login(process.env.BOT_TOKEN2);   




