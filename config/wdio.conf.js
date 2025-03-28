const featureConfig = require('./feature-config')
const generalConfig = require('./general_config')

exports.config = {
    runner: 'local',
    specs: featureConfig.specs,
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: featureConfig.require,
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    beforeScenario: generalConfig.beforeScenario,
    beforeStep: generalConfig.beforeStep,
    afterStep: generalConfig.afterStep
}
