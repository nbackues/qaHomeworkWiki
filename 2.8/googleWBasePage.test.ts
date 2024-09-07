import { Google } from "./googlePage";
const fs = require('fs');
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('Coffee');
    let pageResults = await page.getResults();
    expect(pageResults).toContain('Coffee');
    await fs.writeFile(`${__dirname}/coffee.png`,
        await page.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
                else console.log('Oh look a picture of what mars needs!');
        });
        await page.driver.quit();
});