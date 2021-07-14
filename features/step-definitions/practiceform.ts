import { Given, When, Then } from '@cucumber/cucumber'
import appData from '../pageobjects/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow();

    
});

Then(/^I validate page header \"([^\"]*)\"$/,async  function (headertext:string) {
    await expect(appData.getHeader()).toHaveText(headertext);
    
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname:string, lname:string) {

    await appData.enterfirstname(fname)
    await appData.enterlastname(lname)
   
});


When(/^I select gender (.+) years (.+) date (.+) favourite chai (.+) and reason (.+)$/, async function (gender:string, yrs:string, date:string, favchai:string, reason:string) {
    await appData.selectGender(gender)
    await appData.selectExperience(yrs)
    await appData.enterdate(date)
    await appData.selectfavouriteChai(favchai)
    await appData.selectexcitingchaireason(reason)


});

When(/^I select continent (.+) and commands (.+)$/,async  function (continent:string, command:string) {
    await appData.selectContinent(continent)
    await appData.selectCommand(command)

    
});



When(/^I click on submit button$/, async function () {
    await appData.clickonsubmit()
    
});



