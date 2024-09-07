import { pageObject } from "./2.7PageObject";
//import your pageObject above, then below, set it as a variable.
//then you use page.whatever for what you are trying to use from the base page.
//there are no instances of driver here, so when you do use driver, it will need page. first i.e page.driver.sleep
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   //setting the properties.
   name: string;
   phone: number;
   title: string;
   //need constructor to use class outside {}, we are setting properties as parameters.
   constructor(name: string, phone: number, title: string){
      this.name = name;
      this.phone = phone;
      this.title = title;
   };
}; 
//in order to use the class, we now have to provide the object with name, phone and title.
//all of these things were made up expect for their types.

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern("Marilyn", 8105109111, "Host"),
   new Intern("Jane", 8748568522, "Server"),
   new Intern("Jean", 8564561212, "Dishes"),
   new Intern("Carol", 7458564545, "Cook")
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   //because we have the basePage now and we named it with const page = that pageObject above, we can use 'page' for the function.
   //these properties are also outlined in the pageObejct.
   //newInterns is set above in the array - let newInterns.
    await page.click(page.addEm); 
    await page.click(page.newEm); 
    await page.setInput(page.namInp, newInterns.name); 
    await page.setInput(page.phoInp, newInterns.phone); 
    await page.setInput(page.titleInp, newInterns.title); 
    await page.click(page.saveBtn); 
    await page.driver.sleep(3000); 
};

test('can add the bake off crew',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    //write for loop. () tells it what should be happening in the loop, the instructions. i is the placeholder (index) 
//we are saying if i is less than the amount of newInterns we have listed then we want it to run through the cycle we have in the {} 
//until it reaches the amount of newInterns we have i++
//the 2nd line is telling it to start at 0, start the index at the first one and then it will flow through the amount of newInterns
//the 2nd line is intiating or calling to work within the function, not just doing it as many times as possible.
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
});