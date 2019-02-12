module.exports = {

    commands: [{
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
                //Variables del método.
                var args = sentMsg.content.split(' ');

                var resumeData = {
                    msg: '',
                    faceNum: 0,
                    crossNum: 0,
                    cantoText: '',
                    cantoNum: 0,
                    coinFlipsNum: parseInt(args[1]) || 1
                }

                for (var i = 0; i < resumeData.coinFlipsNum; i++) {
                    var result = Math.floor(Math.random() * 6002);

                    if (result < 3000) {
                        resumeData.msg += `${i + 1}.Cara\n`;
                        resumeData.faceNum++;
                    } else if (result >= 3000 && result < 6001) {
                        resumeData.msg += `${i + 1}.Cruz\n`;
                        resumeData.crossNum++;
                    } else {
                        resumeData.msg += `${i + 1}.¡HA SALIDO DE CANTO LOL!\n`;
                        resumeData.cantoNum++;
                        (resumeData.cantoNum != 1) ? resumeData.cantoText = `, Han salido de canto ${resumeData.cantoNum} tiradas`: resumeData.cantoText = `, Ha salido de canto ${resumeData.cantoNum} tirada`;
                    }
                }

                resumeData.msg += `Resumen de ${resumeData.coinFlipsNum} tiradas. Cara: ${resumeData.faceNum}, Cruz: ${resumeData.crossNum}${resumeData.cantoText}`
                sentMsg.reply(resumeData.msg);
            },
            errorMsg: ''
        }
    ],


    reacts: []
};