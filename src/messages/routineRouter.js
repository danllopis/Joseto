
var allRoutines = [];

allRoutines = allRoutines.concat(require('./routines/role'));
allRoutines = allRoutines.concat(require('./routines/system'));
allRoutines = allRoutines.concat(require('./routines/util'));
allRoutines = allRoutines.concat(require('./routines/fun'));

module.exports = allRoutines;

