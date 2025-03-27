const loginKey = require('../key-definitions/login_key')
const Expect = require('../helper/expect')
const { log } = require('wd/lib/commands')

class loginPage{
    async verifyPage(){
        await Expect.elementDisplayed(loginKey.TITLE)
        await Expect.elementDisplayed(loginKey.USERNAME_INPUT_FIELD)
        await Expect.elementDisplayed(loginKey.PASSWORD_INPUT_FIELD)
        await Expect.elementDisplayed(loginKey.LOGIN_BTN)
    }

    async inputUsername(username){
        await Expect.sendText(loginKey.USERNAME_INPUT_FIELD, username)
    }

    async inputPassword(password){
        await Expect.sendText(loginKey.PASSWORD_INPUT_FIELD, password)
    }

    async clickBtnLogin(){
        await Expect.clickElement(loginKey.LOGIN_BTN)
    }

    async verifyErrorText(text){
        await Expect.elementToHaveText(loginKey.ERROR_LOGIN_TXT, text)
    }
}

module.exports = new loginPage()