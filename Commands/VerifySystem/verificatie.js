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
        const verifyEmbed = new Discord.MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`Verificatie`)
        .setAuthor('3D Modding')
        .setDescription(`Welcome to **3D Modding** Discord, Before you can see al the channels you need to verify your self! If you press on the button under this message you can verify your self \n \n You will remove your unverifyed rol! `)
        .setFooter(`© 3D Modding`)

        // Buttons

        let verificatieButton1 = new MessageButton()
        .setStyle('grey')
        .setLabel('Verificatie')
        .setID('verificatieB1')

        let vb = new MessageActionRow()
        .addComponents(
            [
                verificatieButton1
            ]
        );

        message.channel.send('', {
            embed: verifyEmbed,
            components: [vb]
        });
    },
    
};