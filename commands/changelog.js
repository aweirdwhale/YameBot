const Discord = require('discord.js');
let emojis = require('emojis');
const fetch = require('node-fetch');


module.exports = {
    name: 'changelog',
    aliases: ['userversion', 'release'],
    description: "show iss position",

    async execute(client, message, args, cmd) {

        const embed = new Discord.MessageEmbed()
            .setUrl("https://github.com/Reilov18/YameBot/blob/release1.1.3/README.md")
            .setImage("https://cdn.discordapp.com/attachments/657940718186266645/867785380350525460/releasetestimg2.png")
            .setDescription(`Version Release 1.1.3!`)
            .setColor("RANDOM")

        message.channel.send(embed);

        console.log('Version chargée')
}}
