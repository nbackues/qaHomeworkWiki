import { Google } from "./googlePage";
//add in fs because we are going to take a screenshot
const fs = require('fs');
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('Coffee');
    let pageResults = await page.getResults();
    expect(pageResults).toContain('Coffee');
    //this is to take the screenshot, this part doesn't change fs.writeFile(`${__dirname} just the /give it a file name 
    //also stays the same: await page.driver.takeScreenshot(), "base64",
    await fs.writeFile(`${__dirname}/coffee.png`,
        await page.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
                else console.log('Oh look a picture of what mars needs!');
        });
        //important part, don't forget to add quit or it could end up with a million things open
        await page.driver.quit();
});