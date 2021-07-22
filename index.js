const Discord = require('discord.js');
const client = new Discord.Client()

const { token } = require('./snapshot-token.json')
let emojis = require('emojis');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('discord-buttons')(client);


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`) (client, Discord)
})

// role color update
// const size = colors;
// const rainbow = new Array(size);

// for (var i = 0; i < size; i++ ) {
//     var red = sin_to_hex(1, 0 * Math.PI * 2 / 3)
//     var blue = sin_to_hex(1, 0 * Math.PI * 2 / 3)
//     var green = sin_to_hex(1, 0 * Math.PI * 2 / 3)

//     rainbow[i] = '#' + red + blue + green;
// }

// function sin_to_hex(i, phase) {
//     var sin = Math.sin(Math.PI / size * 2 * i + phase);
//     var int = Math.floor(sin * 127) + 128;
//     var hex = int.toString(16);

//     return hex.length === 1 ? '0' + hex : hex;
// }

// let place = 0;
// const servers = './config.json/servers';

// function changeColor() {
//     for(let index = 0; index < servers.length; ++index) {
//         client.guilds.get(servers[index]).roles.find(x => x.id === RoleName).setColor(rainbow[place])
//         // client.guilds.get(servers[index]).roles.find(x => x.id === RoleName).setColor(rainbow[place])
//         .catch(console.error)

//         if(logging) {
//             console.log(`color changed to ${rainbow[place]} in ${servers[index]}`)
//         }
//         if(place == (size - 1)){
//             place = 0;
//         } else {
//             place++;
//         }
//     }
// }

client.once('ready', () => {
    // setInterval(changeColor, speed) //intervale pr doubleRAINBOW!
    client.user.setActivity(emojis.unicode(`le boule de l'impératrice :eyes:`), { type: 'WATCHING', url:  'https://twitch.tv/leculdeflo'})
})

//client.user.setActivity(emojis.unicode('des hentais :eyes:'), { type: 'WATCHING', url:  'https://twitch.tv/'})

client.login(process.env.TOKEN);
