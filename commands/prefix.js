/*
const Discord = require('discord.js');
const fs = require("fs");

modules.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("nope t'as pas les perms cheh")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if(err) console.log(err);
    })

};
module.exports = {
    name: "prefix"
}*/