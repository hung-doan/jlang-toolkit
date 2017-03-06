---
Scenario 1: 
		Descriptio: Update translation for Malay language
		Issue: 
			- There is an existing `Malay Language` file. I want to inherit all translated key.
			- Some key in old `Malay Language` file was removed
			- Some new key need to be added in to old `Malay Language` file
			
		Guide: 
			Step 1: Translate from en.json (english) to ms.json (malay). 
				
				node ./src/translate ./en.json en ./translate.result.json ms
				
				Explain: 
					node ./src/translate	: call translate function
					./src-en.json			: select source file to translate
					en						: language of the source file		(find code in src/helpers/lang-code.json)
					./translate.result.json	: destination/result file
					ms						: language code of the result file	(find code in src/helpers/lang-code.json)
					
			
			Step 2: Move all translated text from the old file to new file.
				node ./src/migrator ./old_ms.json ./translate.result.json ./migrate.result.json
				
				Explain: 
					node ./src/migrator		: call migration function
					./old_ms.json			: source file to copy the translate from
					./translate.result.json : destimation file to copy the translate to
					./migrate.result.json	: result path
		
---