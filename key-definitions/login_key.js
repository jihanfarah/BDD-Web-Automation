class loginKey{
    TITLE = `//div[@class="login_logo" and text()="Swag Labs"]`
    USERNAME_INPUT_FIELD = '#user-name'
    PASSWORD_INPUT_FIELD = '#password'
    LOGIN_BTN = '#login-button'
    ERROR_LOGIN_TXT = '//div[contains(@class, "error-message-container")]'
}

module.exports = new loginKey()