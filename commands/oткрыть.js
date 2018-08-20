

const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const myserver = '323206382147076096'
const a = '`'

exports.run = (client, message, args) => {
 
if (message.content === prefix + 'oткрыть'){
    message.channel.send(`:x: ${message.author} я думаю вы имели в виду ${a}-oткрыть контейнер${a}`)

}

if (message.content === prefix + 'oткрыть контейнер'){      

  

    let crarity = Math.floor(Math.random() * 1000) + 1;
    

    
    if ( crarity < 400 ) { 
    let rareity = 'oбычные'   
    let commonpaint = Math.floor(Math.random() * 10) + 1;
    
    if ((commonpaint) < 2 ){
    let commonitem = Math.floor(Math.random() * 10) + 1;
        if ((commonitem) == 1){
         var paintimg = 'https://i.imgur.com/Uu6IWdY.png'
         var paintname = 'черная краска'}
         else if ((commonitem) == 2){
         var paintimg = 'https://i.imgur.com/bic1Mx7.png'
         var paintname = 'красная краска'}
         else if ((commonitem) == 3){
         var paintimg = "https://i.imgur.com/B1icnUH.png"
         var paintname = 'зеленый цвет'}
         else if ((commonitem) == 4){
         var paintimg = 'https://i.imgur.com/UnU5gub.png'
         var paintname = 'белая краска'}
         else if ((commonitem) == 5){
         var paintimg = 'https://i.imgur.com/Xf7Z6zF.png'
         var paintname = 'оранжевая краска'}
         else if ((commonitem) == 6){
         var paintimg = 'https://i.imgur.com/tzLiLAM.png'
         var paintname = 'Флоракраска'}
         else if ((commonitem) == 7){
         var paintimg = 'https://i.imgur.com/lTWZpIV.png'
         var paintname = 'морская краска'}
         else if ((commonitem) == 8){
         var paintimg = "https://i.imgur.com/n3hJ8ZH.png"
         var paintname = 'болотная краска'}
         else if ((commonitem) == 9){
         var paintimg = 'https://i.imgur.com/VTEu0X7.png'
         var paintname = 'краска для лесника'}
         else if ((commonitem) == 10){
         var paintimg = 'https://i.imgur.com/bTAEhiV.png'
         var paintname = 'металлическая краска'}
    }
    else
    { 
        let betterpaint = Math.floor(Math.random() * 5) + 1;
        if ((betterpaint) == 1){
         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '3,500 кристаллов'}
         else if ((betterpaint) == 2){
         var paintimg = 'https://i.imgur.com/HiZGQbe.png'
         var paintname = '125 двойная броня'}
         else if ((betterpaint) == 3){
         var paintimg = "https://i.imgur.com/LJqZM6l.png"
         var paintname = '125 двойной урон'}
         else if ((betterpaint) == 4){
         var paintimg = 'https://i.imgur.com/gPyAlOw.png'
         var paintname = '125 yскорение'}
         else if ((betterpaint) == 5){
         var paintimg = 'https://i.imgur.com/Avnn0z0.png'
         var paintname = '125 Мина '}
    }
     
    let common = "<:common:469979315052740608>"
        let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#696969")
         .setDescription(`вы получили товар : ${common}${paintname}${common}`)  
         .setImage(paintimg)
         .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)
     message.channel.send(embed)
                //light grey #A9A9A9
    }
    else
    {
    
    if ( crarity < 550 ) { 
    let rareity = 'hеобычные'   
  
        let Uncommonitem = Math.floor(Math.random() * 6) + 1;
        if ((Uncommonitem) == 1){
         var supplyimg = 'https://i.imgur.com/H3j3l1y.png'
         var supplyname = '10,000 кристаллов'}
         else if ((Uncommonitem) == 2){
         var supplyimg = 'https://i.imgur.com/aO3ZCzn.png'
         var supplyname = '125 Ремкомплект'}
         else if ((Uncommonitem) == 3){
         var supplyimg = "https://i.imgur.com/d0r0tzP.png"
         var supplyname = '50 Батарея'}
         else if ((Uncommonitem) == 4){
         var supplyimg = 'https://i.imgur.com/8738li0.png'
         var supplyname = 'комплект из 150 единиц припасов'}
         else if ((Uncommonitem) == 5){
         var supplyimg = 'https://i.imgur.com/yLAKTav.png'
         var supplyname = '3 дня премиум-аккаунта'}
         else if ((Uncommonitem) == 6){
         var supplyimg = 'https://i.imgur.com/5jtsyZD.png'
         var supplyname = ' 5 золотых ящиков'}
    
     

    
    let uncommon = "<:uncommon:469975955599786003>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#5ae03a")
         .setDescription(`вы получили товар : ${uncommon}${supplyname}${uncommon}`) 
         .setImage(supplyimg)
         .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)      
     message.channel.send(embed)
        
    
    }
    else
    {
        
    if ( crarity < 850 ) { 
    let rareity = 'pедкие'   
    const rarepaint = Math.floor(Math.random() * 100 ) + 1;
    if ((rarepaint) < 65 ) {   
        let rareitem = Math.floor(Math.random() * 66) + 1;
        if ((rareitem) == 1){
         var paintimg = 'https://i.imgur.com/yJcKJIM.png'
         var paintname = 'лавовая краска'}
         else if ((rareitem) == 2){
         var paintimg = 'https://i.imgur.com/JGd6ZeJ.png'
         var paintname = 'вести краска'}
         else if ((rareitem) == 3){
         var paintimg = "https://i.imgur.com/XchiKvr.png"
         var paintname = 'инопланетянин 2.0 краска'}
         else if ((rareitem) == 4){
         var paintimg = 'https://i.imgur.com/UzL3YNb.png'
         var paintname = 'сафари краска'}
         else if ((rareitem) == 5){
         var paintimg = 'https://i.imgur.com/vokPLVg.png'
         var paintname = 'Дракон краска'}
         else if ((rareitem) == 6){
         var paintimg = 'https://i.imgur.com/80gpeds.png'
         var paintname = 'магма краска'}
         else if ((rareitem) == 7){
         var paintimg = "https://i.imgur.com/etlhZOc.png"
         var paintname = 'Мэри краска'}
         else if ((rareitem) == 8){
         var paintimg = 'https://i.imgur.com/8F4AIwU.png'
         var paintname = 'cахара краска'}
         else if ((rareitem) == 9){
         var paintimg = 'https://i.imgur.com/Vl0KN5R.png'
         var paintname = 'ночь краска'}
         else if ((rareitem) == 10){
         var paintimg = 'https://i.imgur.com/2eihFkl.png'
         var paintname = 'bлюблен краска'}
         else if ((rareitem) == 11){
         var paintimg = 'https://i.imgur.com/7btgslo.png'
         var paintname = 'углерод краска'}
         else if ((rareitem) == 12){
         var paintimg = "https://i.imgur.com/pi9uDgU.png"
         var paintname = 'конфетти краска'}
         else if ((rareitem) == 13){
         var paintimg = 'https://i.imgur.com/2BYkeaM.png'
         var paintname = 'инопланетянин 1.0 краска'}
         else if ((rareitem) == 14){
         var paintimg = 'https://i.imgur.com/WWNYEHq.png'
         var paintname = 'цепьпочта краска'}
         else if ((rareitem) == 15){
         var paintimg = 'https://i.imgur.com/Qrb8OJD.png'
         var paintname = 'грязный краска'}
         else if ((rareitem) == 16){
         var paintimg = "https://i.imgur.com/4ieFQ2n.png"
         var paintname = 'ягуар краска'}
         else if ((rareitem) == 17){
         var paintimg = 'https://i.imgur.com/le65j8j.png'
         var paintname = 'пустыня краска'}
         else if ((rareitem) == 18){
         var paintimg = 'https://i.imgur.com/JADpZCD.png'
         var paintname = 'партизанский краска'}    
         else if ((rareitem) == 19){
         var paintimg = 'https://i.imgur.com/TqHwYqE.png'
         var paintname = 'прибой краска'}
         else if ((rareitem) == 20){
         var paintimg = 'https://i.imgur.com/6LR05QB.png'
         var paintname = 'арлекин краска'}
         else if ((rareitem) == 21){
         var paintimg = "https://i.imgur.com/0pMnCb4.png"
         var paintname = 'пиксель краска'}
         else if ((rareitem) == 22){
         var paintimg = 'https://i.imgur.com/5Y9P7Z9.png'
         var paintname = 'коррозия краска'}
         else if ((rareitem) == 23){
         var paintimg = 'https://i.imgur.com/P3Q6sk1.png'
         var paintname = 'тундра краска'}
         else if ((rareitem) == 24){
         var paintimg = 'https://i.imgur.com/XBejee5.png'
         var paintname = 'вихревой краска'}
         else if ((rareitem) == 25){
         var paintimg = "https://i.imgur.com/qIqOt7g.png"
         var paintname = 'Пиксельное сердце краска'}
         else if ((rareitem) == 26){
         var paintimg = 'https://i.imgur.com/YbND0oP.png'
         var paintname = 'Роджер краска'}
         else if ((rareitem) == 27){
         var paintimg = 'https://i.imgur.com/hun7Hs4.png'
         var paintname = 'излом краска'}    
         else if ((rareitem) == 28){
         var paintimg = 'https://i.imgur.com/za8gY6V.png'
         var paintname = 'кедр краска'}    
         else if ((rareitem) == 29){
         var paintimg = 'https://i.imgur.com/x8KgVmd.png'
         var paintname = 'питон краска'}
         else if ((rareitem) == 20){
         var paintimg = 'https://i.imgur.com/IVaOz5u.png'
         var paintname = 'сакура краска'}
         else if ((rareitem) == 31){
         var paintimg = 'https://i.imgur.com/680JitP.png'
         var paintname = 'Пастбища краска'}
         else if ((rareitem) == 31){
         var paintimg = "https://i.imgur.com/yqXD0ZF.png"
         var paintname = 'Мягкие цветы краска'}
         else if ((rareitem) == 32){
         var paintimg = 'https://i.imgur.com/W611QqD.png'
         var paintname = 'Электра краска'}
         else if ((rareitem) == 33){
         var paintimg = 'https://i.imgur.com/ZMrsVTt.png'
         var paintname = 'мох краска'}
         else if ((rareitem) == 34){
         var paintimg = 'https://i.imgur.com/nRipiA9.png'
         var paintname = 'Первая любовь краска'}
         else if ((rareitem) == 35){
         var paintimg = "https://i.imgur.com/Fgxd6gs.png"
         var paintname = 'песчаник краска'}
         else if ((rareitem) == 36){
         var paintimg = 'https://i.imgur.com/6bHB1F2.png'
         var paintname = 'искра краска'}
         else if ((rareitem) == 37){
         var paintimg = 'https://i.imgur.com/04IAZ7n.png'
         var paintname = 'Джинсы краска'}
         else if ((rareitem) == 38){
         var paintimg = 'https://i.imgur.com/TQX4ePk.png'
         var paintname = 'цифровой краска'}
         else if ((rareitem) == 39){
         var paintimg = 'https://i.imgur.com/DTiOYfs.png'
         var paintname = 'шелест краска'}
         else if ((rareitem) == 40){
         var paintimg = "https://i.imgur.com/sG7HBJS.png"
         var paintname = 'кузнец краска'}
         else if ((rareitem) == 41){
         var paintimg = 'https://i.imgur.com/y1oy0EJ.png'
         var paintname = 'Хохлома краска'}
         else if ((rareitem) == 42){
         var paintimg = 'https://i.imgur.com/UedBFsb.png'
         var paintname = 'суглинок краска'}
         else if ((rareitem) == 43){
         var paintimg = 'https://i.imgur.com/uLQ6Lkv.png'
         var paintname = 'носорог краска'}
         else if ((rareitem) == 44){
         var paintimg = "https://i.imgur.com/DfNAcFt.png"
         var paintname = 'зима краска'}
         else if ((rareitem) == 45){
         var paintimg = 'https://i.imgur.com/655k2TY.png'
         var paintname = 'городской краска'}
         else if ((rareitem) == 46){
         var paintimg = 'https://i.imgur.com/KEnNc7l.png'
         var paintname = 'Свитер краска'}    
         else if ((rareitem) == 47){
         var paintimg = 'https://i.imgur.com/Uc2xStT.png'
         var paintname = 'атом краска'}
         else if ((rareitem) == 48){
         var paintimg = 'https://i.imgur.com/qvAsqjh.png'
         var paintname = 'саванна краска'}
         else if ((rareitem) == 49){
         var paintimg = "https://i.imgur.com/Z6anuHd.png"
         var paintname = 'вишня краска'}
         else if ((rareitem) == 50){
         var paintimg = 'https://i.imgur.com/B7i6beQ.png'
         var paintname = 'Изумруд краска'}
         else if ((rareitem) == 51){
         var paintimg = 'https://i.imgur.com/QtINXHI.png'
         var paintname = 'Ирбис краска'}
         else if ((rareitem) == 52){
         var paintimg = 'https://i.imgur.com/pns89xU.png'
         var paintname = 'дискотека краска'}
         else if ((rareitem) == 53){
         var paintimg = "https://i.imgur.com/1YO1rpg.png"
         var paintname = 'Марс краска'}
         else if ((rareitem) == 54){
         var paintimg = 'https://i.imgur.com/08PvYck.png'
         var paintname = 'улей краска'}
         else if ((rareitem) == 55){
         var paintimg = 'https://i.imgur.com/ZBYZ8bQ.png'
         var paintname = 'ад Paiкраскаnt'}    
         else if ((rareitem) == 56){
         var paintimg = 'https://i.imgur.com/BIrUhHg.png'
         var paintname = 'нефрит краска'}
         else if ((rareitem) == 57){
         var paintimg = 'https://i.imgur.com/G4LTzGF.png'
         var paintname = 'тигр краска'}
         else if ((rareitem) == 58){
         var paintimg = "https://i.imgur.com/7D9zmjy.png"
         var paintname = 'Калейдоскоп краска'}
         else if ((rareitem) == 59){
         var paintimg = 'https://i.imgur.com/Uk1Epds.png'
         var paintname = 'тайга краска'}
         else if ((rareitem) == 60){
         var paintimg = 'https://i.imgur.com/BA79PyV.png'
         var paintname = 'Красный городской краска'}
         else if ((rareitem) == 61){
         var paintimg = 'https://i.imgur.com/lVA00HV.png'
         var paintname = 'нано краска'}
         else if ((rareitem) == 62){
         var paintimg = "https://i.imgur.com/VFTr1Vm.png"
         var paintname = 'Продиджи краска'}
         else if ((rareitem) == 63){
         var paintimg = 'https://i.imgur.com/isv4C0u.png'
         var paintname = 'рок краска'}
         else if ((rareitem) == 64){
         var paintimg = 'https://i.imgur.com/pKcu3TS.png'
         var paintname = 'енот краска'}    
         else if ((rareitem) == 65){
         var paintimg = 'https://i.imgur.com/KzNkIXj.png'
         var paintname = 'игла краска'}
         else if ((rareitem) == 66){
         var paintimg = 'https://i.imgur.com/ggGlJGu.png'
         var paintname = 'Пикассо краска'}
    
    }
    else
    { 
        let betterpaint = Math.floor(Math.random() * 5) + 1;
        if ((betterpaint) == 1){
         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '25,000 кристаллы'}
         else if ((betterpaint) == 2){
         var paintimg = 'https://i.imgur.com/d0r0tzP.png'
         var paintname = '150 Батарейка'}
         else if ((betterpaint) == 3){
         var paintimg = "https://i.imgur.com/8738li0.png"
         var paintname = '250 Ремкомплект'}
         else if ((betterpaint) == 4){
         var paintimg = 'https://i.imgur.com/h9bTtzC.png'
         var paintname = '10 дней премиум-аккаунта'}
         else if ((betterpaint) == 5){
         var paintimg = 'https://i.imgur.com/x8NC4zi.png'
         var paintname = '10 золотых ящиков'}
    
    }
    
    let rare = "<:rare:469975943616659478>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#2de5ff")
         .setDescription(`вы получили товар : ${rare}${paintname}${rare}`)  
         .setImage(paintimg)
         .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)
     message.channel.send(embed)
        
    }
    else
    {
    
    if ( crarity < 950 ) { 
    let rareity = 'Эпические'   
    const epicpaint = Math.floor(Math.random() * 100) + 1;
            
    if ((epicpaint) < 85 ) {   
        let epicitem = Math.floor(Math.random() * 67) + 1;
         if ((epicitem) == 1){
         var paintimg = 'https://i.imgur.com/x2nlYUX.png'
         var paintname = 'kосмос краска'}
         else if ((epicitem) == 2){
         var paintimg = 'https://i.imgur.com/wW7ycng.png'
         var paintname = 'Иней краска'}
         else if ((epicitem) == 3){
         var paintimg = "https://i.imgur.com/TMTTgam.png"
         var paintname = 'Граффити краска'}
         else if ((epicitem) == 4){
         var paintimg = 'https://i.imgur.com/E0Z6QA5.png'
         var paintname = 'Зевс краска'}
         else if ((epicitem) == 5){
         var paintimg = 'https://i.imgur.com/NoaIyLi.png'
         var paintname = 'глина краска'}
         else if ((epicitem) == 6){
         var paintimg = 'https://i.imgur.com/IgIJGLP.png'
         var paintname = 'Дровосек краска'}
         else if ((epicitem) == 7){
         var paintimg = "https://i.imgur.com/X9bDdkA.png"
         var paintname = 'aфрика краска'}
         else if ((epicitem) == 8){
         var paintimg = 'https://i.imgur.com/tY668p6.png'
         var paintname = 'Золотая звездакраска'}
         else if ((epicitem) == 9){
         var paintimg = 'https://i.imgur.com/DHYlg2j.png'
         var paintname = 'aрахнид краска'}
         else if ((epicitem) == 10){
         var paintimg = 'https://i.imgur.com/OwnToQT.png'
         var paintname = 'Жидкий металл краска'}
         else if ((epicitem) == 11){
         var paintimg = "https://i.imgur.com/HL9nYPM.png"
         var paintname = 'Засуха краска'}
         else if ((epicitem) == 12){
         var paintimg = 'https://i.imgur.com/XB2ofuq.png'
         var paintname = 'Клубника краска'}
         else if ((epicitem) == 13){
         var paintimg = 'https://i.imgur.com/aozjomN.png'
         var paintname = 'Барбершоп краска'}
         else if ((epicitem) == 14){
         var paintimg = 'https://i.imgur.com/zavV07Q.png'
         var paintname = 'Скандинавия краска'}
         else if ((epicitem) == 15){
         var paintimg = "https://i.imgur.com/oajuf2p.png"
         var paintname = 'Лунный грунт краска'}
         else if ((epicitem) == 16){
         var paintimg = 'https://i.imgur.com/9j5lgqs.png'
         var paintname = 'Коррозия краска'}
         else if ((epicitem) == 17){
         var paintimg = 'https://i.imgur.com/jPblblx.png'
         var paintname = 'Стейк краска'}    
         else if ((epicitem) == 18){
         var paintimg = "https://i.imgur.com/9Il5i8W.png"
         var paintname = 'Янтарь Pкраскаaint'}
         else if ((epicitem) == 19){
         var paintimg = 'https://i.imgur.com/nbS4uGw.png'
         var paintname = 'Лайм краска'}
         else if ((epicitem) == 20){
         var paintimg = 'https://i.imgur.com/WKZEFHx.png'
         var paintname = 'hейрон краска'}
         else if ((epicitem) == 21){
         var paintimg = 'https://i.imgur.com/HaXUxxY.png'
         var paintname = 'Домино краска'}
         else if ((epicitem) == 22){
         var paintimg = "https://i.imgur.com/eMLcbdn.png"
         var paintname = 'aкварель краска'}
         else if ((epicitem) == 23){
         var paintimg = 'https://i.imgur.com/tjq2SF4.png'
         var paintname = 'Пижама краска'}
         else if ((epicitem) == 24){
         var paintimg = 'https://i.imgur.com/Ms5OK0z.png'
         var paintname = 'bанадий краска'} 
         else if ((epicitem) == 25){
         var paintimg = 'https://i.imgur.com/FL8ISUB.png'
         var paintname = 'Глитч краска'} 
         else if ((epicitem) == 26){
         var paintimg = 'https://i.imgur.com/ecKmDEv.png'
         var paintname = 'bечерний закат краска'}
         else if ((epicitem) == 27){
         var paintimg = 'https://i.imgur.com/hxJFqQV.png'
         var paintname = 'все что тебе нужно - это любовь краска'}
         else if ((epicitem) == 28){
         var paintimg = "https://i.imgur.com/unj7X8g.png"
         var paintname = 'Зомби краска'}
         else if ((epicitem) == 29){
         var paintimg = 'https://i.imgur.com/Lh4Hbqw.png'
         var paintname = 'oгонь отваги краска'}
         else if ((epicitem) == 30){
         var paintimg = 'https://i.imgur.com/CXUIMit.png'
         var paintname = 'Блёстки краска'}
         else if ((epicitem) == 31){
         var paintimg = 'https://i.imgur.com/4TYOOd1.png'
         var paintname = 'bьюга краска'}
         else if ((epicitem) == 32){
         var paintimg = "https://i.imgur.com/avubcYN.png"
         var paintname = 'Лепестки сирени краска'}
         else if ((epicitem) == 33){
         var paintimg = 'https://i.imgur.com/t6IM63n.png'
         var paintname = 'Ретина краска'}
         else if ((epicitem) == 34){
         var paintimg = 'https://i.imgur.com/xKCSDrf.png'
         var paintname = 'oстынь приятель краска'}    
         else if ((epicitem) == 35){
         var paintimg = 'https://i.imgur.com/PTFjank.png'
         var paintname = 'tанки в Москве краска'}
         else if ((epicitem) == 36){
         var paintimg = 'https://i.imgur.com/kBleN5n.png'
         var paintname = 'tайна пришельцев краска'}
         else if ((epicitem) == 37){
         var paintimg = 'https://i.imgur.com/Z3l7dkO.png'
         var paintname = 'cезон тыкв краска'} 
         else if ((epicitem) == 38){
         var paintimg = 'https://i.imgur.com/UVQ15W1.png'
         var paintname = 'tропическая листва краска'} 
         else if ((epicitem) == 39){
         var paintimg = 'https://i.imgur.com/Z2CoZDm.png'
         var paintname = 'Лазурь краска'}
         else if ((epicitem) == 40){
         var paintimg = 'https://i.imgur.com/zXFanQF.png'
         var paintname = 'Гуччифляж краска'}
         else if ((epicitem) == 41){
         var paintimg = "https://i.imgur.com/GO4TIUt.png"
         var paintname = 'Глюк краска'}
         else if ((epicitem) == 42){
         var paintimg = 'https://i.imgur.com/GNTozmo.png'
         var paintname = 'Гиперкуб краска'}
         else if ((epicitem) == 43){
         var paintimg = 'https://i.imgur.com/ZdIwfSe.png'
         var paintname = 'kунгурская пещера краска'}
         else if ((epicitem) == 44){
         var paintimg = 'https://i.imgur.com/BVAcIa1.png'
         var paintname = 'Лоллипоп краска'}
         else if ((epicitem) == 45){
         var paintimg = "https://i.imgur.com/8J3lAbb.png"
         var paintname = 'Лотос краска'}
         else if ((epicitem) == 46){
         var paintimg = 'https://i.imgur.com/qCCohrO.png'
         var paintname = 'Моне краска'}
         else if ((epicitem) == 47){
         var paintimg = 'https://i.imgur.com/2rEIlXV.png'
         var paintname = 'Пейсли пламя краска'}    
         else if ((epicitem) == 48){
         var paintimg = "https://i.imgur.com/6QKNAeE.png"
         var paintname = 'Пейсли лёд краска'}
         else if ((epicitem) == 49){
         var paintimg = 'https://i.imgur.com/QimIWp2.png'
         var paintname = 'Пики краска'}
         else if ((epicitem) == 50){
         var paintimg = 'https://i.imgur.com/hniZLLO.png'
         var paintname = 'Фантом краска'}
         else if ((epicitem) == 15){
         var paintimg = 'https://i.imgur.com/ugXhy8B.png'
         var paintname = 'Пластилин краска'}
         else if ((epicitem) == 52){
         var paintimg = "https://i.imgur.com/VthKAsE.png"
         var paintname = 'Поп-арт краска'}
         else if ((epicitem) == 53){
         var paintimg = 'https://i.imgur.com/zblzcV1.png'
         var paintname = 'Гончар краска'}
         else if ((epicitem) == 54){
         var paintimg = 'https://i.imgur.com/JZ4Kpvg.png'
         var paintname = 'Пульсар краска'} 
         else if ((epicitem) == 55){
         var paintimg = 'https://i.imgur.com/SAKhlFD.png'
         var paintname = 'Рябь краска'} 
         else if ((epicitem) == 56){
         var paintimg = 'https://i.imgur.com/JdTLdR5.png'
         var paintname = 'Силикат краска'}
         else if ((epicitem) == 57){
         var paintimg = 'https://i.imgur.com/doBAp5o.png'
         var paintname = 'Судоку краска'}
         else if ((epicitem) == 58){
         var paintimg = "https://i.imgur.com/ZjdRIzn.png"
         var paintname = 'Зигзаг краска'}
         else if ((epicitem) == 59){
         var paintimg = 'https://i.imgur.com/gRBmdwt.png'
         var paintname = 'aбстрактные линии краска'}
         else if ((epicitem) == 60){
         var paintimg = 'https://i.imgur.com/cwLwvQD.png'
         var paintname = 'Гиперкуб краска'} 
         else if ((epicitem) == 61){
         var paintimg = 'https://i.imgur.com/3Vkacjq.png'
         var paintname = 'cгущёнка Milk краска'} 
         else if ((epicitem) == 62){
         var paintimg = 'https://i.imgur.com/KMgUWl2.png'
         var paintname = 'E236 краска'}
         else if ((epicitem) == 63){
         var paintimg = "https://i.imgur.com/bBBo1Sz.png"
         var paintname = 'Перья краска'}
         else if ((epicitem) == 64){
         var paintimg = 'https://i.imgur.com/p5epSIk.png'
         var paintname = 'Огненный дракон краска'}
         else if ((epicitem) == 65){
         var paintimg = 'https://i.imgur.com/IaVCbyi.png'
         var paintname = 'Мегаполис краска'} 
         else if ((epicitem) == 66){
         var paintimg = 'https://i.imgur.com/j2ju8Mu.png'
         var paintname = 'bитраж краска'} 
         else if ((epicitem) == 67){
         var paintimg = 'https://i.imgur.com/ibHAEQI.png'
         var paintname = 'Шаровая молния краска'} 
       
    }
    else
    {  

         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '100,000 кристаллы'}
       
       
    
    let epic = "<:epic:469975975430455296>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#ff00e0")
         .setDescription(`вы получили товар : ${epic}${paintname}${epic}`) 
         .setImage(paintimg)
         .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)        
        message.channel.send(embed)

    }
    else
    {
    
    if ( crarity < 990 ) { 
    let rareity = 'Легендарные'   
    const legendarypaint = Math.floor(Math.random() * 100) + 1;
            
    if ((legendarypaint) < 85 ) {   
        let legendaryitem = Math.floor(Math.random() * 23) + 1;
        if ((legendaryitem) == 1){
        var paintimg = 'https://i.imgur.com/lMaHubB.png'
        var paintname = 'Луноход краска'}
        else if ((legendaryitem) == 2){
        var paintimg = 'https://i.imgur.com/M5Z5FWv.png'
        var paintname = 'bечность краска'}
        else if ((legendaryitem) == 3){
        var paintimg = "https://i.imgur.com/PhNXyXp.png"
        var paintname = 'kрасный костюм краска'}
        else if ((legendaryitem) == 4){
        var paintimg = 'https://i.imgur.com/PmvUxAg.png'
        var paintname = 'волна краска'}
        else if ((legendaryitem) == 5){
        var paintimg = 'https://i.imgur.com/FpgBtEZ.png'
        var paintname = 'кошмар краска'}
        else if ((legendaryitem) == 6){
        var paintimg = "https://i.imgur.com/z8iOhJR.png"
        var paintname = 'спектра краска'}
        else if ((legendaryitem) == 7){
        var paintimg = 'https://i.imgur.com/dbnms0o.png'
        var paintname = 'Гирлянда краска'}
        else if ((legendaryitem) == 8){
        var paintimg = 'https://i.imgur.com/ZfVuulO.png'
        var paintname = 'mатрица краска'}
        else if ((legendaryitem) == 9){
        var paintimg = 'https://i.imgur.com/NJl5fCT.png'
        var paintname = 'mозаика краска'}
        else if ((legendaryitem) == 10){
        var paintimg = "https://i.imgur.com/gzaWRlk.png"
        var paintname = 'bертиго краска'}
        else if ((legendaryitem) == 11){
        var paintimg = 'https://i.imgur.com/1TZ7Lmn.png'
        var paintname = 'Продиджи 2.0 краска'}
        else if ((legendaryitem) == 12){
        var paintimg = 'https://i.imgur.com/dtykCud.png'
        var paintname = 'Биение сердец краска'}
        else if ((legendaryitem) == 13){
        var paintimg = "https://i.imgur.com/rMKC2xq.png"
        var paintname = 'Джинга краска'}
        else if ((legendaryitem) == 14){
        var paintimg = 'https://i.imgur.com/iOKfNEJ.png'
        var paintname = 'Магнолия краска'}
        else if ((legendaryitem) == 15){
        var paintimg = 'https://i.imgur.com/7YHD4Dc.png'
        var paintname = 'Галактика краска'}
        else if ((legendaryitem) == 16){
        var paintimg = 'https://i.imgur.com/pPYWKat.png'
        var paintname = 'Извержение краска'}
        else if ((legendaryitem) == 17){
        var paintimg = "https://i.imgur.com/s3nJG76.png"
        var paintname = 'aмурский тигр краска'}
        else if ((legendaryitem) == 18){
        var paintimg = 'https://i.imgur.com/JPZLhFw.png'
        var paintname = 'cекретный соус краска'}
        else if ((legendaryitem) == 19){
        var paintimg = 'https://i.imgur.com/gNll0nd.png'
        var paintname = 'Герой Canyon краска'}
        else if ((legendaryitem) == 20){
        var paintimg = 'https://i.imgur.com/ldN5LLn.png'
        var paintname = 'Пастила краска'}
        else if ((legendaryitem) == 21){
        var paintimg = "https://i.imgur.com/V6iKdpy.png"
        var paintname = 'доблесть краска'}
        else if ((legendaryitem) == 22){
        var paintimg = 'https://i.imgur.com/jEGItOc.png'
        var paintname = 'Анютины глазки краска'}
        else if ((legendaryitem) == 23){
        var paintimg = 'https://i.imgur.com/JivLe7B.png'
        var paintname = 'cинестезиякраска'}

    }
    else
    { 

         var paintimg = 'https://i.imgur.com/H3j3l1y.png'
         var paintname = '300,000 кристаллы'}

       
    

    let legendary = "<:legendary:469975932711600138>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#ffff00")
         .setDescription(`вы получили товар : ${legendary}${paintname}${legendary}`) 
         .setImage(paintimg)
         .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)
        message.channel.send(embed)

    }
    else
    {
    
    let rareity = 'Экзотические'   
    const exoticS = Math.floor(Math.random() * 100) + 1;
            
    if ((exoticS) < 85 ) {   
         let exoticitem = Math.floor(Math.random() * 9) + 1;
         if ((exoticitem) == 1){
         var xtimg = 'https://i.imgur.com/sNKCyDf.png'
         var xtname = 'pельса XT'}
         else if ((exoticitem) == 2){
         var xtimg = 'https://i.imgur.com/hdl30km.png'
         var xtname = 'Гром XT'}
         else if ((exoticitem) == 3){
         var xtimg = "https://i.imgur.com/aorl1aO.png"
         var xtname = 'bулкан  XT'}
         else if ((exoticitem) == 4){
         var xtimg = "https://i.imgur.com/ie7gs43.png"
         var xtname = 'oгнемёт  XT'}  
         else if ((exoticitem) == 5){
         var xtimg = 'https://imgur.com/BM9wl96.png'
         var xtname = 'cмоки XT'}
         else if ((exoticitem) == 6){
         var xtimg = 'https://i.imgur.com/OXiloKX.png'
         var xtname = 'bасп XT'}
         else if ((exoticitem) == 7){
         var xtimg = 'https://i.imgur.com/nYkf7Jy.png'
         var xtname = 'xорнет  XT'}
         else if ((exoticitem) == 8){
         var xtimg = "https://i.imgur.com/aBsImnI.png"
         var xtname = 'bикинг XT'}
         else if ((exoticitem) == 9){
         var xtimg = "https://i.imgur.com/tA3Jzrj.png"
         var xtname = 'mамонт  XT'}
 
    }
    else
    {
         
         var xtimg = 'https://i.imgur.com/H3j3l1y.png'
         var xtname = '1,000,000 кристаллы'}

    

    let exotic = "<:exotic:470018620311863296>"
         let embed = new Discord.RichEmbed()
         .setTitle(`${message.author.username} открыл контейнер`)
         .setColor("#ff5f00")
         .setDescription(`вы получили товар : ${exotic}${xtname}${exotic}`) 
         .setImage(xtimg)
        .setFooter(`${message.author.username} получил ${rareity} пункт!`, message.author.displayAvatarURL)
    message.channel.send(embed)
    
}}}}}}}
