const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  function format(seconds) {
    function pad(s) {
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }

  var uptime = process.uptime();
  const version = '1.1.2'
  const serversize = client.guilds.size.toLocaleString('en')
  const channelsize = client.channels.size.toLocaleString('en')
  const usersize = client.users.size.toLocaleString('en')
  const test = client.user.avatarURL
  msg.channel.send({
    embed: {
      color: 0x8F00FF,
      author: {
        name: "Space Bot 2.0",
        icon_url: client.user.avatarURL,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/451417687294345216/afdfb5b983e2caf7df4908449a206412.png?size=2048"
        },
      },

      fields: [{
        name: "Author",
        value: `Ahsan#3247`,
        inline: true
      },
      {
        name: "Servers",
        value: `${serversize}`,
        inline: true
      },
      {
        name: "Users",
        value: `${usersize}`,
        inline: true
      },
      {
        name: "Channels",
        value: `${channelsize}`,
        inline: true
      },
      {
        name: "Bot version",
        value: `${version}`,
        inline: true

      },
      {
        name: "Libary",
        value: `Discord.js`,
        inline: true

      },
      {
        name: "Discord.js version",
        value: `v${Discord.version}`,
        inline: true
      },
      {
        name: "Node.js version",
        value: `${process.version}`,
        inline: true
      },
      {
        name: "Uptime",
        value: `${format(uptime)}`,
        inline: true
      },
      {
        name: "Memory Usage",
        value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + `MB`,
        inline: true
      },
      {
        name: "Server",
        value: `[Support](https://discord.gg/D4UqdWh)`,
        inline: true

      },
      {
        name: "Invite",
        value: `[Click here](https://discordapp.com/oauth2/authorize?client_id=451417687294345216&scope=bot&permissions=2146958591)`,
        inline: true

      },
      ],
      footer: {
        icon_url: `${msg.author.avatarURL}`,
        text: `Requested by ${msg.author.username}`

      }
    }
  });
  console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
