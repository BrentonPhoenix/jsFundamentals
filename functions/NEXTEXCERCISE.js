//01-BasicFunctions line 170

let firstName = 'Jane';
let lastName = 'Doe'
function greetings(first, last){
    console.log(`Hi, ${first}! Welcome back!`)
    console.log(`This is the first parameter: ${first}`)
    console.log(`This is the last parameter: ${last}`);
}

greetings(firstName, lastName);
greetings("", lastName);