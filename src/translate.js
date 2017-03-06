// node ./src/translate ./test/translate/src-en.json en ./translate.result.json ms

var langHelper = require('./helpers/langHelper.js');
var logHelper = require('./helpers/logHelper.js');
var jsonHelper = require('./helpers/jsonHelper.js');

var argvs = process.argv
var srcPath = argvs[2]
var srcLang = argvs[3]
var resultPath = argvs[4]
var resultLang = argvs[5]

// Checking parameter
if(argvs.length !== 6)
{
    logHelper.log("How to use:");
    logHelper.log("\tnode translate [srcPath] [srcLang] [resultPath] [resultLang]");
    logHelper.log("\nExample:");
    logHelper.log("\t node ./src/translate ./test/translate/src-en.json en ./translate.result.json ms");

    return;
}

var defaultValueIfNotTranslated = "";

logHelper.log("Reading:"+srcPath);
var srcContent = jsonHelper.readJsonSync(srcPath);


// Getting translate option
var translateOption = {
  "from": srcLang,
  "to": resultLang
};


// Extract input from the input (json file)
// Convert them into array & send to translator
var inputs = [];
var resultContent = {};
for (var srcKey in srcContent)
{
    inputs.push(srcContent[srcKey]);
    resultContent[srcKey] = defaultValueIfNotTranslated;
}

// Do the translate


langHelper.translate(inputs, translateOption, function(err, translations){
    if (!err) {
        var translationIdx = 0;
        for (var srcKey in resultContent)
        {
            resultContent[srcKey] = translations[translationIdx];
            translationIdx++;
        }
        console.log(translations);
        //Save the result
        jsonHelper.saveJsonFileAsync(resultContent, resultPath, function(){    
            logHelper.log("Saved to: "+ resultPath);
        })
    } else {
        logHelper.log("Error:" + err);
    }
});