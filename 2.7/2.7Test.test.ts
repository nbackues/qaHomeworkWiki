import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string;
   phone: number;
   title: string;
   constructor(name: string, phone: number, title: string){
      this.name = name;
      this.phone = phone;
      this.title = title;
   };
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern("Marilyn", 8105109111, "Host"),
   new Intern("Jane", 8748568522, "Server"),
   new Intern("Jean", 8564561212, "Dishes"),
   new Intern("Carol", 7458564545, "Cook")
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
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
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
});