const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const snekfetch = require('snekfetch')
const prefix = '-'
const owner = '321673115891531787'
const myserver = '323206382147076096'
//const db = require('quick.db')
var cmdCount = 0


bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds. `);

    bot.user.setStatus('Online')

    bot.user.setActivity(`-help | Serving ${bot.users.size} users | ${bot.guilds.size} servers`);
    totalGuilds = { 'server_count': bot.guilds.size }
snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
  .set('Authorization', process.env.API_TOKEN)
  .send(totalGuilds)
  .then(console.log('Updated dbots.org status.'))
.catch(e => console.warn('dbots.org down spam @oliy'));

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

   
//if (message.guild.id == '478130826383589386'){
    //if (!message.content.startWith("-ratings")) || (!message.content.startWith('-weekly')) || (!message.content.startWith('-help')) || (!message.content.startWith('-open'))
   //  return message.channel.send('**|:x:| You are not allowed to use non tanki related commands! \n|:x:| nвам не разрешено использовать команды, не связанные с танками!**')
//}
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
      let commandFile = require(`./commands/${command}.js`);
      cmdCount += 1
    
    if (message.author.id == '198876820727267330')
        return message.channel.send(`**:x: ${message.author} You are blacklisted you may not use commands from this bot!**`)      
       
    if (message.author.id == '447658649758990349')
        return message.channel.send(`**:x: ${message.author} You are blacklisted you may not use commands from this bot!**`)   
     
    if (message.author.id == '376283876487593987')
        return message.channel.send(`**:x: ${message.author} You are blacklisted you may not use commands from this bot!**`)     
    
    if (message.author.id == '326366976853409803')
        return message.channel.send(`**:x: ${message.author} You are blacklisted you may not use commands from this bot!**`)     
        
    if (message.author.id == '380426456955617283')
        return message.channel.send(`**:x: ${message.author} You are blacklisted you may not use commands from this bot!**`)     
    commandFile.run(bot, message, args);
      
    
    } catch (err) {
      console.log(err.message);
    } finally {
        console.log(`${message.author.username}#${message.author.discriminator} ran the command: ${command} in ${message.guild.name}`)//.guild.channel.get('323206382147076096').channels.get('450360093012393995').send(`**User:** ${message.author.username} \n **Ran the command:** ${command}`
             let servercommands = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Messages:**__")
            .setColor('#ADD8E6')
            .addField("From:", `${message.guild.name}`)
            .addField("Sever ID:", `(${message.guild.id})`)
            .addField("Channel ID", `(${message.channel.id})`)
            .addField("User:", `${message.author.username}#${message.author.discriminator}`)
            .addField("Command:", `-${command}`);
            bot.guilds.get('323206382147076096').channels.get('481110670373289984').send(servercommands); 
    
    
    }
    if(message.content === prefix + 'cmdcount') {
    message.channel.send(`${cmdCount} commands have been used today`)
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
                .addField("Tanki Online Commands:", `ratings, weekly, open container, supplies`)
                .addField("Танки онлайн:", `рейтинги, открыть контейнер, припасы`)
                .addField("Fortnite Commands: (Collab w/Nelson)", `dropzones, randomdrop, lootfloor, randomskin`, false)
                .addField("Server Commands:", `servercommand help, suggest, report, question`, false)
                .addField("Moderation Commands:", `moderation help, ban, kick, mute, unmute, purge, warn`, true)

            message.channel.send({embed});

        };
});       

bot.on("message", async message => {
if (message.channel.type == 'dm') return;
        
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
            bot.guilds.get('323206382147076096').channels.get('481087902554652672').send(domainmsg);
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
            .addField("Channel ID", `(${message.channel.id})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
            bot.guilds.get('323206382147076096').channels.get('481087902554652672').send(domainmsg);
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
            .addField("Channel ID", `(${message.channel.id})`)
            .addField("User:", `${usernames}`)
            .addField("Message:", `${messageThe}`);
            bot.guilds.get('323206382147076096').channels.get('481087839187107841').send(S4Emsg);    

        }
 
      
        
};      
}}})

bot.on("guildCreate", guild => {
    
    totalGuilds = { 'server_count': bot.guilds.size }
snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
  .set('Authorization', process.env.API_TOKEN)
  .send(totalGuilds)
  .then(console.log('Updated dbots.org status.'))
.catch(e => console.warn('dbots.org down spam @oliy'));
 
    const embed= new Discord.RichEmbed()
     .setTitle("__**ServerAdded!**__")
     .setColor("#DCFF67")
     .addField("Server Name", `${guild.name}`)
     .addField("Owner" , `${guild.owner}`)
     .addField("Amount of Members", `${guild.memberCount}`)
     .addField("Server ID", `${guild.id}`)
     .addField("Owner ID", `${guild.ownerID}`)
     .addField("Owner Name", `${guild.owner.user.tag}`);

      bot.guilds.get('323206382147076096').channels.get('477591026203099147').send(embed);

      console.log(`New server joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`-help | Serving ${bot.users.size} users | ${bot.guilds.size} servers`)
});


