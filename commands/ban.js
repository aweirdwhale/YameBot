const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')

module.exports = {
    name: 'ban',
    description: 'Sert a bannir des joueurs du serveur',
    
    async execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            const embed = new MessageEmbed()
                .setTitle(`Erreur`)
                .setColor(`${red}`)
                .setDescription(`Bah alors petitou on a pas les perms?`)
        return message.channel.send(embed);
        }
        const member = message.mentions.members.first()

        if (!member) {
            const embed = new MessageEmbed()
                .setTitle(`Erreur`)
                .setColor(`${red}`)
                .setDescription(`Je ban qui??`)
        return message.channel.send(embed);
        }

        if (member.id === message.guild.ownerID) {
            const embed = new MessageEmbed()
                .setTitle(`Erreur`)
                .setColor(`${red}`)
                .setDescription(`Ptdr nan.`)
        return message.channel.send(embed);
        }

        const reason = args.slice(1).join(' ') || "une raison??";
        await member.ban({reason})
        const embed = new MessageEmbed()
                .setTitle(`Ban`)
                .setColor(`#800080`)
                .setDescription(`Sa·Yo·Na·Ra ${member.user.tag}!`)
        message.channel.send(embed);
        
    }
};