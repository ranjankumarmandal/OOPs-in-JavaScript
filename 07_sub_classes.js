//------------------------------------ Very Important ----------------------
// Inheritence in JavaScript ES6

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greeting() {
        return `Hello there ${this.firstname} ${this.lastname}`;
    }
}

class Customer extends Person {
    constructor(firstname, lastname, phone, membership) {
        super(firstname, lastname);  // call the parent class Person constructor

        this.phone = phone;
        this.membership = membership;
    }

    phone1() {
        return this.phone;
    }

    static membership1() {
        // return this.membership; // because its static method hence will have no access in this.data in clss
        return 500;
    }
}

const customer1 = new Customer('ranjan', 'mandal', '9876432109', 'standard');
console.log(customer1);
console.log(customer1.greeting());         // access the prototype method of parent class Person from customer1 object
console.log(customer1.phone1());
console.log(Customer.membership1());
