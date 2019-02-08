
let getActivatedRoutines = (sentData, routines) => {
    var activatedRoutines = [];

    for (var i = 0; i < routines.length; i++) {
        if(routines[i].condition(sentData))
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

let exectuteRoutines = (sentData, routines) => {

    for(var i = 0; i < routines.length; i++) {
        routines[i].exec(sentData);
    }

}

module.exports = {
    getActivatedRoutines,
    getMaxPriorityRoutines,
    exectuteRoutines
};
