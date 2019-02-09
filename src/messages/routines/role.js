
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
            var operations = '';
            const args = sentMsg.content.split(' ');

            const diceMaxValue = parseInt(args[1]) | 100;
            const offset = parseInt(args[2]) | 0;
            const diceNum = parseInt(args[3]) | 1;

            var result = 0;

            for(var i = 0; i < diceNum; i++) {
                var diceRes = Math.floor(
                    Math.random() * diceMaxValue + 1
                );
                if(i != 0)
                    operations += ' + '
                operations += ` [${diceRes}]`;
                result += diceRes
            }
            
            operations += ` + ${offset}`;
            result += offset;

            sentMsg.reply(result + ` = ${operations}`);
        },
        errorMsg: ''
    }
];