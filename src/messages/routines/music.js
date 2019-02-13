
const fs = require('fs');
const youtube = require('ytdl-core');

var paused = true;

module.exports = {

    commands: [
        {
            name: 'play',
            type: 'COMMAND',
            description: 'Reproduce un video dada una url.',
            command: '$play',
            priority: 1,
            condition: sentMsg => {
                var args = sentMsg.content.split(' ');
                return args[0] === '$play';
            },
            exec: sentMsg => {
                console.log(sentMsg.args);
                const url = sentMsg.args;
                var paused = false;
                if (!sentMsg.guild.voiceConnection || !paused) {
                    const streamOptions = { seek: 0, volume: 1 };
                    var voiceChannel = sentMsg.member.voiceChannel;
                    voiceChannel.join().then(connection => {
                        console.log("joined channel");
                        const stream = youtube(url, { filter: 'audioonly' });
                        const dispatcher = connection.playStream(stream, streamOptions);
                        
                    }).catch(err => console.log(err));
                }
                console.log(url)
                sentMsg.channel.send('Reproduciendo.')
            },
            errorMsg: ''
        },
        {
            name: 'stop',
            type: 'COMMAND',
            description: 'Reproduce un video dada una url.',
            command: '$stop',
            priority: 1,
            condition: sentMsg => {
                var args = sentMsg.content.split(' ');
                return args[0] === '$stop';
            },
            exec: sentMsg => {
                console.log(sentMsg.args);
                const url = sentMsg.args;
                var paused = false;
                if (sentMsg.guild.voiceConnection || !paused) {
                    var voiceChannel = sentMsg.member.voiceChannel;
                    voiceChannel.leave();
                }
                sentMsg.channel.send('Parando.')
            },
            errorMsg: ''
        }

    ],


    reacts: []
};