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



    if (message.content == prefix + 'combo') {
        let Incorrect = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("__**Incorrect Usage**__")
            .setColor("#caaffd")
            .setDescription(`**Description:** A random combonation of items if your bored of using the same ones \n**Usage:** -combo ➡<m0/m1/m2/m3/xt>⬅ \n**Examples:** \n-combo m0 \n-combo m2 \n-combo m3 \n-combo xt \n**Error:** Did not include the modification level`)
        return message.channel.send(Incorrect);
    }

    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`:x: ${message.author} There is a 2 second cool down please wait!`);
    } else {
        if (message.content === prefix + 'combo xt') {
            var turretrnd = Math.floor(Math.random() * 7) + 1;
            var hullrnd = Math.floor(Math.random() * 5) + 1;
            var paintrnd = Math.floor(Math.random() * 207) + 1;
            var moduelrnd = Math.floor(Math.random() * 14) + 1;
            var dronernd = Math.floor(Math.random() * 6) + 1;


            const array1 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]
            const array2 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]
            const array3 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]

            async function moduleRandomizer() {
                //without var/let/const
                array1random = array1[Math.floor(Math.random() * array1.length)];
                array2random = array2[Math.floor(Math.random() * array2.length)];
                array3random = array3[Math.floor(Math.random() * array3.length)];
                moduleChecker();
            }

            async function moduleChecker() {
                if ((array1random == array2random) || (array1random == array3random) || (array3random == array2random)) {
                    moduleRandomizer();
                } else {
                    module1 = array1random;
                    module2 = array2random;
                    module3 = array3random;
                }
            };

            moduleRandomizer();

            if (module1 == `<:BadgerM3:492794414914076694>`) {
                var module1name = `Freeze`
            }
            else if (module1 == `<:DolphinM3:492794414624669698>`) {
                var module1name = `Smoky`
            }
            else if (module1 == `<:EagleM3:492794414519943169>`) {
                var module1name = `Shaft`
            }
            else if (module1 == `<:FalconM3:492794414846967809>`) {
                var module1name = `Railgun`
            }
            else if (module1 == `<:FoxM3:492794414092255249>`) {
                var module1name = `Fire`
            }
            else if (module1 == `<:GriffonM3:492794414339588107>`) {
                var module1name = `Magnum`
            }
            else if (module1 == `<:GrizzleyM3:492794414926659584>`) {
                var module1name = `Thunder`
            }
            else if (module1 == `<:LionM3:492794414260027402>`) {
                var module1name = `Ricochet`
            }
            else if (module1 == `<:OcelotM3:492794414230667286>`) {
                var module1name = `Isida`
            }
            else if (module1 == `<:OrkaM3:492794414737915915>`) {
                var module1name = `Striker`
            }
            else if (module1 == `<:PantherM3:492794414440251403>`) {
                var module1name = `Twins`
            }
            else if (module1 == `<:SharkM3:492794414809350154>`) {
                var module1name = `Vulcan`
            }
            else if (module1 == `<:SpiderM3:492794414482325534>`) {
                var module1name = `Spider`
            }
            else if (module1 == `<:WolfM3:492794414578663434>`) {
                var module1name = `Hammer`
            }

            if (module2 == `<:BadgerM3:492794414914076694>`) {
                var module2name = `Freeze`
            }
            else if (module2 == `<:DolphinM3:492794414624669698>`) {
                var module2name = `Smoky`
            }
            else if (module2 == `<:EagleM3:492794414519943169>`) {
                var module2name = `Shaft`
            }
            else if (module2 == `<:FalconM3:492794414846967809>`) {
                var module2name = `Railgun`
            }
            else if (module2 == `<:FoxM3:492794414092255249>`) {
                var module2name = `Fire`
            }
            else if (module2 == `<:GriffonM3:492794414339588107>`) {
                var module2name = `Magnum`
            }
            else if (module2 == `<:GrizzleyM3:492794414926659584>`) {
                var module2name = `Thunder`
            }
            else if (module2 == `<:LionM3:492794414260027402>`) {
                var module2name = `Ricochet`
            }
            else if (module2 == `<:OcelotM3:492794414230667286>`) {
                var module2name = `Isida`
            }
            else if (module2 == `<:OrkaM3:492794414737915915>`) {
                var module2name = `Striker`
            }
            else if (module2 == `<:PantherM3:492794414440251403>`) {
                var module2name = `Twins`
            }
            else if (module2 == `<:SharkM3:492794414809350154>`) {
                var module2name = `Vulcan`
            }
            else if (module2 == `<:SpiderM3:492794414482325534>`) {
                var module2name = `Spider`
            }
            else if (module2 == `<:WolfM3:492794414578663434>`) {
                var module2name = `Hammer`
            }

            if (module3 == `<:BadgerM3:492794414914076694>`) {
                var module3name = `Freeze`
            }
            else if (module3 == `<:DolphinM3:492794414624669698>`) {
                var module3name = `Smoky`
            }
            else if (module3 == `<:EagleM3:492794414519943169>`) {
                var module3name = `Shaft`
            }
            else if (module3 == `<:FalconM3:492794414846967809>`) {
                var module3name = `Railgun`
            }
            else if (module3 == `<:FoxM3:492794414092255249>`) {
                var module3name = `Fire`
            }
            else if (module3 == `<:GriffonM3:492794414339588107>`) {
                var module3name = `Magnum`
            }
            else if (module3 == `<:GrizzleyM3:492794414926659584>`) {
                var module3name = `Thunder`
            }
            else if (module3 == `<:LionM3:492794414260027402>`) {
                var module3name = `Ricochet`
            }
            else if (module3 == `<:OcelotM3:492794414230667286>`) {
                var module3name = `Isida`
            }
            else if (module3 == `<:OrkaM3:492794414737915915>`) {
                var module3name = `Striker`
            }
            else if (module3 == `<:PantherM3:492794414440251403>`) {
                var module3name = `Twins`
            }
            else if (module3 == `<:SharkM3:492794414809350154>`) {
                var module3name = `Vulcan`
            }
            else if (module3 == `<:SpiderM3:492794414482325534>`) {
                var module3name = `Spider`
            }
            else if (module3 == `<:WolfM3:492794414578663434>`) {
                var module3name = `Hammer`
            }


            if (turretrnd == 1) {
                var turretpic = `https://i.imgur.com/eesqNet.png`
                var turretname = `Firebird`
            }
            else if (turretrnd == 2) {
                var turretpic = `https://i.imgur.com/rbb0IET.png`
                var turretname = `Freeze`
            }
            else if (turretrnd == 3) {
                var turretpic = `https://i.imgur.com/X0mT8Gs.png`
                var turretname = `Ricochet`
            }
            else if (turretrnd == 4) {
                var turretpic = `https://i.imgur.com/8Yke689.png`
                var turretname = `Thunder`
            }
            else if (turretrnd == 5) {
                var turretpic = `https://i.imgur.com/BM9wl96.png`
                var turretname = `Smoky`
            }
            else if (turretrnd == 6) {
                var turretpic = `https://i.imgur.com/EKai6g9.png`
                var turretname = `Vulcan`
            }
            else if (turretrnd == 7) {
                var turretpic = `https://i.imgur.com/3LLsA48.png`
                var turretname = `Railgun`
            }


            if (hullrnd == 1) {
                var hullpic = `https://i.imgur.com/EUlHyj9.png`
                var hullname = `Wasp`
            }
            else if (hullrnd == 2) {
                var hullpic = `https://i.imgur.com/8PbhVYp.png`
                var hullname = `Hornet`
            }
            else if (hullrnd == 3) {
                var hullpic = `https://i.imgur.com/OpVRs3Q.png`
                var hullname = `Viking`
            }
            else if (hullrnd == 4) {
                var hullpic = `https://i.imgur.com/FiPLqAq.png`
                var hullname = `Titan`
            }
            else if (hullrnd == 5) {
                var hullpic = `https://i.imgur.com/9eCfa2Q.png`
                var hullname = `Mammoth`
            }


            if (dronernd == `1`) {
                var dronepic = `https://i.imgur.com/i4kLXUq.png`
                var dronename = `Assault`
            }
            else if (dronernd == `2`) {
                var dronepic = `https://i.imgur.com/GTx8XSC.png`
                var dronename = `Driver`
            }
            else if (dronernd == `3`) {
                var dronepic = `https://i.imgur.com/7OQTcCS.png`
                var dronename = `Engineer`
            }
            else if (dronernd == `4`) {
                var dronepic = `https://i.imgur.com/m7UNylf.png`
                var dronename = `Mechanic`
            }
            else if (dronernd == `5`) {
                var dronepic = `https://i.imgur.com/IQxEaxF.png`
                var dronename = `Supplier`
            }
            else if (dronernd == `6`) {
                var dronepic = `https://i.imgur.com/EREdvT0.png`
                var dronename = `Trooper`
            }


            if ((paintrnd) == 1) {
                var paintpic = 'https://i.imgur.com/Uu6IWdY.png'
                var paintname = 'Black Paint'
            }
            else if ((paintrnd) == 2) {
                var paintpic = 'https://i.imgur.com/bic1Mx7.png'
                var paintname = 'Red Paint'
            }
            else if ((paintrnd) == 3) {
                var paintpic = "https://i.imgur.com/B1icnUH.png"
                var paintname = 'Green Paint'
            }
            else if ((paintrnd) == 4) {
                var paintpic = 'https://i.imgur.com/UnU5gub.png'
                var paintname = 'White Paint'
            }
            else if ((paintrnd) == 5) {
                var paintpic = 'https://i.imgur.com/Xf7Z6zF.png'
                var paintname = 'Orange Paint'
            }
            else if ((paintrnd) == 6) {
                var paintpic = 'https://i.imgur.com/tzLiLAM.png'
                var paintname = 'Flora Paint'
            }
            else if ((paintrnd) == 7) {
                var paintpic = 'https://i.imgur.com/lTWZpIV.png'
                var paintname = 'Marine Paint'
            }
            else if ((paintrnd) == 8) {
                var paintpic = "https://i.imgur.com/n3hJ8ZH.png"
                var paintname = 'Swamp Paint'
            }
            else if ((paintrnd) == 9) {
                var paintpic = 'https://i.imgur.com/VTEu0X7.png'
                var paintname = 'Forester Paint'
            }
            else if ((paintrnd) == 10) {
                var paintpic = 'https://i.imgur.com/bTAEhiV.png'
                var paintname = 'Metallic Paint'
            }
            else if ((paintrnd) == 11) {
                var paintpic = 'https://i.imgur.com/yJcKJIM.png'
                var paintname = 'Lava Paint'
            }
            else if ((paintrnd) == 12) {
                var paintpic = 'https://i.imgur.com/JGd6ZeJ.png'
                var paintname = 'Lead Paint'
            }
            else if ((paintrnd) == 13) {
                var paintpic = "https://i.imgur.com/XchiKvr.png"
                var paintname = 'Alien 2.0 Paint'
            }
            else if ((paintrnd) == 14) {
                var paintpic = 'https://i.imgur.com/UzL3YNb.png'
                var paintname = 'Safari Paint'
            }
            else if ((paintrnd) == 15) {
                var paintpic = 'https://i.imgur.com/vokPLVg.png'
                var paintname = 'Dragon Paint'
            }
            else if ((paintrnd) == 16) {
                var paintpic = 'https://i.imgur.com/80gpeds.png'
                var paintname = 'Magma Paint'
            }
            else if ((paintrnd) == 17) {
                var paintpic = "https://i.imgur.com/etlhZOc.png"
                var paintname = 'Mary paint'
            }
            else if ((paintrnd) == 18) {
                var paintpic = 'https://i.imgur.com/8F4AIwU.png'
                var paintname = 'Sahara Paint'
            }
            else if ((paintrnd) == 19) {
                var paintpic = 'https://i.imgur.com/Vl0KN5R.png'
                var paintname = 'Night paint'
            }
            else if ((paintrnd) == 20) {
                var paintpic = 'https://i.imgur.com/2eihFkl.png'
                var paintname = 'In Love Paint'
            }
            else if ((paintrnd) == 21) {
                var paintpic = 'https://i.imgur.com/7btgslo.png'
                var paintname = 'Carbon Paint'
            }
            else if ((paintrnd) == 22) {
                var paintpic = "https://i.imgur.com/pi9uDgU.png"
                var paintname = 'Confetti Paint'
            }
            else if ((paintrnd) == 23) {
                var paintpic = 'https://i.imgur.com/2BYkeaM.png'
                var paintname = 'Alien 1.0 Paint'
            }
            else if ((paintrnd) == 24) {
                var paintpic = 'https://i.imgur.com/WWNYEHq.png'
                var paintname = 'Chainmail Paint'
            }
            else if ((paintrnd) == 25) {
                var paintpic = 'https://i.imgur.com/Qrb8OJD.png'
                var paintname = 'Dirty Paint'
            }
            else if ((paintrnd) == 26) {
                var paintpic = "https://i.imgur.com/4ieFQ2n.png"
                var paintname = 'Jaguar Paint'
            }
            else if ((paintrnd) == 27) {
                var paintpic = 'https://i.imgur.com/le65j8j.png'
                var paintname = 'Desert Paint'
            }
            else if ((paintrnd) == 28) {
                var paintpic = 'https://i.imgur.com/JADpZCD.png'
                var paintname = 'Guerrilla Paint'
            }
            else if ((paintrnd) == 29) {
                var paintpic = 'https://i.imgur.com/TqHwYqE.png'
                var paintname = 'Swash Paint'
            }
            else if ((paintrnd) == 30) {
                var paintpic = 'https://i.imgur.com/6LR05QB.png'
                var paintname = 'Harlequin Paint'
            }
            else if ((paintrnd) == 31) {
                var paintpic = "https://i.imgur.com/0pMnCb4.png"
                var paintname = 'Pixel Paint'
            }
            else if ((paintrnd) == 32) {
                var paintpic = 'https://i.imgur.com/5Y9P7Z9.png'
                var paintname = 'Corrosion Paint'
            }
            else if ((paintrnd) == 33) {
                var paintpic = 'https://i.imgur.com/P3Q6sk1.png'
                var paintname = 'Tundra Paint'
            }
            else if ((paintrnd) == 34) {
                var paintpic = 'https://i.imgur.com/XBejee5.png'
                var paintname = 'Vortex Paint'
            }
            else if ((paintrnd) == 35) {
                var paintpic = "https://i.imgur.com/qIqOt7g.png"
                var paintname = 'Pixel Heart Paint'
            }
            else if ((paintrnd) == 36) {
                var paintpic = 'https://i.imgur.com/YbND0oP.png'
                var paintname = 'Roger Paint'
            }
            else if ((paintrnd) == 37) {
                var paintpic = 'https://i.imgur.com/hun7Hs4.png'
                var paintname = 'Fracture Paint'
            }
            else if ((paintrnd) == 38) {
                var paintpic = 'https://i.imgur.com/za8gY6V.png'
                var paintname = 'Cedar Paint'
            }
            else if ((paintrnd) == 39) {
                var paintpic = 'https://i.imgur.com/x8KgVmd.png'
                var paintname = 'Python Paint'
            }
            else if ((paintrnd) == 40) {
                var paintpic = 'https://i.imgur.com/IVaOz5u.png'
                var paintname = 'Sakura Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = 'https://i.imgur.com/680JitP.png'
                var paintname = 'Grasslands Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = "https://i.imgur.com/yqXD0ZF.png"
                var paintname = 'Soft Flowers paint'
            }
            else if ((paintrnd) == 42) {
                var paintpic = 'https://i.imgur.com/W611QqD.png'
                var paintname = 'Electra Paint'
            }
            else if ((paintrnd) == 43) {
                var paintpic = 'https://i.imgur.com/ZMrsVTt.png'
                var paintname = 'Moss paint'
            }
            else if ((paintrnd) == 44) {
                var paintpic = 'https://i.imgur.com/nRipiA9.png'
                var paintname = 'First Love Paint'
            }
            else if ((paintrnd) == 45) {
                var paintpic = "https://i.imgur.com/Fgxd6gs.png"
                var paintname = 'Sandstone paint'
            }
            else if ((paintrnd) == 46) {
                var paintpic = 'https://i.imgur.com/6bHB1F2.png'
                var paintname = 'Spark Paint'
            }
            else if ((paintrnd) == 47) {
                var paintpic = 'https://i.imgur.com/04IAZ7n.png'
                var paintname = 'Jeans paint'
            }
            else if ((paintrnd) == 48) {
                var paintpic = 'https://i.imgur.com/TQX4ePk.png'
                var paintname = 'Digital Paint'
            }
            else if ((paintrnd) == 49) {
                var paintpic = 'https://i.imgur.com/DTiOYfs.png'
                var paintname = 'Rustle Paint'
            }
            else if ((paintrnd) == 50) {
                var paintpic = "https://i.imgur.com/sG7HBJS.png"
                var paintname = 'Blacksmith Paint'
            }
            else if ((paintrnd) == 51) {
                var paintpic = 'https://i.imgur.com/y1oy0EJ.png'
                var paintname = 'Hohloma Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/UedBFsb.png'
                var paintname = 'Loam Paint'
            }
            else if ((paintrnd) == 53) {
                var paintpic = 'https://i.imgur.com/uLQ6Lkv.png'
                var paintname = 'Rhino Paint'
            }
            else if ((paintrnd) == 54) {
                var paintpic = "https://i.imgur.com/DfNAcFt.png"
                var paintname = 'Winter Paint'
            }
            else if ((paintrnd) == 55) {
                var paintpic = 'https://i.imgur.com/655k2TY.png'
                var paintname = 'Urban Paint'
            }
            else if ((paintrnd) == 56) {
                var paintpic = 'https://i.imgur.com/KEnNc7l.png'
                var paintname = 'Sweater Paint'
            }
            else if ((paintrnd) == 57) {
                var paintpic = 'https://i.imgur.com/Uc2xStT.png'
                var paintname = 'Atom Paint'
            }
            else if ((paintrnd) == 58) {
                var paintpic = 'https://i.imgur.com/qvAsqjh.png'
                var paintname = 'Savanna Paint'
            }
            else if ((paintrnd) == 59) {
                var paintpic = "https://i.imgur.com/Z6anuHd.png"
                var paintname = 'Cherry Paint'
            }
            else if ((paintrnd) == 60) {
                var paintpic = 'https://i.imgur.com/B7i6beQ.png'
                var paintname = 'Emerald Paint'
            }
            else if ((paintrnd) == 61) {
                var paintpic = 'https://i.imgur.com/QtINXHI.png'
                var paintname = 'Ibris Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/pns89xU.png'
                var paintname = 'Disco Paint'
            }
            else if ((paintrnd) == 63) {
                var paintpic = "https://i.imgur.com/1YO1rpg.png"
                var paintname = 'Mars Paint'
            }
            else if ((paintrnd) == 64) {
                var paintpic = 'https://i.imgur.com/08PvYck.png'
                var paintname = 'Hive Paint'
            }
            else if ((paintrnd) == 65) {
                var paintpic = 'https://i.imgur.com/ZBYZ8bQ.png'
                var paintname = 'Inferno Paint'
            }
            else if ((paintrnd) == 66) {
                var paintpic = 'https://i.imgur.com/BIrUhHg.png'
                var paintname = 'Jade Paint'
            }
            else if ((paintrnd) == 67) {
                var paintpic = 'https://i.imgur.com/G4LTzGF.png'
                var paintname = 'Tiger Paint'
            }
            else if ((paintrnd) == 68) {
                var paintpic = "https://i.imgur.com/7D9zmjy.png"
                var paintname = 'Kaleidoscope Paint'
            }
            else if ((paintrnd) == 69) {
                var paintpic = 'https://i.imgur.com/Uk1Epds.png'
                var paintname = 'Taiga Paint'
            }
            else if ((paintrnd) == 70) {
                var paintpic = 'https://i.imgur.com/BA79PyV.png'
                var paintname = 'Red Urban Paint'
            }
            else if ((paintrnd) == 71) {
                var paintpic = 'https://i.imgur.com/lVA00HV.png'
                var paintname = 'Nano Paint'
            }
            else if ((paintrnd) == 72) {
                var paintpic = "https://i.imgur.com/VFTr1Vm.png"
                var paintname = 'Prodigi Paint'
            }
            else if ((paintrnd) == 73) {
                var paintpic = 'https://i.imgur.com/isv4C0u.png'
                var paintname = 'Rock Paint'
            }
            else if ((paintrnd) == 74) {
                var paintpic = 'https://i.imgur.com/pKcu3TS.png'
                var paintname = 'Raccoon Paint'
            }
            else if ((paintrnd) == 75) {
                var paintpic = 'https://i.imgur.com/KzNkIXj.png'
                var paintname = 'Needle Paint'
            }
            else if ((paintrnd) == 76) {
                var paintpic = 'https://i.imgur.com/ggGlJGu.png'
                var paintname = 'Picasso Paint'
            }
            else if ((paintrnd) == 77) {
                var paintpic = 'https://i.imgur.com/oPsUaQS.png'
                var paintname = 'Argentina Paint'
            }
            else if ((paintrnd) == 78) {
                var paintpic = 'https://i.imgur.com/reDTcBH.png'
                var paintname = 'Australia Paint'
            }
            else if ((paintrnd) == 79) {
                var paintpic = 'https://i.imgur.com/AJQrwyi.png'
                var paintname = 'Belgium Paint'
            }
            else if ((paintrnd) == 80) {
                var paintpic = 'https://i.imgur.com/958evYX.png'
                var paintname = 'Brazil Paint'
            }
            else if ((paintrnd) == 81) {
                var paintpic = 'https://i.imgur.com/7Jt63vS.png'
                var paintname = 'Colombia Paint'
            }
            else if ((paintrnd) == 82) {
                var paintpic = 'https://i.imgur.com/iVNsjXY.png'
                var paintname = 'South Korea Paint'
            }
            else if ((paintrnd) == 83) {
                var paintpic = 'https://i.imgur.com/PYRmJIp.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 84) {
                var paintpic = 'https://i.imgur.com/7cYZu1I.png'
                var paintname = 'Croatia Paint'
            }
            else if ((paintrnd) == 85) {
                var paintpic = 'https://i.imgur.com/wvYQSXa.png'
                var paintname = 'Costa Rica Paint'
            }
            else if ((paintrnd) == 86) {
                var paintpic = 'https://i.imgur.com/NVIdw9e.png'
                var paintname = 'Egypt Paint'
            }
            else if ((paintrnd) == 87) {
                var paintpic = 'https://i.imgur.com/Jn5mrQI.png'
                var paintname = 'England Paint'
            }
            else if ((paintrnd) == 88) {
                var paintpic = 'https://i.imgur.com/XVrmTAE.png'
                var paintname = 'France Paint'
            }
            else if ((paintrnd) == 89) {
                var paintpic = 'https://i.imgur.com/7IU5kHG.png'
                var paintname = 'Iceland Paint'
            }
            else if ((paintrnd) == 90) {
                var paintpic = 'https://i.imgur.com/JCTfffl.png'
                var paintname = 'Germany Paint'
            }
            else if ((paintrnd) == 91) {
                var paintpic = 'https://i.imgur.com/0KgtBsx.png'
                var paintname = 'Iran Paint'
            }
            else if ((paintrnd) == 92) {
                var paintpic = 'https://i.imgur.com/6RzUNAy.png'
                var paintname = 'Japan Paint'
            }
            else if ((paintrnd) == 93) {
                var paintpic = 'https://i.imgur.com/ifrbtMe.png'
                var paintname = 'Mexico Paint'
            }
            else if ((paintrnd) == 94) {
                var paintpic = 'https://i.imgur.com/DPA9Bil.png'
                var paintname = 'Morocco Paint'
            }
            else if ((paintrnd) == 95) {
                var paintpic = 'https://i.imgur.com/bqxX9er.png'
                var paintname = 'Panama Paint'
            }
            else if ((paintrnd) == 96) {
                var paintpic = 'https://i.imgur.com/ZQLGlOC.png'
                var paintname = 'Nigeria Paint'
            }
            else if ((paintrnd) == 97) {
                var paintpic = 'https://i.imgur.com/lkZmpvy.png'
                var paintname = 'Peru Paint'
            }
            else if ((paintrnd) == 98) {
                var paintpic = 'https://i.imgur.com/rF67XB7.png'
                var paintname = 'Portugal Paint'
            }
            else if ((paintrnd) == 99) {
                var paintpic = 'https://i.imgur.com/32jmRY5.png'
                var paintname = 'Poland Paint'
            }
            else if ((paintrnd) == 100) {
                var paintpic = 'https://i.imgur.com/aSyZVyl.png'
                var paintname = 'Russia Paint'
            }
            else if ((paintrnd) == 101) {
                var paintpic = 'https://i.imgur.com/0pZ8POK.png'
                var paintname = 'Saudi Arabia Paint'
            }
            else if ((paintrnd) == 102) {
                var paintpic = 'https://i.imgur.com/cvBh12Z.png'
                var paintname = 'Senagal Paint'
            }
            else if ((paintrnd) == 103) {
                var paintpic = 'https://i.imgur.com/Xp5wtvv.png'
                var paintname = 'Serbia Paint'
            }
            else if ((paintrnd) == 104) {
                var paintpic = 'https://i.imgur.com/o7dBXh6.png'
                var paintname = 'Sweden Paint'
            }
            else if ((paintrnd) == 105) {
                var paintpic = 'https://i.imgur.com/PkWhBUK.png'
                var paintname = 'Spain Paint'
            }
            else if ((paintrnd) == 106) {
                var paintpic = 'https://i.imgur.com/xYYxCTR.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 107) {
                var paintpic = 'https://i.imgur.com/59R91Q0.png'
                var paintname = 'Tunisa Paint'
            }
            else if ((paintrnd) == 108) {
                var paintpic = 'https://i.imgur.com/3LRdNAn.png'
                var paintname = 'Uruguay Paint'
            }
            else if ((paintrnd) == 109) {
                var paintpic = 'https://i.imgur.com/x2nlYUX.png'
                var paintname = 'Space  Paint'
            }
            else if ((paintrnd) == 110) {
                var paintpic = 'https://i.imgur.com/wW7ycng.png'
                var paintname = 'Frost Paint'
            }
            else if ((paintrnd) == 111) {
                var paintpic = "https://i.imgur.com/TMTTgam.png"
                var paintname = 'Graffiti paint'
            }
            else if ((paintrnd) == 112) {
                var paintpic = 'https://i.imgur.com/E0Z6QA5.png'
                var paintname = 'Zeus Paint'
            }
            else if ((paintrnd) == 113) {
                var paintpic = 'https://i.imgur.com/NoaIyLi.png'
                var paintname = 'Clay paint'
            }
            else if ((paintrnd) == 114) {
                var paintpic = 'https://i.imgur.com/IgIJGLP.png'
                var paintname = 'Lumberjack Paint'
            }
            else if ((paintrnd) == 115) {
                var paintpic = "https://i.imgur.com/X9bDdkA.png"
                var paintname = 'Africa paint'
            }
            else if ((paintrnd) == 116) {
                var paintpic = 'https://i.imgur.com/tY668p6.png'
                var paintname = 'Golden Star Paint'
            }
            else if ((paintrnd) == 117) {
                var paintpic = 'https://i.imgur.com/DHYlg2j.png'
                var paintname = 'Arachnid Paint'
            }
            else if ((paintrnd) == 118) {
                var paintpic = 'https://i.imgur.com/OwnToQT.png'
                var paintname = 'Liquid Metal Paint'
            }
            else if ((paintrnd) == 119) {
                var paintpic = "https://i.imgur.com/HL9nYPM.png"
                var paintname = 'Drought Paint'
            }
            else if ((paintrnd) == 120) {
                var paintpic = 'https://i.imgur.com/XB2ofuq.png'
                var paintname = 'Strawberry Paint'
            }
            else if ((paintrnd) == 121) {
                var paintpic = 'https://i.imgur.com/aozjomN.png'
                var paintname = 'Barber Shop Paint'
            }
            else if ((paintrnd) == 122) {
                var paintpic = 'https://i.imgur.com/zavV07Q.png'
                var paintname = 'Scandinavia Paint'
            }
            else if ((paintrnd) == 123) {
                var paintpic = "https://i.imgur.com/oajuf2p.png"
                var paintname = 'Lunar Soil Paint'
            }
            else if ((paintrnd) == 124) {
                var paintpic = 'https://i.imgur.com/9j5lgqs.png'
                var paintname = 'Rust Paint'
            }
            else if ((paintrnd) == 125) {
                var paintpic = 'https://i.imgur.com/jPblblx.png'
                var paintname = 'Steak Paint'
            }
            else if ((paintrnd) == 126) {
                var paintpic = "https://i.imgur.com/9Il5i8W.png"
                var paintname = 'Amber Paint'
            }
            else if ((paintrnd) == 127) {
                var paintpic = 'https://i.imgur.com/nbS4uGw.png'
                var paintname = 'Lime Paint'
            }
            else if ((paintrnd) == 128) {
                var paintpic = 'https://i.imgur.com/WKZEFHx.png'
                var paintname = 'Neuron Paint'
            }
            else if ((paintrnd) == 129) {
                var paintpic = 'https://i.imgur.com/HaXUxxY.png'
                var paintname = 'Domino Paint'
            }
            else if ((paintrnd) == 130) {
                var paintpic = "https://i.imgur.com/eMLcbdn.png"
                var paintname = 'Watercolour Paint'
            }
            else if ((paintrnd) == 131) {
                var paintpic = 'https://i.imgur.com/tjq2SF4.png'
                var paintname = 'Pajamas Paint'
            }
            else if ((paintrnd) == 132) {
                var paintpic = 'https://i.imgur.com/Ms5OK0z.png'
                var paintname = 'Vanadium Paint'
            }
            else if ((paintrnd) == 133) {
                var paintpic = 'https://i.imgur.com/FL8ISUB.png'
                var paintname = 'Glitch Paint'
            }
            else if ((paintrnd) == 134) {
                var paintpic = 'https://i.imgur.com/ecKmDEv.png'
                var paintname = 'Sunset Camoflage Paint'
            }
            else if ((paintrnd) == 135) {
                var paintpic = 'https://i.imgur.com/hxJFqQV.png'
                var paintname = 'All You Need Is Love Paint'
            }
            else if ((paintrnd) == 136) {
                var paintpic = "https://i.imgur.com/unj7X8g.png"
                var paintname = 'Zombie Paint'
            }
            else if ((paintrnd) == 137) {
                var paintpic = 'https://i.imgur.com/Lh4Hbqw.png'
                var paintname = 'Fire Of Valor Paint'
            }
            else if ((paintrnd) == 138) {
                var paintpic = 'https://i.imgur.com/CXUIMit.png'
                var paintname = 'Spangles Paint'
            }
            else if ((paintrnd) == 139) {
                var paintpic = 'https://i.imgur.com/4TYOOd1.png'
                var paintname = 'Snowflake Paint'
            }
            else if ((paintrnd) == 140) {
                var paintpic = "https://i.imgur.com/avubcYN.png"
                var paintname = 'Lilac Petals Paint'
            }
            else if ((paintrnd) == 141) {
                var paintpic = 'https://i.imgur.com/t6IM63n.png'
                var paintname = 'Retina Paint'
            }
            else if ((paintrnd) == 142) {
                var paintpic = 'https://i.imgur.com/xKCSDrf.png'
                var paintname = 'Chill Bro Paint'
            }
            else if ((paintrnd) == 143) {
                var paintpic = 'https://i.imgur.com/PTFjank.png'
                var paintname = 'Tanki In Moscow Paint'
            }
            else if ((paintrnd) == 144) {
                var paintpic = 'https://i.imgur.com/kBleN5n.png'
                var paintname = 'Secret Of The Aliens Paint'
            }
            else if ((paintrnd) == 145) {
                var paintpic = 'https://i.imgur.com/Z3l7dkO.png'
                var paintname = 'Pumpkins Paint'
            }
            else if ((paintrnd) == 146) {
                var paintpic = 'https://i.imgur.com/UVQ15W1.png'
                var paintname = 'Tropical Foliage Paint'
            }
            else if ((paintrnd) == 147) {
                var paintpic = 'https://i.imgur.com/Z2CoZDm.png'
                var paintname = 'Azure Paint'
            }
            else if ((paintrnd) == 148) {
                var paintpic = 'https://i.imgur.com/zXFanQF.png'
                var paintname = 'Gucciflage Paint'
            }
            else if ((paintrnd) == 149) {
                var paintpic = "https://i.imgur.com/GO4TIUt.png"
                var paintname = 'Hallucination Paint'
            }
            else if ((paintrnd) == 150) {
                var paintpic = 'https://i.imgur.com/GNTozmo.png'
                var paintname = 'Hypercube Paint'
            }
            else if ((paintrnd) == 151) {
                var paintpic = 'https://i.imgur.com/ZdIwfSe.png'
                var paintname = 'Kungar Ice Cave Paint'
            }
            else if ((paintrnd) == 152) {
                var paintpic = 'https://i.imgur.com/BVAcIa1.png'
                var paintname = 'Lollipop Paint'
            }
            else if ((paintrnd) == 153) {
                var paintpic = "https://i.imgur.com/8J3lAbb.png"
                var paintname = 'Lotus Paint'
            }
            else if ((paintrnd) == 154) {
                var paintpic = 'https://i.imgur.com/qCCohrO.png'
                var paintname = 'Monet Paint'
            }
            else if ((paintrnd) == 155) {
                var paintpic = 'https://i.imgur.com/2rEIlXV.png'
                var paintname = 'Paisley Flame Paint'
            }
            else if ((paintrnd) == 156) {
                var paintpic = "https://i.imgur.com/6QKNAeE.png"
                var paintname = 'Paisley Ice Paint'
            }
            else if ((paintrnd) == 157) {
                var paintpic = 'https://i.imgur.com/QimIWp2.png'
                var paintname = 'Peaks Paint'
            }
            else if ((paintrnd) == 158) {
                var paintpic = 'https://i.imgur.com/hniZLLO.png'
                var paintname = 'Phantom Paint'
            }
            else if ((paintrnd) == 159) {
                var paintpic = 'https://i.imgur.com/ugXhy8B.png'
                var paintname = 'Play Doh Paint'
            }
            else if ((paintrnd) == 160) {
                var paintpic = "https://i.imgur.com/VthKAsE.png"
                var paintname = 'Pop Art Paint'
            }
            else if ((paintrnd) == 161) {
                var paintpic = 'https://i.imgur.com/zblzcV1.png'
                var paintname = 'Potter Paint'
            }
            else if ((paintrnd) == 162) {
                var paintpic = 'https://i.imgur.com/JZ4Kpvg.png'
                var paintname = 'Pulsar Paint'
            }
            else if ((paintrnd) == 163) {
                var paintpic = 'https://i.imgur.com/SAKhlFD.png'
                var paintname = 'Ripple Paint'
            }
            else if ((paintrnd) == 164) {
                var paintpic = 'https://i.imgur.com/JdTLdR5.png'
                var paintname = 'Sillicate Paint'
            }
            else if ((paintrnd) == 165) {
                var paintpic = 'https://i.imgur.com/doBAp5o.png'
                var paintname = 'Sodoku Paint'
            }
            else if ((paintrnd) == 166) {
                var paintpic = "https://i.imgur.com/ZjdRIzn.png"
                var paintname = 'Zig Zag Paint'
            }
            else if ((paintrnd) == 167) {
                var paintpic = 'https://i.imgur.com/gRBmdwt.png'
                var paintname = 'Abstract Lines Paint'
            }
            else if ((paintrnd) == 168) {
                var paintpic = 'https://i.imgur.com/cwLwvQD.png'
                var paintname = 'Blue Squares Paint'
            }
            else if ((paintrnd) == 169) {
                var paintpic = 'https://i.imgur.com/3Vkacjq.png'
                var paintname = 'Condensed Milk Paint'
            }
            else if ((paintrnd) == 170) {
                var paintpic = 'https://i.imgur.com/KMgUWl2.png'
                var paintname = 'E236 Paint'
            }
            else if ((paintrnd) == 171) {
                var paintpic = "https://i.imgur.com/bBBo1Sz.png"
                var paintname = 'Feathers Paint'
            }
            else if ((paintrnd) == 172) {
                var paintpic = 'https://i.imgur.com/p5epSIk.png'
                var paintname = 'Fire Dragon Paint'
            }
            else if ((paintrnd) == 173) {
                var paintpic = 'https://i.imgur.com/IaVCbyi.png'
                var paintname = 'Megapolis Paint'
            }
            else if ((paintrnd) == 174) {
                var paintpic = 'https://i.imgur.com/j2ju8Mu.png'
                var paintname = 'Stained Glass Paint'
            }
            else if ((paintrnd) == 175) {
                var paintpic = 'https://i.imgur.com/ibHAEQI.png'
                var paintname = 'Thunderball Paint'
            }
            else if ((paintrnd) == 176) {
                var paintpic = 'https://i.imgur.com/lMaHubB.png'
                var paintname = 'Moonwalker Paint'
            }
            else if ((paintrnd) == 177) {
                var paintpic = 'https://i.imgur.com/M5Z5FWv.png'
                var paintname = 'Eternity Paint'
            }
            else if ((paintrnd) == 178) {
                var paintpic = "https://i.imgur.com/PhNXyXp.png"
                var paintname = 'Red Suit paint'
            }
            else if ((paintrnd) == 179) {
                var paintpic = 'https://i.imgur.com/PmvUxAg.png'
                var paintname = 'Wave Paint'
            }
            else if ((paintrnd) == 180) {
                var paintpic = 'https://i.imgur.com/FpgBtEZ.png'
                var paintname = 'Nightmare paint'
            }
            else if ((paintrnd) == 181) {
                var paintpic = "https://i.imgur.com/z8iOhJR.png"
                var paintname = 'Spectrum paint'
            }
            else if ((paintrnd) == 182) {
                var paintpic = 'https://i.imgur.com/dbnms0o.png'
                var paintname = 'Holiday Lights Paint'
            }
            else if ((paintrnd) == 183) {
                var paintpic = 'https://i.imgur.com/ZfVuulO.png'
                var paintname = 'Matrix paint'
            }
            else if ((paintrnd) == 184) {
                var paintpic = 'https://i.imgur.com/NJl5fCT.png'
                var paintname = 'Mosaic Paint'
            }
            else if ((paintrnd) == 185) {
                var paintpic = "https://i.imgur.com/gzaWRlk.png"
                var paintname = 'Vertigo paint'
            }
            else if ((paintrnd) == 186) {
                var paintpic = 'https://i.imgur.com/1TZ7Lmn.png'
                var paintname = 'Prodigi 2.0 Paint'
            }
            else if ((paintrnd) == 187) {
                var paintpic = 'https://i.imgur.com/dtykCud.png'
                var paintname = 'Beating Hearts Paint'
            }
            else if ((paintrnd) == 188) {
                var paintpic = "https://i.imgur.com/rMKC2xq.png"
                var paintname = 'Ginga paint'
            }
            else if ((paintrnd) == 189) {
                var paintpic = 'https://i.imgur.com/iOKfNEJ.png'
                var paintname = 'Magnolia Paint'
            }
            else if ((paintrnd) == 190) {
                var paintpic = 'https://i.imgur.com/7YHD4Dc.png'
                var paintname = 'Galaxy paint'
            }
            else if ((paintrnd) == 191) {
                var paintpic = 'https://i.imgur.com/pPYWKat.png'
                var paintname = 'Eruption Paint'
            }
            else if ((paintrnd) == 192) {
                var paintpic = "https://i.imgur.com/s3nJG76.png"
                var paintname = 'Siberian Tiger paint'
            }
            else if ((paintrnd) == 193) {
                var paintpic = 'https://i.imgur.com/JPZLhFw.png'
                var paintname = 'Secret Sauce Paint'
            }
            else if ((paintrnd) == 194) {
                var paintpic = 'https://i.imgur.com/gNll0nd.png'
                var paintname = 'Canyon Hero Paint'
            }
            else if ((paintrnd) == 195) {
                var paintpic = 'https://i.imgur.com/ldN5LLn.png'
                var paintname = 'Pastila Paint'
            }
            else if ((paintrnd) == 196) {
                var paintpic = "https://i.imgur.com/V6iKdpy.png"
                var paintname = 'Valour paint'
            }
            else if ((paintrnd) == 197) {
                var paintpic = 'https://i.imgur.com/jEGItOc.png'
                var paintname = 'Beholder Paint'
            }
            else if ((paintrnd) == 198) {
                var paintpic = 'https://i.imgur.com/JivLe7B.png'
                var paintname = 'Synesthesia paint'
            }
            else if ((paintrnd) == 199) {
                var paintpic = 'https://i.imgur.com/UM9U9zG.png'
                var paintname = 'Gears Paint'
            }
            else if ((paintrnd) == 200) {
                var paintpic = 'https://i.imgur.com/YiZ8IRR.png'
                var paintname = 'Raidioactive Jelly Paint'
            }
            else if ((paintrnd) == 201) {
                var paintpic = 'https://i.imgur.com/X0QGyIO.png'
                var paintname = 'Spinner Paint'
            }
            else if ((paintrnd) == 202) {
                var paintpic = "https://i.imgur.com/4okwQzH.png"
                var paintname = 'Tenticals paint'
            }
            else if ((paintrnd) == 203) {
                var paintpic = 'https://i.imgur.com/yYJLsJb.png'
                var paintname = 'LEDs Paint'
            }
            else if ((paintrnd) == 204) {
                var paintpic = 'https://i.imgur.com/kB8q8kQ.png'
                var paintname = 'Meteor Shower paint'
            }
            else if ((paintrnd) == 205) {
                var paintpic = 'https://i.imgur.com/xU1BuPf.png'
                var paintname = 'Fall Leaves paint'
            }
            else if ((paintrnd) == 206) {
                var paintpic = 'https://i.imgur.com/fwQKtYJ.png'
                var paintname = 'Electrohive paint'
            }
            else if ((paintrnd) == 207) {
                var paintpic = 'https://i.imgur.com/eX2ajC6.png'
                var paintname = 'Synth pop paint'
            }




            try {

                let embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} You chose a random combo`)
                    .setThumbnail(paintpic)
                    .setColor("#caaffd")
                    .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                    .setImage(turretpic)
                message.channel.send(embed)

                let embed2 = new Discord.RichEmbed()
                    .setThumbnail(dronepic)
                    .setColor("#caaffd")
                    .setImage(hullpic)
                    .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                message.channel.send(embed2)



            } catch (err) {
                console.log(err)
                if (err) {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} You chose a random combo`)
                        .setThumbnail(paintpic)
                        .setColor("#caaffd")
                        .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                        .setImage(turretpic)
                    message.channel.send(embed)

                    let embed2 = new Discord.RichEmbed()
                        .setThumbnail(dronepic)
                        .setColor("#caaffd")
                        .setImage(hullpic)
                        .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                    message.channel.send(embed2)
                }
            }
        }

        if (message.content == prefix + `combo m0`) {
            var turretrnd = Math.floor(Math.random() * 13) + 1;
            var hullrnd = Math.floor(Math.random() * 7) + 1;
            var paintrnd = Math.floor(Math.random() * 207) + 1;
            var moduelrnd = Math.floor(Math.random() * 14) + 1;
            var dronernd = Math.floor(Math.random() * 6) + 1;

            const array1 = [`<:BadgerM0:492795228328034316>`, `<:DolphinM0:492795227502018601>`, `<:EagleM0:492795228386754571>`, `<:FalconM0:492795229963943937>`, `<:FoxM0:492795231603916810>`, `<:GriffinM0:492795231859638282>`, `<:GrizzleyM0:492795232354566144>`, `<:LionM0:492795231947849739>`, `<:OcelotM0:492795231318704129>`, `<:OrkaM0:492795231423561733>`, `<:PantherM0:492795231595528192>`, `<:SharkM0:492795232430063636>`, `<:SpiderM0:492795231507447809>`, `<:WolfM0:492795231339675679>`]
            const array2 = [`<:BadgerM0:492795228328034316>`, `<:DolphinM0:492795227502018601>`, `<:EagleM0:492795228386754571>`, `<:FalconM0:492795229963943937>`, `<:FoxM0:492795231603916810>`, `<:GriffinM0:492795231859638282>`, `<:GrizzleyM0:492795232354566144>`, `<:LionM0:492795231947849739>`, `<:OcelotM0:492795231318704129>`, `<:OrkaM0:492795231423561733>`, `<:PantherM0:492795231595528192>`, `<:SharkM0:492795232430063636>`, `<:SpiderM0:492795231507447809>`, `<:WolfM0:492795231339675679>`]
            const array3 = [`<:BadgerM0:492795228328034316>`, `<:DolphinM0:492795227502018601>`, `<:EagleM0:492795228386754571>`, `<:FalconM0:492795229963943937>`, `<:FoxM0:492795231603916810>`, `<:GriffinM0:492795231859638282>`, `<:GrizzleyM0:492795232354566144>`, `<:LionM0:492795231947849739>`, `<:OcelotM0:492795231318704129>`, `<:OrkaM0:492795231423561733>`, `<:PantherM0:492795231595528192>`, `<:SharkM0:492795232430063636>`, `<:SpiderM0:492795231507447809>`, `<:WolfM0:492795231339675679>`]

            async function moduleRandomizer() {
                //without var/let/const
                array1random = array1[Math.floor(Math.random() * array1.length)];
                array2random = array2[Math.floor(Math.random() * array2.length)];
                array3random = array3[Math.floor(Math.random() * array3.length)];
                moduleChecker();
            }

            async function moduleChecker() {
                if ((array1random == array2random) || (array1random == array3random) || (array3random == array2random)) {
                    moduleRandomizer();
                } else {
                    module1 = array1random;
                    module2 = array2random;
                    module3 = array3random;
                }
            };

            moduleRandomizer();

            if (module1 == `<:BadgerM0:492795228328034316>`) {
                var module1name = `Freeze`
            }
            else if (module1 == `<:DolphinM0:492795227502018601>`) {
                var module1name = `Smoky`
            }
            else if (module1 == `<:EagleM0:492795228386754571>`) {
                var module1name = `Shaft`
            }
            else if (module1 == `<:FalconM0:492795229963943937>`) {
                var module1name = `Railgun`
            }
            else if (module1 == `<:FoxM0:492795231603916810>`) {
                var module1name = `Fire`
            }
            else if (module1 == `<:GriffinM0:492795231859638282>`) {
                var module1name = `Magnum`
            }
            else if (module1 == `<:GrizzleyM0:492795232354566144>`) {
                var module1name = `Thunder`
            }
            else if (module1 == `<:LionM0:492795231947849739>`) {
                var module1name = `Ricochet`
            }
            else if (module1 == `<:OcelotM0:492795231318704129>`) {
                var module1name = `Isida`
            }
            else if (module1 == `<:OrkaM0:492795231423561733>`) {
                var module1name = `Striker`
            }
            else if (module1 == `<:PantherM0:492795231595528192>`) {
                var module1name = `Twins`
            }
            else if (module1 == `<:SharkM0:492795232430063636>`) {
                var module1name = `Vulcan`
            }
            else if (module1 == `<:SpiderM0:492795231507447809>`) {
                var module1name = `Spider`
            }
            else if (module1 == `<:WolfM0:492795231339675679>`) {
                var module1name = `Hammer`
            }

            if (module2 == `<:BadgerM0:492795228328034316>`) {
                var module2name = `Freeze`
            }
            else if (module2 == `<:DolphinM0:492795227502018601>`) {
                var module2name = `Smoky`
            }
            else if (module2 == `<:EagleM0:492795228386754571>`) {
                var module2name = `Shaft`
            }
            else if (module2 == `<:FalconM0:492795229963943937>`) {
                var module2name = `Railgun`
            }
            else if (module2 == `<:FoxM0:492795231603916810>`) {
                var module2name = `Fire`
            }
            else if (module2 == `<:GriffinM0:492795231859638282>`) {
                var module2name = `Magnum`
            }
            else if (module2 == `<:GrizzleyM0:492795232354566144>`) {
                var module2name = `Thunder`
            }
            else if (module2 == `<:LionM0:492795231947849739>`) {
                var module2name = `Ricochet`
            }
            else if (module2 == `<:OcelotM0:492795231318704129>`) {
                var module2name = `Isida`
            }
            else if (module2 == `<:OrkaM0:492795231423561733>`) {
                var module2name = `Striker`
            }
            else if (module2 == `<:PantherM0:492795231595528192>`) {
                var module2name = `Twins`
            }
            else if (module2 == `<:SharkM0:492795232430063636>`) {
                var module2name = `Vulcan`
            }
            else if (module2 == `<:SpiderM0:492795231507447809>`) {
                var module2name = `Spider`
            }
            else if (module2 == `<:WolfM0:492795231339675679>`) {
                var module2name = `Hammer`
            }

            if (module3 == `<:BadgerM0:492795228328034316>`) {
                var module3name = `Freeze`
            }
            else if (module3 == `<:DolphinM0:492795227502018601>`) {
                var module3name = `Smoky`
            }
            else if (module3 == `<:EagleM0:492795228386754571>`) {
                var module3name = `Shaft`
            }
            else if (module3 == `<:FalconM0:492795229963943937>`) {
                var module3name = `Railgun`
            }
            else if (module3 == `<:FoxM0:492795231603916810>`) {
                var module3name = `Fire`
            }
            else if (module3 == `<:GriffinM0:492795231859638282>`) {
                var module3name = `Magnum`
            }
            else if (module3 == `<:GrizzleyM0:492795232354566144>`) {
                var module3name = `Thunder`
            }
            else if (module3 == `<:LionM0:492795231947849739>`) {
                var module3name = `Ricochet`
            }
            else if (module3 == `<:OcelotM0:492795231318704129>`) {
                var module3name = `Isida`
            }
            else if (module3 == `<:OrkaM0:492795231423561733>`) {
                var module3name = `Striker`
            }
            else if (module3 == `<:PantherM0:492795231595528192>`) {
                var module3name = `Twins`
            }
            else if (module3 == `<:SharkM0:492795232430063636>`) {
                var module3name = `Vulcan`
            }
            else if (module3 == `<:SpiderM0:492795231507447809>`) {
                var module3name = `Spider`
            }
            else if (module3 == `<:WolfM0:492795231339675679>`) {
                var module3name = `Hammer`
            }


            if (turretrnd == 1) {
                var turretpic = `https://imgur.com/hTgwFKA.png`
                var turretname = `Firebird`
            }
            else if (turretrnd == 2) {
                var turretpic = `https://imgur.com/oKgwg0O.png`
                var turretname = `Freeze`
            }
            else if (turretrnd == 3) {
                var turretpic = `https://imgur.com/1nutRhE.png`
                var turretname = `Isida`
            }
            else if (turretrnd == 4) {
                var turretpic = `https://imgur.com/lDKFx31.png`
                var turretname = `Hammer`
            }
            else if (turretrnd == 5) {
                var turretpic = `https://imgur.com/KTKLZgz.png`
                var turretname = `Twins`
            }
            else if (turretrnd == 6) {
                var turretpic = `https://imgur.com/nGF0QYF.png`
                var turretname = `Ricochet`
            }
            else if (turretrnd == 7) {
                var turretpic = `https://imgur.com/cmvskKH.png`
                var turretname = `Thunder`
            }
            else if (turretrnd == 8) {
                var turretpic = `https://imgur.com/JEqKcKk.png`
                var turretname = `Smoky`
            }
            else if (turretrnd == 9) {
                var turretpic = `https://imgur.com/GJLBElm.png`
                var turretname = `Striker`
            }
            else if (turretrnd == 10) {
                var turretpic = `https://imgur.com/5lNztJS.png`
                var turretname = `Vulcan`
            }
            else if (turretrnd == 11) {
                var turretpic = `https://imgur.com/N8FBRk2.png`
                var turretname = `Railgun`
            }
            else if (turretrnd == 12) {
                var turretpic = `https://imgur.com/pECxN1Z.png`
                var turretname = `Magnum`
            }
            else if (turretrnd == 13) {
                var turretpic = `https://imgur.com/T1ShWR3.png`
                var turretname = `Shaft`
            }

            if (hullrnd == 1) {
                var hullpic = `https://imgur.com/1abh4UV.png`
                var hullname = `Wasp`
            }
            else if (hullrnd == 2) {
                var hullpic = `https://imgur.com/JmfEIvL.png`
                var hullname = `Hornet`
            }
            else if (hullrnd == 3) {
                var hullpic = `https://imgur.com/NTPw94G.png`
                var hullname = `Hunter`
            }
            else if (hullrnd == 4) {
                var hullpic = `https://imgur.com/R24VFNr.png`
                var hullname = `Viking`
            }
            else if (hullrnd == 5) {
                var hullpic = `https://imgur.com/F7P5YsG.png`
                var hullname = `Dictator`
            }
            else if (hullrnd == 6) {
                var hullpic = `https://imgur.com/spb9O7y.png`
                var hullname = `Titan`
            }
            else if (hullrnd == 7) {
                var hullpic = `https://imgur.com/I2wsZxD.png`
                var hullname = `Mammoth`
            }


            if (dronernd == `1`) {
                var dronepic = `https://i.imgur.com/i4kLXUq.png`
                var dronename = `Assault`
            }
            else if (dronernd == `2`) {
                var dronepic = `https://i.imgur.com/GTx8XSC.png`
                var dronename = `Driver`
            }
            else if (dronernd == `3`) {
                var dronepic = `https://i.imgur.com/7OQTcCS.png`
                var dronename = `Engineer`
            }
            else if (dronernd == `4`) {
                var dronepic = `https://i.imgur.com/m7UNylf.png`
                var dronename = `Mechanic`
            }
            else if (dronernd == `5`) {
                var dronepic = `https://i.imgur.com/IQxEaxF.png`
                var dronename = `Supplier`
            }
            else if (dronernd == `6`) {
                var dronepic = `https://i.imgur.com/EREdvT0.png`
                var dronename = `Trooper`
            }


            if ((paintrnd) == 1) {
                var paintpic = 'https://i.imgur.com/Uu6IWdY.png'
                var paintname = 'Black Paint'
            }
            else if ((paintrnd) == 2) {
                var paintpic = 'https://i.imgur.com/bic1Mx7.png'
                var paintname = 'Red Paint'
            }
            else if ((paintrnd) == 3) {
                var paintpic = "https://i.imgur.com/B1icnUH.png"
                var paintname = 'Green Paint'
            }
            else if ((paintrnd) == 4) {
                var paintpic = 'https://i.imgur.com/UnU5gub.png'
                var paintname = 'White Paint'
            }
            else if ((paintrnd) == 5) {
                var paintpic = 'https://i.imgur.com/Xf7Z6zF.png'
                var paintname = 'Orange Paint'
            }
            else if ((paintrnd) == 6) {
                var paintpic = 'https://i.imgur.com/tzLiLAM.png'
                var paintname = 'Flora Paint'
            }
            else if ((paintrnd) == 7) {
                var paintpic = 'https://i.imgur.com/lTWZpIV.png'
                var paintname = 'Marine Paint'
            }
            else if ((paintrnd) == 8) {
                var paintpic = "https://i.imgur.com/n3hJ8ZH.png"
                var paintname = 'Swamp Paint'
            }
            else if ((paintrnd) == 9) {
                var paintpic = 'https://i.imgur.com/VTEu0X7.png'
                var paintname = 'Forester Paint'
            }
            else if ((paintrnd) == 10) {
                var paintpic = 'https://i.imgur.com/bTAEhiV.png'
                var paintname = 'Metallic Paint'
            }
            else if ((paintrnd) == 11) {
                var paintpic = 'https://i.imgur.com/yJcKJIM.png'
                var paintname = 'Lava Paint'
            }
            else if ((paintrnd) == 12) {
                var paintpic = 'https://i.imgur.com/JGd6ZeJ.png'
                var paintname = 'Lead Paint'
            }
            else if ((paintrnd) == 13) {
                var paintpic = "https://i.imgur.com/XchiKvr.png"
                var paintname = 'Alien 2.0 Paint'
            }
            else if ((paintrnd) == 14) {
                var paintpic = 'https://i.imgur.com/UzL3YNb.png'
                var paintname = 'Safari Paint'
            }
            else if ((paintrnd) == 15) {
                var paintpic = 'https://i.imgur.com/vokPLVg.png'
                var paintname = 'Dragon Paint'
            }
            else if ((paintrnd) == 16) {
                var paintpic = 'https://i.imgur.com/80gpeds.png'
                var paintname = 'Magma Paint'
            }
            else if ((paintrnd) == 17) {
                var paintpic = "https://i.imgur.com/etlhZOc.png"
                var paintname = 'Mary paint'
            }
            else if ((paintrnd) == 18) {
                var paintpic = 'https://i.imgur.com/8F4AIwU.png'
                var paintname = 'Sahara Paint'
            }
            else if ((paintrnd) == 19) {
                var paintpic = 'https://i.imgur.com/Vl0KN5R.png'
                var paintname = 'Night paint'
            }
            else if ((paintrnd) == 20) {
                var paintpic = 'https://i.imgur.com/2eihFkl.png'
                var paintname = 'In Love Paint'
            }
            else if ((paintrnd) == 21) {
                var paintpic = 'https://i.imgur.com/7btgslo.png'
                var paintname = 'Carbon Paint'
            }
            else if ((paintrnd) == 22) {
                var paintpic = "https://i.imgur.com/pi9uDgU.png"
                var paintname = 'Confetti Paint'
            }
            else if ((paintrnd) == 23) {
                var paintpic = 'https://i.imgur.com/2BYkeaM.png'
                var paintname = 'Alien 1.0 Paint'
            }
            else if ((paintrnd) == 24) {
                var paintpic = 'https://i.imgur.com/WWNYEHq.png'
                var paintname = 'Chainmail Paint'
            }
            else if ((paintrnd) == 25) {
                var paintpic = 'https://i.imgur.com/Qrb8OJD.png'
                var paintname = 'Dirty Paint'
            }
            else if ((paintrnd) == 26) {
                var paintpic = "https://i.imgur.com/4ieFQ2n.png"
                var paintname = 'Jaguar Paint'
            }
            else if ((paintrnd) == 27) {
                var paintpic = 'https://i.imgur.com/le65j8j.png'
                var paintname = 'Desert Paint'
            }
            else if ((paintrnd) == 28) {
                var paintpic = 'https://i.imgur.com/JADpZCD.png'
                var paintname = 'Guerrilla Paint'
            }
            else if ((paintrnd) == 29) {
                var paintpic = 'https://i.imgur.com/TqHwYqE.png'
                var paintname = 'Swash Paint'
            }
            else if ((paintrnd) == 30) {
                var paintpic = 'https://i.imgur.com/6LR05QB.png'
                var paintname = 'Harlequin Paint'
            }
            else if ((paintrnd) == 31) {
                var paintpic = "https://i.imgur.com/0pMnCb4.png"
                var paintname = 'Pixel Paint'
            }
            else if ((paintrnd) == 32) {
                var paintpic = 'https://i.imgur.com/5Y9P7Z9.png'
                var paintname = 'Corrosion Paint'
            }
            else if ((paintrnd) == 33) {
                var paintpic = 'https://i.imgur.com/P3Q6sk1.png'
                var paintname = 'Tundra Paint'
            }
            else if ((paintrnd) == 34) {
                var paintpic = 'https://i.imgur.com/XBejee5.png'
                var paintname = 'Vortex Paint'
            }
            else if ((paintrnd) == 35) {
                var paintpic = "https://i.imgur.com/qIqOt7g.png"
                var paintname = 'Pixel Heart Paint'
            }
            else if ((paintrnd) == 36) {
                var paintpic = 'https://i.imgur.com/YbND0oP.png'
                var paintname = 'Roger Paint'
            }
            else if ((paintrnd) == 37) {
                var paintpic = 'https://i.imgur.com/hun7Hs4.png'
                var paintname = 'Fracture Paint'
            }
            else if ((paintrnd) == 38) {
                var paintpic = 'https://i.imgur.com/za8gY6V.png'
                var paintname = 'Cedar Paint'
            }
            else if ((paintrnd) == 39) {
                var paintpic = 'https://i.imgur.com/x8KgVmd.png'
                var paintname = 'Python Paint'
            }
            else if ((paintrnd) == 40) {
                var paintpic = 'https://i.imgur.com/IVaOz5u.png'
                var paintname = 'Sakura Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = 'https://i.imgur.com/680JitP.png'
                var paintname = 'Grasslands Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = "https://i.imgur.com/yqXD0ZF.png"
                var paintname = 'Soft Flowers paint'
            }
            else if ((paintrnd) == 42) {
                var paintpic = 'https://i.imgur.com/W611QqD.png'
                var paintname = 'Electra Paint'
            }
            else if ((paintrnd) == 43) {
                var paintpic = 'https://i.imgur.com/ZMrsVTt.png'
                var paintname = 'Moss paint'
            }
            else if ((paintrnd) == 44) {
                var paintpic = 'https://i.imgur.com/nRipiA9.png'
                var paintname = 'First Love Paint'
            }
            else if ((paintrnd) == 45) {
                var paintpic = "https://i.imgur.com/Fgxd6gs.png"
                var paintname = 'Sandstone paint'
            }
            else if ((paintrnd) == 46) {
                var paintpic = 'https://i.imgur.com/6bHB1F2.png'
                var paintname = 'Spark Paint'
            }
            else if ((paintrnd) == 47) {
                var paintpic = 'https://i.imgur.com/04IAZ7n.png'
                var paintname = 'Jeans paint'
            }
            else if ((paintrnd) == 48) {
                var paintpic = 'https://i.imgur.com/TQX4ePk.png'
                var paintname = 'Digital Paint'
            }
            else if ((paintrnd) == 49) {
                var paintpic = 'https://i.imgur.com/DTiOYfs.png'
                var paintname = 'Rustle Paint'
            }
            else if ((paintrnd) == 50) {
                var paintpic = "https://i.imgur.com/sG7HBJS.png"
                var paintname = 'Blacksmith Paint'
            }
            else if ((paintrnd) == 51) {
                var paintpic = 'https://i.imgur.com/y1oy0EJ.png'
                var paintname = 'Hohloma Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/UedBFsb.png'
                var paintname = 'Loam Paint'
            }
            else if ((paintrnd) == 53) {
                var paintpic = 'https://i.imgur.com/uLQ6Lkv.png'
                var paintname = 'Rhino Paint'
            }
            else if ((paintrnd) == 54) {
                var paintpic = "https://i.imgur.com/DfNAcFt.png"
                var paintname = 'Winter Paint'
            }
            else if ((paintrnd) == 55) {
                var paintpic = 'https://i.imgur.com/655k2TY.png'
                var paintname = 'Urban Paint'
            }
            else if ((paintrnd) == 56) {
                var paintpic = 'https://i.imgur.com/KEnNc7l.png'
                var paintname = 'Sweater Paint'
            }
            else if ((paintrnd) == 57) {
                var paintpic = 'https://i.imgur.com/Uc2xStT.png'
                var paintname = 'Atom Paint'
            }
            else if ((paintrnd) == 58) {
                var paintpic = 'https://i.imgur.com/qvAsqjh.png'
                var paintname = 'Savanna Paint'
            }
            else if ((paintrnd) == 59) {
                var paintpic = "https://i.imgur.com/Z6anuHd.png"
                var paintname = 'Cherry Paint'
            }
            else if ((paintrnd) == 60) {
                var paintpic = 'https://i.imgur.com/B7i6beQ.png'
                var paintname = 'Emerald Paint'
            }
            else if ((paintrnd) == 61) {
                var paintpic = 'https://i.imgur.com/QtINXHI.png'
                var paintname = 'Ibris Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/pns89xU.png'
                var paintname = 'Disco Paint'
            }
            else if ((paintrnd) == 63) {
                var paintpic = "https://i.imgur.com/1YO1rpg.png"
                var paintname = 'Mars Paint'
            }
            else if ((paintrnd) == 64) {
                var paintpic = 'https://i.imgur.com/08PvYck.png'
                var paintname = 'Hive Paint'
            }
            else if ((paintrnd) == 65) {
                var paintpic = 'https://i.imgur.com/ZBYZ8bQ.png'
                var paintname = 'Inferno Paint'
            }
            else if ((paintrnd) == 66) {
                var paintpic = 'https://i.imgur.com/BIrUhHg.png'
                var paintname = 'Jade Paint'
            }
            else if ((paintrnd) == 67) {
                var paintpic = 'https://i.imgur.com/G4LTzGF.png'
                var paintname = 'Tiger Paint'
            }
            else if ((paintrnd) == 68) {
                var paintpic = "https://i.imgur.com/7D9zmjy.png"
                var paintname = 'Kaleidoscope Paint'
            }
            else if ((paintrnd) == 69) {
                var paintpic = 'https://i.imgur.com/Uk1Epds.png'
                var paintname = 'Taiga Paint'
            }
            else if ((paintrnd) == 70) {
                var paintpic = 'https://i.imgur.com/BA79PyV.png'
                var paintname = 'Red Urban Paint'
            }
            else if ((paintrnd) == 71) {
                var paintpic = 'https://i.imgur.com/lVA00HV.png'
                var paintname = 'Nano Paint'
            }
            else if ((paintrnd) == 72) {
                var paintpic = "https://i.imgur.com/VFTr1Vm.png"
                var paintname = 'Prodigi Paint'
            }
            else if ((paintrnd) == 73) {
                var paintpic = 'https://i.imgur.com/isv4C0u.png'
                var paintname = 'Rock Paint'
            }
            else if ((paintrnd) == 74) {
                var paintpic = 'https://i.imgur.com/pKcu3TS.png'
                var paintname = 'Raccoon Paint'
            }
            else if ((paintrnd) == 75) {
                var paintpic = 'https://i.imgur.com/KzNkIXj.png'
                var paintname = 'Needle Paint'
            }
            else if ((paintrnd) == 76) {
                var paintpic = 'https://i.imgur.com/ggGlJGu.png'
                var paintname = 'Picasso Paint'
            }
            else if ((paintrnd) == 78) {
                var paintpic = 'https://i.imgur.com/reDTcBH.png'
                var paintname = 'Australia Paint'
            }
            else if ((paintrnd) == 79) {
                var paintpic = 'https://i.imgur.com/AJQrwyi.png'
                var paintname = 'Belgium Paint'
            }
            else if ((paintrnd) == 80) {
                var paintpic = 'https://i.imgur.com/958evYX.png'
                var paintname = 'Brazil Paint'
            }
            else if ((paintrnd) == 81) {
                var paintpic = 'https://i.imgur.com/7Jt63vS.png'
                var paintname = 'Colombia Paint'
            }
            else if ((paintrnd) == 82) {
                var paintpic = 'https://i.imgur.com/iVNsjXY.png'
                var paintname = 'South Korea Paint'
            }
            else if ((paintrnd) == 83) {
                var paintpic = 'https://i.imgur.com/PYRmJIp.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 84) {
                var paintpic = 'https://i.imgur.com/7cYZu1I.png'
                var paintname = 'Croatia Paint'
            }
            else if ((paintrnd) == 85) {
                var paintpic = 'https://i.imgur.com/wvYQSXa.png'
                var paintname = 'Costa Rica Paint'
            }
            else if ((paintrnd) == 86) {
                var paintpic = 'https://i.imgur.com/NVIdw9e.png'
                var paintname = 'Egypt Paint'
            }
            else if ((paintrnd) == 87) {
                var paintpic = 'https://i.imgur.com/Jn5mrQI.png'
                var paintname = 'England Paint'
            }
            else if ((paintrnd) == 88) {
                var paintpic = 'https://i.imgur.com/XVrmTAE.png'
                var paintname = 'France Paint'
            }
            else if ((paintrnd) == 89) {
                var paintpic = 'https://i.imgur.com/7IU5kHG.png'
                var paintname = 'Iceland Paint'
            }
            else if ((paintrnd) == 90) {
                var paintpic = 'https://i.imgur.com/JCTfffl.png'
                var paintname = 'Germany Paint'
            }
            else if ((paintrnd) == 91) {
                var paintpic = 'https://i.imgur.com/0KgtBsx.png'
                var paintname = 'Iran Paint'
            }
            else if ((paintrnd) == 92) {
                var paintpic = 'https://i.imgur.com/6RzUNAy.png'
                var paintname = 'Japan Paint'
            }
            else if ((paintrnd) == 93) {
                var paintpic = 'https://i.imgur.com/ifrbtMe.png'
                var paintname = 'Mexico Paint'
            }
            else if ((paintrnd) == 94) {
                var paintpic = 'https://i.imgur.com/DPA9Bil.png'
                var paintname = 'Morocco Paint'
            }
            else if ((paintrnd) == 95) {
                var paintpic = 'https://i.imgur.com/bqxX9er.png'
                var paintname = 'Panama Paint'
            }
            else if ((paintrnd) == 96) {
                var paintpic = 'https://i.imgur.com/ZQLGlOC.png'
                var paintname = 'Nigeria Paint'
            }
            else if ((paintrnd) == 97) {
                var paintpic = 'https://i.imgur.com/lkZmpvy.png'
                var paintname = 'Peru Paint'
            }
            else if ((paintrnd) == 98) {
                var paintpic = 'https://i.imgur.com/rF67XB7.png'
                var paintname = 'Portugal Paint'
            }
            else if ((paintrnd) == 99) {
                var paintpic = 'https://i.imgur.com/32jmRY5.png'
                var paintname = 'Poland Paint'
            }
            else if ((paintrnd) == 100) {
                var paintpic = 'https://i.imgur.com/aSyZVyl.png'
                var paintname = 'Russia Paint'
            }
            else if ((paintrnd) == 101) {
                var paintpic = 'https://i.imgur.com/0pZ8POK.png'
                var paintname = 'Saudi Arabia Paint'
            }
            else if ((paintrnd) == 102) {
                var paintpic = 'https://i.imgur.com/cvBh12Z.png'
                var paintname = 'Senagal Paint'
            }
            else if ((paintrnd) == 103) {
                var paintpic = 'https://i.imgur.com/Xp5wtvv.png'
                var paintname = 'Serbia Paint'
            }
            else if ((paintrnd) == 104) {
                var paintpic = 'https://i.imgur.com/o7dBXh6.png'
                var paintname = 'Sweden Paint'
            }
            else if ((paintrnd) == 105) {
                var paintpic = 'https://i.imgur.com/PkWhBUK.png'
                var paintname = 'Spain Paint'
            }
            else if ((paintrnd) == 106) {
                var paintpic = 'https://i.imgur.com/xYYxCTR.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 107) {
                var paintpic = 'https://i.imgur.com/59R91Q0.png'
                var paintname = 'Tunisa Paint'
            }
            else if ((paintrnd) == 108) {
                var paintpic = 'https://i.imgur.com/3LRdNAn.png'
                var paintname = 'Uruguay Paint'
            }
            else if ((paintrnd) == 109) {
                var paintpic = 'https://i.imgur.com/x2nlYUX.png'
                var paintname = 'Space Paint'
            }
            else if ((paintrnd) == 110) {
                var paintpic = 'https://i.imgur.com/wW7ycng.png'
                var paintname = 'Frost Paint'
            }
            else if ((paintrnd) == 111) {
                var paintpic = "https://i.imgur.com/TMTTgam.png"
                var paintname = 'Graffiti paint'
            }
            else if ((paintrnd) == 112) {
                var paintpic = 'https://i.imgur.com/E0Z6QA5.png'
                var paintname = 'Zeus Paint'
            }
            else if ((paintrnd) == 113) {
                var paintpic = 'https://i.imgur.com/NoaIyLi.png'
                var paintname = 'Clay paint'
            }
            else if ((paintrnd) == 114) {
                var paintpic = 'https://i.imgur.com/IgIJGLP.png'
                var paintname = 'Lumberjack Paint'
            }
            else if ((paintrnd) == 115) {
                var paintpic = "https://i.imgur.com/X9bDdkA.png"
                var paintname = 'Africa paint'
            }
            else if ((paintrnd) == 116) {
                var paintpic = 'https://i.imgur.com/tY668p6.png'
                var paintname = 'Golden Star Paint'
            }
            else if ((paintrnd) == 117) {
                var paintpic = 'https://i.imgur.com/DHYlg2j.png'
                var paintname = 'Arachnid Paint'
            }
            else if ((paintrnd) == 118) {
                var paintpic = 'https://i.imgur.com/OwnToQT.png'
                var paintname = 'Liquid Metal Paint'
            }
            else if ((paintrnd) == 119) {
                var paintpic = "https://i.imgur.com/HL9nYPM.png"
                var paintname = 'Drought Paint'
            }
            else if ((paintrnd) == 120) {
                var paintpic = 'https://i.imgur.com/XB2ofuq.png'
                var paintname = 'Strawberry Paint'
            }
            else if ((paintrnd) == 121) {
                var paintpic = 'https://i.imgur.com/aozjomN.png'
                var paintname = 'Barber Shop Paint'
            }
            else if ((paintrnd) == 122) {
                var paintpic = 'https://i.imgur.com/zavV07Q.png'
                var paintname = 'Scandinavia Paint'
            }
            else if ((paintrnd) == 123) {
                var paintpic = "https://i.imgur.com/oajuf2p.png"
                var paintname = 'Lunar Soil Paint'
            }
            else if ((paintrnd) == 124) {
                var paintpic = 'https://i.imgur.com/9j5lgqs.png'
                var paintname = 'Rust Paint'
            }
            else if ((paintrnd) == 125) {
                var paintpic = 'https://i.imgur.com/jPblblx.png'
                var paintname = 'Steak Paint'
            }
            else if ((paintrnd) == 126) {
                var paintpic = "https://i.imgur.com/9Il5i8W.png"
                var paintname = 'Amber Paint'
            }
            else if ((paintrnd) == 127) {
                var paintpic = 'https://i.imgur.com/nbS4uGw.png'
                var paintname = 'Lime Paint'
            }
            else if ((paintrnd) == 128) {
                var paintpic = 'https://i.imgur.com/WKZEFHx.png'
                var paintname = 'Neuron Paint'
            }
            else if ((paintrnd) == 129) {
                var paintpic = 'https://i.imgur.com/HaXUxxY.png'
                var paintname = 'Domino Paint'
            }
            else if ((paintrnd) == 130) {
                var paintpic = "https://i.imgur.com/eMLcbdn.png"
                var paintname = 'Watercolour Paint'
            }
            else if ((paintrnd) == 131) {
                var paintpic = 'https://i.imgur.com/tjq2SF4.png'
                var paintname = 'Pajamas Paint'
            }
            else if ((paintrnd) == 132) {
                var paintpic = 'https://i.imgur.com/Ms5OK0z.png'
                var paintname = 'Vanadium Paint'
            }
            else if ((paintrnd) == 133) {
                var paintpic = 'https://i.imgur.com/FL8ISUB.png'
                var paintname = 'Glitch Paint'
            }
            else if ((paintrnd) == 134) {
                var paintpic = 'https://i.imgur.com/ecKmDEv.png'
                var paintname = 'Sunset Camoflage Paint'
            }
            else if ((paintrnd) == 135) {
                var paintpic = 'https://i.imgur.com/hxJFqQV.png'
                var paintname = 'All You Need Is Love Paint'
            }
            else if ((paintrnd) == 136) {
                var paintpic = "https://i.imgur.com/unj7X8g.png"
                var paintname = 'Zombie Paint'
            }
            else if ((paintrnd) == 137) {
                var paintpic = 'https://i.imgur.com/Lh4Hbqw.png'
                var paintname = 'Fire Of Valor Paint'
            }
            else if ((paintrnd) == 138) {
                var paintpic = 'https://i.imgur.com/CXUIMit.png'
                var paintname = 'Spangles Paint'
            }
            else if ((paintrnd) == 139) {
                var paintpic = 'https://i.imgur.com/4TYOOd1.png'
                var paintname = 'Snowflake Paint'
            }
            else if ((paintrnd) == 140) {
                var paintpic = "https://i.imgur.com/avubcYN.png"
                var paintname = 'Lilac Petals Paint'
            }
            else if ((paintrnd) == 141) {
                var paintpic = 'https://i.imgur.com/t6IM63n.png'
                var paintname = 'Retina Paint'
            }
            else if ((paintrnd) == 142) {
                var paintpic = 'https://i.imgur.com/xKCSDrf.png'
                var paintname = 'Chill Bro Paint'
            }
            else if ((paintrnd) == 143) {
                var paintpic = 'https://i.imgur.com/PTFjank.png'
                var paintname = 'Tanki In Moscow Paint'
            }
            else if ((paintrnd) == 144) {
                var paintpic = 'https://i.imgur.com/kBleN5n.png'
                var paintname = 'Secret Of The Aliens Paint'
            }
            else if ((paintrnd) == 145) {
                var paintpic = 'https://i.imgur.com/Z3l7dkO.png'
                var paintname = 'Pumpkins Paint'
            }
            else if ((paintrnd) == 146) {
                var paintpic = 'https://i.imgur.com/UVQ15W1.png'
                var paintname = 'Tropical Foliage Paint'
            }
            else if ((paintrnd) == 147) {
                var paintpic = 'https://i.imgur.com/Z2CoZDm.png'
                var paintname = 'Azure Paint'
            }
            else if ((paintrnd) == 148) {
                var paintpic = 'https://i.imgur.com/zXFanQF.png'
                var paintname = 'Gucciflage Paint'
            }
            else if ((paintrnd) == 149) {
                var paintpic = "https://i.imgur.com/GO4TIUt.png"
                var paintname = 'Hallucination Paint'
            }
            else if ((paintrnd) == 150) {
                var paintpic = 'https://i.imgur.com/GNTozmo.png'
                var paintname = 'Hypercube Paint'
            }
            else if ((paintrnd) == 151) {
                var paintpic = 'https://i.imgur.com/ZdIwfSe.png'
                var paintname = 'Kungar Ice Cave Paint'
            }
            else if ((paintrnd) == 152) {
                var paintpic = 'https://i.imgur.com/BVAcIa1.png'
                var paintname = 'Lollipop Paint'
            }
            else if ((paintrnd) == 153) {
                var paintpic = "https://i.imgur.com/8J3lAbb.png"
                var paintname = 'Lotus Paint'
            }
            else if ((paintrnd) == 154) {
                var paintpic = 'https://i.imgur.com/qCCohrO.png'
                var paintname = 'Monet Paint'
            }
            else if ((paintrnd) == 155) {
                var paintpic = 'https://i.imgur.com/2rEIlXV.png'
                var paintname = 'Paisley Flame Paint'
            }
            else if ((paintrnd) == 156) {
                var paintpic = "https://i.imgur.com/6QKNAeE.png"
                var paintname = 'Paisley Ice Paint'
            }
            else if ((paintrnd) == 157) {
                var paintpic = 'https://i.imgur.com/QimIWp2.png'
                var paintname = 'Peaks Paint'
            }
            else if ((paintrnd) == 158) {
                var paintpic = 'https://i.imgur.com/hniZLLO.png'
                var paintname = 'Phantom Paint'
            }
            else if ((paintrnd) == 159) {
                var paintpic = 'https://i.imgur.com/ugXhy8B.png'
                var paintname = 'Play Doh Paint'
            }
            else if ((paintrnd) == 160) {
                var paintpic = "https://i.imgur.com/VthKAsE.png"
                var paintname = 'Pop Art Paint'
            }
            else if ((paintrnd) == 161) {
                var paintpic = 'https://i.imgur.com/zblzcV1.png'
                var paintname = 'Potter Paint'
            }
            else if ((paintrnd) == 162) {
                var paintpic = 'https://i.imgur.com/JZ4Kpvg.png'
                var paintname = 'Pulsar Paint'
            }
            else if ((paintrnd) == 163) {
                var paintpic = 'https://i.imgur.com/SAKhlFD.png'
                var paintname = 'Ripple Paint'
            }
            else if ((paintrnd) == 164) {
                var paintpic = 'https://i.imgur.com/JdTLdR5.png'
                var paintname = 'Sillicate Paint'
            }
            else if ((paintrnd) == 165) {
                var paintpic = 'https://i.imgur.com/doBAp5o.png'
                var paintname = 'Sodoku Paint'
            }
            else if ((paintrnd) == 166) {
                var paintpic = "https://i.imgur.com/ZjdRIzn.png"
                var paintname = 'Zig Zag Paint'
            }
            else if ((paintrnd) == 167) {
                var paintpic = 'https://i.imgur.com/gRBmdwt.png'
                var paintname = 'Abstract Lines Paint'
            }
            else if ((paintrnd) == 168) {
                var paintpic = 'https://i.imgur.com/cwLwvQD.png'
                var paintname = 'Blue Squares Paint'
            }
            else if ((paintrnd) == 169) {
                var paintpic = 'https://i.imgur.com/3Vkacjq.png'
                var paintname = 'Condensed Milk Paint'
            }
            else if ((paintrnd) == 170) {
                var paintpic = 'https://i.imgur.com/KMgUWl2.png'
                var paintname = 'E236 Paint'
            }
            else if ((paintrnd) == 171) {
                var paintpic = "https://i.imgur.com/bBBo1Sz.png"
                var paintname = 'Feathers Paint'
            }
            else if ((paintrnd) == 172) {
                var paintpic = 'https://i.imgur.com/p5epSIk.png'
                var paintname = 'Fire Dragon Paint'
            }
            else if ((paintrnd) == 173) {
                var paintpic = 'https://i.imgur.com/IaVCbyi.png'
                var paintname = 'Megapolis Paint'
            }
            else if ((paintrnd) == 174) {
                var paintpic = 'https://i.imgur.com/j2ju8Mu.png'
                var paintname = 'Stained Glass Paint'
            }
            else if ((paintrnd) == 175) {
                var paintpic = 'https://i.imgur.com/ibHAEQI.png'
                var paintname = 'Thunderball Paint'
            }
            else if ((paintrnd) == 176) {
                var paintpic = 'https://i.imgur.com/lMaHubB.png'
                var paintname = 'Moonwalker Paint'
            }
            else if ((paintrnd) == 177) {
                var paintpic = 'https://i.imgur.com/M5Z5FWv.png'
                var paintname = 'Eternity Paint'
            }
            else if ((paintrnd) == 178) {
                var paintpic = "https://i.imgur.com/PhNXyXp.png"
                var paintname = 'Red Suit paint'
            }
            else if ((paintrnd) == 179) {
                var paintpic = 'https://i.imgur.com/PmvUxAg.png'
                var paintname = 'Wave Paint'
            }
            else if ((paintrnd) == 180) {
                var paintpic = 'https://i.imgur.com/FpgBtEZ.png'
                var paintname = 'Nightmare paint'
            }
            else if ((paintrnd) == 181) {
                var paintpic = "https://i.imgur.com/z8iOhJR.png"
                var paintname = 'Spectrum paint'
            }
            else if ((paintrnd) == 182) {
                var paintpic = 'https://i.imgur.com/dbnms0o.png'
                var paintname = 'Holiday Lights Paint'
            }
            else if ((paintrnd) == 183) {
                var paintpic = 'https://i.imgur.com/ZfVuulO.png'
                var paintname = 'Matrix paint'
            }
            else if ((paintrnd) == 184) {
                var paintpic = 'https://i.imgur.com/NJl5fCT.png'
                var paintname = 'Mosaic Paint'
            }
            else if ((paintrnd) == 185) {
                var paintpic = "https://i.imgur.com/gzaWRlk.png"
                var paintname = 'Vertigo paint'
            }
            else if ((paintrnd) == 186) {
                var paintpic = 'https://i.imgur.com/1TZ7Lmn.png'
                var paintname = 'Prodigi 2.0 Paint'
            }
            else if ((paintrnd) == 187) {
                var paintpic = 'https://i.imgur.com/dtykCud.png'
                var paintname = 'Beating Hearts Paint'
            }
            else if ((paintrnd) == 188) {
                var paintpic = "https://i.imgur.com/rMKC2xq.png"
                var paintname = 'Ginga paint'
            }
            else if ((paintrnd) == 189) {
                var paintpic = 'https://i.imgur.com/iOKfNEJ.png'
                var paintname = 'Magnolia Paint'
            }
            else if ((paintrnd) == 190) {
                var paintpic = 'https://i.imgur.com/7YHD4Dc.png'
                var paintname = 'Galaxy paint'
            }
            else if ((paintrnd) == 191) {
                var paintpic = 'https://i.imgur.com/pPYWKat.png'
                var paintname = 'Eruption Paint'
            }
            else if ((paintrnd) == 192) {
                var paintpic = "https://i.imgur.com/s3nJG76.png"
                var paintname = 'Siberian Tiger paint'
            }
            else if ((paintrnd) == 193) {
                var paintpic = 'https://i.imgur.com/JPZLhFw.png'
                var paintname = 'Secret Sauce Paint'
            }
            else if ((paintrnd) == 194) {
                var paintpic = 'https://i.imgur.com/gNll0nd.png'
                var paintname = 'Canyon Hero Paint'
            }
            else if ((paintrnd) == 195) {
                var paintpic = 'https://i.imgur.com/ldN5LLn.png'
                var paintname = 'Pastila Paint'
            }
            else if ((paintrnd) == 196) {
                var paintpic = "https://i.imgur.com/V6iKdpy.png"
                var paintname = 'Valour paint'
            }
            else if ((paintrnd) == 197) {
                var paintpic = 'https://i.imgur.com/jEGItOc.png'
                var paintname = 'Beholder Paint'
            }
            else if ((paintrnd) == 198) {
                var paintpic = 'https://i.imgur.com/JivLe7B.png'
                var paintname = 'Synesthesia paint'
            }
            else if ((paintrnd) == 199) {
                var paintpic = 'https://i.imgur.com/UM9U9zG.png'
                var paintname = 'Gears Paint'
            }
            else if ((paintrnd) == 200) {
                var paintpic = 'https://i.imgur.com/YiZ8IRR.png'
                var paintname = 'Raidioactive Jelly Paint'
            }
            else if ((paintrnd) == 201) {
                var paintpic = 'https://i.imgur.com/X0QGyIO.png'
                var paintname = 'Spinner Paint'
            }
            else if ((paintrnd) == 202) {
                var paintpic = "https://i.imgur.com/4okwQzH.png"
                var paintname = 'Tenticals paint'
            }
            else if ((paintrnd) == 203) {
                var paintpic = 'https://i.imgur.com/yYJLsJb.png'
                var paintname = 'LEDs Paint'
            }
            else if ((paintrnd) == 204) {
                var paintpic = 'https://i.imgur.com/kB8q8kQ.png'
                var paintname = 'Meteor Shower paint'
            }
            else if ((paintrnd) == 205) {
                var paintpic = 'https://i.imgur.com/xU1BuPf.png'
                var paintname = 'Fall Leaves paint'
            }
            else if ((paintrnd) == 206) {
                var paintpic = 'https://i.imgur.com/fwQKtYJ.png'
                var paintname = 'Electrohive paint'
            }
            else if ((paintrnd) == 207) {
                var paintpic = 'https://i.imgur.com/eX2ajC6.png'
                var paintname = 'Synth pop paint'
            }




            try {

                let embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} You chose a random combo`)
                    .setThumbnail(paintpic)
                    .setColor("#caaffd")
                    .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                    .setImage(turretpic)
                message.channel.send(embed)

                let embed2 = new Discord.RichEmbed()
                    .setThumbnail(dronepic)
                    .setColor("#caaffd")
                    .setImage(hullpic)
                    .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                message.channel.send(embed2)



            } catch (err) {
                console.log(err)
                if (err) {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} You chose a random combo`)
                        .setThumbnail(paintpic)
                        .setColor("#caaffd")
                        .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                        .setImage(turretpic)
                    message.channel.send(embed)

                    let embed2 = new Discord.RichEmbed()
                        .setThumbnail(dronepic)
                        .setColor("#caaffd")
                        .setImage(hullpic)
                        .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                    message.channel.send(embed2)
                }
            }


        }

        if (message.content == prefix + `combo m1`) {
            var turretrnd = Math.floor(Math.random() * 13) + 1;
            var hullrnd = Math.floor(Math.random() * 7) + 1;
            var paintrnd = Math.floor(Math.random() * 207) + 1;
            var moduelrnd = Math.floor(Math.random() * 14) + 1;
            var dronernd = Math.floor(Math.random() * 6) + 1;


            const array1 = [`<:BadgerM1:492795071809191936>`, `<:DolphinM1:492795071452807183>`, `<:EagleM1:492795071846940672>`, `<:FalconM1:492795071234834443>`, `<:FoxM1:492795071436029973>`, `<:GriffinM1:492795072023101450>`, `<:GrizzleyM1:492795071050285058>`, `<:LionM1:492795071607996416>`, `<:OcelotM1:492795071297617938>`, `<:OrkaM1:492795071587024906>`, `<:PantherM1:492795071260000256>`, `<:SharkM1:492795071620579343>`, `<:SpiderM1:492795071398412289>`, `<:WolfM1:492795071545081856>`]
            const array2 = [`<:BadgerM1:492795071809191936>`, `<:DolphinM1:492795071452807183>`, `<:EagleM1:492795071846940672>`, `<:FalconM1:492795071234834443>`, `<:FoxM1:492795071436029973>`, `<:GriffinM1:492795072023101450>`, `<:GrizzleyM1:492795071050285058>`, `<:LionM1:492795071607996416>`, `<:OcelotM1:492795071297617938>`, `<:OrkaM1:492795071587024906>`, `<:PantherM1:492795071260000256>`, `<:SharkM1:492795071620579343>`, `<:SpiderM1:492795071398412289>`, `<:WolfM1:492795071545081856>`]
            const array3 = [`<:BadgerM1:492795071809191936>`, `<:DolphinM1:492795071452807183>`, `<:EagleM1:492795071846940672>`, `<:FalconM1:492795071234834443>`, `<:FoxM1:492795071436029973>`, `<:GriffinM1:492795072023101450>`, `<:GrizzleyM1:492795071050285058>`, `<:LionM1:492795071607996416>`, `<:OcelotM1:492795071297617938>`, `<:OrkaM1:492795071587024906>`, `<:PantherM1:492795071260000256>`, `<:SharkM1:492795071620579343>`, `<:SpiderM1:492795071398412289>`, `<:WolfM1:492795071545081856>`]

            async function moduleRandomizer() {
                //without var/let/const
                array1random = array1[Math.floor(Math.random() * array1.length)];
                array2random = array2[Math.floor(Math.random() * array2.length)];
                array3random = array3[Math.floor(Math.random() * array3.length)];
                moduleChecker();
            }

            async function moduleChecker() {
                if ((array1random == array2random) || (array1random == array3random) || (array3random == array2random)) {
                    moduleRandomizer();
                } else {
                    module1 = array1random;
                    module2 = array2random;
                    module3 = array3random;
                }
            };

            moduleRandomizer();

            if (module1 == `<:BadgerM1:492795071809191936>`) {
                var module1name = `Freeze`
            }
            else if (module1 == `<:DolphinM1:492795071452807183>`) {
                var module1name = `Smoky`
            }
            else if (module1 == `<:EagleM1:492795071846940672>`) {
                var module1name = `Shaft`
            }
            else if (module1 == `<:FalconM1:492795071234834443>`) {
                var module1name = `Railgun`
            }
            else if (module1 == `<:FoxM1:492795071436029973>`) {
                var module1name = `Fire`
            }
            else if (module1 == `<:GriffinM1:492795072023101450>`) {
                var module1name = `Magnum`
            }
            else if (module1 == `<:GrizzleyM1:492795071050285058>`) {
                var module1name = `Thunder`
            }
            else if (module1 == `<:LionM1:492795071607996416>`) {
                var module1name = `Ricochet`
            }
            else if (module1 == `<:OcelotM1:492795071297617938>`) {
                var module1name = `Isida`
            }
            else if (module1 == `<:OrkaM1:492795071587024906>`) {
                var module1name = `Striker`
            }
            else if (module1 == `<:PantherM1:492795071260000256>`) {
                var module1name = `Twins`
            }
            else if (module1 == `<:SharkM1:492795071620579343>`) {
                var module1name = `Vulcan`
            }
            else if (module1 == `<:SpiderM1:492795071398412289>`) {
                var module1name = `Spider`
            }
            else if (module1 == `<:WolfM1:492795071545081856>`) {
                var module1name = `Hammer`
            }

            if (module2 == `<:BadgerM1:492795071809191936>`) {
                var module2name = `Freeze`
            }
            else if (module2 == `<:DolphinM1:492795071452807183>`) {
                var module2name = `Smoky`
            }
            else if (module2 == `<:EagleM1:492795071846940672>`) {
                var module2name = `Shaft`
            }
            else if (module2 == `<:FalconM1:492795071234834443>`) {
                var module2name = `Railgun`
            }
            else if (module2 == `<:FoxM1:492795071436029973>`) {
                var module2name = `Fire`
            }
            else if (module2 == `<:GriffinM1:492795072023101450>`) {
                var module2name = `Magnum`
            }
            else if (module2 == `<:GrizzleyM1:492795071050285058>`) {
                var module2name = `Thunder`
            }
            else if (module2 == `<:LionM1:492795071607996416>`) {
                var module2name = `Ricochet`
            }
            else if (module2 == `<:OcelotM1:492795071297617938>`) {
                var module2name = `Isida`
            }
            else if (module2 == `<:OrkaM1:492795071587024906>`) {
                var module2name = `Striker`
            }
            else if (module2 == `<:PantherM1:492795071260000256>`) {
                var module2name = `Twins`
            }
            else if (module2 == `<:SharkM1:492795071620579343>`) {
                var module2name = `Vulcan`
            }
            else if (module2 == `<:SpiderM1:492795071398412289>`) {
                var module2name = `Spider`
            }
            else if (module2 == `<:WolfM1:492795071545081856>`) {
                var module2name = `Hammer`
            }

            if (module3 == `<:BadgerM1:492795071809191936>`) {
                var module3name = `Freeze`
            }
            else if (module3 == `<:DolphinM1:492795071452807183>`) {
                var module3name = `Smoky`
            }
            else if (module3 == `<:EagleM1:492795071846940672>`) {
                var module3name = `Shaft`
            }
            else if (module3 == `<:FalconM1:492795071234834443>`) {
                var module3name = `Railgun`
            }
            else if (module3 == `<:FoxM1:492795071436029973>`) {
                var module3name = `Fire`
            }
            else if (module3 == `<:GriffinM1:492795072023101450>`) {
                var module3name = `Magnum`
            }
            else if (module3 == `<:GrizzleyM1:492795071050285058>`) {
                var module3name = `Thunder`
            }
            else if (module3 == `<:LionM1:492795071607996416>`) {
                var module3name = `Ricochet`
            }
            else if (module3 == `<:OcelotM1:492795071297617938>`) {
                var module3name = `Isida`
            }
            else if (module3 == `<:OrkaM1:492795071587024906>`) {
                var module3name = `Striker`
            }
            else if (module3 == `<:PantherM1:492795071260000256>`) {
                var module3name = `Twins`
            }
            else if (module3 == `<:SharkM1:492795071620579343>`) {
                var module3name = `Vulcan`
            }
            else if (module3 == `<:SpiderM1:492795071398412289>`) {
                var module3name = `Spider`
            }
            else if (module3 == `<:WolfM1:492795071545081856>`) {
                var module3name = `Hammer`
            }


            if (turretrnd == 1) {
                var turretpic = `https://imgur.com/v8BjUju.png`
                var turretname = `Firebird`
            }
            else if (turretrnd == 2) {
                var turretpic = `https://imgur.com/F4XZVwu.png`
                var turretname = `Freeze`
            }
            else if (turretrnd == 3) {
                var turretpic = `https://imgur.com/890No3M.png`
                var turretname = `Isida`
            }
            else if (turretrnd == 4) {
                var turretpic = `https://imgur.com/tL71ZK5.png`
                var turretname = `Hammer`
            }
            else if (turretrnd == 5) {
                var turretpic = `https://imgur.com/6mKwfrB.png`
                var turretname = `Twins`
            }
            else if (turretrnd == 6) {
                var turretpic = `https://imgur.com/nTMnXzh.png`
                var turretname = `Ricochet`
            }
            else if (turretrnd == 7) {
                var turretpic = `https://imgur.com/Uxb3bA3.png`
                var turretname = `Thunder`
            }
            else if (turretrnd == 8) {
                var turretpic = `https://imgur.com/6OrcemZ.png`
                var turretname = `Smoky`
            }
            else if (turretrnd == 9) {
                var turretpic = `https://imgur.com/gdh03XH.png`
                var turretname = `Striker`
            }
            else if (turretrnd == 10) {
                var turretpic = `https://imgur.com/0ojxjnw.png`
                var turretname = `Vulcan`
            }
            else if (turretrnd == 11) {
                var turretpic = `https://imgur.com/3NsFeiz.png`
                var turretname = `Railgun`
            }
            else if (turretrnd == 12) {
                var turretpic = `https://imgur.com/BbXPuyC.png`
                var turretname = `Magnum`
            }
            else if (turretrnd == 13) {
                var turretpic = `https://imgur.com/fnaqxsV.png`
                var turretname = `Shaft`
            }

            if (hullrnd == 1) {
                var hullpic = `https://imgur.com/j0EOWpG.png`
                var hullname = `Wasp`
            }
            else if (hullrnd == 2) {
                var hullpic = `https://imgur.com/SDwktoK.png`
                var hullname = `Hornet`
            }
            else if (hullrnd == 3) {
                var hullpic = `https://imgur.com/CfgqmEt.png`
                var hullname = `Hunter`
            }
            else if (hullrnd == 4) {
                var hullpic = `https://imgur.com/dLM4izy.png`
                var hullname = `Viking`
            }
            else if (hullrnd == 5) {
                var hullpic = `https://imgur.com/wnf57vY.png`
                var hullname = `Dictator`
            }
            else if (hullrnd == 6) {
                var hullpic = `https://imgur.com/kIFMtn3.png`
                var hullname = `Titan`
            }
            else if (hullrnd == 7) {
                var hullpic = `https://imgur.com/wpvVNZv.png`
                var hullname = `Mammoth`
            }


            if (dronernd == `1`) {
                var dronepic = `https://i.imgur.com/i4kLXUq.png`
                var dronename = `Assault`
            }
            else if (dronernd == `2`) {
                var dronepic = `https://i.imgur.com/GTx8XSC.png`
                var dronename = `Driver`
            }
            else if (dronernd == `3`) {
                var dronepic = `https://i.imgur.com/7OQTcCS.png`
                var dronename = `Engineer`
            }
            else if (dronernd == `4`) {
                var dronepic = `https://i.imgur.com/m7UNylf.png`
                var dronename = `Mechanic`
            }
            else if (dronernd == `5`) {
                var dronepic = `https://i.imgur.com/IQxEaxF.png`
                var dronename = `Supplier`
            }
            else if (dronernd == `6`) {
                var dronepic = `https://i.imgur.com/EREdvT0.png`
                var dronename = `Trooper`
            }


            if ((paintrnd) == 1) {
                var paintpic = 'https://i.imgur.com/Uu6IWdY.png'
                var paintname = 'Black Paint'
            }
            else if ((paintrnd) == 2) {
                var paintpic = 'https://i.imgur.com/bic1Mx7.png'
                var paintname = 'Red Paint'
            }
            else if ((paintrnd) == 3) {
                var paintpic = "https://i.imgur.com/B1icnUH.png"
                var paintname = 'Green Paint'
            }
            else if ((paintrnd) == 4) {
                var paintpic = 'https://i.imgur.com/UnU5gub.png'
                var paintname = 'White Paint'
            }
            else if ((paintrnd) == 5) {
                var paintpic = 'https://i.imgur.com/Xf7Z6zF.png'
                var paintname = 'Orange Paint'
            }
            else if ((paintrnd) == 6) {
                var paintpic = 'https://i.imgur.com/tzLiLAM.png'
                var paintname = 'Flora Paint'
            }
            else if ((paintrnd) == 7) {
                var paintpic = 'https://i.imgur.com/lTWZpIV.png'
                var paintname = 'Marine Paint'
            }
            else if ((paintrnd) == 8) {
                var paintpic = "https://i.imgur.com/n3hJ8ZH.png"
                var paintname = 'Swamp Paint'
            }
            else if ((paintrnd) == 9) {
                var paintpic = 'https://i.imgur.com/VTEu0X7.png'
                var paintname = 'Forester Paint'
            }
            else if ((paintrnd) == 10) {
                var paintpic = 'https://i.imgur.com/bTAEhiV.png'
                var paintname = 'Metallic Paint'
            }
            else if ((paintrnd) == 11) {
                var paintpic = 'https://i.imgur.com/yJcKJIM.png'
                var paintname = 'Lava Paint'
            }
            else if ((paintrnd) == 12) {
                var paintpic = 'https://i.imgur.com/JGd6ZeJ.png'
                var paintname = 'Lead Paint'
            }
            else if ((paintrnd) == 13) {
                var paintpic = "https://i.imgur.com/XchiKvr.png"
                var paintname = 'Alien 2.0 Paint'
            }
            else if ((paintrnd) == 14) {
                var paintpic = 'https://i.imgur.com/UzL3YNb.png'
                var paintname = 'Safari Paint'
            }
            else if ((paintrnd) == 15) {
                var paintpic = 'https://i.imgur.com/vokPLVg.png'
                var paintname = 'Dragon Paint'
            }
            else if ((paintrnd) == 16) {
                var paintpic = 'https://i.imgur.com/80gpeds.png'
                var paintname = 'Magma Paint'
            }
            else if ((paintrnd) == 17) {
                var paintpic = "https://i.imgur.com/etlhZOc.png"
                var paintname = 'Mary paint'
            }
            else if ((paintrnd) == 18) {
                var paintpic = 'https://i.imgur.com/8F4AIwU.png'
                var paintname = 'Sahara Paint'
            }
            else if ((paintrnd) == 19) {
                var paintpic = 'https://i.imgur.com/Vl0KN5R.png'
                var paintname = 'Night paint'
            }
            else if ((paintrnd) == 20) {
                var paintpic = 'https://i.imgur.com/2eihFkl.png'
                var paintname = 'In Love Paint'
            }
            else if ((paintrnd) == 21) {
                var paintpic = 'https://i.imgur.com/7btgslo.png'
                var paintname = 'Carbon Paint'
            }
            else if ((paintrnd) == 22) {
                var paintpic = "https://i.imgur.com/pi9uDgU.png"
                var paintname = 'Confetti Paint'
            }
            else if ((paintrnd) == 23) {
                var paintpic = 'https://i.imgur.com/2BYkeaM.png'
                var paintname = 'Alien 1.0 Paint'
            }
            else if ((paintrnd) == 24) {
                var paintpic = 'https://i.imgur.com/WWNYEHq.png'
                var paintname = 'Chainmail Paint'
            }
            else if ((paintrnd) == 25) {
                var paintpic = 'https://i.imgur.com/Qrb8OJD.png'
                var paintname = 'Dirty Paint'
            }
            else if ((paintrnd) == 26) {
                var paintpic = "https://i.imgur.com/4ieFQ2n.png"
                var paintname = 'Jaguar Paint'
            }
            else if ((paintrnd) == 27) {
                var paintpic = 'https://i.imgur.com/le65j8j.png'
                var paintname = 'Desert Paint'
            }
            else if ((paintrnd) == 28) {
                var paintpic = 'https://i.imgur.com/JADpZCD.png'
                var paintname = 'Guerrilla Paint'
            }
            else if ((paintrnd) == 29) {
                var paintpic = 'https://i.imgur.com/TqHwYqE.png'
                var paintname = 'Swash Paint'
            }
            else if ((paintrnd) == 30) {
                var paintpic = 'https://i.imgur.com/6LR05QB.png'
                var paintname = 'Harlequin Paint'
            }
            else if ((paintrnd) == 31) {
                var paintpic = "https://i.imgur.com/0pMnCb4.png"
                var paintname = 'Pixel Paint'
            }
            else if ((paintrnd) == 32) {
                var paintpic = 'https://i.imgur.com/5Y9P7Z9.png'
                var paintname = 'Corrosion Paint'
            }
            else if ((paintrnd) == 33) {
                var paintpic = 'https://i.imgur.com/P3Q6sk1.png'
                var paintname = 'Tundra Paint'
            }
            else if ((paintrnd) == 34) {
                var paintpic = 'https://i.imgur.com/XBejee5.png'
                var paintname = 'Vortex Paint'
            }
            else if ((paintrnd) == 35) {
                var paintpic = "https://i.imgur.com/qIqOt7g.png"
                var paintname = 'Pixel Heart Paint'
            }
            else if ((paintrnd) == 36) {
                var paintpic = 'https://i.imgur.com/YbND0oP.png'
                var paintname = 'Roger Paint'
            }
            else if ((paintrnd) == 37) {
                var paintpic = 'https://i.imgur.com/hun7Hs4.png'
                var paintname = 'Fracture Paint'
            }
            else if ((paintrnd) == 38) {
                var paintpic = 'https://i.imgur.com/za8gY6V.png'
                var paintname = 'Cedar Paint'
            }
            else if ((paintrnd) == 39) {
                var paintpic = 'https://i.imgur.com/x8KgVmd.png'
                var paintname = 'Python Paint'
            }
            else if ((paintrnd) == 40) {
                var paintpic = 'https://i.imgur.com/IVaOz5u.png'
                var paintname = 'Sakura Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = 'https://i.imgur.com/680JitP.png'
                var paintname = 'Grasslands Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = "https://i.imgur.com/yqXD0ZF.png"
                var paintname = 'Soft Flowers paint'
            }
            else if ((paintrnd) == 42) {
                var paintpic = 'https://i.imgur.com/W611QqD.png'
                var paintname = 'Electra Paint'
            }
            else if ((paintrnd) == 43) {
                var paintpic = 'https://i.imgur.com/ZMrsVTt.png'
                var paintname = 'Moss paint'
            }
            else if ((paintrnd) == 44) {
                var paintpic = 'https://i.imgur.com/nRipiA9.png'
                var paintname = 'First Love Paint'
            }
            else if ((paintrnd) == 45) {
                var paintpic = "https://i.imgur.com/Fgxd6gs.png"
                var paintname = 'Sandstone paint'
            }
            else if ((paintrnd) == 46) {
                var paintpic = 'https://i.imgur.com/6bHB1F2.png'
                var paintname = 'Spark Paint'
            }
            else if ((paintrnd) == 47) {
                var paintpic = 'https://i.imgur.com/04IAZ7n.png'
                var paintname = 'Jeans paint'
            }
            else if ((paintrnd) == 48) {
                var paintpic = 'https://i.imgur.com/TQX4ePk.png'
                var paintname = 'Digital Paint'
            }
            else if ((paintrnd) == 49) {
                var paintpic = 'https://i.imgur.com/DTiOYfs.png'
                var paintname = 'Rustle Paint'
            }
            else if ((paintrnd) == 50) {
                var paintpic = "https://i.imgur.com/sG7HBJS.png"
                var paintname = 'Blacksmith Paint'
            }
            else if ((paintrnd) == 51) {
                var paintpic = 'https://i.imgur.com/y1oy0EJ.png'
                var paintname = 'Hohloma Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/UedBFsb.png'
                var paintname = 'Loam Paint'
            }
            else if ((paintrnd) == 53) {
                var paintpic = 'https://i.imgur.com/uLQ6Lkv.png'
                var paintname = 'Rhino Paint'
            }
            else if ((paintrnd) == 54) {
                var paintpic = "https://i.imgur.com/DfNAcFt.png"
                var paintname = 'Winter Paint'
            }
            else if ((paintrnd) == 55) {
                var paintpic = 'https://i.imgur.com/655k2TY.png'
                var paintname = 'Urban Paint'
            }
            else if ((paintrnd) == 56) {
                var paintpic = 'https://i.imgur.com/KEnNc7l.png'
                var paintname = 'Sweater Paint'
            }
            else if ((paintrnd) == 57) {
                var paintpic = 'https://i.imgur.com/Uc2xStT.png'
                var paintname = 'Atom Paint'
            }
            else if ((paintrnd) == 58) {
                var paintpic = 'https://i.imgur.com/qvAsqjh.png'
                var paintname = 'Savanna Paint'
            }
            else if ((paintrnd) == 59) {
                var paintpic = "https://i.imgur.com/Z6anuHd.png"
                var paintname = 'Cherry Paint'
            }
            else if ((paintrnd) == 60) {
                var paintpic = 'https://i.imgur.com/B7i6beQ.png'
                var paintname = 'Emerald Paint'
            }
            else if ((paintrnd) == 61) {
                var paintpic = 'https://i.imgur.com/QtINXHI.png'
                var paintname = 'Ibris Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/pns89xU.png'
                var paintname = 'Disco Paint'
            }
            else if ((paintrnd) == 63) {
                var paintpic = "https://i.imgur.com/1YO1rpg.png"
                var paintname = 'Mars Paint'
            }
            else if ((paintrnd) == 64) {
                var paintpic = 'https://i.imgur.com/08PvYck.png'
                var paintname = 'Hive Paint'
            }
            else if ((paintrnd) == 65) {
                var paintpic = 'https://i.imgur.com/ZBYZ8bQ.png'
                var paintname = 'Inferno Paint'
            }
            else if ((paintrnd) == 66) {
                var paintpic = 'https://i.imgur.com/BIrUhHg.png'
                var paintname = 'Jade Paint'
            }
            else if ((paintrnd) == 67) {
                var paintpic = 'https://i.imgur.com/G4LTzGF.png'
                var paintname = 'Tiger Paint'
            }
            else if ((paintrnd) == 68) {
                var paintpic = "https://i.imgur.com/7D9zmjy.png"
                var paintname = 'Kaleidoscope Paint'
            }
            else if ((paintrnd) == 69) {
                var paintpic = 'https://i.imgur.com/Uk1Epds.png'
                var paintname = 'Taiga Paint'
            }
            else if ((paintrnd) == 70) {
                var paintpic = 'https://i.imgur.com/BA79PyV.png'
                var paintname = 'Red Urban Paint'
            }
            else if ((paintrnd) == 71) {
                var paintpic = 'https://i.imgur.com/lVA00HV.png'
                var paintname = 'Nano Paint'
            }
            else if ((paintrnd) == 72) {
                var paintpic = "https://i.imgur.com/VFTr1Vm.png"
                var paintname = 'Prodigi Paint'
            }
            else if ((paintrnd) == 73) {
                var paintpic = 'https://i.imgur.com/isv4C0u.png'
                var paintname = 'Rock Paint'
            }
            else if ((paintrnd) == 74) {
                var paintpic = 'https://i.imgur.com/pKcu3TS.png'
                var paintname = 'Raccoon Paint'
            }
            else if ((paintrnd) == 75) {
                var paintpic = 'https://i.imgur.com/KzNkIXj.png'
                var paintname = 'Needle Paint'
            }
            else if ((paintrnd) == 76) {
                var paintpic = 'https://i.imgur.com/ggGlJGu.png'
                var paintname = 'Picasso Paint'
            }
            else if ((paintrnd) == 77) {
                var paintpic = 'https://i.imgur.com/oPsUaQS.png'
                var paintname = 'Argentina'
            }
            else if ((paintrnd) == 78) {
                var paintpic = 'https://i.imgur.com/reDTcBH.png'
                var paintname = 'Australia Paint'
            }
            else if ((paintrnd) == 79) {
                var paintpic = 'https://i.imgur.com/AJQrwyi.png'
                var paintname = 'Belgium Paint'
            }
            else if ((paintrnd) == 80) {
                var paintpic = 'https://i.imgur.com/958evYX.png'
                var paintname = 'Brazil Paint'
            }
            else if ((paintrnd) == 81) {
                var paintpic = 'https://i.imgur.com/7Jt63vS.png'
                var paintname = 'Colombia Paint'
            }
            else if ((paintrnd) == 82) {
                var paintpic = 'https://i.imgur.com/iVNsjXY.png'
                var paintname = 'South Korea Paint'
            }
            else if ((paintrnd) == 83) {
                var paintpic = 'https://i.imgur.com/PYRmJIp.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 84) {
                var paintpic = 'https://i.imgur.com/7cYZu1I.png'
                var paintname = 'Croatia Paint'
            }
            else if ((paintrnd) == 85) {
                var paintpic = 'https://i.imgur.com/wvYQSXa.png'
                var paintname = 'Costa Rica Paint'
            }
            else if ((paintrnd) == 86) {
                var paintpic = 'https://i.imgur.com/NVIdw9e.png'
                var paintname = 'Egypt Paint'
            }
            else if ((paintrnd) == 87) {
                var paintpic = 'https://i.imgur.com/Jn5mrQI.png'
                var paintname = 'England Paint'
            }
            else if ((paintrnd) == 88) {
                var paintpic = 'https://i.imgur.com/XVrmTAE.png'
                var paintname = 'France Paint'
            }
            else if ((paintrnd) == 89) {
                var paintpic = 'https://i.imgur.com/7IU5kHG.png'
                var paintname = 'Iceland Paint'
            }
            else if ((paintrnd) == 90) {
                var paintpic = 'https://i.imgur.com/JCTfffl.png'
                var paintname = 'Germany Paint'
            }
            else if ((paintrnd) == 91) {
                var paintpic = 'https://i.imgur.com/0KgtBsx.png'
                var paintname = 'Iran Paint'
            }
            else if ((paintrnd) == 92) {
                var paintpic = 'https://i.imgur.com/6RzUNAy.png'
                var paintname = 'Japan Paint'
            }
            else if ((paintrnd) == 93) {
                var paintpic = 'https://i.imgur.com/ifrbtMe.png'
                var paintname = 'Mexico Paint'
            }
            else if ((paintrnd) == 94) {
                var paintpic = 'https://i.imgur.com/DPA9Bil.png'
                var paintname = 'Morocco Paint'
            }
            else if ((paintrnd) == 95) {
                var paintpic = 'https://i.imgur.com/bqxX9er.png'
                var paintname = 'Panama Paint'
            }
            else if ((paintrnd) == 96) {
                var paintpic = 'https://i.imgur.com/ZQLGlOC.png'
                var paintname = 'Nigeria Paint'
            }
            else if ((paintrnd) == 97) {
                var paintpic = 'https://i.imgur.com/lkZmpvy.png'
                var paintname = 'Peru Paint'
            }
            else if ((paintrnd) == 98) {
                var paintpic = 'https://i.imgur.com/rF67XB7.png'
                var paintname = 'Portugal Paint'
            }
            else if ((paintrnd) == 99) {
                var paintpic = 'https://i.imgur.com/32jmRY5.png'
                var paintname = 'Poland Paint'
            }
            else if ((paintrnd) == 100) {
                var paintpic = 'https://i.imgur.com/aSyZVyl.png'
                var paintname = 'Russia Paint'
            }
            else if ((paintrnd) == 101) {
                var paintpic = 'https://i.imgur.com/0pZ8POK.png'
                var paintname = 'Saudi Arabia Paint'
            }
            else if ((paintrnd) == 102) {
                var paintpic = 'https://i.imgur.com/cvBh12Z.png'
                var paintname = 'Senagal Paint'
            }
            else if ((paintrnd) == 103) {
                var paintpic = 'https://i.imgur.com/Xp5wtvv.png'
                var paintname = 'Serbia Paint'
            }
            else if ((paintrnd) == 104) {
                var paintpic = 'https://i.imgur.com/o7dBXh6.png'
                var paintname = 'Sweden Paint'
            }
            else if ((paintrnd) == 105) {
                var paintpic = 'https://i.imgur.com/PkWhBUK.png'
                var paintname = 'Spain Paint'
            }
            else if ((paintrnd) == 106) {
                var paintpic = 'https://i.imgur.com/xYYxCTR.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 107) {
                var paintpic = 'https://i.imgur.com/59R91Q0.png'
                var paintname = 'Tunisa Paint'
            }
            else if ((paintrnd) == 108) {
                var paintpic = 'https://i.imgur.com/3LRdNAn.png'
                var paintname = 'Uruguay Paint'
            }
            else if ((paintrnd) == 109) {
                var paintpic = 'https://i.imgur.com/x2nlYUX.png'
                var paintname = 'Space Paint'
            }
            else if ((paintrnd) == 110) {
                var paintpic = 'https://i.imgur.com/wW7ycng.png'
                var paintname = 'Frost Paint'
            }
            else if ((paintrnd) == 111) {
                var paintpic = "https://i.imgur.com/TMTTgam.png"
                var paintname = 'Graffiti paint'
            }
            else if ((paintrnd) == 112) {
                var paintpic = 'https://i.imgur.com/E0Z6QA5.png'
                var paintname = 'Zeus Paint'
            }
            else if ((paintrnd) == 113) {
                var paintpic = 'https://i.imgur.com/NoaIyLi.png'
                var paintname = 'Clay paint'
            }
            else if ((paintrnd) == 114) {
                var paintpic = 'https://i.imgur.com/IgIJGLP.png'
                var paintname = 'Lumberjack Paint'
            }
            else if ((paintrnd) == 115) {
                var paintpic = "https://i.imgur.com/X9bDdkA.png"
                var paintname = 'Africa paint'
            }
            else if ((paintrnd) == 116) {
                var paintpic = 'https://i.imgur.com/tY668p6.png'
                var paintname = 'Golden Star Paint'
            }
            else if ((paintrnd) == 117) {
                var paintpic = 'https://i.imgur.com/DHYlg2j.png'
                var paintname = 'Arachnid Paint'
            }
            else if ((paintrnd) == 118) {
                var paintpic = 'https://i.imgur.com/OwnToQT.png'
                var paintname = 'Liquid Metal Paint'
            }
            else if ((paintrnd) == 119) {
                var paintpic = "https://i.imgur.com/HL9nYPM.png"
                var paintname = 'Drought Paint'
            }
            else if ((paintrnd) == 120) {
                var paintpic = 'https://i.imgur.com/XB2ofuq.png'
                var paintname = 'Strawberry Paint'
            }
            else if ((paintrnd) == 121) {
                var paintpic = 'https://i.imgur.com/aozjomN.png'
                var paintname = 'Barber Shop Paint'
            }
            else if ((paintrnd) == 122) {
                var paintpic = 'https://i.imgur.com/zavV07Q.png'
                var paintname = 'Scandinavia Paint'
            }
            else if ((paintrnd) == 123) {
                var paintpic = "https://i.imgur.com/oajuf2p.png"
                var paintname = 'Lunar Soil Paint'
            }
            else if ((paintrnd) == 124) {
                var paintpic = 'https://i.imgur.com/9j5lgqs.png'
                var paintname = 'Rust Paint'
            }
            else if ((paintrnd) == 125) {
                var paintpic = 'https://i.imgur.com/jPblblx.png'
                var paintname = 'Steak Paint'
            }
            else if ((paintrnd) == 126) {
                var paintpic = "https://i.imgur.com/9Il5i8W.png"
                var paintname = 'Amber Paint'
            }
            else if ((paintrnd) == 127) {
                var paintpic = 'https://i.imgur.com/nbS4uGw.png'
                var paintname = 'Lime Paint'
            }
            else if ((paintrnd) == 128) {
                var paintpic = 'https://i.imgur.com/WKZEFHx.png'
                var paintname = 'Neuron Paint'
            }
            else if ((paintrnd) == 129) {
                var paintpic = 'https://i.imgur.com/HaXUxxY.png'
                var paintname = 'Domino Paint'
            }
            else if ((paintrnd) == 130) {
                var paintpic = "https://i.imgur.com/eMLcbdn.png"
                var paintname = 'Watercolour Paint'
            }
            else if ((paintrnd) == 131) {
                var paintpic = 'https://i.imgur.com/tjq2SF4.png'
                var paintname = 'Pajamas Paint'
            }
            else if ((paintrnd) == 132) {
                var paintpic = 'https://i.imgur.com/Ms5OK0z.png'
                var paintname = 'Vanadium Paint'
            }
            else if ((paintrnd) == 133) {
                var paintpic = 'https://i.imgur.com/FL8ISUB.png'
                var paintname = 'Glitch Paint'
            }
            else if ((paintrnd) == 134) {
                var paintpic = 'https://i.imgur.com/ecKmDEv.png'
                var paintname = 'Sunset Camoflage Paint'
            }
            else if ((paintrnd) == 135) {
                var paintpic = 'https://i.imgur.com/hxJFqQV.png'
                var paintname = 'All You Need Is Love Paint'
            }
            else if ((paintrnd) == 136) {
                var paintpic = "https://i.imgur.com/unj7X8g.png"
                var paintname = 'Zombie Paint'
            }
            else if ((paintrnd) == 137) {
                var paintpic = 'https://i.imgur.com/Lh4Hbqw.png'
                var paintname = 'Fire Of Valor Paint'
            }
            else if ((paintrnd) == 138) {
                var paintpic = 'https://i.imgur.com/CXUIMit.png'
                var paintname = 'Spangles Paint'
            }
            else if ((paintrnd) == 139) {
                var paintpic = 'https://i.imgur.com/4TYOOd1.png'
                var paintname = 'Snowflake Paint'
            }
            else if ((paintrnd) == 140) {
                var paintpic = "https://i.imgur.com/avubcYN.png"
                var paintname = 'Lilac Petals Paint'
            }
            else if ((paintrnd) == 141) {
                var paintpic = 'https://i.imgur.com/t6IM63n.png'
                var paintname = 'Retina Paint'
            }
            else if ((paintrnd) == 142) {
                var paintpic = 'https://i.imgur.com/xKCSDrf.png'
                var paintname = 'Chill Bro Paint'
            }
            else if ((paintrnd) == 143) {
                var paintpic = 'https://i.imgur.com/PTFjank.png'
                var paintname = 'Tanki In Moscow Paint'
            }
            else if ((paintrnd) == 144) {
                var paintpic = 'https://i.imgur.com/kBleN5n.png'
                var paintname = 'Secret Of The Aliens Paint'
            }
            else if ((paintrnd) == 145) {
                var paintpic = 'https://i.imgur.com/Z3l7dkO.png'
                var paintname = 'Pumpkins Paint'
            }
            else if ((paintrnd) == 146) {
                var paintpic = 'https://i.imgur.com/UVQ15W1.png'
                var paintname = 'Tropical Foliage Paint'
            }
            else if ((paintrnd) == 147) {
                var paintpic = 'https://i.imgur.com/Z2CoZDm.png'
                var paintname = 'Azure Paint'
            }
            else if ((paintrnd) == 148) {
                var paintpic = 'https://i.imgur.com/zXFanQF.png'
                var paintname = 'Gucciflage Paint'
            }
            else if ((paintrnd) == 149) {
                var paintpic = "https://i.imgur.com/GO4TIUt.png"
                var paintname = 'Hallucination Paint'
            }
            else if ((paintrnd) == 150) {
                var paintpic = 'https://i.imgur.com/GNTozmo.png'
                var paintname = 'Hypercube Paint'
            }
            else if ((paintrnd) == 151) {
                var paintpic = 'https://i.imgur.com/ZdIwfSe.png'
                var paintname = 'Kungar Ice Cave Paint'
            }
            else if ((paintrnd) == 152) {
                var paintpic = 'https://i.imgur.com/BVAcIa1.png'
                var paintname = 'Lollipop Paint'
            }
            else if ((paintrnd) == 153) {
                var paintpic = "https://i.imgur.com/8J3lAbb.png"
                var paintname = 'Lotus Paint'
            }
            else if ((paintrnd) == 154) {
                var paintpic = 'https://i.imgur.com/qCCohrO.png'
                var paintname = 'Monet Paint'
            }
            else if ((paintrnd) == 155) {
                var paintpic = 'https://i.imgur.com/2rEIlXV.png'
                var paintname = 'Paisley Flame Paint'
            }
            else if ((paintrnd) == 156) {
                var paintpic = "https://i.imgur.com/6QKNAeE.png"
                var paintname = 'Paisley Ice Paint'
            }
            else if ((paintrnd) == 157) {
                var paintpic = 'https://i.imgur.com/QimIWp2.png'
                var paintname = 'Peaks Paint'
            }
            else if ((paintrnd) == 158) {
                var paintpic = 'https://i.imgur.com/hniZLLO.png'
                var paintname = 'Phantom Paint'
            }
            else if ((paintrnd) == 159) {
                var paintpic = 'https://i.imgur.com/ugXhy8B.png'
                var paintname = 'Play Doh Paint'
            }
            else if ((paintrnd) == 160) {
                var paintpic = "https://i.imgur.com/VthKAsE.png"
                var paintname = 'Pop Art Paint'
            }
            else if ((paintrnd) == 161) {
                var paintpic = 'https://i.imgur.com/zblzcV1.png'
                var paintname = 'Potter Paint'
            }
            else if ((paintrnd) == 162) {
                var paintpic = 'https://i.imgur.com/JZ4Kpvg.png'
                var paintname = 'Pulsar Paint'
            }
            else if ((paintrnd) == 163) {
                var paintpic = 'https://i.imgur.com/SAKhlFD.png'
                var paintname = 'Ripple Paint'
            }
            else if ((paintrnd) == 164) {
                var paintpic = 'https://i.imgur.com/JdTLdR5.png'
                var paintname = 'Sillicate Paint'
            }
            else if ((paintrnd) == 165) {
                var paintpic = 'https://i.imgur.com/doBAp5o.png'
                var paintname = 'Sodoku Paint'
            }
            else if ((paintrnd) == 166) {
                var paintpic = "https://i.imgur.com/ZjdRIzn.png"
                var paintname = 'Zig Zag Paint'
            }
            else if ((paintrnd) == 167) {
                var paintpic = 'https://i.imgur.com/gRBmdwt.png'
                var paintname = 'Abstract Lines Paint'
            }
            else if ((paintrnd) == 168) {
                var paintpic = 'https://i.imgur.com/cwLwvQD.png'
                var paintname = 'Blue Squares Paint'
            }
            else if ((paintrnd) == 169) {
                var paintpic = 'https://i.imgur.com/3Vkacjq.png'
                var paintname = 'Condensed Milk Paint'
            }
            else if ((paintrnd) == 170) {
                var paintpic = 'https://i.imgur.com/KMgUWl2.png'
                var paintname = 'E236 Paint'
            }
            else if ((paintrnd) == 171) {
                var paintpic = "https://i.imgur.com/bBBo1Sz.png"
                var paintname = 'Feathers Paint'
            }
            else if ((paintrnd) == 172) {
                var paintpic = 'https://i.imgur.com/p5epSIk.png'
                var paintname = 'Fire Dragon Paint'
            }
            else if ((paintrnd) == 173) {
                var paintpic = 'https://i.imgur.com/IaVCbyi.png'
                var paintname = 'Megapolis Paint'
            }
            else if ((paintrnd) == 174) {
                var paintpic = 'https://i.imgur.com/j2ju8Mu.png'
                var paintname = 'Stained Glass Paint'
            }
            else if ((paintrnd) == 175) {
                var paintpic = 'https://i.imgur.com/ibHAEQI.png'
                var paintname = 'Thunderball Paint'
            }
            else if ((paintrnd) == 176) {
                var paintpic = 'https://i.imgur.com/lMaHubB.png'
                var paintname = 'Moonwalker Paint'
            }
            else if ((paintrnd) == 177) {
                var paintpic = 'https://i.imgur.com/M5Z5FWv.png'
                var paintname = 'Eternity Paint'
            }
            else if ((paintrnd) == 178) {
                var paintpic = "https://i.imgur.com/PhNXyXp.png"
                var paintname = 'Red Suit paint'
            }
            else if ((paintrnd) == 179) {
                var paintpic = 'https://i.imgur.com/PmvUxAg.png'
                var paintname = 'Wave Paint'
            }
            else if ((paintrnd) == 180) {
                var paintpic = 'https://i.imgur.com/FpgBtEZ.png'
                var paintname = 'Nightmare paint'
            }
            else if ((paintrnd) == 181) {
                var paintpic = "https://i.imgur.com/z8iOhJR.png"
                var paintname = 'Spectrum paint'
            }
            else if ((paintrnd) == 182) {
                var paintpic = 'https://i.imgur.com/dbnms0o.png'
                var paintname = 'Holiday Lights Paint'
            }
            else if ((paintrnd) == 183) {
                var paintpic = 'https://i.imgur.com/ZfVuulO.png'
                var paintname = 'Matrix paint'
            }
            else if ((paintrnd) == 184) {
                var paintpic = 'https://i.imgur.com/NJl5fCT.png'
                var paintname = 'Mosaic Paint'
            }
            else if ((paintrnd) == 185) {
                var paintpic = "https://i.imgur.com/gzaWRlk.png"
                var paintname = 'Vertigo paint'
            }
            else if ((paintrnd) == 186) {
                var paintpic = 'https://i.imgur.com/1TZ7Lmn.png'
                var paintname = 'Prodigi 2.0 Paint'
            }
            else if ((paintrnd) == 187) {
                var paintpic = 'https://i.imgur.com/dtykCud.png'
                var paintname = 'Beating Hearts Paint'
            }
            else if ((paintrnd) == 188) {
                var paintpic = "https://i.imgur.com/rMKC2xq.png"
                var paintname = 'Ginga paint'
            }
            else if ((paintrnd) == 189) {
                var paintpic = 'https://i.imgur.com/iOKfNEJ.png'
                var paintname = 'Magnolia Paint'
            }
            else if ((paintrnd) == 190) {
                var paintpic = 'https://i.imgur.com/7YHD4Dc.png'
                var paintname = 'Galaxy paint'
            }
            else if ((paintrnd) == 191) {
                var paintpic = 'https://i.imgur.com/pPYWKat.png'
                var paintname = 'Eruption Paint'
            }
            else if ((paintrnd) == 192) {
                var paintpic = "https://i.imgur.com/s3nJG76.png"
                var paintname = 'Siberian Tiger paint'
            }
            else if ((paintrnd) == 193) {
                var paintpic = 'https://i.imgur.com/JPZLhFw.png'
                var paintname = 'Secret Sauce Paint'
            }
            else if ((paintrnd) == 194) {
                var paintpic = 'https://i.imgur.com/gNll0nd.png'
                var paintname = 'Canyon Hero Paint'
            }
            else if ((paintrnd) == 195) {
                var paintpic = 'https://i.imgur.com/ldN5LLn.png'
                var paintname = 'Pastila Paint'
            }
            else if ((paintrnd) == 196) {
                var paintpic = "https://i.imgur.com/V6iKdpy.png"
                var paintname = 'Valour paint'
            }
            else if ((paintrnd) == 197) {
                var paintpic = 'https://i.imgur.com/jEGItOc.png'
                var paintname = 'Beholder Paint'
            }
            else if ((paintrnd) == 198) {
                var paintpic = 'https://i.imgur.com/JivLe7B.png'
                var paintname = 'Synesthesia paint'
            }
            else if ((paintrnd) == 199) {
                var paintpic = 'https://i.imgur.com/UM9U9zG.png'
                var paintname = 'Gears Paint'
            }
            else if ((paintrnd) == 200) {
                var paintpic = 'https://i.imgur.com/YiZ8IRR.png'
                var paintname = 'Raidioactive Jelly Paint'
            }
            else if ((paintrnd) == 201) {
                var paintpic = 'https://i.imgur.com/X0QGyIO.png'
                var paintname = 'Spinner Paint'
            }
            else if ((paintrnd) == 202) {
                var paintpic = "https://i.imgur.com/4okwQzH.png"
                var paintname = 'Tenticals paint'
            }
            else if ((paintrnd) == 203) {
                var paintpic = 'https://i.imgur.com/yYJLsJb.png'
                var paintname = 'LEDs Paint'
            }
            else if ((paintrnd) == 204) {
                var paintpic = 'https://i.imgur.com/kB8q8kQ.png'
                var paintname = 'Meteor Shower paint'
            }
            else if ((paintrnd) == 205) {
                var paintpic = 'https://i.imgur.com/xU1BuPf.png'
                var paintname = 'Fall Leaves paint'
            }
            else if ((paintrnd) == 206) {
                var paintpic = 'https://i.imgur.com/fwQKtYJ.png'
                var paintname = 'Electrohive paint'
            }
            else if ((paintrnd) == 207) {
                var paintpic = 'https://i.imgur.com/eX2ajC6.png'
                var paintname = 'Synth pop paint'
            }




            try {

                let embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} You chose a random combo`)
                    .setThumbnail(paintpic)
                    .setColor("#caaffd")
                    .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                    .setImage(turretpic)
                message.channel.send(embed)

                let embed2 = new Discord.RichEmbed()
                    .setThumbnail(dronepic)
                    .setColor("#caaffd")
                    .setImage(hullpic)
                    .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                message.channel.send(embed2)



            } catch (err) {
                console.log(err)
                if (err) {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} You chose a random combo`)
                        .setThumbnail(paintpic)
                        .setColor("#caaffd")
                        .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                        .setImage(turretpic)
                    message.channel.send(embed)

                    let embed2 = new Discord.RichEmbed()
                        .setThumbnail(dronepic)
                        .setColor("#caaffd")
                        .setImage(hullpic)
                        .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                    message.channel.send(embed2)
                }
            }


        }

        if (message.content == prefix + `combo m2`) {
            var turretrnd = Math.floor(Math.random() * 13) + 1;
            var hullrnd = Math.floor(Math.random() * 7) + 1;
            var paintrnd = Math.floor(Math.random() * 207) + 1;
            var moduelrnd = Math.floor(Math.random() * 14) + 1;
            var dronernd = Math.floor(Math.random() * 6) + 1;


            const array1 = [`<:BadgerM2:492795149878034446>`, `<:DolphinM2:492795150578483201>`, `<:EagleM2:492795152012935184>`, `<:FalconM2:492795152092626944>`, `<:FoxM2:492795152184901632>`, `<:GriffinM2:492795152939614209>`, `<:GrizzleyM2:492795153132814357>`, `<:LionM2:492795153787125760>`, `<:OcelotM2:492795153874944004>`, `<:OrkaM2:492795153535467541>`, `<:PantherM2:492795153929732098>`, `<:SharkM2:492795153711497217>`, `<:SpiderM2:492795153564827669>`, `<:WolfM2:492795153782800405>`]
            const array2 = [`<:BadgerM2:492795149878034446>`, `<:DolphinM2:492795150578483201>`, `<:EagleM2:492795152012935184>`, `<:FalconM2:492795152092626944>`, `<:FoxM2:492795152184901632>`, `<:GriffinM2:492795152939614209>`, `<:GrizzleyM2:492795153132814357>`, `<:LionM2:492795153787125760>`, `<:OcelotM2:492795153874944004>`, `<:OrkaM2:492795153535467541>`, `<:PantherM2:492795153929732098>`, `<:SharkM2:492795153711497217>`, `<:SpiderM2:492795153564827669>`, `<:WolfM2:492795153782800405>`]
            const array3 = [`<:BadgerM2:492795149878034446>`, `<:DolphinM2:492795150578483201>`, `<:EagleM2:492795152012935184>`, `<:FalconM2:492795152092626944>`, `<:FoxM2:492795152184901632>`, `<:GriffinM2:492795152939614209>`, `<:GrizzleyM2:492795153132814357>`, `<:LionM2:492795153787125760>`, `<:OcelotM2:492795153874944004>`, `<:OrkaM2:492795153535467541>`, `<:PantherM2:492795153929732098>`, `<:SharkM2:492795153711497217>`, `<:SpiderM2:492795153564827669>`, `<:WolfM2:492795153782800405>`]

            async function moduleRandomizer() {
                //without var/let/const
                array1random = array1[Math.floor(Math.random() * array1.length)];
                array2random = array2[Math.floor(Math.random() * array2.length)];
                array3random = array3[Math.floor(Math.random() * array3.length)];
                moduleChecker();
            }

            async function moduleChecker() {
                if ((array1random == array2random) || (array1random == array3random) || (array3random == array2random)) {
                    moduleRandomizer();
                } else {
                    module1 = array1random;
                    module2 = array2random;
                    module3 = array3random;
                }
            };

            moduleRandomizer();

            if (module1 == `<:BadgerM2:492795149878034446>`) {
                var module1name = `Freeze`
            }
            else if (module1 == `<:DolphinM2:492795150578483201>`) {
                var module1name = `Smoky`
            }
            else if (module1 == `<:EagleM2:492795152012935184>`) {
                var module1name = `Shaft`
            }
            else if (module1 == `<:FalconM2:492795152092626944>`) {
                var module1name = `Railgun`
            }
            else if (module1 == `<:FoxM2:492795152184901632>`) {
                var module1name = `Fire`
            }
            else if (module1 == `<:GriffinM2:492795152939614209>`) {
                var module1name = `Magnum`
            }
            else if (module1 == `<:GrizzleyM2:492795153132814357>`) {
                var module1name = `Thunder`
            }
            else if (module1 == `<:LionM2:492795153787125760>`) {
                var module1name = `Ricochet`
            }
            else if (module1 == `<:OcelotM2:492795153874944004>`) {
                var module1name = `Isida`
            }
            else if (module1 == `<:OrkaM2:492795153535467541>`) {
                var module1name = `Striker`
            }
            else if (module1 == `<:PantherM2:492795153929732098>`) {
                var module1name = `Twins`
            }
            else if (module1 == `<:SharkM2:492795153711497217>`) {
                var module1name = `Vulcan`
            }
            else if (module1 == `<:SpiderM2:492795153564827669>`) {
                var module1name = `Spider`
            }
            else if (module1 == `<:WolfM2:492795153782800405>`) {
                var module1name = `Hammer`
            }

            if (module2 == `<:BadgerM2:492795149878034446>`) {
                var module2name = `Freeze`
            }
            else if (module2 == `<:DolphinM2:492795150578483201>`) {
                var module2name = `Smoky`
            }
            else if (module2 == `<:EagleM2:492795152012935184>`) {
                var module2name = `Shaft`
            }
            else if (module2 == `<:FalconM2:492795152092626944>`) {
                var module2name = `Railgun`
            }
            else if (module2 == `<:FoxM2:492795152184901632>`) {
                var module2name = `Fire`
            }
            else if (module2 == `<:GriffinM2:492795152939614209>`) {
                var module2name = `Magnum`
            }
            else if (module2 == `<:GrizzleyM2:492795153132814357>`) {
                var module2name = `Thunder`
            }
            else if (module2 == `<:LionM2:492795153787125760>`) {
                var module2name = `Ricochet`
            }
            else if (module2 == `<:OcelotM2:492795153874944004>`) {
                var module2name = `Isida`
            }
            else if (module2 == `<:OrkaM2:492795153535467541>`) {
                var module2name = `Striker`
            }
            else if (module2 == `<:PantherM2:492795153929732098>`) {
                var module2name = `Twins`
            }
            else if (module2 == `<:SharkM2:492795153711497217>`) {
                var module2name = `Vulcan`
            }
            else if (module2 == `<:SpiderM2:492795153564827669>`) {
                var module2name = `Spider`
            }
            else if (module2 == `<:WolfM2:492795153782800405>`) {
                var module2name = `Hammer`
            }

            if (module3 == `<:BadgerM2:492795149878034446>`) {
                var module3name = `Freeze`
            }
            else if (module3 == `<:DolphinM2:492795150578483201>`) {
                var module3name = `Smoky`
            }
            else if (module3 == `<:EagleM2:492795152012935184>`) {
                var module3name = `Shaft`
            }
            else if (module3 == `<:FalconM2:492795152092626944>`) {
                var module3name = `Railgun`
            }
            else if (module3 == `<:FoxM2:492795152184901632>`) {
                var module3name = `Fire`
            }
            else if (module3 == `<:GriffinM2:492795152939614209>`) {
                var module3name = `Magnum`
            }
            else if (module3 == `<:GrizzleyM2:492795153132814357>`) {
                var module3name = `Thunder`
            }
            else if (module3 == `<:LionM2:492795153787125760>`) {
                var module3name = `Ricochet`
            }
            else if (module3 == `<:OcelotM2:492795153874944004>`) {
                var module3name = `Isida`
            }
            else if (module3 == `<:OrkaM2:492795153535467541>`) {
                var module3name = `Striker`
            }
            else if (module3 == `<:PantherM2:492795153929732098>`) {
                var module3name = `Twins`
            }
            else if (module3 == `<:SharkM2:492795153711497217>`) {
                var module3name = `Vulcan`
            }
            else if (module3 == `<:SpiderM2:492795153564827669>`) {
                var module3name = `Spider`
            }
            else if (module3 == `<:WolfM2:492795153782800405>`) {
                var module3name = `Hammer`
            }


            if (turretrnd == 1) {
                var turretpic = `https://i.imgur.com/jLVnoz6.png`
                var turretname = `Firebird`
            }
            else if (turretrnd == 2) {
                var turretpic = `https://i.imgur.com/E8Y4rO5.png`
                var turretname = `Freeze`
            }
            else if (turretrnd == 3) {
                var turretpic = `https://i.imgur.com/dc42Kvq.png`
                var turretname = `Isida`
            }
            else if (turretrnd == 4) {
                var turretpic = `https://i.imgur.com/wAduBNf.png`
                var turretname = `Hammer`
            }
            else if (turretrnd == 5) {
                var turretpic = `https://i.imgur.com/J7XG18I.png`
                var turretname = `Twins`
            }
            else if (turretrnd == 6) {
                var turretpic = `https://i.imgur.com/CpvUvTO.png`
                var turretname = `Ricochet`
            }
            else if (turretrnd == 7) {
                var turretpic = `https://i.imgur.com/7AvzDql.png`
                var turretname = `Thunder`
            }
            else if (turretrnd == 8) {
                var turretpic = `https://i.imgur.com/UVQrdvS.png`
                var turretname = `Smoky`
            }
            else if (turretrnd == 9) {
                var turretpic = `https://i.imgur.com/b4vVLDw.png`
                var turretname = `Striker`
            }
            else if (turretrnd == 10) {
                var turretpic = `https://i.imgur.com/haiSwkG.png`
                var turretname = `Vulcan`
            }
            else if (turretrnd == 11) {
                var turretpic = `https://i.imgur.com/Yedhhls.png`
                var turretname = `Railgun`
            }
            else if (turretrnd == 12) {
                var turretpic = `https://i.imgur.com/5D1xny5.png`
                var turretname = `Magnum`
            }
            else if (turretrnd == 13) {
                var turretpic = `https://i.imgur.com/iD589T8.png`
                var turretname = `Shaft`
            }

            if (hullrnd == 1) {
                var hullpic = `https://i.imgur.com/gGirXZb.png`
                var hullname = `Wasp`
            }
            else if (hullrnd == 2) {
                var hullpic = `https://i.imgur.com/s9tV8xU.png`
                var hullname = `Hornet`
            }
            else if (hullrnd == 3) {
                var hullpic = `https://i.imgur.com/AiJwPBp.png`
                var hullname = `Hunter`
            }
            else if (hullrnd == 4) {
                var hullpic = `https://i.imgur.com/P4V7Uvi.png`
                var hullname = `Viking`
            }
            else if (hullrnd == 5) {
                var hullpic = `https://i.imgur.com/TBDZWS5.png`
                var hullname = `Dictator`
            }
            else if (hullrnd == 6) {
                var hullpic = `https://i.imgur.com/dBF7gi3.png`
                var hullname = `Titan`
            }
            else if (hullrnd == 7) {
                var hullpic = `https://i.imgur.com/NRJQHOn.png`
                var hullname = `Mammoth`
            }


            if (dronernd == `1`) {
                var dronepic = `https://i.imgur.com/i4kLXUq.png`
                var dronename = `Assault`
            }
            else if (dronernd == `2`) {
                var dronepic = `https://i.imgur.com/GTx8XSC.png`
                var dronename = `Driver`
            }
            else if (dronernd == `3`) {
                var dronepic = `https://i.imgur.com/7OQTcCS.png`
                var dronename = `Engineer`
            }
            else if (dronernd == `4`) {
                var dronepic = `https://i.imgur.com/m7UNylf.png`
                var dronename = `Mechanic`
            }
            else if (dronernd == `5`) {
                var dronepic = `https://i.imgur.com/IQxEaxF.png`
                var dronename = `Supplier`
            }
            else if (dronernd == `6`) {
                var dronepic = `https://i.imgur.com/EREdvT0.png`
                var dronename = `Trooper`
            }


            if ((paintrnd) == 1) {
                var paintpic = 'https://i.imgur.com/Uu6IWdY.png'
                var paintname = 'Black Paint'
            }
            else if ((paintrnd) == 2) {
                var paintpic = 'https://i.imgur.com/bic1Mx7.png'
                var paintname = 'Red Paint'
            }
            else if ((paintrnd) == 3) {
                var paintpic = "https://i.imgur.com/B1icnUH.png"
                var paintname = 'Green Paint'
            }
            else if ((paintrnd) == 4) {
                var paintpic = 'https://i.imgur.com/UnU5gub.png'
                var paintname = 'White Paint'
            }
            else if ((paintrnd) == 5) {
                var paintpic = 'https://i.imgur.com/Xf7Z6zF.png'
                var paintname = 'Orange Paint'
            }
            else if ((paintrnd) == 6) {
                var paintpic = 'https://i.imgur.com/tzLiLAM.png'
                var paintname = 'Flora Paint'
            }
            else if ((paintrnd) == 7) {
                var paintpic = 'https://i.imgur.com/lTWZpIV.png'
                var paintname = 'Marine Paint'
            }
            else if ((paintrnd) == 8) {
                var paintpic = "https://i.imgur.com/n3hJ8ZH.png"
                var paintname = 'Swamp Paint'
            }
            else if ((paintrnd) == 9) {
                var paintpic = 'https://i.imgur.com/VTEu0X7.png'
                var paintname = 'Forester Paint'
            }
            else if ((paintrnd) == 10) {
                var paintpic = 'https://i.imgur.com/bTAEhiV.png'
                var paintname = 'Metallic Paint'
            }
            else if ((paintrnd) == 11) {
                var paintpic = 'https://i.imgur.com/yJcKJIM.png'
                var paintname = 'Lava Paint'
            }
            else if ((paintrnd) == 12) {
                var paintpic = 'https://i.imgur.com/JGd6ZeJ.png'
                var paintname = 'Lead Paint'
            }
            else if ((paintrnd) == 13) {
                var paintpic = "https://i.imgur.com/XchiKvr.png"
                var paintname = 'Alien 2.0 Paint'
            }
            else if ((paintrnd) == 14) {
                var paintpic = 'https://i.imgur.com/UzL3YNb.png'
                var paintname = 'Safari Paint'
            }
            else if ((paintrnd) == 15) {
                var paintpic = 'https://i.imgur.com/vokPLVg.png'
                var paintname = 'Dragon Paint'
            }
            else if ((paintrnd) == 16) {
                var paintpic = 'https://i.imgur.com/80gpeds.png'
                var paintname = 'Magma Paint'
            }
            else if ((paintrnd) == 17) {
                var paintpic = "https://i.imgur.com/etlhZOc.png"
                var paintname = 'Mary paint'
            }
            else if ((paintrnd) == 18) {
                var paintpic = 'https://i.imgur.com/8F4AIwU.png'
                var paintname = 'Sahara Paint'
            }
            else if ((paintrnd) == 19) {
                var paintpic = 'https://i.imgur.com/Vl0KN5R.png'
                var paintname = 'Night paint'
            }
            else if ((paintrnd) == 20) {
                var paintpic = 'https://i.imgur.com/2eihFkl.png'
                var paintname = 'In Love Paint'
            }
            else if ((paintrnd) == 21) {
                var paintpic = 'https://i.imgur.com/7btgslo.png'
                var paintname = 'Carbon Paint'
            }
            else if ((paintrnd) == 22) {
                var paintpic = "https://i.imgur.com/pi9uDgU.png"
                var paintname = 'Confetti Paint'
            }
            else if ((paintrnd) == 23) {
                var paintpic = 'https://i.imgur.com/2BYkeaM.png'
                var paintname = 'Alien 1.0 Paint'
            }
            else if ((paintrnd) == 24) {
                var paintpic = 'https://i.imgur.com/WWNYEHq.png'
                var paintname = 'Chainmail Paint'
            }
            else if ((paintrnd) == 25) {
                var paintpic = 'https://i.imgur.com/Qrb8OJD.png'
                var paintname = 'Dirty Paint'
            }
            else if ((paintrnd) == 26) {
                var paintpic = "https://i.imgur.com/4ieFQ2n.png"
                var paintname = 'Jaguar Paint'
            }
            else if ((paintrnd) == 27) {
                var paintpic = 'https://i.imgur.com/le65j8j.png'
                var paintname = 'Desert Paint'
            }
            else if ((paintrnd) == 28) {
                var paintpic = 'https://i.imgur.com/JADpZCD.png'
                var paintname = 'Guerrilla Paint'
            }
            else if ((paintrnd) == 29) {
                var paintpic = 'https://i.imgur.com/TqHwYqE.png'
                var paintname = 'Swash Paint'
            }
            else if ((paintrnd) == 30) {
                var paintpic = 'https://i.imgur.com/6LR05QB.png'
                var paintname = 'Harlequin Paint'
            }
            else if ((paintrnd) == 31) {
                var paintpic = "https://i.imgur.com/0pMnCb4.png"
                var paintname = 'Pixel Paint'
            }
            else if ((paintrnd) == 32) {
                var paintpic = 'https://i.imgur.com/5Y9P7Z9.png'
                var paintname = 'Corrosion Paint'
            }
            else if ((paintrnd) == 33) {
                var paintpic = 'https://i.imgur.com/P3Q6sk1.png'
                var paintname = 'Tundra Paint'
            }
            else if ((paintrnd) == 34) {
                var paintpic = 'https://i.imgur.com/XBejee5.png'
                var paintname = 'Vortex Paint'
            }
            else if ((paintrnd) == 35) {
                var paintpic = "https://i.imgur.com/qIqOt7g.png"
                var paintname = 'Pixel Heart Paint'
            }
            else if ((paintrnd) == 36) {
                var paintpic = 'https://i.imgur.com/YbND0oP.png'
                var paintname = 'Roger Paint'
            }
            else if ((paintrnd) == 37) {
                var paintpic = 'https://i.imgur.com/hun7Hs4.png'
                var paintname = 'Fracture Paint'
            }
            else if ((paintrnd) == 38) {
                var paintpic = 'https://i.imgur.com/za8gY6V.png'
                var paintname = 'Cedar Paint'
            }
            else if ((paintrnd) == 39) {
                var paintpic = 'https://i.imgur.com/x8KgVmd.png'
                var paintname = 'Python Paint'
            }
            else if ((paintrnd) == 40) {
                var paintpic = 'https://i.imgur.com/IVaOz5u.png'
                var paintname = 'Sakura Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = 'https://i.imgur.com/680JitP.png'
                var paintname = 'Grasslands Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = "https://i.imgur.com/yqXD0ZF.png"
                var paintname = 'Soft Flowers paint'
            }
            else if ((paintrnd) == 42) {
                var paintpic = 'https://i.imgur.com/W611QqD.png'
                var paintname = 'Electra Paint'
            }
            else if ((paintrnd) == 43) {
                var paintpic = 'https://i.imgur.com/ZMrsVTt.png'
                var paintname = 'Moss paint'
            }
            else if ((paintrnd) == 44) {
                var paintpic = 'https://i.imgur.com/nRipiA9.png'
                var paintname = 'First Love Paint'
            }
            else if ((paintrnd) == 45) {
                var paintpic = "https://i.imgur.com/Fgxd6gs.png"
                var paintname = 'Sandstone paint'
            }
            else if ((paintrnd) == 46) {
                var paintpic = 'https://i.imgur.com/6bHB1F2.png'
                var paintname = 'Spark Paint'
            }
            else if ((paintrnd) == 47) {
                var paintpic = 'https://i.imgur.com/04IAZ7n.png'
                var paintname = 'Jeans paint'
            }
            else if ((paintrnd) == 48) {
                var paintpic = 'https://i.imgur.com/TQX4ePk.png'
                var paintname = 'Digital Paint'
            }
            else if ((paintrnd) == 49) {
                var paintpic = 'https://i.imgur.com/DTiOYfs.png'
                var paintname = 'Rustle Paint'
            }
            else if ((paintrnd) == 50) {
                var paintpic = "https://i.imgur.com/sG7HBJS.png"
                var paintname = 'Blacksmith Paint'
            }
            else if ((paintrnd) == 51) {
                var paintpic = 'https://i.imgur.com/y1oy0EJ.png'
                var paintname = 'Hohloma Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/UedBFsb.png'
                var paintname = 'Loam Paint'
            }
            else if ((paintrnd) == 53) {
                var paintpic = 'https://i.imgur.com/uLQ6Lkv.png'
                var paintname = 'Rhino Paint'
            }
            else if ((paintrnd) == 54) {
                var paintpic = "https://i.imgur.com/DfNAcFt.png"
                var paintname = 'Winter Paint'
            }
            else if ((paintrnd) == 55) {
                var paintpic = 'https://i.imgur.com/655k2TY.png'
                var paintname = 'Urban Paint'
            }
            else if ((paintrnd) == 56) {
                var paintpic = 'https://i.imgur.com/KEnNc7l.png'
                var paintname = 'Sweater Paint'
            }
            else if ((paintrnd) == 57) {
                var paintpic = 'https://i.imgur.com/Uc2xStT.png'
                var paintname = 'Atom Paint'
            }
            else if ((paintrnd) == 58) {
                var paintpic = 'https://i.imgur.com/qvAsqjh.png'
                var paintname = 'Savanna Paint'
            }
            else if ((paintrnd) == 59) {
                var paintpic = "https://i.imgur.com/Z6anuHd.png"
                var paintname = 'Cherry Paint'
            }
            else if ((paintrnd) == 60) {
                var paintpic = 'https://i.imgur.com/B7i6beQ.png'
                var paintname = 'Emerald Paint'
            }
            else if ((paintrnd) == 61) {
                var paintpic = 'https://i.imgur.com/QtINXHI.png'
                var paintname = 'Ibris Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/pns89xU.png'
                var paintname = 'Disco Paint'
            }
            else if ((paintrnd) == 63) {
                var paintpic = "https://i.imgur.com/1YO1rpg.png"
                var paintname = 'Mars Paint'
            }
            else if ((paintrnd) == 64) {
                var paintpic = 'https://i.imgur.com/08PvYck.png'
                var paintname = 'Hive Paint'
            }
            else if ((paintrnd) == 65) {
                var paintpic = 'https://i.imgur.com/ZBYZ8bQ.png'
                var paintname = 'Inferno Paint'
            }
            else if ((paintrnd) == 66) {
                var paintpic = 'https://i.imgur.com/BIrUhHg.png'
                var paintname = 'Jade Paint'
            }
            else if ((paintrnd) == 67) {
                var paintpic = 'https://i.imgur.com/G4LTzGF.png'
                var paintname = 'Tiger Paint'
            }
            else if ((paintrnd) == 68) {
                var paintpic = "https://i.imgur.com/7D9zmjy.png"
                var paintname = 'Kaleidoscope Paint'
            }
            else if ((paintrnd) == 69) {
                var paintpic = 'https://i.imgur.com/Uk1Epds.png'
                var paintname = 'Taiga Paint'
            }
            else if ((paintrnd) == 70) {
                var paintpic = 'https://i.imgur.com/BA79PyV.png'
                var paintname = 'Red Urban Paint'
            }
            else if ((paintrnd) == 71) {
                var paintpic = 'https://i.imgur.com/lVA00HV.png'
                var paintname = 'Nano Paint'
            }
            else if ((paintrnd) == 72) {
                var paintpic = "https://i.imgur.com/VFTr1Vm.png"
                var paintname = 'Prodigi Paint'
            }
            else if ((paintrnd) == 73) {
                var paintpic = 'https://i.imgur.com/isv4C0u.png'
                var paintname = 'Rock Paint'
            }
            else if ((paintrnd) == 74) {
                var paintpic = 'https://i.imgur.com/pKcu3TS.png'
                var paintname = 'Raccoon Paint'
            }
            else if ((paintrnd) == 75) {
                var paintpic = 'https://i.imgur.com/KzNkIXj.png'
                var paintname = 'Needle Paint'
            }
            else if ((paintrnd) == 76) {
                var paintpic = 'https://i.imgur.com/ggGlJGu.png'
                var paintname = 'Picasso Paint'
            }
            else if ((paintrnd) == 78) {
                var paintpic = 'https://i.imgur.com/reDTcBH.png'
                var paintname = 'Australia Paint'
            }
            else if ((paintrnd) == 79) {
                var paintpic = 'https://i.imgur.com/AJQrwyi.png'
                var paintname = 'Belgium Paint'
            }
            else if ((paintrnd) == 80) {
                var paintpic = 'https://i.imgur.com/958evYX.png'
                var paintname = 'Brazil Paint'
            }
            else if ((paintrnd) == 81) {
                var paintpic = 'https://i.imgur.com/7Jt63vS.png'
                var paintname = 'Colombia Paint'
            }
            else if ((paintrnd) == 82) {
                var paintpic = 'https://i.imgur.com/iVNsjXY.png'
                var paintname = 'South Korea Paint'
            }
            else if ((paintrnd) == 83) {
                var paintpic = 'https://i.imgur.com/PYRmJIp.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 84) {
                var paintpic = 'https://i.imgur.com/7cYZu1I.png'
                var paintname = 'Croatia Paint'
            }
            else if ((paintrnd) == 85) {
                var paintpic = 'https://i.imgur.com/wvYQSXa.png'
                var paintname = 'Costa Rica Paint'
            }
            else if ((paintrnd) == 86) {
                var paintpic = 'https://i.imgur.com/NVIdw9e.png'
                var paintname = 'Egypt Paint'
            }
            else if ((paintrnd) == 87) {
                var paintpic = 'https://i.imgur.com/Jn5mrQI.png'
                var paintname = 'England Paint'
            }
            else if ((paintrnd) == 88) {
                var paintpic = 'https://i.imgur.com/XVrmTAE.png'
                var paintname = 'France Paint'
            }
            else if ((paintrnd) == 89) {
                var paintpic = 'https://i.imgur.com/7IU5kHG.png'
                var paintname = 'Iceland Paint'
            }
            else if ((paintrnd) == 90) {
                var paintpic = 'https://i.imgur.com/JCTfffl.png'
                var paintname = 'Germany Paint'
            }
            else if ((paintrnd) == 91) {
                var paintpic = 'https://i.imgur.com/0KgtBsx.png'
                var paintname = 'Iran Paint'
            }
            else if ((paintrnd) == 92) {
                var paintpic = 'https://i.imgur.com/6RzUNAy.png'
                var paintname = 'Japan Paint'
            }
            else if ((paintrnd) == 93) {
                var paintpic = 'https://i.imgur.com/ifrbtMe.png'
                var paintname = 'Mexico Paint'
            }
            else if ((paintrnd) == 94) {
                var paintpic = 'https://i.imgur.com/DPA9Bil.png'
                var paintname = 'Morocco Paint'
            }
            else if ((paintrnd) == 95) {
                var paintpic = 'https://i.imgur.com/bqxX9er.png'
                var paintname = 'Panama Paint'
            }
            else if ((paintrnd) == 96) {
                var paintpic = 'https://i.imgur.com/ZQLGlOC.png'
                var paintname = 'Nigeria Paint'
            }
            else if ((paintrnd) == 97) {
                var paintpic = 'https://i.imgur.com/lkZmpvy.png'
                var paintname = 'Peru Paint'
            }
            else if ((paintrnd) == 98) {
                var paintpic = 'https://i.imgur.com/rF67XB7.png'
                var paintname = 'Portugal Paint'
            }
            else if ((paintrnd) == 99) {
                var paintpic = 'https://i.imgur.com/32jmRY5.png'
                var paintname = 'Poland Paint'
            }
            else if ((paintrnd) == 100) {
                var paintpic = 'https://i.imgur.com/aSyZVyl.png'
                var paintname = 'Russia Paint'
            }
            else if ((paintrnd) == 101) {
                var paintpic = 'https://i.imgur.com/0pZ8POK.png'
                var paintname = 'Saudi Arabia Paint'
            }
            else if ((paintrnd) == 102) {
                var paintpic = 'https://i.imgur.com/cvBh12Z.png'
                var paintname = 'Senagal Paint'
            }
            else if ((paintrnd) == 103) {
                var paintpic = 'https://i.imgur.com/Xp5wtvv.png'
                var paintname = 'Serbia Paint'
            }
            else if ((paintrnd) == 104) {
                var paintpic = 'https://i.imgur.com/o7dBXh6.png'
                var paintname = 'Sweden Paint'
            }
            else if ((paintrnd) == 105) {
                var paintpic = 'https://i.imgur.com/PkWhBUK.png'
                var paintname = 'Spain Paint'
            }
            else if ((paintrnd) == 106) {
                var paintpic = 'https://i.imgur.com/xYYxCTR.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 107) {
                var paintpic = 'https://i.imgur.com/59R91Q0.png'
                var paintname = 'Tunisa Paint'
            }
            else if ((paintrnd) == 108) {
                var paintpic = 'https://i.imgur.com/3LRdNAn.png'
                var paintname = 'Uruguay Paint'
            }
            else if ((paintrnd) == 109) {
                var paintpic = 'https://i.imgur.com/x2nlYUX.png'
                var paintname = 'Space Paint'
            }
            else if ((paintrnd) == 110) {
                var paintpic = 'https://i.imgur.com/wW7ycng.png'
                var paintname = 'Frost Paint'
            }
            else if ((paintrnd) == 111) {
                var paintpic = "https://i.imgur.com/TMTTgam.png"
                var paintname = 'Graffiti paint'
            }
            else if ((paintrnd) == 112) {
                var paintpic = 'https://i.imgur.com/E0Z6QA5.png'
                var paintname = 'Zeus Paint'
            }
            else if ((paintrnd) == 113) {
                var paintpic = 'https://i.imgur.com/NoaIyLi.png'
                var paintname = 'Clay paint'
            }
            else if ((paintrnd) == 114) {
                var paintpic = 'https://i.imgur.com/IgIJGLP.png'
                var paintname = 'Lumberjack Paint'
            }
            else if ((paintrnd) == 115) {
                var paintpic = "https://i.imgur.com/X9bDdkA.png"
                var paintname = 'Africa paint'
            }
            else if ((paintrnd) == 116) {
                var paintpic = 'https://i.imgur.com/tY668p6.png'
                var paintname = 'Golden Star Paint'
            }
            else if ((paintrnd) == 117) {
                var paintpic = 'https://i.imgur.com/DHYlg2j.png'
                var paintname = 'Arachnid Paint'
            }
            else if ((paintrnd) == 118) {
                var paintpic = 'https://i.imgur.com/OwnToQT.png'
                var paintname = 'Liquid Metal Paint'
            }
            else if ((paintrnd) == 119) {
                var paintpic = "https://i.imgur.com/HL9nYPM.png"
                var paintname = 'Drought Paint'
            }
            else if ((paintrnd) == 120) {
                var paintpic = 'https://i.imgur.com/XB2ofuq.png'
                var paintname = 'Strawberry Paint'
            }
            else if ((paintrnd) == 121) {
                var paintpic = 'https://i.imgur.com/aozjomN.png'
                var paintname = 'Barber Shop Paint'
            }
            else if ((paintrnd) == 122) {
                var paintpic = 'https://i.imgur.com/zavV07Q.png'
                var paintname = 'Scandinavia Paint'
            }
            else if ((paintrnd) == 123) {
                var paintpic = "https://i.imgur.com/oajuf2p.png"
                var paintname = 'Lunar Soil Paint'
            }
            else if ((paintrnd) == 124) {
                var paintpic = 'https://i.imgur.com/9j5lgqs.png'
                var paintname = 'Rust Paint'
            }
            else if ((paintrnd) == 125) {
                var paintpic = 'https://i.imgur.com/jPblblx.png'
                var paintname = 'Steak Paint'
            }
            else if ((paintrnd) == 126) {
                var paintpic = "https://i.imgur.com/9Il5i8W.png"
                var paintname = 'Amber Paint'
            }
            else if ((paintrnd) == 127) {
                var paintpic = 'https://i.imgur.com/nbS4uGw.png'
                var paintname = 'Lime Paint'
            }
            else if ((paintrnd) == 128) {
                var paintpic = 'https://i.imgur.com/WKZEFHx.png'
                var paintname = 'Neuron Paint'
            }
            else if ((paintrnd) == 129) {
                var paintpic = 'https://i.imgur.com/HaXUxxY.png'
                var paintname = 'Domino Paint'
            }
            else if ((paintrnd) == 130) {
                var paintpic = "https://i.imgur.com/eMLcbdn.png"
                var paintname = 'Watercolour Paint'
            }
            else if ((paintrnd) == 131) {
                var paintpic = 'https://i.imgur.com/tjq2SF4.png'
                var paintname = 'Pajamas Paint'
            }
            else if ((paintrnd) == 132) {
                var paintpic = 'https://i.imgur.com/Ms5OK0z.png'
                var paintname = 'Vanadium Paint'
            }
            else if ((paintrnd) == 133) {
                var paintpic = 'https://i.imgur.com/FL8ISUB.png'
                var paintname = 'Glitch Paint'
            }
            else if ((paintrnd) == 134) {
                var paintpic = 'https://i.imgur.com/ecKmDEv.png'
                var paintname = 'Sunset Camoflage Paint'
            }
            else if ((paintrnd) == 135) {
                var paintpic = 'https://i.imgur.com/hxJFqQV.png'
                var paintname = 'All You Need Is Love Paint'
            }
            else if ((paintrnd) == 136) {
                var paintpic = "https://i.imgur.com/unj7X8g.png"
                var paintname = 'Zombie Paint'
            }
            else if ((paintrnd) == 137) {
                var paintpic = 'https://i.imgur.com/Lh4Hbqw.png'
                var paintname = 'Fire Of Valor Paint'
            }
            else if ((paintrnd) == 138) {
                var paintpic = 'https://i.imgur.com/CXUIMit.png'
                var paintname = 'Spangles Paint'
            }
            else if ((paintrnd) == 139) {
                var paintpic = 'https://i.imgur.com/4TYOOd1.png'
                var paintname = 'Snowflake Paint'
            }
            else if ((paintrnd) == 140) {
                var paintpic = "https://i.imgur.com/avubcYN.png"
                var paintname = 'Lilac Petals Paint'
            }
            else if ((paintrnd) == 141) {
                var paintpic = 'https://i.imgur.com/t6IM63n.png'
                var paintname = 'Retina Paint'
            }
            else if ((paintrnd) == 142) {
                var paintpic = 'https://i.imgur.com/xKCSDrf.png'
                var paintname = 'Chill Bro Paint'
            }
            else if ((paintrnd) == 143) {
                var paintpic = 'https://i.imgur.com/PTFjank.png'
                var paintname = 'Tanki In Moscow Paint'
            }
            else if ((paintrnd) == 144) {
                var paintpic = 'https://i.imgur.com/kBleN5n.png'
                var paintname = 'Secret Of The Aliens Paint'
            }
            else if ((paintrnd) == 145) {
                var paintpic = 'https://i.imgur.com/Z3l7dkO.png'
                var paintname = 'Pumpkins Paint'
            }
            else if ((paintrnd) == 146) {
                var paintpic = 'https://i.imgur.com/UVQ15W1.png'
                var paintname = 'Tropical Foliage Paint'
            }
            else if ((paintrnd) == 147) {
                var paintpic = 'https://i.imgur.com/Z2CoZDm.png'
                var paintname = 'Azure Paint'
            }
            else if ((paintrnd) == 148) {
                var paintpic = 'https://i.imgur.com/zXFanQF.png'
                var paintname = 'Gucciflage Paint'
            }
            else if ((paintrnd) == 149) {
                var paintpic = "https://i.imgur.com/GO4TIUt.png"
                var paintname = 'Hallucination Paint'
            }
            else if ((paintrnd) == 150) {
                var paintpic = 'https://i.imgur.com/GNTozmo.png'
                var paintname = 'Hypercube Paint'
            }
            else if ((paintrnd) == 151) {
                var paintpic = 'https://i.imgur.com/ZdIwfSe.png'
                var paintname = 'Kungar Ice Cave Paint'
            }
            else if ((paintrnd) == 152) {
                var paintpic = 'https://i.imgur.com/BVAcIa1.png'
                var paintname = 'Lollipop Paint'
            }
            else if ((paintrnd) == 153) {
                var paintpic = "https://i.imgur.com/8J3lAbb.png"
                var paintname = 'Lotus Paint'
            }
            else if ((paintrnd) == 154) {
                var paintpic = 'https://i.imgur.com/qCCohrO.png'
                var paintname = 'Monet Paint'
            }
            else if ((paintrnd) == 155) {
                var paintpic = 'https://i.imgur.com/2rEIlXV.png'
                var paintname = 'Paisley Flame Paint'
            }
            else if ((paintrnd) == 156) {
                var paintpic = "https://i.imgur.com/6QKNAeE.png"
                var paintname = 'Paisley Ice Paint'
            }
            else if ((paintrnd) == 157) {
                var paintpic = 'https://i.imgur.com/QimIWp2.png'
                var paintname = 'Peaks Paint'
            }
            else if ((paintrnd) == 158) {
                var paintpic = 'https://i.imgur.com/hniZLLO.png'
                var paintname = 'Phantom Paint'
            }
            else if ((paintrnd) == 159) {
                var paintpic = 'https://i.imgur.com/ugXhy8B.png'
                var paintname = 'Play Doh Paint'
            }
            else if ((paintrnd) == 160) {
                var paintpic = "https://i.imgur.com/VthKAsE.png"
                var paintname = 'Pop Art Paint'
            }
            else if ((paintrnd) == 161) {
                var paintpic = 'https://i.imgur.com/zblzcV1.png'
                var paintname = 'Potter Paint'
            }
            else if ((paintrnd) == 162) {
                var paintpic = 'https://i.imgur.com/JZ4Kpvg.png'
                var paintname = 'Pulsar Paint'
            }
            else if ((paintrnd) == 163) {
                var paintpic = 'https://i.imgur.com/SAKhlFD.png'
                var paintname = 'Ripple Paint'
            }
            else if ((paintrnd) == 164) {
                var paintpic = 'https://i.imgur.com/JdTLdR5.png'
                var paintname = 'Sillicate Paint'
            }
            else if ((paintrnd) == 165) {
                var paintpic = 'https://i.imgur.com/doBAp5o.png'
                var paintname = 'Sodoku Paint'
            }
            else if ((paintrnd) == 166) {
                var paintpic = "https://i.imgur.com/ZjdRIzn.png"
                var paintname = 'Zig Zag Paint'
            }
            else if ((paintrnd) == 167) {
                var paintpic = 'https://i.imgur.com/gRBmdwt.png'
                var paintname = 'Abstract Lines Paint'
            }
            else if ((paintrnd) == 168) {
                var paintpic = 'https://i.imgur.com/cwLwvQD.png'
                var paintname = 'Blue Squares Paint'
            }
            else if ((paintrnd) == 169) {
                var paintpic = 'https://i.imgur.com/3Vkacjq.png'
                var paintname = 'Condensed Milk Paint'
            }
            else if ((paintrnd) == 170) {
                var paintpic = 'https://i.imgur.com/KMgUWl2.png'
                var paintname = 'E236 Paint'
            }
            else if ((paintrnd) == 171) {
                var paintpic = "https://i.imgur.com/bBBo1Sz.png"
                var paintname = 'Feathers Paint'
            }
            else if ((paintrnd) == 172) {
                var paintpic = 'https://i.imgur.com/p5epSIk.png'
                var paintname = 'Fire Dragon Paint'
            }
            else if ((paintrnd) == 173) {
                var paintpic = 'https://i.imgur.com/IaVCbyi.png'
                var paintname = 'Megapolis Paint'
            }
            else if ((paintrnd) == 174) {
                var paintpic = 'https://i.imgur.com/j2ju8Mu.png'
                var paintname = 'Stained Glass Paint'
            }
            else if ((paintrnd) == 175) {
                var paintpic = 'https://i.imgur.com/ibHAEQI.png'
                var paintname = 'Thunderball Paint'
            }
            else if ((paintrnd) == 176) {
                var paintpic = 'https://i.imgur.com/lMaHubB.png'
                var paintname = 'Moonwalker Paint'
            }
            else if ((paintrnd) == 177) {
                var paintpic = 'https://i.imgur.com/M5Z5FWv.png'
                var paintname = 'Eternity Paint'
            }
            else if ((paintrnd) == 178) {
                var paintpic = "https://i.imgur.com/PhNXyXp.png"
                var paintname = 'Red Suit paint'
            }
            else if ((paintrnd) == 179) {
                var paintpic = 'https://i.imgur.com/PmvUxAg.png'
                var paintname = 'Wave Paint'
            }
            else if ((paintrnd) == 180) {
                var paintpic = 'https://i.imgur.com/FpgBtEZ.png'
                var paintname = 'Nightmare paint'
            }
            else if ((paintrnd) == 181) {
                var paintpic = "https://i.imgur.com/z8iOhJR.png"
                var paintname = 'Spectrum paint'
            }
            else if ((paintrnd) == 182) {
                var paintpic = 'https://i.imgur.com/dbnms0o.png'
                var paintname = 'Holiday Lights Paint'
            }
            else if ((paintrnd) == 183) {
                var paintpic = 'https://i.imgur.com/ZfVuulO.png'
                var paintname = 'Matrix paint'
            }
            else if ((paintrnd) == 184) {
                var paintpic = 'https://i.imgur.com/NJl5fCT.png'
                var paintname = 'Mosaic Paint'
            }
            else if ((paintrnd) == 185) {
                var paintpic = "https://i.imgur.com/gzaWRlk.png"
                var paintname = 'Vertigo paint'
            }
            else if ((paintrnd) == 186) {
                var paintpic = 'https://i.imgur.com/1TZ7Lmn.png'
                var paintname = 'Prodigi 2.0 Paint'
            }
            else if ((paintrnd) == 187) {
                var paintpic = 'https://i.imgur.com/dtykCud.png'
                var paintname = 'Beating Hearts Paint'
            }
            else if ((paintrnd) == 188) {
                var paintpic = "https://i.imgur.com/rMKC2xq.png"
                var paintname = 'Ginga paint'
            }
            else if ((paintrnd) == 189) {
                var paintpic = 'https://i.imgur.com/iOKfNEJ.png'
                var paintname = 'Magnolia Paint'
            }
            else if ((paintrnd) == 190) {
                var paintpic = 'https://i.imgur.com/7YHD4Dc.png'
                var paintname = 'Galaxy paint'
            }
            else if ((paintrnd) == 191) {
                var paintpic = 'https://i.imgur.com/pPYWKat.png'
                var paintname = 'Eruption Paint'
            }
            else if ((paintrnd) == 192) {
                var paintpic = "https://i.imgur.com/s3nJG76.png"
                var paintname = 'Siberian Tiger paint'
            }
            else if ((paintrnd) == 193) {
                var paintpic = 'https://i.imgur.com/JPZLhFw.png'
                var paintname = 'Secret Sauce Paint'
            }
            else if ((paintrnd) == 194) {
                var paintpic = 'https://i.imgur.com/gNll0nd.png'
                var paintname = 'Canyon Hero Paint'
            }
            else if ((paintrnd) == 195) {
                var paintpic = 'https://i.imgur.com/ldN5LLn.png'
                var paintname = 'Pastila Paint'
            }
            else if ((paintrnd) == 196) {
                var paintpic = "https://i.imgur.com/V6iKdpy.png"
                var paintname = 'Valour paint'
            }
            else if ((paintrnd) == 197) {
                var paintpic = 'https://i.imgur.com/jEGItOc.png'
                var paintname = 'Beholder Paint'
            }
            else if ((paintrnd) == 198) {
                var paintpic = 'https://i.imgur.com/JivLe7B.png'
                var paintname = 'Synesthesia paint'
            }
            else if ((paintrnd) == 199) {
                var paintpic = 'https://i.imgur.com/UM9U9zG.png'
                var paintname = 'Gears Paint'
            }
            else if ((paintrnd) == 200) {
                var paintpic = 'https://i.imgur.com/YiZ8IRR.png'
                var paintname = 'Raidioactive Jelly Paint'
            }
            else if ((paintrnd) == 201) {
                var paintpic = 'https://i.imgur.com/X0QGyIO.png'
                var paintname = 'Spinner Paint'
            }
            else if ((paintrnd) == 202) {
                var paintpic = "https://i.imgur.com/4okwQzH.png"
                var paintname = 'Tenticals paint'
            }
            else if ((paintrnd) == 203) {
                var paintpic = 'https://i.imgur.com/yYJLsJb.png'
                var paintname = 'LEDs Paint'
            }
            else if ((paintrnd) == 204) {
                var paintpic = 'https://i.imgur.com/kB8q8kQ.png'
                var paintname = 'Meteor Shower paint'
            }
            else if ((paintrnd) == 205) {
                var paintpic = 'https://i.imgur.com/xU1BuPf.png'
                var paintname = 'Fall Leaves paint'
            }
            else if ((paintrnd) == 206) {
                var paintpic = 'https://i.imgur.com/fwQKtYJ.png'
                var paintname = 'Electrohive paint'
            }
            else if ((paintrnd) == 207) {
                var paintpic = 'https://i.imgur.com/eX2ajC6.png'
                var paintname = 'Synth pop paint'
            }




            try {

                let embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} You chose a random combo`)
                    .setThumbnail(paintpic)
                    .setColor("#caaffd")
                    .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                    .setImage(turretpic)
                message.channel.send(embed)

                let embed2 = new Discord.RichEmbed()
                    .setThumbnail(dronepic)
                    .setColor("#caaffd")
                    .setImage(hullpic)
                    .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                message.channel.send(embed2)



            } catch (err) {
                console.log(err)
                if (err) {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} You chose a random combo`)
                        .setThumbnail(paintpic)
                        .setColor("#caaffd")
                        .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                        .setImage(turretpic)
                    message.channel.send(embed)

                    let embed2 = new Discord.RichEmbed()
                        .setThumbnail(dronepic)
                        .setColor("#caaffd")
                        .setImage(hullpic)
                        .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                    message.channel.send(embed2)
                }
            }


        }

        if (message.content == prefix + `combo m3`) {
            var turretrnd = Math.floor(Math.random() * 13) + 1;
            var hullrnd = Math.floor(Math.random() * 7) + 1;
            var paintrnd = Math.floor(Math.random() * 207) + 1;
            var moduelrnd = Math.floor(Math.random() * 14) + 1;
            var dronernd = Math.floor(Math.random() * 6) + 1;


            const array1 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]
            const array2 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]
            const array3 = [`<:BadgerM3:492794414914076694>`, `<:DolphinM3:492794414624669698>`, `<:EagleM3:492794414519943169>`, `<:FalconM3:492794414846967809>`, `<:FoxM3:492794414092255249>`, `<:GriffonM3:492794414339588107>`, `<:GrizzleyM3:492794414926659584>`, `<:LionM3:492794414260027402>`, `<:OcelotM3:492794414230667286>`, `<:OrkaM3:492794414737915915>`, `<:PantherM3:492794414440251403>`, `<:SharkM3:492794414809350154>`, `<:SpiderM3:492794414482325534>`, `<:WolfM3:492794414578663434>`]

            async function moduleRandomizer() {
                //without var/let/const
                array1random = array1[Math.floor(Math.random() * array1.length)];
                array2random = array2[Math.floor(Math.random() * array2.length)];
                array3random = array3[Math.floor(Math.random() * array3.length)];
                moduleChecker();
            }

            async function moduleChecker() {
                if ((array1random == array2random) || (array1random == array3random) || (array3random == array2random)) {
                    moduleRandomizer();
                } else {
                    module1 = array1random;
                    module2 = array2random;
                    module3 = array3random;
                }
            };

            moduleRandomizer();

            if (module1 == `<:BadgerM3:492794414914076694>`) {
                var module1name = `Freeze`
            }
            else if (module1 == `<:DolphinM3:492794414624669698>`) {
                var module1name = `Smoky`
            }
            else if (module1 == `<:EagleM3:492794414519943169>`) {
                var module1name = `Shaft`
            }
            else if (module1 == `<:FalconM3:492794414846967809>`) {
                var module1name = `Railgun`
            }
            else if (module1 == `<:FoxM3:492794414092255249>`) {
                var module1name = `Fire`
            }
            else if (module1 == `<:GriffonM3:492794414339588107>`) {
                var module1name = `Magnum`
            }
            else if (module1 == `<:GrizzleyM3:492794414926659584>`) {
                var module1name = `Thunder`
            }
            else if (module1 == `<:LionM3:492794414260027402>`) {
                var module1name = `Ricochet`
            }
            else if (module1 == `<:OcelotM3:492794414230667286>`) {
                var module1name = `Isida`
            }
            else if (module1 == `<:OrkaM3:492794414737915915>`) {
                var module1name = `Striker`
            }
            else if (module1 == `<:PantherM3:492794414440251403>`) {
                var module1name = `Twins`
            }
            else if (module1 == `<:SharkM3:492794414809350154>`) {
                var module1name = `Vulcan`
            }
            else if (module1 == `<:SpiderM3:492794414482325534>`) {
                var module1name = `Spider`
            }
            else if (module1 == `<:WolfM3:492794414578663434>`) {
                var module1name = `Hammer`
            }

            if (module2 == `<:BadgerM3:492794414914076694>`) {
                var module2name = `Freeze`
            }
            else if (module2 == `<:DolphinM3:492794414624669698>`) {
                var module2name = `Smoky`
            }
            else if (module2 == `<:EagleM3:492794414519943169>`) {
                var module2name = `Shaft`
            }
            else if (module2 == `<:FalconM3:492794414846967809>`) {
                var module2name = `Railgun`
            }
            else if (module2 == `<:FoxM3:492794414092255249>`) {
                var module2name = `Fire`
            }
            else if (module2 == `<:GriffonM3:492794414339588107>`) {
                var module2name = `Magnum`
            }
            else if (module2 == `<:GrizzleyM3:492794414926659584>`) {
                var module2name = `Thunder`
            }
            else if (module2 == `<:LionM3:492794414260027402>`) {
                var module2name = `Ricochet`
            }
            else if (module2 == `<:OcelotM3:492794414230667286>`) {
                var module2name = `Isida`
            }
            else if (module2 == `<:OrkaM3:492794414737915915>`) {
                var module2name = `Striker`
            }
            else if (module2 == `<:PantherM3:492794414440251403>`) {
                var module2name = `Twins`
            }
            else if (module2 == `<:SharkM3:492794414809350154>`) {
                var module2name = `Vulcan`
            }
            else if (module2 == `<:SpiderM3:492794414482325534>`) {
                var module2name = `Spider`
            }
            else if (module2 == `<:WolfM3:492794414578663434>`) {
                var module2name = `Hammer`
            }

            if (module3 == `<:BadgerM3:492794414914076694>`) {
                var module3name = `Freeze`
            }
            else if (module3 == `<:DolphinM3:492794414624669698>`) {
                var module3name = `Smoky`
            }
            else if (module3 == `<:EagleM3:492794414519943169>`) {
                var module3name = `Shaft`
            }
            else if (module3 == `<:FalconM3:492794414846967809>`) {
                var module3name = `Railgun`
            }
            else if (module3 == `<:FoxM3:492794414092255249>`) {
                var module3name = `Fire`
            }
            else if (module3 == `<:GriffonM3:492794414339588107>`) {
                var module3name = `Magnum`
            }
            else if (module3 == `<:GrizzleyM3:492794414926659584>`) {
                var module3name = `Thunder`
            }
            else if (module3 == `<:LionM3:492794414260027402>`) {
                var module3name = `Ricochet`
            }
            else if (module3 == `<:OcelotM3:492794414230667286>`) {
                var module3name = `Isida`
            }
            else if (module3 == `<:OrkaM3:492794414737915915>`) {
                var module3name = `Striker`
            }
            else if (module3 == `<:PantherM3:492794414440251403>`) {
                var module3name = `Twins`
            }
            else if (module3 == `<:SharkM3:492794414809350154>`) {
                var module3name = `Vulcan`
            }
            else if (module3 == `<:SpiderM3:492794414482325534>`) {
                var module3name = `Spider`
            }
            else if (module3 == `<:WolfM3:492794414578663434>`) {
                var module3name = `Hammer`
            }


            if (turretrnd == 1) {
                var turretpic = `https://i.imgur.com/rMEZc1W.png`
                var turretname = `Firebird`
            }
            else if (turretrnd == 2) {
                var turretpic = `https://i.imgur.com/sXmacPl.png`
                var turretname = `Freeze`
            }
            else if (turretrnd == 3) {
                var turretpic = `https://i.imgur.com/R5gtcxY.png`
                var turretname = `Isida`
            }
            else if (turretrnd == 4) {
                var turretpic = `https://i.imgur.com/DBXq9KT.png`
                var turretname = `Hammer`
            }
            else if (turretrnd == 5) {
                var turretpic = `https://i.imgur.com/oflmc23.png`
                var turretname = `Twins`
            }
            else if (turretrnd == 6) {
                var turretpic = `https://i.imgur.com/Iwp0RV8.png`
                var turretname = `Ricochet`
            }
            else if (turretrnd == 7) {
                var turretpic = `https://i.imgur.com/3ciBRoL.png`
                var turretname = `Thunder`
            }
            else if (turretrnd == 8) {
                var turretpic = `https://i.imgur.com/ACYjOux.png`
                var turretname = `Smoky`
            }
            else if (turretrnd == 9) {
                var turretpic = `https://i.imgur.com/UgwOX7I.png`
                var turretname = `Striker`
            }
            else if (turretrnd == 10) {
                var turretpic = `https://i.imgur.com/iwmSG9c.png`
                var turretname = `Vulcan`
            }
            else if (turretrnd == 11) {
                var turretpic = `https://i.imgur.com/0mKlNWe.png`
                var turretname = `Railgun`
            }
            else if (turretrnd == 12) {
                var turretpic = `https://i.imgur.com/5M7lTmx.png`
                var turretname = `Magnum`
            }
            else if (turretrnd == 13) {
                var turretpic = `https://i.imgur.com/uh1cG0d.png`
                var turretname = `Shaft`
            }

            if (hullrnd == 1) {
                var hullpic = `https://i.imgur.com/K1vC46g.png`
                var hullname = `Wasp`
            }
            else if (hullrnd == 2) {
                var hullpic = `https://i.imgur.com/A7LqAPM.png`
                var hullname = `Hornet`
            }
            else if (hullrnd == 3) {
                var hullpic = `https://i.imgur.com/Ic00qox.png`
                var hullname = `Hunter`
            }
            else if (hullrnd == 4) {
                var hullpic = `https://i.imgur.com/pvQp9PL.png`
                var hullname = `Viking`
            }
            else if (hullrnd == 5) {
                var hullpic = `https://i.imgur.com/JAFl1BH.png`
                var hullname = `Dictator`
            }
            else if (hullrnd == 6) {
                var hullpic = `https://i.imgur.com/fTiBNY8.png`
                var hullname = `Titan`
            }
            else if (hullrnd == 7) {
                var hullpic = `https://i.imgur.com/E6ZIh5Y.png`
                var hullname = `Mammoth`
            }


            if (dronernd == `1`) {
                var dronepic = `https://i.imgur.com/i4kLXUq.png`
                var dronename = `Assault`
            }
            else if (dronernd == `2`) {
                var dronepic = `https://i.imgur.com/GTx8XSC.png`
                var dronename = `Driver`
            }
            else if (dronernd == `3`) {
                var dronepic = `https://i.imgur.com/7OQTcCS.png`
                var dronename = `Engineer`
            }
            else if (dronernd == `4`) {
                var dronepic = `https://i.imgur.com/m7UNylf.png`
                var dronename = `Mechanic`
            }
            else if (dronernd == `5`) {
                var dronepic = `https://i.imgur.com/IQxEaxF.png`
                var dronename = `Supplier`
            }
            else if (dronernd == `6`) {
                var dronepic = `https://i.imgur.com/EREdvT0.png`
                var dronename = `Trooper`
            }


            if ((paintrnd) == 1) {
                var paintpic = 'https://i.imgur.com/Uu6IWdY.png'
                var paintname = 'Black Paint'
            }
            else if ((paintrnd) == 2) {
                var paintpic = 'https://i.imgur.com/bic1Mx7.png'
                var paintname = 'Red Paint'
            }
            else if ((paintrnd) == 3) {
                var paintpic = "https://i.imgur.com/B1icnUH.png"
                var paintname = 'Green Paint'
            }
            else if ((paintrnd) == 4) {
                var paintpic = 'https://i.imgur.com/UnU5gub.png'
                var paintname = 'White Paint'
            }
            else if ((paintrnd) == 5) {
                var paintpic = 'https://i.imgur.com/Xf7Z6zF.png'
                var paintname = 'Orange Paint'
            }
            else if ((paintrnd) == 6) {
                var paintpic = 'https://i.imgur.com/tzLiLAM.png'
                var paintname = 'Flora Paint'
            }
            else if ((paintrnd) == 7) {
                var paintpic = 'https://i.imgur.com/lTWZpIV.png'
                var paintname = 'Marine Paint'
            }
            else if ((paintrnd) == 8) {
                var paintpic = "https://i.imgur.com/n3hJ8ZH.png"
                var paintname = 'Swamp Paint'
            }
            else if ((paintrnd) == 9) {
                var paintpic = 'https://i.imgur.com/VTEu0X7.png'
                var paintname = 'Forester Paint'
            }
            else if ((paintrnd) == 10) {
                var paintpic = 'https://i.imgur.com/bTAEhiV.png'
                var paintname = 'Metallic Paint'
            }
            else if ((paintrnd) == 11) {
                var paintpic = 'https://i.imgur.com/yJcKJIM.png'
                var paintname = 'Lava Paint'
            }
            else if ((paintrnd) == 12) {
                var paintpic = 'https://i.imgur.com/JGd6ZeJ.png'
                var paintname = 'Lead Paint'
            }
            else if ((paintrnd) == 13) {
                var paintpic = "https://i.imgur.com/XchiKvr.png"
                var paintname = 'Alien 2.0 Paint'
            }
            else if ((paintrnd) == 14) {
                var paintpic = 'https://i.imgur.com/UzL3YNb.png'
                var paintname = 'Safari Paint'
            }
            else if ((paintrnd) == 15) {
                var paintpic = 'https://i.imgur.com/vokPLVg.png'
                var paintname = 'Dragon Paint'
            }
            else if ((paintrnd) == 16) {
                var paintpic = 'https://i.imgur.com/80gpeds.png'
                var paintname = 'Magma Paint'
            }
            else if ((paintrnd) == 17) {
                var paintpic = "https://i.imgur.com/etlhZOc.png"
                var paintname = 'Mary paint'
            }
            else if ((paintrnd) == 18) {
                var paintpic = 'https://i.imgur.com/8F4AIwU.png'
                var paintname = 'Sahara Paint'
            }
            else if ((paintrnd) == 19) {
                var paintpic = 'https://i.imgur.com/Vl0KN5R.png'
                var paintname = 'Night paint'
            }
            else if ((paintrnd) == 20) {
                var paintpic = 'https://i.imgur.com/2eihFkl.png'
                var paintname = 'In Love Paint'
            }
            else if ((paintrnd) == 21) {
                var paintpic = 'https://i.imgur.com/7btgslo.png'
                var paintname = 'Carbon Paint'
            }
            else if ((paintrnd) == 22) {
                var paintpic = "https://i.imgur.com/pi9uDgU.png"
                var paintname = 'Confetti Paint'
            }
            else if ((paintrnd) == 23) {
                var paintpic = 'https://i.imgur.com/2BYkeaM.png'
                var paintname = 'Alien 1.0 Paint'
            }
            else if ((paintrnd) == 24) {
                var paintpic = 'https://i.imgur.com/WWNYEHq.png'
                var paintname = 'Chainmail Paint'
            }
            else if ((paintrnd) == 25) {
                var paintpic = 'https://i.imgur.com/Qrb8OJD.png'
                var paintname = 'Dirty Paint'
            }
            else if ((paintrnd) == 26) {
                var paintpic = "https://i.imgur.com/4ieFQ2n.png"
                var paintname = 'Jaguar Paint'
            }
            else if ((paintrnd) == 27) {
                var paintpic = 'https://i.imgur.com/le65j8j.png'
                var paintname = 'Desert Paint'
            }
            else if ((paintrnd) == 28) {
                var paintpic = 'https://i.imgur.com/JADpZCD.png'
                var paintname = 'Guerrilla Paint'
            }
            else if ((paintrnd) == 29) {
                var paintpic = 'https://i.imgur.com/TqHwYqE.png'
                var paintname = 'Swash Paint'
            }
            else if ((paintrnd) == 30) {
                var paintpic = 'https://i.imgur.com/6LR05QB.png'
                var paintname = 'Harlequin Paint'
            }
            else if ((paintrnd) == 31) {
                var paintpic = "https://i.imgur.com/0pMnCb4.png"
                var paintname = 'Pixel Paint'
            }
            else if ((paintrnd) == 32) {
                var paintpic = 'https://i.imgur.com/5Y9P7Z9.png'
                var paintname = 'Corrosion Paint'
            }
            else if ((paintrnd) == 33) {
                var paintpic = 'https://i.imgur.com/P3Q6sk1.png'
                var paintname = 'Tundra Paint'
            }
            else if ((paintrnd) == 34) {
                var paintpic = 'https://i.imgur.com/XBejee5.png'
                var paintname = 'Vortex Paint'
            }
            else if ((paintrnd) == 35) {
                var paintpic = "https://i.imgur.com/qIqOt7g.png"
                var paintname = 'Pixel Heart Paint'
            }
            else if ((paintrnd) == 36) {
                var paintpic = 'https://i.imgur.com/YbND0oP.png'
                var paintname = 'Roger Paint'
            }
            else if ((paintrnd) == 37) {
                var paintpic = 'https://i.imgur.com/hun7Hs4.png'
                var paintname = 'Fracture Paint'
            }
            else if ((paintrnd) == 38) {
                var paintpic = 'https://i.imgur.com/za8gY6V.png'
                var paintname = 'Cedar Paint'
            }
            else if ((paintrnd) == 39) {
                var paintpic = 'https://i.imgur.com/x8KgVmd.png'
                var paintname = 'Python Paint'
            }
            else if ((paintrnd) == 40) {
                var paintpic = 'https://i.imgur.com/IVaOz5u.png'
                var paintname = 'Sakura Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = 'https://i.imgur.com/680JitP.png'
                var paintname = 'Grasslands Paint'
            }
            else if ((paintrnd) == 41) {
                var paintpic = "https://i.imgur.com/yqXD0ZF.png"
                var paintname = 'Soft Flowers paint'
            }
            else if ((paintrnd) == 42) {
                var paintpic = 'https://i.imgur.com/W611QqD.png'
                var paintname = 'Electra Paint'
            }
            else if ((paintrnd) == 43) {
                var paintpic = 'https://i.imgur.com/ZMrsVTt.png'
                var paintname = 'Moss paint'
            }
            else if ((paintrnd) == 44) {
                var paintpic = 'https://i.imgur.com/nRipiA9.png'
                var paintname = 'First Love Paint'
            }
            else if ((paintrnd) == 45) {
                var paintpic = "https://i.imgur.com/Fgxd6gs.png"
                var paintname = 'Sandstone paint'
            }
            else if ((paintrnd) == 46) {
                var paintpic = 'https://i.imgur.com/6bHB1F2.png'
                var paintname = 'Spark Paint'
            }
            else if ((paintrnd) == 47) {
                var paintpic = 'https://i.imgur.com/04IAZ7n.png'
                var paintname = 'Jeans paint'
            }
            else if ((paintrnd) == 48) {
                var paintpic = 'https://i.imgur.com/TQX4ePk.png'
                var paintname = 'Digital Paint'
            }
            else if ((paintrnd) == 49) {
                var paintpic = 'https://i.imgur.com/DTiOYfs.png'
                var paintname = 'Rustle Paint'
            }
            else if ((paintrnd) == 50) {
                var paintpic = "https://i.imgur.com/sG7HBJS.png"
                var paintname = 'Blacksmith Paint'
            }
            else if ((paintrnd) == 51) {
                var paintpic = 'https://i.imgur.com/y1oy0EJ.png'
                var paintname = 'Hohloma Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/UedBFsb.png'
                var paintname = 'Loam Paint'
            }
            else if ((paintrnd) == 53) {
                var paintpic = 'https://i.imgur.com/uLQ6Lkv.png'
                var paintname = 'Rhino Paint'
            }
            else if ((paintrnd) == 54) {
                var paintpic = "https://i.imgur.com/DfNAcFt.png"
                var paintname = 'Winter Paint'
            }
            else if ((paintrnd) == 55) {
                var paintpic = 'https://i.imgur.com/655k2TY.png'
                var paintname = 'Urban Paint'
            }
            else if ((paintrnd) == 56) {
                var paintpic = 'https://i.imgur.com/KEnNc7l.png'
                var paintname = 'Sweater Paint'
            }
            else if ((paintrnd) == 57) {
                var paintpic = 'https://i.imgur.com/Uc2xStT.png'
                var paintname = 'Atom Paint'
            }
            else if ((paintrnd) == 58) {
                var paintpic = 'https://i.imgur.com/qvAsqjh.png'
                var paintname = 'Savanna Paint'
            }
            else if ((paintrnd) == 59) {
                var paintpic = "https://i.imgur.com/Z6anuHd.png"
                var paintname = 'Cherry Paint'
            }
            else if ((paintrnd) == 60) {
                var paintpic = 'https://i.imgur.com/B7i6beQ.png'
                var paintname = 'Emerald Paint'
            }
            else if ((paintrnd) == 61) {
                var paintpic = 'https://i.imgur.com/QtINXHI.png'
                var paintname = 'Ibris Paint'
            }
            else if ((paintrnd) == 52) {
                var paintpic = 'https://i.imgur.com/pns89xU.png'
                var paintname = 'Disco Paint'
            }
            else if ((paintrnd) == 63) {
                var paintpic = "https://i.imgur.com/1YO1rpg.png"
                var paintname = 'Mars Paint'
            }
            else if ((paintrnd) == 64) {
                var paintpic = 'https://i.imgur.com/08PvYck.png'
                var paintname = 'Hive Paint'
            }
            else if ((paintrnd) == 65) {
                var paintpic = 'https://i.imgur.com/ZBYZ8bQ.png'
                var paintname = 'Inferno Paint'
            }
            else if ((paintrnd) == 66) {
                var paintpic = 'https://i.imgur.com/BIrUhHg.png'
                var paintname = 'Jade Paint'
            }
            else if ((paintrnd) == 67) {
                var paintpic = 'https://i.imgur.com/G4LTzGF.png'
                var paintname = 'Tiger Paint'
            }
            else if ((paintrnd) == 68) {
                var paintpic = "https://i.imgur.com/7D9zmjy.png"
                var paintname = 'Kaleidoscope Paint'
            }
            else if ((paintrnd) == 69) {
                var paintpic = 'https://i.imgur.com/Uk1Epds.png'
                var paintname = 'Taiga Paint'
            }
            else if ((paintrnd) == 70) {
                var paintpic = 'https://i.imgur.com/BA79PyV.png'
                var paintname = 'Red Urban Paint'
            }
            else if ((paintrnd) == 71) {
                var paintpic = 'https://i.imgur.com/lVA00HV.png'
                var paintname = 'Nano Paint'
            }
            else if ((paintrnd) == 72) {
                var paintpic = "https://i.imgur.com/VFTr1Vm.png"
                var paintname = 'Prodigi Paint'
            }
            else if ((paintrnd) == 73) {
                var paintpic = 'https://i.imgur.com/isv4C0u.png'
                var paintname = 'Rock Paint'
            }
            else if ((paintrnd) == 74) {
                var paintpic = 'https://i.imgur.com/pKcu3TS.png'
                var paintname = 'Raccoon Paint'
            }
            else if ((paintrnd) == 75) {
                var paintpic = 'https://i.imgur.com/KzNkIXj.png'
                var paintname = 'Needle Paint'
            }
            else if ((paintrnd) == 76) {
                var paintpic = 'https://i.imgur.com/ggGlJGu.png'
                var paintname = 'Picasso Paint'
            }
            else if ((paintrnd) == 77) {
                var paintpic = 'https://i.imgur.com/oPsUaQS.png'
                var paintname = 'Argentina'
            }
            else if ((paintrnd) == 78) {
                var paintpic = 'https://i.imgur.com/reDTcBH.png'
                var paintname = 'Australia Paint'
            }
            else if ((paintrnd) == 79) {
                var paintpic = 'https://i.imgur.com/AJQrwyi.png'
                var paintname = 'Belgium Paint'
            }
            else if ((paintrnd) == 80) {
                var paintpic = 'https://i.imgur.com/958evYX.png'
                var paintname = 'Brazil Paint'
            }
            else if ((paintrnd) == 81) {
                var paintpic = 'https://i.imgur.com/7Jt63vS.png'
                var paintname = 'Colombia Paint'
            }
            else if ((paintrnd) == 82) {
                var paintpic = 'https://i.imgur.com/iVNsjXY.png'
                var paintname = 'South Korea Paint'
            }
            else if ((paintrnd) == 83) {
                var paintpic = 'https://i.imgur.com/PYRmJIp.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 84) {
                var paintpic = 'https://i.imgur.com/7cYZu1I.png'
                var paintname = 'Croatia Paint'
            }
            else if ((paintrnd) == 85) {
                var paintpic = 'https://i.imgur.com/wvYQSXa.png'
                var paintname = 'Costa Rica Paint'
            }
            else if ((paintrnd) == 86) {
                var paintpic = 'https://i.imgur.com/NVIdw9e.png'
                var paintname = 'Egypt Paint'
            }
            else if ((paintrnd) == 87) {
                var paintpic = 'https://i.imgur.com/Jn5mrQI.png'
                var paintname = 'England Paint'
            }
            else if ((paintrnd) == 88) {
                var paintpic = 'https://i.imgur.com/XVrmTAE.png'
                var paintname = 'France Paint'
            }
            else if ((paintrnd) == 89) {
                var paintpic = 'https://i.imgur.com/7IU5kHG.png'
                var paintname = 'Iceland Paint'
            }
            else if ((paintrnd) == 90) {
                var paintpic = 'https://i.imgur.com/JCTfffl.png'
                var paintname = 'Germany Paint'
            }
            else if ((paintrnd) == 91) {
                var paintpic = 'https://i.imgur.com/0KgtBsx.png'
                var paintname = 'Iran Paint'
            }
            else if ((paintrnd) == 92) {
                var paintpic = 'https://i.imgur.com/6RzUNAy.png'
                var paintname = 'Japan Paint'
            }
            else if ((paintrnd) == 93) {
                var paintpic = 'https://i.imgur.com/ifrbtMe.png'
                var paintname = 'Mexico Paint'
            }
            else if ((paintrnd) == 94) {
                var paintpic = 'https://i.imgur.com/DPA9Bil.png'
                var paintname = 'Morocco Paint'
            }
            else if ((paintrnd) == 95) {
                var paintpic = 'https://i.imgur.com/bqxX9er.png'
                var paintname = 'Panama Paint'
            }
            else if ((paintrnd) == 96) {
                var paintpic = 'https://i.imgur.com/ZQLGlOC.png'
                var paintname = 'Nigeria Paint'
            }
            else if ((paintrnd) == 97) {
                var paintpic = 'https://i.imgur.com/lkZmpvy.png'
                var paintname = 'Peru Paint'
            }
            else if ((paintrnd) == 98) {
                var paintpic = 'https://i.imgur.com/rF67XB7.png'
                var paintname = 'Portugal Paint'
            }
            else if ((paintrnd) == 99) {
                var paintpic = 'https://i.imgur.com/32jmRY5.png'
                var paintname = 'Poland Paint'
            }
            else if ((paintrnd) == 100) {
                var paintpic = 'https://i.imgur.com/aSyZVyl.png'
                var paintname = 'Russia Paint'
            }
            else if ((paintrnd) == 101) {
                var paintpic = 'https://i.imgur.com/0pZ8POK.png'
                var paintname = 'Saudi Arabia Paint'
            }
            else if ((paintrnd) == 102) {
                var paintpic = 'https://i.imgur.com/cvBh12Z.png'
                var paintname = 'Senagal Paint'
            }
            else if ((paintrnd) == 103) {
                var paintpic = 'https://i.imgur.com/Xp5wtvv.png'
                var paintname = 'Serbia Paint'
            }
            else if ((paintrnd) == 104) {
                var paintpic = 'https://i.imgur.com/o7dBXh6.png'
                var paintname = 'Sweden Paint'
            }
            else if ((paintrnd) == 105) {
                var paintpic = 'https://i.imgur.com/PkWhBUK.png'
                var paintname = 'Spain Paint'
            }
            else if ((paintrnd) == 106) {
                var paintpic = 'https://i.imgur.com/xYYxCTR.png'
                var paintname = 'Denmark Paint'
            }
            else if ((paintrnd) == 107) {
                var paintpic = 'https://i.imgur.com/59R91Q0.png'
                var paintname = 'Tunisa Paint'
            }
            else if ((paintrnd) == 108) {
                var paintpic = 'https://i.imgur.com/3LRdNAn.png'
                var paintname = 'Uruguay Paint'
            }
            else if ((paintrnd) == 109) {
                var paintpic = 'https://i.imgur.com/x2nlYUX.png'
                var paintname = 'Space Paint'
            }
            else if ((paintrnd) == 110) {
                var paintpic = 'https://i.imgur.com/wW7ycng.png'
                var paintname = 'Frost Paint'
            }
            else if ((paintrnd) == 111) {
                var paintpic = "https://i.imgur.com/TMTTgam.png"
                var paintname = 'Graffiti paint'
            }
            else if ((paintrnd) == 112) {
                var paintpic = 'https://i.imgur.com/E0Z6QA5.png'
                var paintname = 'Zeus Paint'
            }
            else if ((paintrnd) == 113) {
                var paintpic = 'https://i.imgur.com/NoaIyLi.png'
                var paintname = 'Clay paint'
            }
            else if ((paintrnd) == 114) {
                var paintpic = 'https://i.imgur.com/IgIJGLP.png'
                var paintname = 'Lumberjack Paint'
            }
            else if ((paintrnd) == 115) {
                var paintpic = "https://i.imgur.com/X9bDdkA.png"
                var paintname = 'Africa paint'
            }
            else if ((paintrnd) == 116) {
                var paintpic = 'https://i.imgur.com/tY668p6.png'
                var paintname = 'Golden Star Paint'
            }
            else if ((paintrnd) == 117) {
                var paintpic = 'https://i.imgur.com/DHYlg2j.png'
                var paintname = 'Arachnid Paint'
            }
            else if ((paintrnd) == 118) {
                var paintpic = 'https://i.imgur.com/OwnToQT.png'
                var paintname = 'Liquid Metal Paint'
            }
            else if ((paintrnd) == 119) {
                var paintpic = "https://i.imgur.com/HL9nYPM.png"
                var paintname = 'Drought Paint'
            }
            else if ((paintrnd) == 120) {
                var paintpic = 'https://i.imgur.com/XB2ofuq.png'
                var paintname = 'Strawberry Paint'
            }
            else if ((paintrnd) == 121) {
                var paintpic = 'https://i.imgur.com/aozjomN.png'
                var paintname = 'Barber Shop Paint'
            }
            else if ((paintrnd) == 122) {
                var paintpic = 'https://i.imgur.com/zavV07Q.png'
                var paintname = 'Scandinavia Paint'
            }
            else if ((paintrnd) == 123) {
                var paintpic = "https://i.imgur.com/oajuf2p.png"
                var paintname = 'Lunar Soil Paint'
            }
            else if ((paintrnd) == 124) {
                var paintpic = 'https://i.imgur.com/9j5lgqs.png'
                var paintname = 'Rust Paint'
            }
            else if ((paintrnd) == 125) {
                var paintpic = 'https://i.imgur.com/jPblblx.png'
                var paintname = 'Steak Paint'
            }
            else if ((paintrnd) == 126) {
                var paintpic = "https://i.imgur.com/9Il5i8W.png"
                var paintname = 'Amber Paint'
            }
            else if ((paintrnd) == 127) {
                var paintpic = 'https://i.imgur.com/nbS4uGw.png'
                var paintname = 'Lime Paint'
            }
            else if ((paintrnd) == 128) {
                var paintpic = 'https://i.imgur.com/WKZEFHx.png'
                var paintname = 'Neuron Paint'
            }
            else if ((paintrnd) == 129) {
                var paintpic = 'https://i.imgur.com/HaXUxxY.png'
                var paintname = 'Domino Paint'
            }
            else if ((paintrnd) == 130) {
                var paintpic = "https://i.imgur.com/eMLcbdn.png"
                var paintname = 'Watercolour Paint'
            }
            else if ((paintrnd) == 131) {
                var paintpic = 'https://i.imgur.com/tjq2SF4.png'
                var paintname = 'Pajamas Paint'
            }
            else if ((paintrnd) == 132) {
                var paintpic = 'https://i.imgur.com/Ms5OK0z.png'
                var paintname = 'Vanadium Paint'
            }
            else if ((paintrnd) == 133) {
                var paintpic = 'https://i.imgur.com/FL8ISUB.png'
                var paintname = 'Glitch Paint'
            }
            else if ((paintrnd) == 134) {
                var paintpic = 'https://i.imgur.com/ecKmDEv.png'
                var paintname = 'Sunset Camoflage Paint'
            }
            else if ((paintrnd) == 135) {
                var paintpic = 'https://i.imgur.com/hxJFqQV.png'
                var paintname = 'All You Need Is Love Paint'
            }
            else if ((paintrnd) == 136) {
                var paintpic = "https://i.imgur.com/unj7X8g.png"
                var paintname = 'Zombie Paint'
            }
            else if ((paintrnd) == 137) {
                var paintpic = 'https://i.imgur.com/Lh4Hbqw.png'
                var paintname = 'Fire Of Valor Paint'
            }
            else if ((paintrnd) == 138) {
                var paintpic = 'https://i.imgur.com/CXUIMit.png'
                var paintname = 'Spangles Paint'
            }
            else if ((paintrnd) == 139) {
                var paintpic = 'https://i.imgur.com/4TYOOd1.png'
                var paintname = 'Snowflake Paint'
            }
            else if ((paintrnd) == 140) {
                var paintpic = "https://i.imgur.com/avubcYN.png"
                var paintname = 'Lilac Petals Paint'
            }
            else if ((paintrnd) == 141) {
                var paintpic = 'https://i.imgur.com/t6IM63n.png'
                var paintname = 'Retina Paint'
            }
            else if ((paintrnd) == 142) {
                var paintpic = 'https://i.imgur.com/xKCSDrf.png'
                var paintname = 'Chill Bro Paint'
            }
            else if ((paintrnd) == 143) {
                var paintpic = 'https://i.imgur.com/PTFjank.png'
                var paintname = 'Tanki In Moscow Paint'
            }
            else if ((paintrnd) == 144) {
                var paintpic = 'https://i.imgur.com/kBleN5n.png'
                var paintname = 'Secret Of The Aliens Paint'
            }
            else if ((paintrnd) == 145) {
                var paintpic = 'https://i.imgur.com/Z3l7dkO.png'
                var paintname = 'Pumpkins Paint'
            }
            else if ((paintrnd) == 146) {
                var paintpic = 'https://i.imgur.com/UVQ15W1.png'
                var paintname = 'Tropical Foliage Paint'
            }
            else if ((paintrnd) == 147) {
                var paintpic = 'https://i.imgur.com/Z2CoZDm.png'
                var paintname = 'Azure Paint'
            }
            else if ((paintrnd) == 148) {
                var paintpic = 'https://i.imgur.com/zXFanQF.png'
                var paintname = 'Gucciflage Paint'
            }
            else if ((paintrnd) == 149) {
                var paintpic = "https://i.imgur.com/GO4TIUt.png"
                var paintname = 'Hallucination Paint'
            }
            else if ((paintrnd) == 150) {
                var paintpic = 'https://i.imgur.com/GNTozmo.png'
                var paintname = 'Hypercube Paint'
            }
            else if ((paintrnd) == 151) {
                var paintpic = 'https://i.imgur.com/ZdIwfSe.png'
                var paintname = 'Kungar Ice Cave Paint'
            }
            else if ((paintrnd) == 152) {
                var paintpic = 'https://i.imgur.com/BVAcIa1.png'
                var paintname = 'Lollipop Paint'
            }
            else if ((paintrnd) == 153) {
                var paintpic = "https://i.imgur.com/8J3lAbb.png"
                var paintname = 'Lotus Paint'
            }
            else if ((paintrnd) == 154) {
                var paintpic = 'https://i.imgur.com/qCCohrO.png'
                var paintname = 'Monet Paint'
            }
            else if ((paintrnd) == 155) {
                var paintpic = 'https://i.imgur.com/2rEIlXV.png'
                var paintname = 'Paisley Flame Paint'
            }
            else if ((paintrnd) == 156) {
                var paintpic = "https://i.imgur.com/6QKNAeE.png"
                var paintname = 'Paisley Ice Paint'
            }
            else if ((paintrnd) == 157) {
                var paintpic = 'https://i.imgur.com/QimIWp2.png'
                var paintname = 'Peaks Paint'
            }
            else if ((paintrnd) == 158) {
                var paintpic = 'https://i.imgur.com/hniZLLO.png'
                var paintname = 'Phantom Paint'
            }
            else if ((paintrnd) == 159) {
                var paintpic = 'https://i.imgur.com/ugXhy8B.png'
                var paintname = 'Play Doh Paint'
            }
            else if ((paintrnd) == 160) {
                var paintpic = "https://i.imgur.com/VthKAsE.png"
                var paintname = 'Pop Art Paint'
            }
            else if ((paintrnd) == 161) {
                var paintpic = 'https://i.imgur.com/zblzcV1.png'
                var paintname = 'Potter Paint'
            }
            else if ((paintrnd) == 162) {
                var paintpic = 'https://i.imgur.com/JZ4Kpvg.png'
                var paintname = 'Pulsar Paint'
            }
            else if ((paintrnd) == 163) {
                var paintpic = 'https://i.imgur.com/SAKhlFD.png'
                var paintname = 'Ripple Paint'
            }
            else if ((paintrnd) == 164) {
                var paintpic = 'https://i.imgur.com/JdTLdR5.png'
                var paintname = 'Sillicate Paint'
            }
            else if ((paintrnd) == 165) {
                var paintpic = 'https://i.imgur.com/doBAp5o.png'
                var paintname = 'Sodoku Paint'
            }
            else if ((paintrnd) == 166) {
                var paintpic = "https://i.imgur.com/ZjdRIzn.png"
                var paintname = 'Zig Zag Paint'
            }
            else if ((paintrnd) == 167) {
                var paintpic = 'https://i.imgur.com/gRBmdwt.png'
                var paintname = 'Abstract Lines Paint'
            }
            else if ((paintrnd) == 168) {
                var paintpic = 'https://i.imgur.com/cwLwvQD.png'
                var paintname = 'Blue Squares Paint'
            }
            else if ((paintrnd) == 169) {
                var paintpic = 'https://i.imgur.com/3Vkacjq.png'
                var paintname = 'Condensed Milk Paint'
            }
            else if ((paintrnd) == 170) {
                var paintpic = 'https://i.imgur.com/KMgUWl2.png'
                var paintname = 'E236 Paint'
            }
            else if ((paintrnd) == 171) {
                var paintpic = "https://i.imgur.com/bBBo1Sz.png"
                var paintname = 'Feathers Paint'
            }
            else if ((paintrnd) == 172) {
                var paintpic = 'https://i.imgur.com/p5epSIk.png'
                var paintname = 'Fire Dragon Paint'
            }
            else if ((paintrnd) == 173) {
                var paintpic = 'https://i.imgur.com/IaVCbyi.png'
                var paintname = 'Megapolis Paint'
            }
            else if ((paintrnd) == 174) {
                var paintpic = 'https://i.imgur.com/j2ju8Mu.png'
                var paintname = 'Stained Glass Paint'
            }
            else if ((paintrnd) == 175) {
                var paintpic = 'https://i.imgur.com/ibHAEQI.png'
                var paintname = 'Thunderball Paint'
            }
            else if ((paintrnd) == 176) {
                var paintpic = 'https://i.imgur.com/lMaHubB.png'
                var paintname = 'Moonwalker Paint'
            }
            else if ((paintrnd) == 177) {
                var paintpic = 'https://i.imgur.com/M5Z5FWv.png'
                var paintname = 'Eternity Paint'
            }
            else if ((paintrnd) == 178) {
                var paintpic = "https://i.imgur.com/PhNXyXp.png"
                var paintname = 'Red Suit paint'
            }
            else if ((paintrnd) == 179) {
                var paintpic = 'https://i.imgur.com/PmvUxAg.png'
                var paintname = 'Wave Paint'
            }
            else if ((paintrnd) == 180) {
                var paintpic = 'https://i.imgur.com/FpgBtEZ.png'
                var paintname = 'Nightmare paint'
            }
            else if ((paintrnd) == 181) {
                var paintpic = "https://i.imgur.com/z8iOhJR.png"
                var paintname = 'Spectrum paint'
            }
            else if ((paintrnd) == 182) {
                var paintpic = 'https://i.imgur.com/dbnms0o.png'
                var paintname = 'Holiday Lights Paint'
            }
            else if ((paintrnd) == 183) {
                var paintpic = 'https://i.imgur.com/ZfVuulO.png'
                var paintname = 'Matrix paint'
            }
            else if ((paintrnd) == 184) {
                var paintpic = 'https://i.imgur.com/NJl5fCT.png'
                var paintname = 'Mosaic Paint'
            }
            else if ((paintrnd) == 185) {
                var paintpic = "https://i.imgur.com/gzaWRlk.png"
                var paintname = 'Vertigo paint'
            }
            else if ((paintrnd) == 186) {
                var paintpic = 'https://i.imgur.com/1TZ7Lmn.png'
                var paintname = 'Prodigi 2.0 Paint'
            }
            else if ((paintrnd) == 187) {
                var paintpic = 'https://i.imgur.com/dtykCud.png'
                var paintname = 'Beating Hearts Paint'
            }
            else if ((paintrnd) == 188) {
                var paintpic = "https://i.imgur.com/rMKC2xq.png"
                var paintname = 'Ginga paint'
            }
            else if ((paintrnd) == 189) {
                var paintpic = 'https://i.imgur.com/iOKfNEJ.png'
                var paintname = 'Magnolia Paint'
            }
            else if ((paintrnd) == 190) {
                var paintpic = 'https://i.imgur.com/7YHD4Dc.png'
                var paintname = 'Galaxy paint'
            }
            else if ((paintrnd) == 191) {
                var paintpic = 'https://i.imgur.com/pPYWKat.png'
                var paintname = 'Eruption Paint'
            }
            else if ((paintrnd) == 192) {
                var paintpic = "https://i.imgur.com/s3nJG76.png"
                var paintname = 'Siberian Tiger paint'
            }
            else if ((paintrnd) == 193) {
                var paintpic = 'https://i.imgur.com/JPZLhFw.png'
                var paintname = 'Secret Sauce Paint'
            }
            else if ((paintrnd) == 194) {
                var paintpic = 'https://i.imgur.com/gNll0nd.png'
                var paintname = 'Canyon Hero Paint'
            }
            else if ((paintrnd) == 195) {
                var paintpic = 'https://i.imgur.com/ldN5LLn.png'
                var paintname = 'Pastila Paint'
            }
            else if ((paintrnd) == 196) {
                var paintpic = "https://i.imgur.com/V6iKdpy.png"
                var paintname = 'Valour paint'
            }
            else if ((paintrnd) == 197) {
                var paintpic = 'https://i.imgur.com/jEGItOc.png'
                var paintname = 'Beholder Paint'
            }
            else if ((paintrnd) == 198) {
                var paintpic = 'https://i.imgur.com/JivLe7B.png'
                var paintname = 'Synesthesia paint'
            }
            else if ((paintrnd) == 199) {
                var paintpic = 'https://i.imgur.com/UM9U9zG.png'
                var paintname = 'Gears Paint'
            }
            else if ((paintrnd) == 200) {
                var paintpic = 'https://i.imgur.com/YiZ8IRR.png'
                var paintname = 'Raidioactive Jelly Paint'
            }
            else if ((paintrnd) == 201) {
                var paintpic = 'https://i.imgur.com/X0QGyIO.png'
                var paintname = 'Spinner Paint'
            }
            else if ((paintrnd) == 202) {
                var paintpic = "https://i.imgur.com/4okwQzH.png"
                var paintname = 'Tenticals paint'
            }
            else if ((paintrnd) == 203) {
                var paintpic = 'https://i.imgur.com/yYJLsJb.png'
                var paintname = 'LEDs Paint'
            }
            else if ((paintrnd) == 204) {
                var paintpic = 'https://i.imgur.com/kB8q8kQ.png'
                var paintname = 'Meteor Shower paint'
            }
            else if ((paintrnd) == 205) {
                var paintpic = 'https://i.imgur.com/xU1BuPf.png'
                var paintname = 'Fall Leaves paint'
            }
            else if ((paintrnd) == 206) {
                var paintpic = 'https://i.imgur.com/fwQKtYJ.png'
                var paintname = 'Electrohive paint'
            }
            else if ((paintrnd) == 207) {
                var paintpic = 'https://i.imgur.com/eX2ajC6.png'
                var paintname = 'Synth pop paint'
            }




            try {

                let embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} You chose a random combo`)
                    .setThumbnail(paintpic)
                    .setColor("#caaffd")
                    .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                    .setImage(turretpic)
                message.channel.send(embed)

                let embed2 = new Discord.RichEmbed()
                    .setThumbnail(dronepic)
                    .setColor("#caaffd")
                    .setImage(hullpic)
                    .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                message.channel.send(embed2)



            } catch (err) {
                console.log(err)
                if (err) {
                    let embed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username} You chose a random combo`)
                        .setThumbnail(paintpic)
                        .setColor("#caaffd")
                        .setDescription(`The random combo that we have generated for you consists of the following: \n•${turretname} turret \n•${hullname} hull   \n•${paintname}  \n•${dronename} drone \n•${module1name}, ${module2name} and ${module3name} protection modules! \n${module1} ${module2} ${module3}`)
                        .setImage(turretpic)
                    message.channel.send(embed)

                    let embed2 = new Discord.RichEmbed()
                        .setThumbnail(dronepic)
                        .setColor("#caaffd")
                        .setImage(hullpic)
                        .setFooter(`${message.author.username} go and use this beast combo to get first in your next battle, i know ${turretname} is the best with ${hullname}!`, message.author.displayAvatarURL)
                    message.channel.send(embed2)
                }
            }


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
