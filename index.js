const Discord = require("discord.js");

const fs = require('fs');
const ms = require('ms')
const moment = require('moment')

// JSON
const config = require('./JSON/config.json');

// Packages
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.login(prcess.evn.token);

// Discord Buttons
const dButton = require("discord-buttons");
dButton(client);

// Ready Function
client.on(`ready`, message => {
    console.log(`Lucas Janvier \n   Welcome`);

    client.api.applications(client.user.id).guilds('834129527185211433').commands.post({
        data: { 
            name: "test",
            description: "test andwoord",

            //options: [
                //{
                    //name: 'Lucas',
                    //description: 'Naam is lucas',
                    //type: 3,
                    //require: true
                //}
            //]
        }
    })
});

//client.ws.on('INTERACTION_CREATE', async interactie => {
    //const args = interactie.data.options;
    //const command = interactie.data.name.toLowerCase()
//})

client.on('guildMemberAdd', member => {
    
    var role = member.guild.roles.cache.get('942093722118664242') 

    member.roles.add(role)

    const channel = member.guild.channels.cache.get('941750353056112680')

    const welcomeEmbed = new Discord.MessageEmbed()
    .setColor(`2F3136`)
    .setTitle(`Welcome to **${member.guild.name}**`)
    //.setAuthor('3D Modding')
    .setDescription(`Welcome **${member.displayName}** Nice you are here! \n\n We have now: **${member.guild.memberCount}** Members!`)
    .setFooter(`2022 © 3D Modding`)

    channel.send('', {
        embed: welcomeEmbed
    });

});

// Command Handler
client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
        client.commands.get(command).execute(message, args, client, Discord, dButton);
    } catch (error) {
        console.error(error);
        message.channel.send("error")
    }
});

client.commands = new Discord.Collection()

const commandFolders = fs.readdirSync(`./Commands`)

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./Commands/${folder}/${file}`);
        client.commands.set(command.name, command)
    }

}

// Event Handler
const eventFiles = fs.readdirSync('./Events/').filter(file => file.endsWith('js'));

for(const file of eventFiles) {
    const event = require(`./Events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    } 
}

