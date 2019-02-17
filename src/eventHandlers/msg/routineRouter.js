
const root = require('app-root-path');
const fileReader = require("fs");

var allCommands = [];
var allReacts = [];

var normalizedPath = root + '/src/routines/msg/'

fileReader.readdirSync(normalizedPath).forEach(function(fileName) {
    fileName = fileName.replace(/\.[^/.]+$/, "");
    allCommands = allCommands.concat(require(normalizedPath + fileName).commands);
    allReacts = allReacts.concat(require(normalizedPath + fileName).reacts);
});

module.exports = {
    allCommands,
    allReacts
}

