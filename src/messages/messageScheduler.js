
const commandManager = require('./commandManager');

const allCommandRoutines = require('./routineRouter').allCommands;

let schedule = (message) => {

    if(isCommand(message.content)) {
        var routines = commandManager.getActivatedRoutines(message, allCommandRoutines);

        if(routines.length > 0) {
            var maxPrioRoutines = commandManager.getMaxPriorityRoutines(routines);
            commandManager.exectuteRoutines(message, maxPrioRoutines);
        }
    }


}

let isCommand = messageContent => messageContent.startsWith("$");



module.exports = {
    schedule
}
