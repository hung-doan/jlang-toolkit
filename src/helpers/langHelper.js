var singleTranslate = require('google-translate-api');

singleTranslate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});

/**
 * options.from
 * options.to
 */
function translate(input, options, callback){
    if (!(input instanceof  Array))
    {
        console.log("Translate: Single Mode");
        // Translate single text
        singleTranslate(input, options).then(res => {
            callback(null, res.text);
        }).catch(err => {
            callback(err);
        });
    } else {
        console.log("Translate: Arrary Mode");
        // Translate array of input
        var result = [];
        var resultLen = 0;
        var inputLen = input.length;

        for(var i = 0; i < inputLen; i++)
        {
            // Translate single text
            (function(currentIndex){                
                singleTranslate(input[currentIndex], options).then(function(res) {
                    result[currentIndex] = res.text;
                    resultLen++;
                    if(resultLen >= inputLen)
                    {
                        callback(null, result);
                    }
                }).catch(function(err) {
                    callback(err);
                });
            })(i); // sefl invoke to avoid Hoisting 
        }
    }
}

exports.translate = translate;