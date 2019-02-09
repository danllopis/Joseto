
module.exports =

[
    {
        name: 'dice',
        type: 'COMMAND',
        description: 'Lanza un dado con el valor máximo indicado.',
        command: '$dice',
        priority: 1,
        condition: sentMsg => {
            var args = sentMsg.content.split(' ');
            return args[0] === '$dice';
        },
        exec: sentMsg => {
            var values = sentMsg.content.split(" ");
            var diceMaxValue = parseInt(values[1]);
            
            var answer = Math.random() * (diceMaxValue - 1) + 1 ;
            sentMsg.reply(Math.floor(answer));
        },
        errorMsg: ''
    }
];