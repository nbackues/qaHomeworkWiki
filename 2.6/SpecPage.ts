import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 

export class SpecPage {
    driver: WebDriver; 
    url: string = 'https://www.google.com/'; 
    searchBar: By = By.id('ApjFqb');
    results: By = By.xpath('//div[@class="YNk70c GyAeWb"]');
    constructor(driver: WebDriver){
        this.driver = driver;
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar));
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendkeys(keys);
    };
    async setInput(elementBy: By, keys: any) {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`)
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
    async getResults() {
        return this.getText(this.results);
    }
}; 