import path from 'path'

export const config = {
    runner: 'local',

    hostname: 'localhost',
    port: 4723,
    path: '/',

    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,

    capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'HP Saya',
    'appium:udid': '10DD5Z05PP0003C',
    'appium:app': path.join(process.cwd(), 'apk', 'staging.apk'),
    'appium:appPackage': 'com.swaglabsmobileapp',
    'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:appWaitActivity': '*',
    'appium:appWaitDuration': 60000,
    'appium:autoGrantPermissions': true,
    'appium:noReset': true,
    'appium:newCommandTimeout': 240
}],

    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],
    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}