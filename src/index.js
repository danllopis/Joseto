
const Discord = require('discord.js');
const client = new Discord.Client();

const messageScheduler = require('./messages/messageScheduler');

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message', message => {

    messageScheduler.schedule(message);

});

client.login('');
