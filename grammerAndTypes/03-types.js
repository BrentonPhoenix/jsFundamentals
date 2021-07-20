/*
    DATA and STRUCTURE TYPES

    -Primitive Data Types;
        -boolean
        -undefined
        -string
        -number
        -bigInt*
        -symbol *
    -null
    -object
    -function
*/

/*

    BOOLEAN

    A boolean has two possible values: true and false
*/
let on = true;
let off = false;

console.log(on);
console.log(off);

/*
    NULL

    A null value is an empty value. Think of it as an empty container
    that has space to fill. Note: null and undefined are two different
    things.
*/

let empty = null;
console.log(empty); //logs null
//null useful if we need to reset information, used for data reset


/*
    UNDEFINED

    No value has been assigned to a container and doesn't even
    act as an empty container.
*/

let unknown;
let undef = undefined;


// what's the difference between null and undefined?
/*
    -Null is like a container with nothing in it (empty box with purpose)
    -Undefined is a variable that has never been set, hasn't been created yet.(empty box without purpose)
*/


/*
    NUMBERS

    Literally just numbers

*/

let degrees = 82;
console.log(degrees);

let precise = 9999999999;
console.log(precise);

let rounded = 9999999999999999;  //past 15 digets javaScript is rounded 
console.log(rounded);
//dont use JavaScript for large numbers use Python or an external package

let notQuite = .2 + .1;
console.log(notQuite);
//along with really big numbers, JavaScript isn't great with decimals

let whatIf = (.2 *10 + .1 * 10)/10;
console.log(whatIf);

/*
    STRINGS
    
    Strings represent text and are wrapped in either single or double quotes.
*/

let doubleQuote = "double quote";
let singleQuote = 'single quote';
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt= "I then said, 'It is pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

const contractions = "now you can't run into any issues";
const contractions2 = 'now you can\'t run into any issues'; // "/excape character how to write an apostrophe inside single quotes"

console.log(contractions);
console.log(contractions2);

//Numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1150' + '100';
console.log(addTheseAlso)

// We can use an operation called 'typeof' to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = '1050' + 100;
console.log(addTest); 

/*
    OBJECTS

    Objects are used to store many values instead of just one.
    Consider them as a collection of differrent vairables in one
    container.
    denoted by curly brackets{}
*/

let frodo = {
    // an object has many properties inside of it, multiple properties are seperated by a ',' comma.
    race: 'Hobbit', //string
    //name : value
    rings: 1, //number
    sting: true, //boo-le-an boolean
}

console.log(frodo);

console.log(typeof frodo);


console.log(frodo.rings); //dot notation to get a property from an object

/*
    ARRAYS

    Containers that hold a list of items
    denoted by [] brackets
    all items are within the square brackets
    regardless of the datatype, all items are
    seperated by commas


    */

    let arrayList = ['pos 1', 'pos2', 'pos3'];
    console.log(arrayList);

    let anotherExample = ['muffins', 'pizza toppings', true, 17, false, null, undefined]
    console.log(anotherExample);//an array will hold anything we give it
    console.log(anotherExample[0]); // square bracket notation

//   Array is according to javascript an object

/* 
    ADDITON vs CONCATENATION

    JavaScript sees the + symbol in two ways
        -with numbers, it will use the built-in math functionality
        -when used with strings, it will ignore the math
        functionality and concats, or combined the two strings
        into one
*/

let strings = 'one' + ' ' + 'is a number';
console.log(strings);

let concatDiff = 1050 + '100';//string
console.log(concatDiff);
console.log(typeof concatDiff);

/*
    STRING PROPERTIES

    Properties are qualities associated with a data type
    strings have properties, or qualities, associated with 
    them, the length of a string is a property.
    */

let testOne = 'another test string';
console.log(testOne.length);  //property

/*
    STRING: METHODS

    methods are tools that can help us manipulate data
    .property .method()
    no parens   parens
*/


let myNameIs = 'Phoenix';
console.log(myNameIs.toUpperCase());

let home = 'My home is in Noblesville'
console.log('Includes Method:', home.includes('Noblesville'))//true

console.log('Includes Method:', home.includes('black tea'))//false