const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')
let emojis = require('emojis')

module.exports = {
    name: 'status',
    description: 'change status',
    
    execute(client, message, args) {
        if(message.member.id !== "510565839452241946") return message.reply("Seul un bg suprême peut utiliser cette commande :)");

        if(!args[0]) return message.channel.send("Définis le status en arguments");

        let status = args
        client.user.setActivity(status, { type: 'WATCHING', url:  'https://twitch.tv/'})

    }
};