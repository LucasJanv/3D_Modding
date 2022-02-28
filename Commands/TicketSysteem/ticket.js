module.exports = {
	name: 'ticket',
	description: '',
	execute(message, args) {
        
        message.delete()
		
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const config = require('../../JSON/config.json')

        const catId = '941751936678494209';

        // Embed
        const invCh = new Discord.MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`Ticket Systeem - 3D Modding`)
        .setDescription(`${message.member}, \n This is not possible in this channel`)
        .setFooter(`❌ Error: is There a problem? or error \n Contact: LBJ#0725`)

        if(message.channel.parentID != catId) return message.channel.send(invCh).then(msg => msg.delete({timeout: 1000 * 5}));
 
        // Embeds 

        var invPerms = new Discord.MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`Ticket Systeem - 3D Modding`)
        .setDescription(`${message.member}, \n You don't have permission for this command`)
        .setFooter(`❌ Error: is There a problem? or error \n Contact: LBJ#0725`)


        var tCat = ['Question', 'Order', 'Other']

        // Validating username - Validating user Discriminator ( Discriminator is used for checking if ticket already exists)
        var usName = message.author.username;
        var usDisc = message.author.discriminator;

        // Embed

        var mTicket = new Discord.MessageEmbed()
        .setColor("2F3136")
        .setTitle(`Ticket Systeem - 3D Modding`)
        .setDescription(`${message.member}, \n You already have a ticket open!`)
        .setFooter(`© 3D Modding`)

        var ticketEx = false

        if (args[0] == null) {

            message.guild.channels.cache.forEach(ch => {
                if (ch.name.endsWith(usDisc)) {

                    
    
                    ticketEx = true
                    
                    
                    
                }
            })

        } 

        if (ticketEx == true) return message.channel.send(mTicket).then(msg => msg.delete({timeout: 5000}));

        if (args[0] == null) {

            message.guild.channels.create('ticket-' + usName.toLowerCase() + "-" + usDisc, {type : 'text'}).then(
                (createdCh) => {
                    createdCh.setParent(catId).then(
                        (settedP) => {
                            settedP.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
    
                            settedP.updateOverwrite(message.author.id, {
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ADD_REACTIONS: true,
                                ATTACH_FILES: true,
                                VIEW_CHANNEL: true,
                                READ_MESSAGE_HISTORY: true
                            })

                            createdCh.setTopic('Please Set Ticket with : .ticket ```[Choose one of the categories below.]```')
    
                            // Embed - Sending the embed to the parent (Ticket channel)
    
                            var parentMsg = new Discord.MessageEmbed()
                            .setColor(`2F3136`)
                            .setTitle(`Ticket Systeem - 3D Modding`)
                            .setDescription(`${message.author}, \n Welcome to 3D Modding Ticket Support \n Please select 1 of the categories below \n \n \n __**Ticket Categories**__ \n \n **- Question \n ~~- Hulp~~ \n - Order \n - Others** \n \n To choose a catagorie, you need to do  .ticket[categorieName]`)
                            .setFooter(`© 3D Modding`)
    
    
                            settedP.send(parentMsg);
                                                        
                            // Embed - Sending a message to the user ( not in dm ) that the ticket has been created

                            var tCreated = new Discord.MessageEmbed()
                            .setColor(`2F3136`)
                            .setTitle(`Ticket Systeem - 3D Modding`)
                            .setDescription(`${message.author}, \n Your ticket has been created \n \n Ticket : ${createdCh} `)
                            .setFooter(`© 3D Modding`)
                            message.reply(tCreated).then(msg => msg.delete({timeout: 10000}));
                            
                        }
                    )
                }
            )
        }

        if (args[0] === 'Question') {

            var vCatMsg =  new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setTitle(`Ticket Systeem - 3D Modding`)
            .setDescription(`Welcome ${message.author}, \n Your ticket is set, someone from the team will come as soon as possible! \n \n \n __Ticket Information__  \n \n  **Categorie : __Question__   \n \n  Ticket Owner : __${message.author}__ \n \n Ticket name : __${message.channel.name}__  \n \n Ticket channel : ${message.channel}**`)
            .setFooter(`© 3D Modding`)
        

            message.channel.bulkDelete(50)

            message.channel.setTopic(`Ticket with category Question.`)
            
        
            message.channel.send(vCatMsg);
        }

        //if (args[0] === 'hulp') {

            //var hCatMsg =  new Discord.MessageEmbed()
            //.setColor(`BLUE`)
            //.setTitle(`Ticket Systeem`)
            //.setDescription(`Welkom ${message.author}, \n Je ticket is ingestelt er komt zo snel een admin bij je \n \n \n __Ticket Informatie__  \n \n  **Categorie : __Hulp__  \n \n  Ticket Owner : __${message.author}__  \n \n Ticket naam : __${message.channel.name}__  \n \n Ticket kanaal : ${message.channel}**`)
            //.setFooter(`© 3D Modding`)

            //message.channel.setTopic(`Ticket with category Hulp`)
        

            //message.channel.bulkDelete(50)
        
            //message.channel.send(hCatMsg);
        //}

        if (args[0] === 'Order') {

            var bCatMsg =  new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setTitle(`Ticket Systeem - 3D Modding`)
            .setDescription(`Welcome ${message.author}, \n Your ticket is set, someone from the team will come as soon as possible! \n \n \n __Ticket Information__  \n \n  **Categorie : __Order__   \n \n  Ticket Owner : __${message.author}__ \n \n Ticket name : __${message.channel.name}__  \n \n Ticket channel : ${message.channel}**`)
            .setFooter(`© 3D Modding`)

            message.channel.setTopic(`Ticket with category Order.`)

            message.channel.bulkDelete(50)
        
            message.channel.send(bCatMsg);

            // Embed
            var bDmMsg = new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setTitle(`A Person would like to place an order.`)
            .setDescription(`Someone has created a ticket with the category order. \n \n ** ticket : __${message.channel}__ \n \n Ticket Owner : __${message.author}__** \n \n **This is a automatich message**`)
            .setFooter(`© 3D Modding`)

            var lbjDm = message.guild.members.cache.get('711635370336452701')
            if (!lbjDm) return;

            lbjDm.send(bDmMsg)
        }

        if (args[0] === 'Other') {

            var oCatMsg =  new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setTitle(`Ticket Systeem - 3D Modding`)
            .setDescription(`Welcome ${message.author}, \n Your ticket is set, someone from the team will come as soon as possible! \n \n \n __Ticket Information__  \n \n  **Categorie : __Other__ \n \n  Ticket Owner : __${message.author}__ \n \nTicket name : __${message.channel.name}__  \n \n Ticket channel : ${message.channel}**`)
            .setFooter(`© 3D Modding`)
        
            message.channel.setTopic(`Ticket with category Other.`)

            message.channel.bulkDelete(50)
        
            message.channel.send(oCatMsg);
        }

        if (args[0] === 'close') {
            
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(invPerms).then(msg => msg.delete({timeout: 1000 * 5}));

            var tClosingMsg = new Discord.MessageEmbed()
            .setColor(`2F3136`)
            .setTitle(`Ticket Closing`)
            .setDescription(`Ticket will be closed in 5 seconds...`)
            .setFooter(`© 3D Modding`)

            if(message.channel.parentID == catId) {

                if (message.member.guild.channels.cache.get(message.channel.id)) {
                    message.reply(tClosingMsg)
                    .then(msg => {
                        setTimeout(() => msg.channel.delete(), 5000)
                    })
                }
            }

            if (message.channel.parentID != catId) {
                message.channel.send(invCh);
            }
        }

        if (args[0] === 'add') {

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(invPerms);

            if(message.channel.parentID === catId) {

                var addUs = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

                var invAddUsMsg = new Discord.MessageEmbed()
                .setColor("2F3136")
                .setTitle(`Ticket Systeem - 3D Modding`)
                .setDescription(`${message.member}, \n The specified user is invalid \n To remove a person you need to do .ticket remove[@userName]`)
                .setFooter(`© 3D Modding`)


                if (addUs) {

                    var addUsMsg = new Discord.MessageEmbed()
                    .setColor(`2F3136`)
                    .setTitle(`Person Added`)
                    .setDescription(`${addUs} Is added`)
                    .setFooter(`© 3D Modding`)
    
                    message.channel.updateOverwrite(addUs, {
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });
    
                    message.channel.send(addUsMsg);

                    //logCh.send(usAdded)

                } else {
                    message.channel.send(invAddUsMsg)
                }
                
            } else {
                message.channel.send(invCh)
            }

        }


        if (args[0] === 'remove') {

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(invPerms);

            if(message.channel.parentID === catId) {

                var removeUs = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

                var invRemoveUsMsg = new Discord.MessageEmbed()
                .setColor("2F3136")
                .setTitle(`Ticket Systeem - 3D Modding`)
                .setDescription(`${message.member}, \n The specified user is invalid \n To remove a person you need to do .ticket remove[@userName]`)
                .setFooter(`© 3D Modding`)

                if (removeUs) {

                    var removeUsMsg = new Discord.MessageEmbed()
                    .setColor(`2F3136`)
                    .setTitle(`Person Removed`)
                    .setDescription(`${removeUs} Is Removed`)
                    .setFooter(`© 3D Modding`)
    
                    message.channel.updateOverwrite(removeUs, {
                        READ_MESSAGES: false,
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        ATTACH_FILES: false,
                        VIEW_CHANNEL: false,
                        READ_MESSAGE_HISTORY: false
                    });
    
                    message.channel.send(removeUsMsg);
                    //logCh.send(usRemoved)

                } else {
                    message.channel.send(invRemoveUsMsg)
                }
                
            } else {
                message.channel.send(invCh)
            }
        }

        //Logging

        //const logCh = message.member.guild.channels.get(config.tkLog)

        //if (!logCh) return;

        //logCh.send(tkLogEmbed)

        //var tkLogEmbed = new Discord.MessageEmbed()
        //.setColor("2F3136")
        //.setTitle(`Logging Systeem - 3D Modding`)
        //.setDescription(``)
        //.setFooter(`© 3D Modding`)

        




	},


};  