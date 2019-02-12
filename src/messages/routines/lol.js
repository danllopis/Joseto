
const axios = require('axios');
const leagueApi = 'RGAPI-75f0f018-4f9e-4cfe-ac21-292e0c5ed1db';

module.exports =

    [
        {
            name: 'summoner',
            type: 'COMMAND',
            description: 'Busca la cuenta del jugador pasado por parámetro.',
            command: '$summoner',
            priority: 1,
            condition: sentMsg => {
                var args = sentMsg.content.split(' ');
                return args[0] === '$summoner';
            },
            exec: async sentMsg => {
                var args = sentMsg.content.split(' ');
                var summonerSearch = args[1];
                for(var i = 2; i<args.length;i++){
                    summonerSearch+=`%20${args[i]}`;
                }
                var summonerID;
                var summonerName;
                var summonerlv;
                var summonerWR = '';
                var summonerLeague = 'UNRANKED';
                var summonerRank = '';
                var ironquote = 'Está en el puto suelo XD';

                var responseSummoner = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerSearch}?api_key=${leagueApi}`);
                summonerID = responseSummoner.data.id;
                summonerName = responseSummoner.data.name;                
                summonerlv = responseSummoner.data.summonerLevel;

                var responseLeague = await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/positions/by-summoner/${summonerID}?api_key=${leagueApi}`);
            
                console.log(responseLeague.data)
                if(responseLeague.data.length != 0){
                    summonerLeague = responseLeague.data[0].tier;
                    summonerRank = responseLeague.data[0].rank;
                    summonerWR = `${(((responseLeague.data[0].wins) / (responseLeague.data[0].wins + responseLeague.data[0].losses)) * 100).toFixed(2)}%`;
                }                
                
                var msg = `Nombre: ${summonerName}, 
                  Nivel: ${summonerlv}, 
                  Winrate: ${summonerWR}, 
                  Liga: ${summonerLeague}, 
                  Rango: ${summonerRank}`;

                  if(summonerLeague === 'IRON')
                    msg += `\n${ironquote}`;

                sentMsg.reply(msg);
            },
            errorMsg: ''
        }
    ];