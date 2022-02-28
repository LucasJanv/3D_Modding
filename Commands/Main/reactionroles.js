const Discord = require("discord.js");

// JSON
const color = require('../../JSON/color.json');
const config = require('../../JSON/config.json');
const fs = require("fs");
const ms = require("ms");

module.exports = {
    name: 'reactionroles',
    description: '',
    async execute(message, args, client, Discord, dButton) {

        client.on("message", async message => {
            // Checking if the message author is a bot.
            if (message.author.bot) return false;
        
            // Getting the role by ID.
            const Role1 = message.guild.roles.cache.get("943854785113776198");
            const Role2 = message.guild.roles.cache.get("943883371711463464");
        
            // Creating a filter.
            const Filter = (reaction, user) => user.id == message.author.id;
        
            // Creating the embed message.
            //const Embed = new Discord.MessageEmbed()
                //.setDescription(`Choose a role: \n ${Role1.name}\n ${Role2.name} `)
            
            // Awaiting for the embed message to be sent.
            const reactionMessage = await message.channel.send(`**3D Modding - Reactionroles** \n \n Reply whit  **📢**  to get Announcements \n \n Reply whit  **✔️** If you have read the Terms Of Service`);
        
            // Reacting to the embed message.
            await reactionMessage.react("📢");
            await reactionMessage.react("✔️");
        
            // Awaiting a reaction to the embed message. Time is measured in ms. (30000 ms - 30 seconds)
            reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
                // Getting the first reaction in the collection.
                const reaction = collected.first();
                
                // Creating a switch statement for reaction.emoji.name.
                switch (reaction.emoji.name) {
                    case "📢":
                        // Checking if the member already has the role.
                        if (message.member.roles.cache.has(Role1.id)) {return message.channel.send("You already have the role.")};
                        // Adding the role.
                        message.member.roles.add(Role1).then(message.channel.send("Role added!"));
                        // Breaking the switch statement to make sure no other cases are executed.
                        break
                }

                switch (reaction.emoji.name) {
                    case "✔️":
                        // Checking if the member already has the role.
                        if (message.member.roles.cache.has(Role1.id)) {return message.channel.send("You already have the role.")};
                        // Adding the role.
                        message.member.roles.add(Role2).then(message.channel.send("Role added!"));
                        // Breaking the switch statement to make sure no other cases are executed.
                        break
                }
            })
        });
    },
};