const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')

module.exports = {
    name: 'kick',
    description: 'Sert a expulser des joueurs du serveur',
    
    async execute(client, message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) {
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
                .setDescription(`Je kick qui??`)
        return message.channel.send(embed);
        }

        if (member.id === message.guild.ownerID) {
            const embed = new MessageEmbed()
                .setTitle(`Erreur`)
                .setColor(`${red}`)
                .setDescription(`Ptdr non.`)
        return message.channel.send(embed);
        }

        const reason = args.slice(1).join(' ') || "une raison??";
        await member.kick(reason)
        const embed = new MessageEmbed()
                .setTitle(`${message.author.username}`)
                .setColor(`#800080`)
                .setDescription(`Says GoodBye to ${member.user.tag}!`)
        message.channel.send(embed);
        
    }
};