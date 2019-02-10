
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
            const args = sentMsg.content.match(/\S+/g);

            var result = 0;

            for(var it = 1; it<args.length; it++){
                if(args[it].toLowerCase().includes('d'))
                {
                    if(operations != ''){
                        operations += ' + ';
                    }
                    var dice = args[it].split('d');
                    var diceNum = parseInt(dice[0]);
                    var diceMaxValue = parseInt(dice[1]);

                    for(var i = 0; i < diceNum; i++) {
                        var diceRes = Math.floor(Math.random() * diceMaxValue) + 1;
                        if(i != 0)
                            operations += ' + '
                        operations += ` [${diceRes}]`;
                        result += diceRes
                    }

                } else {                  
                    var offset = parseInt(args[it]) || 0;
                    operations += ` + ${offset}`;
                    result += offset;

                }
            }            
            sentMsg.reply(result + ` = ${operations}`);
        },
        errorMsg: ''
    }
];