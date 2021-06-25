const Discord = require('discord.js');
let emojis = require('emojis');
const fetch = require('node-fetch');
module.exports = {
    name: 'isspos',
    aliases: ['iss'],
    description: "show iss position",

    async execute(client, message, args, cmd) {
    
        const iss = await fetch("http://api.open-notify.org/iss-now.json")
            .then(res => res.json())
            .then(json => json.iss_position);

        const embed = new Discord.MessageEmbed()
            .setImage("https://www.sciencesetavenir.fr/assets/img/2014/06/12/cover-r4x3w1000-57dfbaa1d3f14-iss.jpg")
            .setDescription(`La station spatiale se trouve actuellement en (**${iss.longitude} ; ${iss.latitude}**)!`)
            .setFooter(`Api: http://api.open-notify.org/iss-now.json`)
            .setColor("RANDOM")

        message.channel.send(embed);


}}