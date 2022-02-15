let fs = require('fs');
var exec = require('child_process').exec;
const path = require('path');

const args = process.argv.slice(2);

if (process.env.CI !== "true") {
    // console.warn('Not running in CI, about to patch versions');
    // console.log("CODE VERSION: ", codeVersion);
    // console.log("RELEASE VERSION: ", releaseVersion);
    var command = "";
    var basePath = path.dirname(path.dirname(__dirname));

    if (args[0]) {
        if (args[0] === "patch" || args[0] === "minor" || args[0] === "major") {       
            command = "npm run " + args[0];
        }
    }

    if (command !== "") {
        //exec(command);
        var codePackage = require(basePath + '/package.json');
        var releasePackage = require(basePath + '/release/app/package.json');
       
        if (releasePackage.version !== codePackage.version) {
            releasePackage.version = codePackage.version;
            fs.writeFileSync(basePath + '/release/app/package.json', JSON.stringify(releasePackage, null, 2));
        }
    }


}