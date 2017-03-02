// node migrator ./ms_my.json ./en.json ./migrate.result.json "[NIC]"
// 
var logHelper = require('./helpers/logHelper.js');
var jsonHelper = require('./helpers/jsonHelper.js');

var argvs = process.argv
var srcPath = argvs[2]
var destPath = argvs[3]
var resultPath = argvs[4]
var _defaultValueIfNotExistInSource = argvs[5];

logHelper.log("Source:"+ srcPath);
logHelper.log("Destimation:"+ destPath);
logHelper.log("Result:"+ resultPath);

logHelper.log("Reading:"+srcPath);
var _srcContent = jsonHelper.readJsonSync(srcPath);

logHelper.log("Reading:"+destPath);
var _destContent = jsonHelper.readJsonSync(destPath);


var _resultContent = migrate(_srcContent, _destContent, _defaultValueIfNotExistInSource);
jsonHelper.saveJsonFileAsync(_resultContent, resultPath, function(){    
    logHelper.log("Saved to: "+ resultPath);
})


/**
 * Migrate all srcData to destData
 * If one key not exist in srcData, the value in destData must be empty
 */
function migrate(srcData, destData, defaultValueIfNotExistInSource) {
    for (var destKey in destData){        
        if(srcData[destKey] !== undefined)
        {
            destData[destKey] = srcData[destKey];
        } else {
            console.log(defaultValueIfNotExistInSource);
            if (defaultValueIfNotExistInSource !== undefined)
            {
                destData[destKey] = defaultValueIfNotExistInSource;
            }
        }
    }
    
    return destData;
}
