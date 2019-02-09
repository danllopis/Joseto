
module.exports = 

[
    {
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
    }
];