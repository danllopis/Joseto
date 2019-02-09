
const Discord = require('discord.js');
const client = new Discord.Client();

const routineManager = require('./messages/routineManager');

const allRoutines = require('./messages/routineRouter');

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message', message => {

    var routines = routineManager.getActivatedRoutines(message, allRoutines);

    if(routines.length > 0) {
        var maxPrioRoutines = routineManager.getMaxPriorityRoutines(routines);
        routineManager.exectuteRoutines(message, maxPrioRoutines);
    }

});

client.login('');
