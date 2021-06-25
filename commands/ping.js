const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')

module.exports = {
    name: 'ping',
    aliases: ['latence', 'latency'],
    description: 'test présence bot',
    
    async execute(client, message) {
        const embed = new MessageEmbed()
            .setTitle(`Ping`)
            .setDescription(`Latence du bot: \`---ms\`
            Latence de l'API: \`---ms\``)
            .setColor(`RANDOM`)
        const msg = await message.channel.send(embed)

        const embed2 = new MessageEmbed()
            .setTitle(`Ping`)
            .addFields( { name : "Latence du bot:", value : `${msg.createdTimestamp - message.createdTimestamp}ms`, inline : true},
                        { name : "Latence de discord:", value : `${Math.round(client.ws.ping)}ms`, inline : true})
            .setColor(`RANDOM`)
        msg.edit(embed2);
        
    }
};