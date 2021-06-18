const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'pp',
    description: 'Afficher pp',
    
    execute(message) {
        if (!message.mentions.users.size) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username}`)
                .setColor(15844367)
                .setImage(`${message.author.displayAvatarURL({ format : 'png'})}`)
            message.channel.send(embed);
        
        }

        const avatarList = message.mentions.users.map(user => {
            const embed = new MessageEmbed()
                .setTitle(`${user.username}`)
                .setColor('RANDOM')
                .setImage(`${user.displayAvatarURL({ format : 'png'})}`)
            message.channel.send(embed);
        });    

    }
};