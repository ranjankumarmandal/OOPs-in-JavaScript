// So we can create object using constructors (or blue-print of object) - completed 
// Another way to create object is Object.create()
// Object.create(prototype) will take argument as our prototype

const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
      this.lastName = newLastName;
    }
  }
  
  const mary = Object.create(personPrototypes);         // create an object marry with prototype 'personPrototypes'
  mary.firstName = 'Mary';
  mary.lastName = 'Williams';
  mary.age = 30;
  
  mary.getsMarried('Thompson');
  
  console.log(mary.greeting());
  
  const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
  });
  
  console.log(brad);
  
  console.log(brad.greeting());