/**
 * Title: brady-person.class.ts
 * Author: Erin Brady
 * Date: 28 May 2023
 * Description: Iperson Class for Exercise 1.4: TypeScript
*/

import { Iperson } from "./brady-person.interface";

// Create Person class with firstName and lastName parameters.
class Person implements Iperson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create new instance of Person class with my name.
let myName = new Person("Erin", "Brady")

// When the app is run, log my name into the console.
console.log(`My name is ${myName.firstName} ${myName.lastName}`)
