//creating the page obejcts makes your stuff cleaner and easier.
import { By } from "selenium-webdriver";
//only have to ref ./basePage since it is in the same file.
import { BasePage } from "./basePage";

export class Google extends BasePage {
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');

    constructor() {
        super ({url: "https://www.google.com/"});
    };
    //now for the search and getResults methods, since we pulled in basePage we can use setInput and getText from the basePage
    //if you forget about the base page, you can enter them in the long way.
    // \n stands for new line and hits enter. \t will tab over for you, there are a lot of options for \
    async search(thingToSearch: string) {
        return this.setInput(this.searchBar, `${thingToSearch}\n`);
    };
    async getResults(){
        return this.getText(this.results);
    };
};