const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
 
  let sayfalar = ['Eğlence Komutları \n \n**e!düello** @kullanıcı =>İstediğiniz Kişiyle Düello Atarsınız \n**e!mayın** <satır> <sütun> <mayın> =>Mayın Tarlası Oynatır \n**e!yaz** <yazı> = Bota Yazı Yazdırır \n**e!fakemesaj** => Bir Üyeye Mesaj Yazdırır','**Genel Komutlar** \n \n**e!davet** => Botun Davet Linkini Atar','**Yetkili Komutları** \n \n**e!nick-değiştir** @üye <Yeni İsim> => Seçilen Kullanıcının İsmini Değiştirir \n**e!kayıt** @üye <isim> <yaş> => Kullanıcıyı Kayıt Eder \n**e!rol-ver** @üye @rol => İtediğiniz Kişiye Rol Verir \n**e!rol-ver** @üye @rol => İstediğiniz Kişiden Rol Alır']
  let page = 1; 
 
  const embed = new Discord.RichEmbed()
    .setTitle("Charged Yardım Menüsü") 
    .setColor("BLUE")
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
 
  message.channel.send(embed).then(msg => { 
    message.delete();
    
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Charged Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLUE") 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Charged Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLUE") 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayfalıyardım","pagehelp","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};