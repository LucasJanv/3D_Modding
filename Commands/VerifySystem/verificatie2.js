const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports = {
    name: 'menu',
    description: 'Development',
    execute(message, args, client, Discord, embeds, errJson, dButton,) {    

        let option1 = new MessageMenuOption()
            .setLabel(`aardappel`)
            .setEmoji(`🍎`)
            .setValue(`vraag`)
            .setDescription(`Dit is een van de categorieën`)
        
        let option2 = new MessageMenuOption()
            .setLabel('kaas')
            .setEmoji('🍕')
            .setValue(`bestelling`)
            .setDescription(`Dit is een van de categorieën`)

        let select = new MessageMenu()
            .setID('customid')
            .setPlaceholder('Kies hier uit')
            .setMaxValues(1)
            .setMinValues(1)
            .addOption(option1)
            .addOption(option2)

        message.channel.send('Dit is zeer leuk', select)

        client.on('clickMenu', async menu => {

            if(menu.values[0] == 'vraag') {

                await menu.reply.defer()
                message.channel.send(`Ja vraag mijn reet`)

            }

            if(menu.values[0] == 'bestelling') {

                await menu.reply.defer()
                message.channel.send(`Bestelling my ass`)

            }

        })

        

    },
};