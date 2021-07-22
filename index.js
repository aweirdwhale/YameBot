const Discord = require('discord.js');
const client = new Discord.Client()
const iss = require ('./commands/help.js')


const { token } = require('./snapshot-token.json')
let emojis = require('emojis');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('discord-buttons')(client);


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`) (client, Discord)
})


client.once('ready', () => {
    client.user.setActivity(emojis.unicode(`le boule de l'impératrice :eyes:`), { type: 'WATCHING', url:  'https://twitch.tv/leculdeflo'})
})

//client.user.setActivity(emojis.unicode('des hentais :eyes:'), { type: 'WATCHING', url:  'https://twitch.tv/'})

client.login(token);
