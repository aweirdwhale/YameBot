const { MessageEmbed } = require('discord.js');
const PURPULE = require('./colors.json')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    name: 'clear',
    description: 'clear messages',
    
    execute(client, message, args) {
        const ammount = parseInt(args[0]);

        if (isNaN(ammount)) {
            return message.reply("Un **NOMBRE** de messages -_-");
        }
        else if (ammount < 1 || ammount > 64) {
            return message.reply("J'peux pas supprimer + de 64 messages d'un coups sorry ^^' fais en plusieurs fois eheh!")
        } 

        message.channel.bulkDelete(ammount + 1)
        .then(async messages => {         
            const embed = new MessageEmbed()
                .setTitle(`${messages.size -1} messages ont été supprimés.`)
                .setColor(`RANDOM`)
            embedSent = await message.channel.send(embed);

            await delay(3000) 

            embedSent.delete();
        });

    }
};