const calcAge3 = birthYear => 2037 - birthYear;
const age = calcAge3(1996);
console.log(age);

//second method
const retirement = (birthYear, firstName)
    => {
    const age1 = 2037 - birthYear;
    const retire = 65 - age1;
    return `I am ${age1} years old and i will retire at ${retire}`;
}
console.log(retirement(1996, Akshat));



//function calling other function
