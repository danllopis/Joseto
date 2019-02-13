
var allCommands = [];
var allReacts = [];

allCommands = allCommands.concat(require('./routines/role').commands);
allCommands = allCommands.concat(require('./routines/system').commands);
allCommands = allCommands.concat(require('./routines/util').commands);
allCommands = allCommands.concat(require('./routines/fun').commands);
allCommands = allCommands.concat(require('./routines/lol').commands);
allCommands = allCommands.concat(require('./routines/music').commands);

module.exports = {
    allCommands,
    allReacts
}

