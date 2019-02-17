module.exports = {

    commands: [{
            name: 'test',
            type: 'COMMAND',
            description: 'Send a message to verify that the robot is still online',
            command: '$test',
            priority: 9999,
            condition: sentMsg => sentMsg.content === '$test',
            exec: sentMsg => {
                sentMsg.channel.send('Si podeis leer esto significa que sigo vivo.');
            },
            errorMsg: ''
        },
        {
            name: 'doc',
            type: 'COMMAND',
            description: 'Send a message giving the documentation with all the commands this bot have',
            command: '$doc',
            priority: 9999,
            condition: sentMsg => {
                var args = sentMsg.content.split(' ');
                return args[0] === '$doc';
            },
            exec: sentMsg => {
                if (sentMsg.content === '$doc') {
                    sentMsg.reply('Aquí tienes un enlace con todos los comandos: https://github.com/kabi404/Joseto/wiki');
                } else {
                    const commandList = require('../../eventHandlers/msg/routineRouter');
                    const args = sentMsg.content.match(/\S+/g);
                    var iterator = 0;

                    while (commandList[iterator].command !== args[1]) {
                        iterator++;
                    }

                    sentMsg.reply(`Nombre: ${commandList[iterator].name}, Tipo: ${commandList[iterator].type}, Descripcion: ${commandList[iterator].description}`)
                }
            },
            errorMsg: ''
        }
    ],

    reacts: []
};