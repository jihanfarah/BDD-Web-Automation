const loginPage = require('../page-objects/login_page')
const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^(.*)_I am on the login page$/, async (code) => {
	await loginPage.verifyPage()
});

When(/^(.*)_I login with (.*) and (.*)$/, async (code, username, password) => {
	await loginPage.inputUsername(username)
    await loginPage.inputPassword(password)
	await loginPage.clickBtnLogin()
});

Then(/^(.*)_User successfully logged in$/, async (code) => {
	return true;
});

Then(/^(.*)_User cannot logged in and error message (.*) showed$/, async (code, message) => {
	await loginPage.verifyErrorText(message)
});

