const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let eness = args.slice(0).join(' ');
if(eness.lenght < 1) return message.reply ('Yazı Yazmam için bir yazı girmelisin')
  message.delete();
  message.channel.send(eness)
};

exports.conf = {
  enabled: true ,
  guildOnly: false,
  aliases: ['yaz'],
  permlevel: 0
  
};

exports.help ={
  name:'yaz',
  description:'bota yazı yazdır',
  usage:'yaz mesaj'
  
};

  

