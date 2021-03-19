require('chromedriver');
const { expect } = require('chai');
const { Builder, By, Key, until } = require('selenium-webdriver');
(async function test() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/home');
        await driver.findElement(By.id('browseNav')).click();
        let test = await (await driver.wait(until.elementLocated(By.id('tableSongs')), 1000)).getText();
        expect(test).to.equal('Songs');
    } finally {
        await driver.quit();
    }
})();