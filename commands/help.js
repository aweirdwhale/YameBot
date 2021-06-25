const Discord = require('discord.js');
let emojis = require('emojis');

module.exports ={
    name: 'help',
    description: "show help",
    execute(client, message, args) {

        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`__**Fun:**__
        **récupérer la pp d'un membre**: *pp '@mention' <gif | png>*
        **progressbar**: *progressbar* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**Autre type de fun  :eyes:  :**__
        **hentai**: bon pas besoin d'expliquer...
        *arguments*:
                -fox 
                -neko 
                -gif 
                -mast 
                -tentacle 
                -yuri 
                -bdsm \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**Modération:**__
        **kick**: *kick '@mention' <raison>*
        **ban** : *ban '@mention' <raison>*
        **clear** : *clear 'nombre entre 0 et 64'* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**Médias:**__
        **play**: *play 'lien youtube | nom de la musique'*
        **stopper la musique**: *stop*
        **passer la musique**: *skip*
        **lire en boucle**: *loop*
        
        -merci Tidic :kissing_smiling_eyes:-
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        __**APIs**__
        **ISS**: *help iss pour plus de précisions!*
        **les conneries de trump** : *help dump pour plus de précisions!* \n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))


        if(args[0] == "iss") return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide Iss")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        "ISS" est une api qui permet de connaître la position
        exacte de la station spaciale en temps réel!
        ...c'est complètement innutile...
        mais la commande c'est **isspos** ou **iss**!\n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))


        if(args[0] == "dump") return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Aide Iss")
        .setAuthor("Yameteam", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setColor(12745742)
        .setDescription(emojis.unicode(`
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n
        "tronald dump" est une api innutile pour connaître
        les pires conneries qu'a dit Trump...
        la commande c'est **trump**
        ***__SOON__***\n
        **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n`))
        .setFooter("prefix: 'y!'", "https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
        .setThumbnail("https://cdn.discordapp.com/avatars/810932378850689035/4e990f8b5a0e1775eb7aeba9c40bbd98.png?size=256")
      
        .setURL("https://discord.gg/sRn9yzCbbx"))

    }
}
