const { MessageEmbed, NewsChannel } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')
const akaneko = require('akaneko')
let emojis = require('emojis')

module.exports = {
    name: 'hentai',
    aliases: ['h', 'neko'],
    description: 'send NSFW images',
    
    async execute(client, message, args) {


            if(args[0] == "pied"){
                const embed = new MessageEmbed()
                .setImage(await akaneko.nsfw.feet())
                .setDescription(`Petit(e) fétichiste`)
                .setColor(`RANDOM`)
                message.channel.send(embed)
            }
    
            if(args[0] == "fox"){
                const embed = new MessageEmbed()
                .setImage(await akaneko.nsfw.foxgirl())
                .setDescription(`SFW Fox`)
                .setColor(`RANDOM`)
                message.channel.send(embed)
            }
    
            if(args[0] == "neko"){
            const embed = new MessageEmbed()
                .setImage(await akaneko.neko())
                .setDescription(`SFW Neko`)
                .setColor(`RANDOM`)
                message.channel.send(embed)
            }

            if(args[0] == "gif"){
                const embed = new MessageEmbed()
                    .setImage(await akaneko.nsfw.gifs())
                    .setDescription(`SFW Gif`)
                    .setColor(`RANDOM`)
                    message.channel.send(embed)
                }

                if(args[0] == "mast"){
                    const embed = new MessageEmbed()
                        .setImage(await akaneko.hentai.masturbation())
                        .setDescription(`SFW masturbation`)
                        .setColor(`RANDOM`)
                        message.channel.send(embed)
                    }

                    if(!args[0]){
                        const embed = new MessageEmbed()
                            .setImage(await akaneko.nsfw.wallpapers())
                            .setDescription(`SFW`)
                            .setColor(`RANDOM`)
                            message.channel.send(embed)
                        }

                        if(args[0] == "yuri"){
                            const embed = new MessageEmbed()
                                .setImage(await akaneko.hentai.yuri())
                                .setDescription(`SFW Yuri`)
                                .setColor(`RANDOM`)
                                message.channel.send(embed)
                            }

                            if(args[0] == "bdsm"){
                                const embed = new MessageEmbed()
                                    .setImage(await akaneko.hentai.bdsm())
                                    .setDescription(`SFW bdsm`)
                                    .setColor(`RANDOM`)
                                    message.channel.send(embed)
                                }
        

    }
};