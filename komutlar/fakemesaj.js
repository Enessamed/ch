const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('`hata`: Lütfen bir kişi etiketleyin.')
    let yazi = args[1]
    if (!yazi) return message.reply('`hata`: Lütfen mesajını yazınız.')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const techno = new Discord.WebhookClient(wb.id, wb.token);
           techno.send(yazi)
            techno.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};
exports.help = {
    name: 'fakemesaj',
};