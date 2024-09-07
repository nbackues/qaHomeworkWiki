import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'; 

export class pageObject extends BasePage {
    addEm: By = By.name('addEmployee');
    //this did not need a locator because once a new employee was added it took on a diff value, new employee stays the same.
    newEm: By = By.xpath('//li[text()="New Employee"]');
    //could also be By.name('nameEntry');
    namInp: By = By.xpath('(//input[@class="materialInput"])[1]');
    phoInp: By = By.name('phoneEntry');
    titleInp: By = By.name('titleEntry');
    //if you didn't put id here and put css, you would need to put the # in the parenthesis.
    saveBtn: By = By.id('saveBtn');

    constructor(){
        super({url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'});
    };
};