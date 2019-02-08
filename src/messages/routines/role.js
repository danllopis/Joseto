
module.exports = 

[
    {
        name: 'dice',
        type: 'COMMAND',
        description: 'Lanza un dado con el valor máximo indicado.',
        command: '$dice',
        priority: 0,
        condition: sentData => {
            var command = sentData.content.substring(0, 5);
            return command === '$dice';
        },
        exec: sentData => {
            var values = sentData.content.split(" ");
            var diceMaxValue = parseInt(values[1]);
            
            var answer = Math.random() * (diceMaxValue - 1) + 1 ;
            sentData.reply(Math.floor(answer));
        },
        errorMsg: ''
    }
];