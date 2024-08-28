//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class Employees {
  // Write a class that holds the name, phone, and title (parameters, what variables do you want to use) for the employee.
    name: string;
    phone: number;
    title: string;
//to use the class outside of the {} we need a constructor
    constructor(name:string, phone:number, title:string) {
      this.name = name; 
      this.phone = phone; 
      this.title = title; 
  }; 
}; 
//now that the class is outside {} it is now an object
let employees: Array<Employees> = [
  //Create an array of four employees using your class. 
    new Employees('Dale', 1254591256, 'Chipmunk'),
    new Employees("Chip", 8459561223, "Chipmunk"),
    new Employees("Alvin", 1234564556, "Chipmunk"),
    new Employees("Simon", 4561234556, "Chipmunk")
];

const addEmployee: By = By.name("addEmployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]');
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveBtn: By = By.id("saveBtn"); //or could be By.css('.confirmationButton'); can use if not more than one class, 
//if more than one, needs to be xpath

let myFunc = async (employees) => {
   //Create a function to add an employee.
   await driver.findElement(addEmployee).click(); 
   await driver.findElement(newEmployee).click(); 
   await driver.findElement(nameInput).clear(); 
   await driver.findElement(nameInput).sendKeys(employees.name); //(employees.name) is calling our array
   await driver.findElement(phoneInput).clear(); 
   await driver.findElement(phoneInput).sendKeys(employees.phone); //(employees.phone)calling our array
   await driver.findElement(titleInput).clear(); 
   await driver.findElement(titleInput).sendKeys(employees.title); //(employees.title)calling our array
   await driver.findElement(saveBtn).click();
}; 

describe("should add employees to employee manager", () => {
    test("can add employees using myFunc", async () => {
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 
        for(let i = 0; i < employees.length; i++) {
            await myFunc(employees[i]); 
        }; 
        await driver.sleep(3000); 
        await driver.quit(); 
    });
}); 