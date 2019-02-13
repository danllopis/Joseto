
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
                if (!sentMsg.guild.voiceConnection) {
                    const streamOptions = { seek: 0, volume: 1 };
                    var voiceChannel = sentMsg.member.voiceChannel;
                    voiceChannel.join().then(connection => {
                        console.log("joined channel");
                        const stream = youtube(url, { filter: 'audioonly' });
                        const dispatcher = connection.playStream(stream, streamOptions);
                        dispatcher.on("end", end => {
                            console.log("left channel");
                            voiceChannel.leave();
                        });
                    }).catch(err => console.log(err));
                }
                var paused = false;
                console.log(url)
                sentMsg.channel.send('Reproduciendo.')
            },
            errorMsg: ''
        }
    ],


    reacts: []
};