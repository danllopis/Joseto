
let getActivatedRoutines = (sentMsg, routines) => {
    var activatedRoutines = [];

    for (var i = 0; i < routines.length; i++) {
        if(routines[i].condition(sentMsg))
            activatedRoutines.push(routines[i]);
    }

    return activatedRoutines;
};

let getMaxPriorityRoutines = routines => {
    var maxPriorityRoutines = [];
    var maxPriority = -1;

    for (var i = 0; i < routines.length; i++) {
        if(routines[i].priority > maxPriority) {
            maxPriority = routines[i].priority;
            maxPriorityRoutines = [];
            maxPriorityRoutines.push(routines[i]);
        } else if(routines[i].priority == maxPriority) {
            maxPriorityRoutines.push(routines[i])
        }
    }

    return maxPriorityRoutines;
};

let exectuteRoutines = (sentMsg, routines) => {

    sentMsg.args = sentMsg.content.substr(
                            sentMsg.content.indexOf(" ") + 1);
    if(sentMsg.args === sentMsg.content)
        sentMsg.args = '';

    for(var i = 0; i < routines.length; i++) {
        routines[i].exec(sentMsg);
    }

}

module.exports = {

    getActivatedRoutines,
    getMaxPriorityRoutines,
    exectuteRoutines

};