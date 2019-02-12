
const math = require('mathjs');

module.exports = {
    commands: [
        {
            name: 'math',
            type: 'COMMAND',
            description: 'Resuelve operaciones matemáticas.',
            command: '$math',
            priority: 1,
            condition: sentMsg => {
                return sentMsg.content.startsWith('$math');
            },
            exec: sentMsg => {
                var answer = math.eval(sentMsg.args);
                sentMsg.reply(answer);
            },
            errorMsg: ''
        }
    ],
    reacts: []
}