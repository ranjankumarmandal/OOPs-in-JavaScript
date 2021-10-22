// Till now we saw that how OOPs works in ES5 syntax, now we will go ahead with OOPs in ES6
// constructors (with name like Person()) only or Object.create() were used for OOPs in ES5
// 'class' is used for OOPs in ES6, here 'constructor' keyword used inside class, but every OOPs is handled through 'class' only
// All methods defined inside a class lies in the prototype of that related object instance

class Person {                                     /* blue-print of object - a class */
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    greeting() {                   /* greeting method is inside prototypes of our main Person object */
        return `Hello there ${this.firstname} ${this.lastname}`;
    }

    calculateAge() {               /* related method is indide prototype of our main Person object */
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const person1 = new Person('ranjan', 'mandal', '11-13-1980');   /* object instance 1 */
console.log(person1)
console.log(person1.calculateAge());

