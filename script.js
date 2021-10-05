/*function fruit(apple, orange) {
    console.log(apple, orange);
    juice = `I have ${apple} apples and ${orange} oranges`;
    return juice;
}
console.log(fruit(4, 7));
*/


//2

const akshat = {
    firstName: 'Akshat',
    lastName: 'Trivedi',
    birthYear: 1800,
    job: 'scholer',
    friends: ['asc', 'hfnd', 'hgd'],
    //calcAge: function (birthYear)
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //a = console.log(2040 - this.birthYear);

    getSummary: function () {
        return `${this.firstName} is  ${this.calcAge} old teacher`;
    }
};
console.log(akshat.calcAge());
console.log(akshat.getSummary());
