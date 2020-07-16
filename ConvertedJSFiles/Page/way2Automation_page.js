"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var W2A = /** @class */ (function () {
    function W2A() {
    }
    W2A.prototype.gotoURL = function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    };
    W2A.prototype.checkURLTitle = function () {
        protractor_1.browser.getTitle().then(function (title) {
            console.log("Page Title is:" + title);
            expect(title).toBe('Protractor practice website - Registration');
        });
    };
    return W2A;
}());
exports.W2A = W2A;
