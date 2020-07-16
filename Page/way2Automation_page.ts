import{browser}from 'protractor';


export class W2A
{

gotoURL()
{
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');

}
checkURLTitle()
{
    browser.getTitle().then((title)=>{
        console.log("Page Title is:"+title);
        expect(title).toBe('Protractor practice website - Registration');

    });
}
}
