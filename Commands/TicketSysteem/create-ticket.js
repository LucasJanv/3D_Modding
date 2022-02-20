const { MessageButton, MessageActionRow } = require("discord-buttons");
const Discord = require("discord.js");
const moment = require('moment')

// JSON
const config = require('../../JSON/config.json');

module.exports = {
    name: 'verify',
    description: '',
    async execute(message, args, client, Discord, dButton) {

        message.delete()

        // Permissions
        if(!message.member.hasPermission("KICK_MEMBER")) {
            message.reply('Test')
            return;
        }
        
        if(!message.guild.me.hasPermission("KICK_MEMBER")) {
            message.reply('Test')
            return;
        }   
        
        // Embeds
        const create_ticketEmbed = new Discord.MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`How to create a ticket?`)
        .setDescription(``)
        .setFooter(`© 3D Modding`)

        message.channel.send('', {
            embed: create_ticketEmbed,
        });
    },
    
};