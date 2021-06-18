const { MessageEmbed } = require('discord.js');
const PURPULE = require('./colors.json')

module.exports = {
    name: 'clear',
    description: 'clear messages',
    
    execute(message, args) {
        const ammount = parseInt(args[0]);

        if (isNaN(ammount)) {
            return message.reply("Un **NOMBRE** de messages -_-");
        }
        else if (ammount < 1 || ammount > 64) {
            return message.reply("J'peux pas supprimer + de 64 messages d'un coups sorry ^^' fais en plusieurs fois eheh!")
        } 

        message.channel.bulkDelete(ammount + 1)
        .then(messages => message.channel.send(new MessageEmbed()
        .setTitle(`${messages.size - 1} message supprimé(s)`)
        .setColor(10181046)
        .setImage(``)));
    }
};