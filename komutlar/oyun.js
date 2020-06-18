const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(' ');
    if (oyun.length < 1) return message.reply('Oynamak için herhangi bir oyun yazmalısın.');
  message.delete();
  client.user.setActivity(oyun);
  message.channel.send(`:white_check_mark: Oyun ***${oyun}*** olarak değiştirildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oyaz',
  description: 'Botun oynadigi oyunu gösterir.',
  usage: 'oyaz <oyun ismi>'
};