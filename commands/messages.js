const db = require('quick.db');

exports.run = (bot, message, args, func) => {

    db.fetchedObject(message, author.id + message.guild.id).then(i => {
        db.fetchedObject(`userlevel_${message.author.id + message.guild.id}`).then(o => {
            message.channel.send('messages sent : `' + (i.value + 1) + '`\nLevel: `' + o.value + '`');
        })
    })
}