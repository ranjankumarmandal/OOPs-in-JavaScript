// Note - This is one of the most confusing concept in JavaScript for befinners
// prototype in js for related object instance, are object that are automatically gets created inside our main object (here it's Person{}), once we execute our constructor (blue-print of object) thrugh an object instance

function Person(name, dob) {                            /* blue-print of object - a constructor */
    this.name = name;
    this.dob = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.dob.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
}

Person.prototype.calculateAge = function() {                     /* define function inside prototype object inside our Person object */
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const ranjan1 = new Person('ranjan', '3-1-1998');                /* object instance 1 */
const brad = new Person('brad', '9-10-1981');                    /* object instance 2 */
const john = new Person('john', '9-10-1980');                    /* object instance 3 */

console.log(brad);
console.log(brad.calculateAge());                               /* here brad object instance can directly access this defined function which is inside prototype object inside Person object */

