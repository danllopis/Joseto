
const Discord = require('discord.js');
const client = new Discord.Client();

const {DISCORD_API_KEY} = require('./config/config');

const messageScheduler = require('./eventHandlers/msg/messageScheduler');

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message', message => {

    messageScheduler.schedule(message);

});

client.login(DISCORD_API_KEY);
