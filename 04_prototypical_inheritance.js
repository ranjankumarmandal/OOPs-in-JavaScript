// What if we want to have one object / object type to inherit from another object, this is resolved by 'Prototypical Inheritance' in oops in JS

// Person constructor
function Person(firstname, lastname) {      
    this.firstname = firstname;
    this.lastname = lastname;
}

// greeting method inside 'prototype object' of/inside 'Person object/constructor'
Person.prototype.greeting = function() {
    return `Hello there ${this.firstname} ${this.lastname}`;
}

// const person1 = new Person('ranjan', 'mandal');     /* object instance 1 */
// console.log(person1.greeting());

// Customer constructor
function Customer(firstname, lastname, phone, membership) {
    Person.call(this, firstname, lastname);                 /* inherit Person except its prototype */

    this.phone = phone;
    this.membership = membership;
}
Customer.prototype = Object.create(Person.prototype);       /* inherit prototype of Person object */
Customer.prototype.constructor = Customer;                  /* make Customer.prototype return constructor Customer() */

const customer1 = new Customer('ranjan', 'mandal', '8923988923', 'standard');
console.log(customer1.greeting())