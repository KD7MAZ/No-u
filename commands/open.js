

const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const myserver = '323206382147076096'
const a = '`'
const talkedRecently = new Set();

exports.run = (client, message, args) => {
 
if (message.content === prefix + 'open'){
    return message.channel.send(`:x: ${message.author} I think you meant ${a}-open container${a}`)   
}
 if (talkedRecently.has(message.author.id)) {
            message.channel.send(`:x: ${message.author} There is a 2 second cool down please wait!`);
    } else {
if (message.content === prefix + 'open container'){      
const crarity = Math.floor(Math.random() * 1000) + 1; 


    
    if ( crarity < 400 && message.author.id !== '321673115891531787') { 
    let rareity = 'Common'   
    let commonpaint = Math.floor(Math.random() * 10) + 1;
    
    if ((commonpaint) < 2 ){
    let commonitem = Math.floor(Math.random() * 10) + 1;
        if ((commonitem) == 1){
         var paintimg = 'https://i.imgur.com/Uu6IWdY.png'
         var paintname = 'Black Paint'}
         else if ((commonitem) == 2){
         var paintimg = 'https://i.imgur.com/bic1Mx7.png'
         var paintname = 'Red Paint'}
         else if ((commonitem) == 3){
         var paintimg = "https://i.imgur.com/B1icnUH.png"
         var paintname = 'Green Paint'}
         else if ((commonitem) == 4){
         var paintimg = 'https://i.imgur.com/UnU5gub.png'
         var paintname = 'White Paint'}
         else if ((commonitem) == 5){
         var paintimg = 'https://i.imgur.com/Xf7Z6zF.png'
         var paintname = 'Orange Paint'}
         else if ((commonitem) == 6){
         var paintimg = 'https://i.imgur.com/tzLiLAM.png'
         var paintname = 'Flora Paint'}
         else if ((commonitem) == 7){
         var paintimg = 'https://i.imgur.com/lTWZpIV.png'
         var paintname = 'Marine Paint'}
         else if ((commonitem) == 8){
         var paintimg = "https://i.imgur.com/n3hJ8ZH.png"
         var paintname = 'Swamp Paint'}
         else if ((commonitem) == 9){
         var paintimg = 'https://i.imgur.com/VTEu0X7.png'
         var paintname = 'Forester Paint'}
         else if ((commonitem) == 10){
         var paintimg = 'https://i.imgur.com/bTAEhiV.png'
         var paintname = 'Metallic Paint'}
    }
    else
    { 
        let betterpaint = Math.floor(Math.random() * 5) + 1;
        if ((betterpaint) == 1){
         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '3,500 Crystals'}
         else if ((betterpaint) == 2){
         var paintimg = 'https://i.imgur.com/HiZGQbe.png'
         var paintname = '125 Double Armour'}
         else if ((betterpaint) == 3){
         var paintimg = "https://i.imgur.com/LJqZM6l.png"
         var paintname = '125 Double Damage'}
         else if ((betterpaint) == 4){
         var paintimg = 'https://i.imgur.com/gPyAlOw.png'
         var paintname = '125 Speed Boost'}
         else if ((betterpaint) == 5){
         var paintimg = 'https://i.imgur.com/Avnn0z0.png'
         var paintname = '125 Mines'}
    }
     
    let common = "<:common:469979315052740608>"
        let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} opened a container`)
         .setColor("#696969")
         .setDescription(`You obtained the item : ${common}${paintname}${common}`)  
         .setImage(paintimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)     
         message.channel.send(embed)
                //light grey #A9A9A9


    
    }
    else
    {
    
    if ( crarity < 550 && message.author.id !== '321673115891531787') { 
    let rareity = 'Uncommon'   
  
        let Uncommonitem = Math.floor(Math.random() * 6) + 1;
        if ((Uncommonitem) == 1){
         var supplyimg = 'https://i.imgur.com/H3j3l1y.png'
         var supplyname = '10,000 Crystals'}
         else if ((Uncommonitem) == 2){
         var supplyimg = 'https://i.imgur.com/aO3ZCzn.png'
         var supplyname = '125 Repair Kits'}
         else if ((Uncommonitem) == 3){
         var supplyimg = "https://i.imgur.com/d0r0tzP.png"
         var supplyname = '50 Batteries'}
         else if ((Uncommonitem) == 4){
         var supplyimg = 'https://i.imgur.com/8738li0.png'
         var supplyname = '100 Supply Pack'}
         else if ((Uncommonitem) == 5){
         var supplyimg = 'https://i.imgur.com/yLAKTav.png'
         var supplyname = '3 Days Premium'}
         else if ((Uncommonitem) == 6){
         var supplyimg = 'https://i.imgur.com/5jtsyZD.png'
         var supplyname = '5 Gold boxes'}
    
        let uncommon = ":uncommon:"
         let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} opened a container`)
            .setColor("#5ae03a")
            .setDescription(`You obtained the item : ${uncommon}${supplyname}${uncommon}`) 
            .setImage(supplyimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)
         message.channel.send(embed)
     
    }
    else
    {
        
    if ( crarity < 850 && message.author.id !== '321673115891531787') { 
    let rareity = 'Rare'   
    const rarepaint = Math.floor(Math.random() * 100 ) + 1;
    if ((rarepaint) < 65 ) {   
        let rareitem = Math.floor(Math.random() * 66) + 1;
        if ((rareitem) == 1){
         var paintimg = 'https://i.imgur.com/yJcKJIM.png'
         var paintname = 'Lava Paint'}
         else if ((rareitem) == 2){
         var paintimg = 'https://i.imgur.com/JGd6ZeJ.png'
         var paintname = 'Lead Paint'}
         else if ((rareitem) == 3){
         var paintimg = "https://i.imgur.com/XchiKvr.png"
         var paintname = 'Alien 2.0 Paint'}
         else if ((rareitem) == 4){
         var paintimg = 'https://i.imgur.com/UzL3YNb.png'
         var paintname = 'Safari Paint'}
         else if ((rareitem) == 5){
         var paintimg = 'https://i.imgur.com/vokPLVg.png'
         var paintname = 'Dragon Paint'}
         else if ((rareitem) == 6){
         var paintimg = 'https://i.imgur.com/80gpeds.png'
         var paintname = 'Magma Paint'}
         else if ((rareitem) == 7){
         var paintimg = "https://i.imgur.com/etlhZOc.png"
         var paintname = 'Mary paint'}
         else if ((rareitem) == 8){
         var paintimg = 'https://i.imgur.com/8F4AIwU.png'
         var paintname = 'Sahara Paint'}
         else if ((rareitem) == 9){
         var paintimg = 'https://i.imgur.com/Vl0KN5R.png'
         var paintname = 'Night paint'}
         else if ((rareitem) == 10){
         var paintimg = 'https://i.imgur.com/2eihFkl.png'
         var paintname = 'In Love Paint'}
         else if ((rareitem) == 11){
         var paintimg = 'https://i.imgur.com/7btgslo.png'
         var paintname = 'Carbon Paint'}
         else if ((rareitem) == 12){
         var paintimg = "https://i.imgur.com/pi9uDgU.png"
         var paintname = 'Confetti Paint'}
         else if ((rareitem) == 13){
         var paintimg = 'https://i.imgur.com/2BYkeaM.png'
         var paintname = 'Alien 1.0 Paint'}
         else if ((rareitem) == 14){
         var paintimg = 'https://i.imgur.com/WWNYEHq.png'
         var paintname = 'Chainmail Paint'}
         else if ((rareitem) == 15){
         var paintimg = 'https://i.imgur.com/Qrb8OJD.png'
         var paintname = 'Dirty Paint'}
         else if ((rareitem) == 16){
         var paintimg = "https://i.imgur.com/4ieFQ2n.png"
         var paintname = 'Jaguar Paint'}
         else if ((rareitem) == 17){
         var paintimg = 'https://i.imgur.com/le65j8j.png'
         var paintname = 'Desert Paint'}
         else if ((rareitem) == 18){
         var paintimg = 'https://i.imgur.com/JADpZCD.png'
         var paintname = 'Guerrilla Paint'}    
         else if ((rareitem) == 19){
         var paintimg = 'https://i.imgur.com/TqHwYqE.png'
         var paintname = 'Swash Paint'}
         else if ((rareitem) == 20){
         var paintimg = 'https://i.imgur.com/6LR05QB.png'
         var paintname = 'Harlequin Paint'}
         else if ((rareitem) == 21){
         var paintimg = "https://i.imgur.com/0pMnCb4.png"
         var paintname = 'Pixel Paint'}
         else if ((rareitem) == 22){
         var paintimg = 'https://i.imgur.com/5Y9P7Z9.png'
         var paintname = 'Corrosion Paint'}
         else if ((rareitem) == 23){
         var paintimg = 'https://i.imgur.com/P3Q6sk1.png'
         var paintname = 'Tundra Paint'}
         else if ((rareitem) == 24){
         var paintimg = 'https://i.imgur.com/XBejee5.png'
         var paintname = 'Vortex Paint'}
         else if ((rareitem) == 25){
         var paintimg = "https://i.imgur.com/qIqOt7g.png"
         var paintname = 'Pixel Heart Paint'}
         else if ((rareitem) == 26){
         var paintimg = 'https://i.imgur.com/YbND0oP.png'
         var paintname = 'Roger Paint'}
         else if ((rareitem) == 27){
         var paintimg = 'https://i.imgur.com/hun7Hs4.png'
         var paintname = 'Fracture Paint'}    
         else if ((rareitem) == 28){
         var paintimg = 'https://i.imgur.com/za8gY6V.png'
         var paintname = 'Cedar Paint'}    
         else if ((rareitem) == 29){
         var paintimg = 'https://i.imgur.com/x8KgVmd.png'
         var paintname = 'Python Paint'}
         else if ((rareitem) == 20){
         var paintimg = 'https://i.imgur.com/IVaOz5u.png'
         var paintname = 'Sakura Paint'}
         else if ((rareitem) == 31){
         var paintimg = 'https://i.imgur.com/680JitP.png'
         var paintname = 'Grasslands Paint'}
         else if ((rareitem) == 31){
         var paintimg = "https://i.imgur.com/yqXD0ZF.png"
         var paintname = 'Soft Flowers paint'}
         else if ((rareitem) == 32){
         var paintimg = 'https://i.imgur.com/W611QqD.png'
         var paintname = 'Electra Paint'}
         else if ((rareitem) == 33){
         var paintimg = 'https://i.imgur.com/ZMrsVTt.png'
         var paintname = 'Moss paint'}
         else if ((rareitem) == 34){
         var paintimg = 'https://i.imgur.com/nRipiA9.png'
         var paintname = 'First Love Paint'}
         else if ((rareitem) == 35){
         var paintimg = "https://i.imgur.com/Fgxd6gs.png"
         var paintname = 'Sandstone paint'}
         else if ((rareitem) == 36){
         var paintimg = 'https://i.imgur.com/6bHB1F2.png'
         var paintname = 'Spark Paint'}
         else if ((rareitem) == 37){
         var paintimg = 'https://i.imgur.com/04IAZ7n.png'
         var paintname = 'Jeans paint'}
         else if ((rareitem) == 38){
         var paintimg = 'https://i.imgur.com/TQX4ePk.png'
         var paintname = 'Digital Paint'}
         else if ((rareitem) == 39){
         var paintimg = 'https://i.imgur.com/DTiOYfs.png'
         var paintname = 'Rustle Paint'}
         else if ((rareitem) == 40){
         var paintimg = "https://i.imgur.com/sG7HBJS.png"
         var paintname = 'Blacksmith Paint'}
         else if ((rareitem) == 41){
         var paintimg = 'https://i.imgur.com/y1oy0EJ.png'
         var paintname = 'Hohloma Paint'}
         else if ((rareitem) == 42){
         var paintimg = 'https://i.imgur.com/UedBFsb.png'
         var paintname = 'Loam Paint'}
         else if ((rareitem) == 43){
         var paintimg = 'https://i.imgur.com/uLQ6Lkv.png'
         var paintname = 'Rhino Paint'}
         else if ((rareitem) == 44){
         var paintimg = "https://i.imgur.com/DfNAcFt.png"
         var paintname = 'Winter Paint'}
         else if ((rareitem) == 45){
         var paintimg = 'https://i.imgur.com/655k2TY.png'
         var paintname = 'Urban Paint'}
         else if ((rareitem) == 46){
         var paintimg = 'https://i.imgur.com/KEnNc7l.png'
         var paintname = 'Sweater Paint'}    
         else if ((rareitem) == 47){
         var paintimg = 'https://i.imgur.com/Uc2xStT.png'
         var paintname = 'Atom Paint'}
         else if ((rareitem) == 48){
         var paintimg = 'https://i.imgur.com/qvAsqjh.png'
         var paintname = 'Savanna Paint'}
         else if ((rareitem) == 49){
         var paintimg = "https://i.imgur.com/Z6anuHd.png"
         var paintname = 'Cherry Paint'}
         else if ((rareitem) == 50){
         var paintimg = 'https://i.imgur.com/B7i6beQ.png'
         var paintname = 'Emerald Paint'}
         else if ((rareitem) == 51){
         var paintimg = 'https://i.imgur.com/QtINXHI.png'
         var paintname = 'Ibris Paint'}
         else if ((rareitem) == 52){
         var paintimg = 'https://i.imgur.com/pns89xU.png'
         var paintname = 'Disco Paint'}
         else if ((rareitem) == 53){
         var paintimg = "https://i.imgur.com/1YO1rpg.png"
         var paintname = 'Mars Paint'}
         else if ((rareitem) == 54){
         var paintimg = 'https://i.imgur.com/08PvYck.png'
         var paintname = 'Hive Paint'}
         else if ((rareitem) == 55){
         var paintimg = 'https://i.imgur.com/ZBYZ8bQ.png'
         var paintname = 'Inferno Paint'}    
         else if ((rareitem) == 56){
         var paintimg = 'https://i.imgur.com/BIrUhHg.png'
         var paintname = 'Jade Paint'}
         else if ((rareitem) == 57){
         var paintimg = 'https://i.imgur.com/G4LTzGF.png'
         var paintname = 'Tiger Paint'}
         else if ((rareitem) == 58){
         var paintimg = "https://i.imgur.com/7D9zmjy.png"
         var paintname = 'Kaleidoscope Paint'}
         else if ((rareitem) == 59){
         var paintimg = 'https://i.imgur.com/Uk1Epds.png'
         var paintname = 'Taiga Paint'}
         else if ((rareitem) == 60){
         var paintimg = 'https://i.imgur.com/BA79PyV.png'
         var paintname = 'Red Urban Paint'}
         else if ((rareitem) == 61){
         var paintimg = 'https://i.imgur.com/lVA00HV.png'
         var paintname = 'Nano Paint'}
         else if ((rareitem) == 62){
         var paintimg = "https://i.imgur.com/VFTr1Vm.png"
         var paintname = 'Prodigi Paint'}
         else if ((rareitem) == 63){
         var paintimg = 'https://i.imgur.com/isv4C0u.png'
         var paintname = 'Rock Paint'}
         else if ((rareitem) == 64){
         var paintimg = 'https://i.imgur.com/pKcu3TS.png'
         var paintname = 'Raccoon Paint'}    
         else if ((rareitem) == 65){
         var paintimg = 'https://i.imgur.com/KzNkIXj.png'
         var paintname = 'Needle Paint'}
         else if ((rareitem) == 66){
         var paintimg = 'https://i.imgur.com/ggGlJGu.png'
         var paintname = 'Picasso Paint'}
    
    }
    else
    { 
        let betterpaint = Math.floor(Math.random() * 5) + 1;
        if ((betterpaint) == 1){
         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '25,000 Crystals'}
         else if ((betterpaint) == 2){
         var paintimg = 'https://i.imgur.com/d0r0tzP.png'
         var paintname = '150 Batteries'}
         else if ((betterpaint) == 3){
         var paintimg = "https://i.imgur.com/8738li0.png"
         var paintname = '250 Supply Pack'}
         else if ((betterpaint) == 4){
         var paintimg = 'https://i.imgur.com/h9bTtzC.png'
         var paintname = '10 Days Premium'}
         else if ((betterpaint) == 5){
         var paintimg = 'https://i.imgur.com/x8NC4zi.png'
         var paintname = '10 gold boxes'}
    
    }
    
    let rare = "<:rare:469975943616659478>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} opened a container`)
         .setColor("#2de5ff")
         .setDescription(`You obtained the item : ${rare}${paintname}${rare}`)  
         .setImage(paintimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)
         message.channel.send(embed)

   
    }
    else
    {
    
    if ( crarity < 950 && message.author.id !== '321673115891531787') { 
    let rareity = 'Epic'   
    const epicpaint = Math.floor(Math.random() * 100) + 1;
            
    if ((epicpaint) < 85 ) {   
        let epicitem = Math.floor(Math.random() * 67) + 1;
         if ((epicitem) == 1){
         var paintimg = 'https://i.imgur.com/x2nlYUX.png'
         var paintname = 'Space Paint'}
         else if ((epicitem) == 2){
         var paintimg = 'https://i.imgur.com/wW7ycng.png'
         var paintname = 'Frost Paint'}
         else if ((epicitem) == 3){
         var paintimg = "https://i.imgur.com/TMTTgam.png"
         var paintname = 'Graffiti paint'}
         else if ((epicitem) == 4){
         var paintimg = 'https://i.imgur.com/E0Z6QA5.png'
         var paintname = 'Zeus Paint'}
         else if ((epicitem) == 5){
         var paintimg = 'https://i.imgur.com/NoaIyLi.png'
         var paintname = 'Clay paint'}
         else if ((epicitem) == 6){
         var paintimg = 'https://i.imgur.com/IgIJGLP.png'
         var paintname = 'Lumberjack Paint'}
         else if ((epicitem) == 7){
         var paintimg = "https://i.imgur.com/X9bDdkA.png"
         var paintname = 'Africa paint'}
         else if ((epicitem) == 8){
         var paintimg = 'https://i.imgur.com/tY668p6.png'
         var paintname = 'Golden Star Paint'}
         else if ((epicitem) == 9){
         var paintimg = 'https://i.imgur.com/DHYlg2j.png'
         var paintname = 'Arachnid Paint'}
         else if ((epicitem) == 10){
         var paintimg = 'https://i.imgur.com/OwnToQT.png'
         var paintname = 'Liquid Metal Paint'}
         else if ((epicitem) == 11){
         var paintimg = "https://i.imgur.com/HL9nYPM.png"
         var paintname = 'Drought Paint'}
         else if ((epicitem) == 12){
         var paintimg = 'https://i.imgur.com/XB2ofuq.png'
         var paintname = 'Strawberry Paint'}
         else if ((epicitem) == 13){
         var paintimg = 'https://i.imgur.com/aozjomN.png'
         var paintname = 'Barber Shop Paint'}
         else if ((epicitem) == 14){
         var paintimg = 'https://i.imgur.com/zavV07Q.png'
         var paintname = 'Scandinavia Paint'}
         else if ((epicitem) == 15){
         var paintimg = "https://i.imgur.com/oajuf2p.png"
         var paintname = 'Lunar Soil Paint'}
         else if ((epicitem) == 16){
         var paintimg = 'https://i.imgur.com/9j5lgqs.png'
         var paintname = 'Rust Paint'}
         else if ((epicitem) == 17){
         var paintimg = 'https://i.imgur.com/jPblblx.png'
         var paintname = 'Steak Paint'}    
         else if ((epicitem) == 18){
         var paintimg = "https://i.imgur.com/9Il5i8W.png"
         var paintname = 'Amber Paint'}
         else if ((epicitem) == 19){
         var paintimg = 'https://i.imgur.com/nbS4uGw.png'
         var paintname = 'Lime Paint'}
         else if ((epicitem) == 20){
         var paintimg = 'https://i.imgur.com/WKZEFHx.png'
         var paintname = 'Neuron Paint'}
         else if ((epicitem) == 21){
         var paintimg = 'https://i.imgur.com/HaXUxxY.png'
         var paintname = 'Domino Paint'}
         else if ((epicitem) == 22){
         var paintimg = "https://i.imgur.com/eMLcbdn.png"
         var paintname = 'Watercolour Paint'}
         else if ((epicitem) == 23){
         var paintimg = 'https://i.imgur.com/tjq2SF4.png'
         var paintname = 'Pajamas Paint'}
         else if ((epicitem) == 24){
         var paintimg = 'https://i.imgur.com/Ms5OK0z.png'
         var paintname = 'Vanadium Paint'} 
         else if ((epicitem) == 25){
         var paintimg = 'https://i.imgur.com/FL8ISUB.png'
         var paintname = 'Glitch Paint'} 
         else if ((epicitem) == 26){
         var paintimg = 'https://i.imgur.com/ecKmDEv.png'
         var paintname = 'Sunset Camoflage Paint'}
         else if ((epicitem) == 27){
         var paintimg = 'https://i.imgur.com/hxJFqQV.png'
         var paintname = 'All You Need Is Love Paint'}
         else if ((epicitem) == 28){
         var paintimg = "https://i.imgur.com/unj7X8g.png"
         var paintname = 'Zombie Paint'}
         else if ((epicitem) == 29){
         var paintimg = 'https://i.imgur.com/Lh4Hbqw.png'
         var paintname = 'Fire Of Valor Paint'}
         else if ((epicitem) == 30){
         var paintimg = 'https://i.imgur.com/CXUIMit.png'
         var paintname = 'Spangles Paint'}
         else if ((epicitem) == 31){
         var paintimg = 'https://i.imgur.com/4TYOOd1.png'
         var paintname = 'Snowflake Paint'}
         else if ((epicitem) == 32){
         var paintimg = "https://i.imgur.com/avubcYN.png"
         var paintname = 'Lilac Petals Paint'}
         else if ((epicitem) == 33){
         var paintimg = 'https://i.imgur.com/t6IM63n.png'
         var paintname = 'Retina Paint'}
         else if ((epicitem) == 34){
         var paintimg = 'https://i.imgur.com/xKCSDrf.png'
         var paintname = 'Chill Bro Paint'}    
         else if ((epicitem) == 35){
         var paintimg = 'https://i.imgur.com/PTFjank.png'
         var paintname = 'Tanki In Moscow Paint'}
         else if ((epicitem) == 36){
         var paintimg = 'https://i.imgur.com/kBleN5n.png'
         var paintname = 'Secret Of The Aliens Paint'}
         else if ((epicitem) == 37){
         var paintimg = 'https://i.imgur.com/Z3l7dkO.png'
         var paintname = 'Pumpkins Paint'} 
         else if ((epicitem) == 38){
         var paintimg = 'https://i.imgur.com/UVQ15W1.png'
         var paintname = 'Tropical Foliage Paint'} 
         else if ((epicitem) == 39){
         var paintimg = 'https://i.imgur.com/Z2CoZDm.png'
         var paintname = 'Azure Paint'}
         else if ((epicitem) == 40){
         var paintimg = 'https://i.imgur.com/zXFanQF.png'
         var paintname = 'Gucciflage Paint'}
         else if ((epicitem) == 41){
         var paintimg = "https://i.imgur.com/GO4TIUt.png"
         var paintname = 'Hallucination Paint'}
         else if ((epicitem) == 42){
         var paintimg = 'https://i.imgur.com/GNTozmo.png'
         var paintname = 'Hypercube Paint'}
         else if ((epicitem) == 43){
         var paintimg = 'https://i.imgur.com/ZdIwfSe.png'
         var paintname = 'Kungar Ice Cave Paint'}
         else if ((epicitem) == 44){
         var paintimg = 'https://i.imgur.com/BVAcIa1.png'
         var paintname = 'Lollipop Paint'}
         else if ((epicitem) == 45){
         var paintimg = "https://i.imgur.com/8J3lAbb.png"
         var paintname = 'Lotus Paint'}
         else if ((epicitem) == 46){
         var paintimg = 'https://i.imgur.com/qCCohrO.png'
         var paintname = 'Monet Paint'}
         else if ((epicitem) == 47){
         var paintimg = 'https://i.imgur.com/2rEIlXV.png'
         var paintname = 'Paisley Flame Paint'}    
         else if ((epicitem) == 48){
         var paintimg = "https://i.imgur.com/6QKNAeE.png"
         var paintname = 'Paisley Ice Paint'}
         else if ((epicitem) == 49){
         var paintimg = 'https://i.imgur.com/QimIWp2.png'
         var paintname = 'Peaks Paint'}
         else if ((epicitem) == 50){
         var paintimg = 'https://i.imgur.com/hniZLLO.png'
         var paintname = 'Phantom Paint'}
         else if ((epicitem) == 51){
         var paintimg = 'https://i.imgur.com/ugXhy8B.png'
         var paintname = 'Play Doh Paint'}
         else if ((epicitem) == 52){
         var paintimg = "https://i.imgur.com/VthKAsE.png"
         var paintname = 'Pop Art Paint'}
         else if ((epicitem) == 53){
         var paintimg = 'https://i.imgur.com/zblzcV1.png'
         var paintname = 'Potter Paint'}
         else if ((epicitem) == 54){
         var paintimg = 'https://i.imgur.com/JZ4Kpvg.png'
         var paintname = 'Pulsar Paint'} 
         else if ((epicitem) == 55){
         var paintimg = 'https://i.imgur.com/SAKhlFD.png'
         var paintname = 'Ripple Paint'} 
         else if ((epicitem) == 56){
         var paintimg = 'https://i.imgur.com/JdTLdR5.png'
         var paintname = 'Sillicate Paint'}
         else if ((epicitem) == 57){
         var paintimg = 'https://i.imgur.com/doBAp5o.png'
         var paintname = 'Sodoku Paint'}
         else if ((epicitem) == 58){
         var paintimg = "https://i.imgur.com/ZjdRIzn.png"
         var paintname = 'Zig Zag Paint'}
         else if ((epicitem) == 59){
         var paintimg = 'https://i.imgur.com/gRBmdwt.png'
         var paintname = 'Abstract Lines Paint'}
         else if ((epicitem) == 60){
         var paintimg = 'https://i.imgur.com/cwLwvQD.png'
         var paintname = 'Blue Squares Paint'} 
         else if ((epicitem) == 61){
         var paintimg = 'https://i.imgur.com/3Vkacjq.png'
         var paintname = 'Condensed Milk Paint'} 
         else if ((epicitem) == 62){
         var paintimg = 'https://i.imgur.com/KMgUWl2.png'
         var paintname = 'E236 Paint'}
         else if ((epicitem) == 63){
         var paintimg = "https://i.imgur.com/bBBo1Sz.png"
         var paintname = 'Feathers Paint'}
         else if ((epicitem) == 64){
         var paintimg = 'https://i.imgur.com/p5epSIk.png'
         var paintname = 'Fire Dragon Paint'}
         else if ((epicitem) == 65){
         var paintimg = 'https://i.imgur.com/IaVCbyi.png'
         var paintname = 'Megapolis Paint'} 
         else if ((epicitem) == 66){
         var paintimg = 'https://i.imgur.com/j2ju8Mu.png'
         var paintname = 'Stained Glass Paint'} 
         else if ((epicitem) == 67){
         var paintimg = 'https://i.imgur.com/ibHAEQI.png'
         var paintname = 'Thunderball Paint'} 
       
    }
    else
    {  

         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '100,000 Crystals'}
       
       
    
    let epic = "<:epic:469975975430455296>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} opened a container`)
         .setColor("#ff00e0")
         .setDescription(`You obtained the item : ${epic}${paintname}${epic}`) 
         .setImage(paintimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)
         message.channel.send(embed)


    }
    else
    {
    
    if ( crarity < 990 && message.author.id !== '321673115891531787'){ 
    let rareity = 'Legendary'   
    const legendarypaint = Math.floor(Math.random() * 100) + 1;
            
    if ((legendarypaint) < 85 ) {   
        let legendaryitem = Math.floor(Math.random() * 23) + 1;
        if ((legendaryitem) == 1){
        var paintimg = 'https://i.imgur.com/lMaHubB.png'
        var paintname = 'Moonwalker Paint'}
        else if ((legendaryitem) == 2){
        var paintimg = 'https://i.imgur.com/M5Z5FWv.png'
        var paintname = 'Eternity Paint'}
        else if ((legendaryitem) == 3){
        var paintimg = "https://i.imgur.com/PhNXyXp.png"
        var paintname = 'Red Suit paint'}
        else if ((legendaryitem) == 4){
        var paintimg = 'https://i.imgur.com/PmvUxAg.png'
        var paintname = 'Wave Paint'}
        else if ((legendaryitem) == 5){
        var paintimg = 'https://i.imgur.com/FpgBtEZ.png'
        var paintname = 'Nightmare paint'}
        else if ((legendaryitem) == 6){
        var paintimg = "https://i.imgur.com/z8iOhJR.png"
        var paintname = 'Spectrum paint'}
        else if ((legendaryitem) == 7){
        var paintimg = 'https://i.imgur.com/dbnms0o.png'
        var paintname = 'Holiday Lights Paint'}
        else if ((legendaryitem) == 8){
        var paintimg = 'https://i.imgur.com/ZfVuulO.png'
        var paintname = 'Matrix paint'}
        else if ((legendaryitem) == 9){
        var paintimg = 'https://i.imgur.com/NJl5fCT.png'
        var paintname = 'Mosaic Paint'}
        else if ((legendaryitem) == 10){
        var paintimg = "https://i.imgur.com/gzaWRlk.png"
        var paintname = 'Vertigo paint'}
        else if ((legendaryitem) == 11){
        var paintimg = 'https://i.imgur.com/1TZ7Lmn.png'
        var paintname = 'Prodigi 2.0 Paint'}
        else if ((legendaryitem) == 12){
        var paintimg = 'https://i.imgur.com/dtykCud.png'
        var paintname = 'Beating Hearts Paint'}
        else if ((legendaryitem) == 13){
        var paintimg = "https://i.imgur.com/rMKC2xq.png"
        var paintname = 'Ginga paint'}
        else if ((legendaryitem) == 14){
        var paintimg = 'https://i.imgur.com/iOKfNEJ.png'
        var paintname = 'Magnolia Paint'}
        else if ((legendaryitem) == 15){
        var paintimg = 'https://i.imgur.com/7YHD4Dc.png'
        var paintname = 'Galaxy paint'}
        else if ((legendaryitem) == 16){
        var paintimg = 'https://i.imgur.com/pPYWKat.png'
        var paintname = 'Eruption Paint'}
        else if ((legendaryitem) == 17){
        var paintimg = "https://i.imgur.com/s3nJG76.png"
        var paintname = 'Siberian Tiger paint'}
        else if ((legendaryitem) == 18){
        var paintimg = 'https://i.imgur.com/JPZLhFw.png'
        var paintname = 'Secret Sauce Paint'}
        else if ((legendaryitem) == 19){
        var paintimg = 'https://i.imgur.com/gNll0nd.png'
        var paintname = 'Canyon Hero Paint'}
        else if ((legendaryitem) == 20){
        var paintimg = 'https://i.imgur.com/ldN5LLn.png'
        var paintname = 'Pastila Paint'}
        else if ((legendaryitem) == 21){
        var paintimg = "https://i.imgur.com/V6iKdpy.png"
        var paintname = 'Valour paint'}
        else if ((legendaryitem) == 22){
        var paintimg = 'https://i.imgur.com/jEGItOc.png'
        var paintname = 'Beholder Paint'}
        else if ((legendaryitem) == 23){
        var paintimg = 'https://i.imgur.com/JivLe7B.png'
        var paintname = 'Synesthesia paint'}

    }
    else
    { 

         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '300,000 Crystals'}

       
    

    let legendary = "<:legendary:469975932711600138>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} opened a container`)
         .setColor("#ffff00")
         .setDescription(`You obtained the item : ${legendary}${paintname}${legendary}`) 
         .setImage(paintimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)
         message.channel.send(embed)


    }
    else
    {
    
    let rareity = 'Exotic'   
    const exoticS = Math.floor(Math.random() * 1) + 1;
            
    if ((exoticS) == 1 || message.author.id == '321673115891531787') {   
        function exot(){ 
             let exoticitem = Math.floor(Math.random() * 10) + 1;
             if ((exoticitem) == 1){
             xtimg = 'https://i.imgur.com/sNKCyDf.png'
             xtname = 'Railgun XT'}
             else if ((exoticitem) == 2){
             xtimg = 'https://i.imgur.com/hdl30km.png'
             xtname = 'Thunder XT'}
             else if ((exoticitem) == 3){
             xtimg = "https://i.imgur.com/aorl1aO.png"
             xtname = 'Vulcan XT'}
             else if ((exoticitem) == 4){
             xtimg = "https://i.imgur.com/ie7gs43.png"
             xtname = 'Firebird XT'}  
             else if ((exoticitem) == 5){
             xtimg = 'https://i.imgur.com/OXiloKX.png'
             xtname = 'Wasp XT'}
             else if ((exoticitem) == 6){
             xtimg = 'https://i.imgur.com/nYkf7Jy.png'
             xtname = 'Hornet XT'}
             else if ((exoticitem) == 7){
             xtimg = "https://i.imgur.com/aBsImnI.png"
             xtname = 'Viking XT'}
             else if ((exoticitem) == 8){
             xtimg = "https://i.imgur.com/tA3Jzrj.png"
             xtname = 'Mammoth XT'}
             else if ((exoticitem) == 9){
             xtimg = 'https://i.imgur.com/H3j3l1y.png'
             xtname = '1,000,000 Crystals'}
             else if ((exoticitem) == 10 && message.guild.id == '456016111251488769'){ 
             xtname = 'SPECTRUM ROLE!'
             xtimg = 'https://i.imgur.com/z8iOhJR.png'}
             else if ((exoticitem) == 10 && message.guild.id !== '456016111251488769'){ 
             exot()
                }
            } 
             exot(); 

    let exotic = "<:exotic:470018620311863296>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} opened a container`)
         .setColor("#ff5f00")
         .setDescription(`You obtained the item : ${exotic}${xtname}${exotic}`) 
         .setImage(xtimg)
         .setFooter(`{$message.author.username} got an ${rareity} item`, `${message.author.avatarURL}`)
         message.channel.send(embed))


}}}}}}
talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 2000);
    }
}}
