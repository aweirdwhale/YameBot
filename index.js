const Discord = require('discord.js');
const fs = require('fs');
let emojis = require('emojis');


/*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", 'utf8'));
if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
        prefixes: config.prefix
    }
}

let prefix = prefixes[message.guild.id].prefixes;*/

const { prefix, token } = require('./config.json')


const { AQUA, GREEN, BLUE, PURPLE, GOLD, ORANGE, RED, GREY, DARKER_GREY, NAVY, DARK_AQUA, DARK_GREEN, DARK_BLUE, DARK_PURPLE, DARK_GOLD, DARK_ORANGE, DARK_RED, DARK_GREY, LIGHT_GREY, DARK_NAVY, LUMINOUS_VIVID_PINK, DARK_VIVID_PINK } = require('./commands/colors.json')
const { MessageEmbed } = require('discord.js');
const { config } = require('process');

const client = new Discord.Client()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

    client.once('ready', () => { //auto
        console.log(`Ready to use with ${client.user.tag}`)
        client.user.setActivity(emojis.unicode('des hentais :eyes:'), { type: 'WATCHING', url:  'https://twitch.tv/'})
    });

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        const embed = new MessageEmbed()
                .setTitle(`Erreur`)
                .setColor(`${RED}`)
                .setDescription(`:x: La commande n'a pas pu s'exécuter !`)
        message.channel.send(embed);
    }
})


client.login(token);