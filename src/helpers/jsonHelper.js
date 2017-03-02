var fs = require('fs');
function readJsonSync(path){
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}
/**
 * 
 */
function saveJsonFileAsync (data, filePath, callback) {
    var jsonString = JSON.stringify(data, null, 4);
    fs.writeFile(filePath
                ,jsonString,'utf8', function (){
                    callback();
                }); // write it back 
}

exports.readJsonSync= readJsonSync;
exports.saveJsonFileAsync= saveJsonFileAsync;