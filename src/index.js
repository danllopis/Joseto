
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message', message => {
    console.log(message.content);

    if(message.content === '!test') {
        message.channel.send('Si podeis leer esto significa que sigo vivo.');
    }
});


client.login('');