import { Given, Then } from '@cucumber/cucumber'

Given(/^I open te browser and load the URL(.+)$/, async function (homepageurl) {
  await browser.url(homepageurl);
  await browser.maximizeWindow()

});

Then(/^I should see a header with text (.+)$/, async function (headertext) {
  const header = await $('.heading')
  await expect(await header.getText()).toEqual(headertext)


});