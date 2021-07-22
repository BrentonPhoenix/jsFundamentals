//Loops  - ctrl + c ends loops
/*
loops allow us to go over a block of information or code in a determined amount of cycles.
It's important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing alot of code.
*/
/*
STRUCTURE

We have to setup our loops in a way that we can see
    1.) Where we are in a loop,
    2.)Consider what sort of condition we want to run it against
    3.)Note when we are done

    We need to:
        1.)Create an Index
        2.)Run a condition
        3.)Change to the indexing variable (execution of condition)
*/

//? Let's count to 10:
//  (    index; condition;  change index(assignment operators))
for (let i = 0; i <= 10;     i++){
    console.log(i);
}

/*
We state our loop with a "for". Within ths functino, we are injecting some parameters that JS will run against.
index; condition; change index -> result.

Within our parameters, we are stating our index declaration to 0. This is our baseline. We move on to 
asking if that variable is less than or equal to the number 10, take that set number and add 1 to it.
Once that is processed, return that value (in this case "console.log" of that number). Once our 
condition is met, we return a false which ends our loop.

THIS is important to note:
for(create an <index variable>); <run condition>; <change index>) {
        <return results>
        <cont. until condition is met>
}

*/


//? If we don't indicate what our condition is, the loop will not have a finish line and thus will run 
//until we have to force close it.

/*
for(let i =0; i++){
    console.log(i)
}
*/

//No condition means that JS doesn't know when to stop and will never assume that information.


for(let a= 2; a > -10; a -= 4){
    console.log(a)
}

//We aren't limited by positive or negative numbers. We can cycle through variables assigned with strings.

let word= "superdocious";

for(let b = 0; b < word.length; b++){
    //.length is a mothod we can use in JS that helps us determine a value we may not know.
    console.log(b, word[b]);
    //.)we set a value of each index and are displaying that.
    //.)We set to display the value within the "object" of word. Each character that is assigned to the
    //variable of "word" is provided an index value and this is how we are cycling through it
    console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
    FOR IN LOOPS
    
    With For loops, we are seeking an index value and running it against a condition. For In Loops
    do not require an index number
*/


let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}
//spits out properties, name,pop,speedway

//    1                          1.)we can name this anything we want but it should be relevant
for(info in city){
    console.log(info);
    //console.log(city.info); // cidy.info looks for city= {info: 'value'}
    console.log(city[info]);
}

/*
dot notation is for if you want 
*/

let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/*
    let list ={
        0: 'milk',
        1: 'eggs',
    }
*/
for(item in list){
    console.log(item);
    console.log(list[item]);
}


/*

CHALLENGE


/*
write a for loop that loops over a name, and will capitalize the first letter,
and make all other letters lowercase.


let myName = 'dwiGht';
let propCase;

for(let index = 0; index <= myName.length-1; index++){
//   ^ code here     or   <   myName.length;
        //console.log(myName[index]);
                                                                                      //strings are technically Arrays
    if( index === 0 ){
        propCase = (myName[index].toUpperCase());  //propCase = 'D'
    } else {
        propCase += (myName[index].toLowerCase());  //'D'+'w'="Dw"
    }
}
console.log(propCase)

//if nameLetter = 1 (or 0 if it starts at zero like an array) run .toUpperCase
                // removed this for below //if nameLetter > 1 run .toLowerCase
//if nameLetter <= 6 ( combine with step 2 to stop?)

*/

let myName = 'dwiGht';
let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : index += myName[index].toLowerCase()
}
console.log(propCase);

/*

    FOR OF LOOP

    In order to run a for of loop, the 'thing' must be numbered like an array
*/

//ERROR

/*
let myObject = {
    string: 'peter',
    boolean: true,
    number:1
};

for(item of myObject) {
    console.log(item);
}
*/

let indexArray = ['spot 1', 2, true, 'not fifth'];
//for in gives index location,    for of is value
for(let pos of indexArray){
    console.log(pos, "was run through a 'for of' loop");
}

/*
    for(vairable of iterable){
       code goes here
}

*an iterable is something that has numbers assigned a 0, the second a 1, and so on... [eg. arrays, strings]
*/

let officeCharacters = ['Dwight', 'Michael','Jim', 'Stanley', 'Pam']

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker === 'Michael'){
        console.log(worker, 'works through lunch.');
    }
    if(worker === 'Jim' && worker !== 'Dwight'){
        console.log('bear. beats. battlestar galactia');
    }
}
//
if(worker === 'Jim' && worker !== 'Dwight'){
    console.log('bear. beats. battlestar galactia');
}