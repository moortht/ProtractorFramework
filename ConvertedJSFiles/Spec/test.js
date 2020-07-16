"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var way2Automation_page_1 = require("../Page/way2Automation_page");
xdescribe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get('https://angularjs.org/');
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
});
describe('Way2Automation Page ', function () {
    it('title verifications', function () {
        var w2a = new way2Automation_page_1.W2A();
        w2a.gotoURL();
        w2a.checkURLTitle();
    });
});