bot.on("guildDelete", guild => {
 
    totalGuilds = { 'server_count': bot.guilds.size }
snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
  .set('Authorization', process.env.API_TOKEN)
  .send(totalGuilds)
  .then(console.log('Updated dbots.org status.'))
.catch(e => console.warn('dbots.org down spam @oliy'));
 
    const embed = new Discord.RichEmbed()
      .setTitle("__**ServerRemoved!**__")
      .setColor("#FF5C00")
      .addField("Server Name", `${guild.name}`)
      .addField("Owner", `${guild.owner}`)
      .addField("Amount of Members", `${guild.memberCount}`)
      .addField("Server ID", `${guild.id}`)
      .addField("Owner ID", `${guild.ownerID}`)
      .addField("Owner Name", `${guild.owner.user.tag}`);

      bot.guilds.get('323206382147076096').channels.get('477591026203099147').send(embed);

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

const swearWords = ["Fuck", "Shit", "Bitch", "Faggot", "Dick", "Dickhead", "Cock", "Cocksucker", "Cunt", "Nigger", "Kys", "Gfys", "Knobhead","fuck", "shit", "bitch", "faggot", "dick", "dickhead", "cock", "cocksucker", "cunt", "nigger", "kys", "gfys", "knobhead", "pussy", "Pussy", "Pussies", "pussies", "dik", "Dik"];
if (message.author.id === owner) return;
    if  (swearWords.some(word => message.content.includes(word)) ) {
        message.delete().catch(err => console.log(err));
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
            member.guild.channels.get("477585260457230336").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#477584677339660308> and stay out of trouble!`);
            member.guild.channels.get("477585601105887242").send(`<a:PARTY:463006559446892555> Hello ${member.user} welcome to Ahsan's Server to become a member please go to <#483266115783622668> and react with <a:animatedtick:482541833805627412> to obtain the role \`MEMBERS\` and have full access to the rest of the server! \nThanks for your co-operation`)
            member.send(`Welcome to Ahsan's Server to become a member please go to <#483266115783622668> and react with <a:animatedtick:482541833805627412> to obtain the role and have full access to the rest of the server! \nThanks for your co-operation`)
         
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
        //manos' server
        else if (member.guild.id == '446365173586853889') {
            member.guild.channels.get("446365173586853891").send(`<a:PARTY:463006559446892555> **Welcome to ${member.guild.name} ${member.user} You are the ${last} Member! :tada:** \nPlease read the <#455129298345525248> and stay out of trouble!`);
      const role = member.guild.roles.find("name", "People")
   
        member.addRole(role)
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
            member.guild.channels.get("477585260457230336").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);

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
        //wassils server
        else if (member.guild.id == '465702266104446976') {
            member.guild.channels.get("465702420635320320").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
            let embed = new Discord.RichEmbed()
            .setDescription(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} you have just left ${member.guild.name} please join the following server to show your support** <a:CRY:437630971693498368> **:** \n[Click here to join the support server!](https://discord.gg/D4UqdWh) \n \n\n **Also add me to your server for cool  new perks!** \n[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591) `)
        member.send(embed)
        }
        //mattys other server
        else if (member.guild.id == '446365173586853889') {
            member.guild.channels.get("446365173586853891").send(`<a:WAVE:437630980480827403> **${member.user.username}#${member.user.discriminator} has just left ${member.guild.name} <a:CRY:437630971693498368> the server now has ${member.guild.memberCount} Members!** \nI guess ${member.user.username}#${member.user.discriminator} didnt want to follow the rules!`);
  
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

const yourID = "321673115891531787"
const setupCMD = "-reactionmembers"
let initialMessage = `**To accept these ToS, become a member and have access to all channels you must react with the emoji!**`;
const roles = ["MEMBERS"];
const reactions = ["a:animatedtick:482541833805627412"];
const a = '`'


//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});


let setupCMD2 = prefix + "rankrole"
let initialMessage2 = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
let roles2 = ["Recruit", "Private", "Gefreiter", "Corporal", "Master Corporal", "Sergeant", "Staff Sergeant", "Master Sergeant", "First Sergeant", "Sergeant Major", "Warrent Officer 1", "Warrent Officer 2", "Warrent Officer 3", "Warrent Officer 4", "Warrent Officer 5", "Third Lieutenant", "Second Lieutenant", "First Lieutenant", "Major", "Lieutenant Colonel", "Colonel", "Brigadier", "Major General", "Lieutenant General", "General", "Marshal", "Fieldmarshal", "Commander", "Generalissimo", "Legend"];
let reactions2 = [":Recruit:483627846590529556", ":Private:483627836666806272", ":Gefreiter:483627740713451538", ":Corporal:483627704130863135", ":MasterCorporal:483627820136923136", ":Sergeant:483627871336923147", ":StaffSergeant:483627880329379850", ":MasterSergeant:483627827514572800", ":FirstSergeant:483627731574325272", ":SergeantMajor:483627862960898048", ":WarrantOfficer1:483627896959664137", ":WarrantOfficer2:483627905495203840", ":WarrantOfficer3:483627912550154251", ":WarrantOfficer4:483627920724721679", ":WarrantOfficer5:483627936017022998", ":ThirdLieutenant:483627888692690955", ":SecondLieutenant:483627854853177361", ":FirstLieutenant:483627722073964554", ":Major:483627800310317066", ":LieutenantColonel:483627773370564609", ":Colonel:483627683943809025", ":Brigadier:483627659159666698", ":MajorGeneral:483627790483324942", ":LieutenantGeneral:483627781159256067", ":General:483627748514856960", ":Marshal:483627811609772032", ":Fieldmarshal:483627713282834473", ":Commander:483627694488158208", ":Generalissimo:483627756618252310", ":Legend:483627765304786946"];
//If there isn't a reaction for every role, scold the user!
if (roles2.length !== reactions2.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage2);
    for (let role of roles2) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    let yourID = owner
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD2){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions2[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    
                    memberObj.send(`In ${memberObj.guild.name} You were given from the role \`${role}\``)
                    memberObj.addRole(roleObj)
                
                } else {
                    memberObj.send(`In ${memberObj.guild.name} You were removed from the role \`${role}\``)
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});


bot.on("message", async message => {
    if (message.channel.type == 'dm') return;
    
    if (message.guild.id !== '446365173586853889') return;
    if (message.channel.id == "455122876677357569") return;
    if(message.author.bot) return;

const swearWords = ["http", "https", "Http", "Https", "HTTP", "HTTPS", "HTtp", "HTtp", "HTTps", "HTTPs", "hTtp", "hTtps", "hTTp", "hTTps", "hTTP", "hTPPs", "hTTPS", "HtTp", "HtTps", "HtTP", "HtTPS"];
if (message.author.id === `446364321681768459`) return;
if (message.author.id === owner) return;
    if  (swearWords.some(word => message.content.includes(word)) ) {
        message.delete().catch(err => console.log(err));
        message.channel.send(`${message.author} Please do not send any links!`);
}})

bot.on("message", async message => {
    if (message.channel.type == 'dm') return;
    
    if (message.guild.id !== '323206382147076096') return;
    if (message.channel.id == "477585294766374912") return;
    if (message.channel.id == "479205588031635476") return;
    if(message.author.bot) return;

const swearWords = ["http", "https", "Http", "Https", "HTTP", "HTTPS", "HTtp", "HTtp", "HTTps", "HTTPs", "hTtp", "hTtps", "hTTp", "hTTps", "hTTP", "hTPPs", "hTTPS", "HtTp", "HtTps", "HtTP", "HtTPS"];
if (message.author.id === `446364321681768459`) return;
if (message.author.id === owner) return;
    if  (swearWords.some(word => message.content.includes(word)) ) {
        message.delete().catch(err => console.log(err));
        message.channel.send(`${message.author} Please do not send any links!`);
}})


