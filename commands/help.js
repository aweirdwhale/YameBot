const Discord = require('discord.js');
let emojis = require('emojis');

module.exports ={
    name: 'help',
    description: "show help",
    execute(message, args) {

        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`__**Fun:**__
        **récupérer la pp d'un membre**: *pp '@mention'* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**Modération:**__
        **kick**: *kick '@mention'*
        **ban** : *ban '@mention'*
        **clear** : *clear 'nombre entre 0 et 64* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**Médias:**__
        **play**: *play 'lien youtube'*
        **SOON** :smirk: \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**APIs**__
        **ISS**: *help 1 pour plus de précisions.*
        **google translate** : *help 2 pour plus de précisions.*
        **les conneries de trump** : *help 3 pour plus de précisions.* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))

        if(args[0] == 1) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide Iss")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        "ISS" est une api qui permet de connaître la position
        exacte de la station spaciale en temps réel!
        ...c'est complètement innutile...
        mais la commande c'est **isstatus**\n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))

        if(args[0] == 2) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide Google Translate")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        "google translate" est encore une api 
        complètement innutile...
        mais la commande c'est **translate -texte -langue**
        __***SOON***__\n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))

        if(args[0] == 3) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide Iss")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        "tronald dump" est une api innutile pour connaître
        les pires conneries qu'a dit Trump...
        la commande c'est **trump**\n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))

    }
}
