class Expect{
    async selectorElement(id){
        return await $(id)
    }

    async elementDisplayed(id){
        const element = await this.selectorElement(id)
        await expect(element).toBeDisplayed()
    }

    async clickElement(id){
        const element = await this.selectorElement(id)
        await element.click()
    }

    async sendText(id, text){
        const element = await this.selectorElement(id)
        await element.setValue(text)
    }

    async elementToHaveText(id, text){
        const element = await this.selectorElement(id)
        await expect(element).toHaveText(text)
    }
}

module.exports = new Expect()