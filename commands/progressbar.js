const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('./colors.json')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    name: 'progressbar',
    aliases: ['pb'],
    description: 'fait une progressbar',
    
    
    async execute(client, message) {

        const step0 = "[]"
        const step = [
            "[▨]",
            "[▨▨]",
            "[▨▨▨]",
            "[▨▨▨▨]",
            "[▨▨▨▨▨]",
            "[▨▨▨▨▨▨]",
            "[▨▨▨▨▨▨▨]",
            "[▨▨▨▨▨▨▨▨]",
            "[▨▨▨▨▨▨▨▨▨]",
            "[▨▨▨▨▨▨▨▨▨▨]"
        ]

        let i = 0;

        const embed = new MessageEmbed()
            .setTitle('ProgressBar')
            .setDescription('[]')
            .setColor(`${blue}`)
        msg = await message.channel.send(embed);

        for(i = 0; i< step.length; i++){
            const embed2 = new MessageEmbed()
                .setDescription(step[i])
                .setColor('#ffae00')
            await delay(100)
            msg.edit(embed2);
        }

        /*const step0 = "[▨...........]"
        const step1 = "[▨▨..........]"
        const step2 = "[▨▨▨.........]"
        const step3 = "[▨▨▨▨........]"
        const step4 = "[▨▨▨▨▨.......]"
        const step5 = "[▨▨▨▨▨▨......]"
        const step6 = "[▨▨▨▨▨▨▨.....]"
        const step7 = "[▨▨▨▨▨▨▨▨..]"
        const step8 = "[▨▨▨▨▨▨▨▨▨]"
        const step9 = "[▨▨▨▨▨▨▨▨▨▨]"*/
        
    }
};