module.exports = {
    specs: [
        './features/login.feature'
    ],
    require: [
        './step-definitions/login_steps.js'
    ],
    beforeScenario: async () => {
        await browser.url('https://www.saucedemo.com/');
    }
}