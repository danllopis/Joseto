
var allRoutines = [];

allRoutines = allRoutines.concat(require('./routines/role'));
allRoutines = allRoutines.concat(require('./routines/system'));
allRoutines = allRoutines.concat(require('./routines/util'));
allRoutines = allRoutines.concat(require('./routines/fun'));
allRoutines = allRoutines.concat(require('./routines/lol'));

module.exports = allRoutines;

