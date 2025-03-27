const loginPage = require('../page-objects/login_page')
const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^I am on the login page$/, async () => {
	await loginPage.verifyPage()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
	await loginPage.inputUsername(username)
    await loginPage.inputPassword(password)
	await loginPage.clickBtnLogin()
});

Then(/^User successfully logged in$/, async () => {
	return true;
});

Then(/^User cannot logged in and error message (.*) showed$/, async (message) => {
	await loginPage.verifyErrorText(message)
});

