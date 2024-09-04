import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const firefox = require("geckodriver"); 
const driver = new Builder().withCapabilities(Capabilities.firefox()).build(); 

test('please  work', async() => {
    await driver.get('https://www.google.com/')
})