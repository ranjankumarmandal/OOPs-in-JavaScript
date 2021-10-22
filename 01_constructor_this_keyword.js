//---------------// constructors were used for OOPs in ES5, class were not used there //-----------------

// object literals - this is fine if you want to create a single objec instance
const ranjan = {name: 'Ranjan', age: 22};                /* single object instance */

// Object-Oriented Programming in JavaSCript is a way of writing code that allows you to create different objects from a common object. The common object is usually called a blueprint while the created objects are called instances. Each instance has properties that are not shared with other instances
// constructor - this is used to create a blue-print of an object, then multiple object instances can be created through it. Here OOPs in JS comes.
// 'this' keyword - it refers to the current instance of the object
// 'this' in global scope pretends to the 'window' object
// 'this' in a constructor pretends to the 'current instance of the object' for that blue-print of object
function Person(name, dob) {                            /* blue-print of object - a constructor */
    this.name = name;
    this.dob = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}

const ranjan1 = new Person('ranjan', '3-1-1998');                /* object instance 1 */
const brad = new Person('brad', '9-10-1981');                    /* object instance 2 */
const john = new Person('john', '9-10-1980');                    /* object instance 3 */

console.log(brad);
