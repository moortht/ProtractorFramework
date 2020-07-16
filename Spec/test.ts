import { browser} from 'protractor';
import{W2A}from '../Page/way2Automation_page'




xdescribe('Protractor Typescript Demo', function() {
	it('title verifications', function() {
	  browser.get('https://angularjs.org/');
	  browser.getTitle().then(function(title){
		console.log("The title is  : "+title)
		browser.sleep(5000);
	  })
	});
});

describe('Way2Automation Page ', function() {
	it('title verifications', function() {
	 var w2a=new W2A();
	 w2a.gotoURL();
	 w2a.checkURLTitle();
	  
	});
});