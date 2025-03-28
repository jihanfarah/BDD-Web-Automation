module.exports = {
    specs: [
        '../features/login.feature'
    ],
    require: [
        './step-definitions/login_steps.js'
    ],
    url: 'https://www.saucedemo.com/'
}