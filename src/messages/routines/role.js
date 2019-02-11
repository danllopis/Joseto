
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

                for (var it = 1; it < args.length; it++) {
                    if (args[it].toLowerCase().includes('d')) {
                        if (operations != '') {
                            operations += ' ++';
                        }
                        var dice = args[it].split('d');
                        var diceNum = parseInt(dice[0]);
                        var diceMaxValue = parseInt(dice[1]);

                        for (var i = 0; i < diceNum; i++) {
                            var diceRes = Math.floor(Math.random() * diceMaxValue) + 1;
                            if (i != 0)
                                operations += ' +'
                            operations += ` [${diceRes}]`;
                            result += diceRes
                        }

                    } else {
                        var offset = parseInt(args[it]) || 0;
                        if (offset < 0) {
                            operations += ` - ${Math.abs(offset)}`;
                        } else {
                            operations += ` + ${offset}`;
                        }


                        result += offset;

                    }
                }
                sentMsg.reply(result + ` = ${operations}`);
            },
            errorMsg: ''
        },
        {
            name: 'coin',
            type: 'COMMAND',
            description: 'Lanza un dado con el valor máximo indicado.',
            command: '$coin',
            priority: 1,
            condition: sentMsg => {
                var args = sentMsg.content.split(' ');
                return args[0] === '$coin';
            },
            exec: sentMsg => {
                var msg = '';
                var args = sentMsg.content.split(' ');
                var numCaras = 0;
                var numCruz = 0;
                var cantoText = '';
                var numCanto = 0;
                var numCoinFlips = parseInt(args[1]) || 1;

                for (var i = 0; i < numCoinFlips; i++) {
                    var result = Math.floor(Math.random() * 6002);

                    if (result < 3000) {
                        msg += `${i + 1}.Cara\n`;
                        numCaras++;
                    } else if (result >= 3000 && result < 6001) {
                        msg += `${i + 1}.Cruz\n`;
                        numCruz++;
                    } else {
                        msg += `${i + 1}.¡HA SALIDO DE CANTO LOL!\n`;
                        numCanto++;
                        (numCanto != 1) ? cantoText = `, Han salido de canto ${numCanto} tiradas` : cantoText = `, Ha salido de canto ${numCanto} tirada`;
                    }
                }

                msg += `Resumen de ${numCoinFlips} tiradas. Cara: ${numCaras}, Cruz: ${numCruz}${cantoText}`
                sentMsg.reply(msg);
            },
            errorMsg: ''
        }
    ];