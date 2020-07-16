# ProtractorFramework
Startup

Step1:
-npm init

Step2:
-npm install -g protractor
-npm install -g typescript
-npm install -g jasmine
-npm install -g @type/jasmine
-npm install -g @type/node
-webdriver-manager update

Step3:
-Create Config.ts file

Add following lines
-------------------
geckoDriver: './webdriver-manager/geckodriver-v0.26.0',
    seleniumServerJar: './webdriver-manager/selenium-server-standalone-3.141.59.jar',
    specs: ['./ConvertedJSFiles/Spec/test.js'],
    capabilities: {
      browserName: 'firefox'
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 90000
      },
      
 Note:here GeckoDriver is used.  

Step4:
-Add a Directory for spec and page files.

Step5:
-Add Webdriver-Manager Directory and put Selenium Standalone server jar and chrome or gecko driver files

Step6:
-Add tsconfig.json file.
Update outDir.
"outDir": "ConvertedJSFiles/", 

Step7:
-Update package.json file  for script tag

"scripts": {
    "pretest": "npm run tsc",
    "test": "protractor config.ts",
    "tsc": "tsc"
  },
  
  Note:use "npm test" to run the script
  
  Step8:
  -Add a Spec file and update the spec name in the config file.
  
  Step9:
  -After Run the npm test, ConvertedJSFiles is created.and the ts files are converted to js. and Executed.
  
  Step10:
  -For reports install jamine spec reporter
  
  npm i jasmine-spec-reporter
  
  Step11:
  -For htmlReports used Allure Reporter.
  
 + npm i jasmine-allure-reporter
 + npm i allure-commandline
  
  note:It will create xml files in allure report folder.to convert to html file you have to install allure commandline tool.
  Then goto terminal and type allure serve "path of the xml" it will show you the html report in browser.
  
  Step12:
  -In Vscode package add some plugin
  +typescript hero.
  +jasmine snippet.
  +protractor snippet.
  +bracket colorizer.
  
