const featureConfig = require('./feature-config')
const fs = require('fs')
const path = require('path')
const moment = require('moment')

let feature;
let scenario;
let folderReports;
let stepNumber

const beforeScenario =  async (world) => {
    const scenarioTags = world.pickle.tags
    feature = scenarioTags[0].name.replace('@', '')
    scenario = scenarioTags[1].name.replace('@', '')
    await browser.url(featureConfig.url);
}

const beforeStep =  async (step) => {
    const stepText = step.text.split('_')
    stepNumber = stepText[0]
}

const afterStep = async () => {
    folderReports = './reports'
    folderReports += `/${feature}`
    if(!fs.existsSync(folderReports)){
        fs.mkdirSync(folderReports)
    }
    folderReports += `/${scenario}`
    if(!fs.existsSync(folderReports)){
        fs.mkdirSync(folderReports)
    }
    await browser.saveScreenshot(`${folderReports}/${moment().format("YYYYMMDDHmmss").toString()}_${stepNumber}.png`)
}

module.exports = {
    beforeScenario,
    beforeStep,
    afterStep
}