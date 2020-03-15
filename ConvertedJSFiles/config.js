var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var browser = require('protractor/built');
exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    geckoDriver: './webdriver-manager/geckodriver-v0.26.0',
    seleniumServerJar: './webdriver-manager/selenium-server-standalone-3.141.59.jar',
    specs: ['./ConvertedJSFiles/Spec/test.js'],
    capabilities: {
        browserName: 'firefox'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: function () {
        /**Jasmine spec reporter */
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
        /**Allure reporter */
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        /*After complete the test use-- allure serve 'path of xml' --to get report on browser*/
    }
};
