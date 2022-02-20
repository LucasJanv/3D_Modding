const Discord = require("discord.js");

module.exports = {
    name: 'clickButton',
    description: '',
    async execute(button) {

        if(button.id == 'verificatieB1' ) {

            //await button.reply.send(`${member.Dis} has been verifyed`).then(msg => {msg.delete({timeout: 1000* 5})})

            var member = button.clicker.member;

            var mRole = button.guild.roles.cache.get('942093722118664242') || button.guild.members.cache.get(args[0])

            if (!mRole) {
                message.reply(`❌ Error: There is a error in verifyButton.js \n Contact: LBJ#0725`)
                return;
            }

            member.roles.remove(mRole);

            const welcomeEmbed = new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setDescription(`**${member.displayName}** Has been verifyed `)
        
            await button.channel.send('', {
                embed: welcomeEmbed
            }).then(msg => {msg.delete({timeout: 1000* 5})});
        }
    },
};