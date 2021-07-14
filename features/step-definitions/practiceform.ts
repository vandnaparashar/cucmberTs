import { Given, When, Then } from '@cucumber/cucumber'
import appData from '../pageobjects/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow();

    
});

Then(/^I validate page header \"([^\"]*)\"$/,async  function (headertext:string) {
    await expect(appData.header).toHaveText(headertext);
    
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname:string, lname:string) {
    await (await appData.fname).setValue(fname)
    await (await appData.lname).setValue(lname)

    
});


When(/^I select gender (.+) years (.+) date (.+) favourite chai (.+) and reason (.+)$/, async function (gender:string, yrs:string, date:string, favchai:string, reason:string) {
    await appData.selectdropdown(await appData.gender_radio,gender)
    await appData.selectdropdown(await appData.experience,yrs)
    await (await appData.date).setValue(date);
    await appData.selectdropdown(await appData.favouritechai_checkbox,favchai)
    await appData.selectdropdown(await appData.excitingchai_checkbox,reason)


});

When(/^I select continent (.+) and commands (.+)$/,async  function (continent:string, command:string) {
    await (await appData.continent_dropdown).selectByVisibleText(continent)
    await (await appData.selcommands).selectByVisibleText(command)

    
});



When(/^I click on submit button$/, async function () {
    await(await appData.submit_btn).click()
    
});



