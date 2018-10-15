const Discord = require('discord.js')
const bot = new Discord.Client()
const weather = require('weather-js')
const fs = require('fs')
const prefix = '-'
const owner = '321673115891531787'
const myserver = '323206382147076096'
const a = '`'
const talkedRecently = new Set();
const logo = `https://i.i.imgur.com/FWdUqI2.png`

exports.run = (client, message, args) => {

    if (message.content === prefix + 'loot') {
        return message.channel.send(`:x: ${message.author} I think you meant ${a}-lootbody${a}`)
    }

    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`:x: ${message.author} There is a 2 second cool down please wait!`);
    } else {
        if (message.content === prefix + 'lootbody') {
            
            

                    let item = Math.floor(Math.random() * 108) + 1;
                    if ((item) == 1) {
                        var itemimg = 'https://i.imgur.com/2M29d8s.png'
                        var itemname = '9mm Ammo'
                    }
                    else if ((item) == 2) {
                        var itemimg = 'https://i.imgur.com/hiAMEOb.png'
                        var itemname = '12 Gauge Ammo'
                    }
                    else if ((item) == 3) {
                        var itemimg = "https://i.imgur.com/J8rmnnn.png"
                        var itemname = '0.45 ACP Ammo'
                    }
                    else if ((item) == 4) {
                        var itemimg = 'https://i.imgur.com/w78m8cJ.png'
                        var itemname = '5.56mm Ammo'
                    }
                    else if ((item) == 5) {
                        var itemimg = 'https://i.imgur.com/pkAIsKq.png'
                        var itemname =  '0.300 Magnum Ammo'
                    }
                    else if ((item) == 6) {
                        var itemimg = 'https://i.imgur.com/XN11vqS.png'
                        var itemname = '7.62 Ammo'
                    }
                    else if ((item) == 7) {
                        var itemimg = 'https://i.imgur.com/ckQjwxd.png'
                        var itemname = 'Bolts'
                    }
                    else if ((item) == 8) {
                        var itemimg = "https://i.imgur.com/pqTT3qU.png"
                        var itemname = 'Flares'
                    }
                    else if ((item) == 9) {
                        var itemimg = 'https://i.imgur.com/VZ2MMZJ.png'
                        var itemname = 'Bandge'
                    }
                    else if ((item) == 10) {
                        var itemimg = 'https://i.imgur.com/fPPtGLx.png'
                        var itemname = 'First Aid Kit'
                    }

                    else if ((item) == 11) {
                        var itemimg = 'https://i.imgur.com/5J9ZThY.png'
                        var itemname = 'Adrenaline Syringe'
                    }
                    else if ((item) == 12) {
                        var itemimg = 'https://i.imgur.com/7hyYEDq.png'
                        var itemname = 'Energy Drink'
                    }
                    else if ((item) == 13) {
                        var itemimg = "https://i.imgur.com/uh3JZsk.png"
                        var itemname = 'Pain Killers'
                    }
                    else if ((item) == 14) {
                        var itemimg = 'https://i.imgur.com/aZh5Vf4.png'
                        var itemname = 'Med Kit'
                    }
                    else if ((item) == 15) {
                        var itemimg = 'https://i.imgur.com/QFpXz4l.png'
                        var itemname = 'Jerry Can'
                    }
                    else if ((item) == 16) {
                        var itemimg = 'https://i.imgur.com/3KcxRy0.png'
                        var itemname = 'Half Grip'
                    }
                    else if ((item) == 17) {
                        var itemimg = 'https://i.imgur.com/ZCdBM8d.png'
                        var itemname = 'Light Grip'
                    }
                    else if ((item) == 18) {
                        var itemimg = "https://i.imgur.com/DNebTI6.png"
                        var itemname = 'Angled Foregrip'
                    }
                    else if ((item) == 19) {
                        var itemimg = 'https://i.imgur.com/kJbkrOW.png'
                        var itemname = 'Vertical Foregrip'
                    }
                    else if ((item) == 20) {
                        var itemimg = 'https://i.imgur.com/j10bzuC.png'
                        var itemname = 'Laser Sight'
                    }
                    else if ((item) == 21) {
                        var itemimg = 'https://i.imgur.com/0ZQnLGn.png'
                        var itemname = 'Thumb Grip'
                    }
                    else if ((item) == 22) {
                        var itemimg = 'https://i.imgur.com/MlLTCpP.png'
                        var itemname = 'Quiver'
                    }
                    else if ((item) == 23) {
                        var itemimg = 'https://i.imgur.com/w0iMLLP.png'
                        var itemname = 'Extended Drum Mag'
                    }
                    else if ((item) == 24) {
                        var itemimg = 'https://i.imgur.com/mpX31Qt.png'
                        var itemname = 'Extended Mag'
                    }
                    else if ((item) == 25) {
                        var itemimg = 'https://i.imgur.com/JrNqQiO.png'
                        var itemname = 'Extended Smg Mag'
                    }
                    else if ((item) == 26) {
                        var itemimg = 'https://i.imgur.com/vj1BfS9.png'
                        var itemname = 'Extended Handgun Mag'
                    }
                    else if ((item) == 27) {
                        var itemimg = 'https://i.imgur.com/B7FSuTz.png'
                        var itemname = 'Extended Sniper Quickdraw Mag'
                    }
                    else if ((item) == 28) {
                        var itemimg = 'https://i.imgur.com/YtPQLfy.png'
                        var itemname = 'Extended Quickdraw Mag'
                    }
                    else if ((item) == 29) {
                        var itemimg = 'https://i.imgur.com/IEOWsEE.png'
                        var itemname = 'Extended Handgun Quickdraw Mag'
                    }
                    else if ((item) == 30) {
                        var itemimg = 'https://i.imgur.com/K59aUle.png'
                        var itemname = 'Dmr Quickdraw Mag'
                    }
                    else if ((item) == 31) {
                        var itemimg = 'https://i.imgur.com/30yZDun.png'
                        var itemname = 'Extended Sniper Quickdraw Mag'
                    }
                    else if ((item) == 32) {
                        var itemimg = 'https://i.imgur.com/DbbYZ8m.png'
                        var itemname = 'Smg Quickdraw Mag '
                    }
                    else if ((item) == 33) {
                        var itemimg = 'https://i.imgur.com/5sk41Gt.png'
                        var itemname = 'Handgun Quickdraw Mag '
                    }
                    else if ((item) == 34) {
                        var itemimg = 'https://i.imgur.com/Zn5rBpt.png'
                        var itemname = 'Sniper Quickdraw Mag'
                    }
                    else if ((item) == 35) {
                        var itemimg = 'https://i.imgur.com/QYveFoX.png'
                        var itemname = 'Extended Vss Quickdraw Mag '
                    }
                    else if ((item) == 36) {
                        var itemimg = 'https://i.imgur.com/5EDDNOd.png'
                        var itemname = 'Extended Vss Mag '
                    }
                    else if ((item) == 37) {
                        var itemimg = 'https://i.imgur.com/UQjcmUE.png'
                        var itemname = 'Vss Quickdraw Mag '
                    }
                    else if ((item) == 38) {
                        var itemimg = 'https://i.imgur.com/dcDIrlD.png'
                        var itemname = 'Duckbill'
                    }
                    else if ((item) == 39) {
                        var itemimg = 'https://i.imgur.com/GNNlzd7.png'
                        var itemname = 'Choke'
                    }
                    else if ((item) == 40) {
                        var itemimg = 'https://i.imgur.com/pPAPrFD.png'
                        var itemname = 'Compensator'
                    }
                    else if ((item) == 41) {
                        var itemimg = 'https://i.imgur.com/5V1rlwy.png'
                        var itemname = 'Smg Compensator'
                    }
                    else if ((item) == 42) {
                        var itemimg = 'https://i.imgur.com/9x5isNm.png'
                        var itemname = 'Sniper Compensator '
                    }
                    else if ((item) == 43) {
                        var itemimg = 'https://i.imgur.com/0Of5Z0k.png'
                        var itemname = 'Dmr Flash Hider '
                    }
                    else if ((item) == 44) {
                        var itemimg = 'https://i.imgur.com/mfgN1yH.png'
                        var itemname = 'Sniper Supressor'
                    }
                    else if ((item) == 45) {
                        var itemimg = 'https://i.imgur.com/Rd3jYkW.png'
                        var itemname = 'Smg Flash Hider'
                    }
                    else if ((item) == 46) {
                        var itemimg = 'https://i.imgur.com/bkSQwM8.png'
                        var itemname = 'Sniper Flash Hider'
                    }
                    else if ((item) == 47) {
                        var itemimg = 'https://i.imgur.com/vCURVNu.png'
                        var itemname = 'Smg Supressor'
                    }
                    else if ((item) == 48) {
                        var itemimg = 'https://i.imgur.com/Qlbtfnh.png'
                        var itemname = 'Handgun Supressor'
                    }
                    else if ((item) == 49) {
                        var itemimg = 'https://i.imgur.com/oPenAGT.png'
                        var itemname = 'Smg Supressor'
                    }
                    else if ((item) == 50) {
                        var itemimg = 'https://i.imgur.com/wqL1auM.png'
                        var itemname = 'Ghillie Suit'
                    }
                    else if ((item) == 10) {
                        var itemimg = 'https://i.imgur.com/CkEapoD.png'
                        var itemname = 'Vss Lower Cheakpad'
                    }
                    else if ((item) == 51) {
                        var itemimg = 'https://i.imgur.com/FDrT9X5.png'
                        var itemname = 'M416 Tactical Stock'
                    }
                    else if ((item) == 52) {
                        var itemimg = 'https://i.imgur.com/QDON8XX.png'
                        var itemname = 'S1987 Bullet Loop'
                    }
                    else if ((item) == 52) {
                        var itemimg = 'https://i.imgur.com/6oeoXvC.png'
                        var itemname = 'Sniper Bullet Loop'
                    }
                    else if ((item) == 53) {
                        var itemimg = 'https://i.imgur.com/RdYBjkT.png'
                        var itemname = 'Sniper Cheackpad'
                    }
                    else if ((item) == 54) {
                        var itemimg = 'https://i.imgur.com/VseaQhP.png'
                        var itemname = 'Micro Uzi Stock'
                    }
                    else if ((item) == 55) {
                        var itemimg = 'https://i.imgur.com/WIAYdzY.png'
                        var itemname = '3x Backlit Scope'
                    }
                    else if ((item) == 56) {
                        var itemimg = 'https://i.imgur.com/2VATLgs.png'
                        var itemname = '6x Scope'
                    }
                    else if ((item) == 57) {
                        var itemimg = 'https://i.imgur.com/jUVypHS.png'
                        var itemname = '4x ACOG Scope'
                    }
                    else if ((item) == 58) {
                        var itemimg = 'https://i.imgur.com/9TfMNl1.png'
                        var itemname = '2x Aimpoint Scope'
                    }
                    else if ((item) == 59) {
                        var itemimg = 'https://i.imgur.com/ChOLVkH.png'
                        var itemname = '8x CQBSS Scope'
                    }
                    else if ((item) == 60) {
                        var itemimg = 'https://i.imgur.com/c0mablf.png'
                        var itemname = 'Red Dot Sight (Crossbow Default)'
                    }
                    else if ((item) == 61) {
                        var itemimg = 'https://i.imgur.com/c0mablf.png'
                        var itemname = 'Red Dot Sigh'
                    }
                    else if ((item) == 62) {
                        var itemimg = 'https://i.imgur.com/xsgDBdM.png'
                        var itemname = 'Holographic Sight'
                    }
                    else if ((item) == 63) {
                        var itemimg = 'https://i.imgur.com/HoC2M35.png'
                        var itemname = '15x PM II Scope'
                    }
                    else if ((item) == 64) {
                        var itemimg = 'https://i.imgur.com/5YtP16F.png'
                        var itemname = 'Akm Assault Rifle'
                    }
                    else if ((item) == 65) {
                        var itemimg = 'https://i.imgur.com/xboKVVG.png'
                        var itemname = 'Aug A3 Assault Rifle'
                    }
                    else if ((item) == 66) {
                        var itemimg = 'https://i.imgur.com/UFT1zCA.png'
                        var itemname = 'Groza Assault Rifle'
                    }
                    else if ((item) == 67) {
                        var itemimg = 'https://i.imgur.com/EI7Za57.png'
                        var itemname = 'M416 Assault Rifle'
                    }
                    else if ((item) == 68) {
                        var itemimg = 'https://i.imgur.com/y6tmz9J.png'
                        var itemname = 'M16A4 Assault Rifle'
                    }
                    else if ((item) == 69) {
                        var itemimg = 'https://i.imgur.com/huuXceY.png'
                        var itemname = 'Beryl M762 Assault Rifle'
                    }
                    else if ((item) == 70) {
                        var itemimg = 'https://i.imgur.com/QwdaGjS.png'
                        var itemname = 'Mk47 Mutant Assault Rifle'
                    }
                    else if ((item) == 71) {
                        var itemimg = 'https://i.imgur.com/r3blnHd.png'
                        var itemname = 'Scar L Assault Rifle'
                    }
                    else if ((item) == 72) {
                        var itemimg = 'https://i.imgur.com/rjvMOwF.png'
                        var itemname = 'QBZ95 Assualt Rifle '
                    }
                    else if ((item) == 73) {
                        var itemimg = 'https://i.imgur.com/i6iHtMn.png'
                        var itemname = 'Mini 14 Carbine'
                    }
                    else if ((item) == 74) {
                        var itemimg = 'https://i.imgur.com/ywf1g7k.png'
                        var itemname = 'Sks Carbine'
                    }
                    else if ((item) == 75) {
                        var itemimg = 'https://i.imgur.com/26ZOokS.png'
                        var itemname = 'Crossbow'
                    }
                    else if ((item) == 76) {
                        var itemimg = 'https://i.imgur.com/Rtdhhj5.png'
                        var itemname = 'Slr Dmr'
                    }
                    else if ((item) == 77) {
                        var itemimg = 'https://i.imgur.com/VuLRULn.png'
                        var itemname = 'Qub Dmr '
                    }
                    else if ((item) == 78) {
                        var itemimg = 'https://i.imgur.com/ebR8VVJ.png'
                        var itemname = 'Mk14 EBR Dmr'
                    }
                    else if ((item) == 79){
                        var itemimg = 'https://i.imgur.com/1MsHDro.png'
                        var itemname = 'DP 28 Lgm'
                    }
                    else if ((item) == 80){
                        var itemimg = 'https://i.imgur.com/WINSZsB.png'
                        var itemname = 'M249 Lmg'
                    }
                    else if ((item) == 81){
                        var itemimg = 'https://i.imgur.com/aD19hQm.png'
                        var itemname = 'Flare Gun'
                    }
                    else if ((item) == 82){
                        var itemimg = 'https://i.imgur.com/NPqj85p.png'
                        var itemname = 'P92 Pistol'
                    }
                    else if ((item) == 83){
                        var itemimg = 'https://i.imgur.com/VyEfMWr.png'
                        var itemname = 'P1911 Pistol'
                    }
                    else if ((item) == 84){
                        var itemimg = 'https://i.imgur.com/dVHDQtM.png'
                        var itemname = 'R1895 Pistol'
                    }
                    else if ((item) == 85){
                        var itemimg = 'https://i.imgur.com/Y5o5jy5.png'
                        var itemname = 'P18C Pistol'
                    }
                    else if ((item) == 86){
                        var itemimg = 'https://i.imgur.com/c0wTODh.png'
                        var itemname = 'R45 Pistol'
                    }
                    else if ((item) == 87){
                        var itemimg = 'https://i.imgur.com/EgWvkMt.png'
                        var itemname = 'S686 Shotgun'
                    }
                    else if ((item) == 88){
                        var itemimg = 'https://i.imgur.com/dV5SqEb.png'
                        var itemname = 'S12K Shotgun'
                    }
                    else if ((item) == 89){
                        var itemimg = 'https://i.imgur.com/D8rMw5x.png'
                        var itemname = 'Sawed Off Shotgun'
                    }
                    else if ((item) == 90){
                        var itemimg = 'https://i.imgur.com/uo4nw0Z.png'
                        var itemname = 'S1897 Shotgun'
                    }
                    else if ((item) == 91){
                        var itemimg = 'https://i.imgur.com/dkYc0nt.png'
                        var itemname = 'Awm Sniper Rifle'
                    }
                    else if ((item) == 92){
                        var itemimg = 'https://i.imgur.com/geEwfyr.png'
                        var itemname = 'Karabiner 98 Kurz Sniper Rifle'
                    }
                    else if ((item) == 93){
                        var itemimg = 'https://i.imgur.com/Ke8nHJF.png'
                        var itemname = 'M24 Sniper Rifle'
                    }
                    else if ((item) == 94){
                        var itemimg = 'https://i.imgur.com/RUhOMrL.png'
                        var itemname = 'Winchester Model 1894 Sniper Rifle'
                    }
                    else if ((item) == 95){
                        var itemimg = 'https://i.imgur.com/KcdbRX5.png'
                        var itemname = 'VSS Vintorez Sniper Rifle'
                    }
                    else if ((item) == 96){
                        var itemimg = 'https://i.imgur.com/WpXMZBm.png'
                        var itemname = 'Tommy Gun'
                    }
                    else if ((item) == 97){
                        var itemimg = 'https://i.imgur.com/J6xYSvO.png'
                        var itemname = 'UMP9 Submachine Gun'
                    }
                    else if ((item) == 98){
                        var itemimg = 'https://i.imgur.com/Xslm4bh.png'
                        var itemname = 'Mirco Uzi Submachine Gun'
                    }
                    else if ((item) == 99){
                        var itemimg = 'https://i.imgur.com/1CNEfwK.png'
                        var itemname = 'Vector Submachine Gun'
                    }
                    else if ((item) == 100){
                        var itemimg = 'https://i.imgur.com/r5Rp4VX.png'
                        var itemname = 'C4'
                    }
                    else if ((item) == 101){
                        var itemimg = 'https://i.imgur.com/LqOcZ3C.png'
                        var itemname = 'Stun Grenade'
                    }
                    else if ((item) == 102){
                        var itemimg = 'https://i.imgur.com/iIj0lTQ.png'
                        var itemname = 'Frag Grenade'
                    }
                    else if ((item) == 103){
                        var itemimg = 'https://i.imgur.com/N2H1L6n.png'
                        var itemname = 'Smoke Bomb'
                    }
                    else if ((item) == 104){
                        var itemimg = 'https://i.imgur.com/1jHSh8e.png'
                        var itemname = 'Molotov Cocktail'
                    }
                    else if ((item) == 105){
                        var itemimg = 'https://i.imgur.com/J19yXfc.png'
                        var itemname = 'Crowbar'
                    }
                    else if ((item) == 106){
                        var itemimg = 'https://i.imgur.com/obnoRQt.png'
                        var itemname = 'Machete'
                    }
                    else if ((item) == 107){
                        var itemimg = 'https://i.imgur.com/aY8SjVM.png'
                        var itemname = 'Sickle'
                    }
                    else if ((item) == 108){
                        var itemimg = 'https://i.imgur.com/ktRtEj3.png'
                        var itemname = 'Pan'
                    }
                   
                
            
                    
                try {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} Looted Someones Body!`)
                        .setColor("#00CED1")
                        .setDescription(`You have found a : ${itemname}`)
                        .setImage(itemimg)
                        .setThumbnail(`https://imgur.com/TRiFs1d.png`)
                        .setFooter(`${message.author.username} Killed and looted a body!`, message.author.displayAvatarURL)
                    message.channel.send(embed)
                } catch (err) {
                    if (err) {
                        let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} Looted Someones Body!`)
                        .setColor("#00CED1")
                        .setDescription(`You have found a : ${itemname}`)
                        .setImage(itemimg)
                        .setThumbnail(`https://imgur.com/TRiFs1d.png`)
                        .setFooter(`${message.author.username} Killed and looted a body!`, message.author.displayAvatarURL)
                    message.channel.send(embed)
                    }
                }
                //light grey #A9A9A9
            }
        }
    
    if (message.author.id == 321673115891531787) {
        var geop = "gay"
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 2000);
    }
}
