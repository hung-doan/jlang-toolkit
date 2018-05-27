This tool will help you to translate your json into another language by using Google Translate APIs 

## Settup:

**Description:** How to run the tools

**Guide:**
* Step 1: Install node js
* Step 2: Run bellow command In root directory of the tool (where you can see package.json)
```
npm install
```
* Step 3: Finish
    
## Scenarios
### Scenario 1 : translation
**Description:** Translate json file from English to Chinese

**Guide:**
```bash
node ./src/translate ./en.json en ./translate.result.json zh-cn
```

### Scenario 2 : Update translation for a language
**Description:** Update translation for Malay language

**Issue:** 
- There is an existing `Malay Language` file. I want to inherit all translated key.
- Some key in old `Malay Language` file was removed
- Some new key need to be added in to old `Malay Language` file

**Guide:**

Step 1: Translate from en.json (english) to ms.json (malay). 
```
node ./src/translate ./en.json en ./translate.result.json ms
```
*Explain:*
* **node ./src/translate** : call translate function
* **./src-en.json** : select source file to translate
* **en** : language of the source file		(find code in src/helpers/lang-code.json)
* **./translate.result.json** : destination/result file
* **ms** : language code of the result file	(find code in src/helpers/lang-code.json)
    
Step 2: Move all translated text from the old file to new file.
```
node ./src/migrator ./old_ms.json ./translate.result.json ./migrate.result.json
```
*Explain:*
* **node ./src/migrator** : call migration function
* **./old_ms.json** : source file to copy the translate from
* **./translate.result.json** : destimation file to copy the translate to
* **./migrate.result.json** :  result path
    

    
    


