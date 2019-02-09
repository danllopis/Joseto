
module.exports = 

[
    {
        name: 'clear',
        type: 'COMMAND',
        description: 'Clear history',
        command: '$clear',
        priority: 1,
        condition: sentMsg => sentMsg.content === '$clear',
        exec: async sentMsg => {
            const fetched = await sentMsg.channel.fetchMessages();
            sentMsg.channel.bulkDelete(fetched)
                .catch(err => {
                    sentMsg.channel.send('No puedo borrar mensajes tan antiguos.');
                });
        },
        errorMsg: ''
    }
];