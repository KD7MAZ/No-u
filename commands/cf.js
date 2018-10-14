exports.run = (client, msg, args) => {
    var testthings = [
        `Heads`, `Tails`
    ]
    var coc = testthings[Math.floor(Math.random() * testthings.length)];
    msg.channel.send(`:white_check_mark: You flipped **${coc.toString()}**.`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: { }