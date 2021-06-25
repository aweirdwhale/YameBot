const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'pp',
    description: 'Afficher la pp',
    
    execute(client, message, args) {

        if (!message.mentions.users.size) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username}'s pp`)
                .setColor(15844367)
                .setImage(`${message.author.displayAvatarURL({ dynamic : true})}`)
            message.channel.send(embed);
        
        }

        const avatarList = message.mentions.users.map(user => {
            const embed = new MessageEmbed()
                .setTitle(`${user.username}'s pp`)
                .setColor('RANDOM')
                .setImage(`${user.displayAvatarURL({ dynamic : true})}`)
            message.channel.send(embed);
        });

    }
};