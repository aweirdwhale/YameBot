const { MessageEmbed, Guild } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')

module.exports = {
    name: 'server',
    description: 'Afficher les détails du serveur',
    
    execute(client, message) {
        const embed = new MessageEmbed()
                .setTitle(`${message.guild.name}`)
                .setColor(`#D4AF37`)
                .setThumbnail(message.guild.iconURL())
                .addFields(
                    { name: "Owner", value: `:crown: ${message.guild.owner}`, inline: true},
                    { name: "Server ID", value: `:link: ${message.guild.id}`, inline: true},
                    { name: "Members", value: `:bust_in_silhouette: ${message.guild.memberCount}`}
                )
                .setFooter(`Created: ${message.guild.createdAt}`)
        message.channel.send(embed);
        
        //message.channel.send(`Nom du serveur: ${message.guild.name}\nNombre d'utilisateurs: ${message.guild.memberCount}`)

        console.log('Info serveur chargées')
    }
};