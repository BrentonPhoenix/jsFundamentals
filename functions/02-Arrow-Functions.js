/*

    ARROW FUNCTIONS

    arrow functions are expressional functions that can be simplified into one of two forms: Consise body and Block body.
    THe main goal is to generate shorter syntax for writing a function.
*/

function regFunc(){

    console.log('just a regular function');
}

regFunc();

//FUNCTION EXPRESSION - assigning a function to a variable

//     (1)     (2)  (3)                (4)   
let arrowFunc = ()   =>     console.log('function in one line');

arrowFunc()

/*
    1.) A variable created to hold the value of our anonymous arror function.
        -Arrow Functions are ALWAYS anonymous
    2.) Parameters are still capable of being assigned
        -Parameters go in as they would with a normal function.
        BUT if we only have 1, no more or less, parameter, we do not need ().
        If we have no parameters we are still required to put ()
    3.) "How we see an arrow". This is JS syntax that says we are about to process 
    a function.
    4.) The code the Arrow Function will run, or Execute. i.e."Do This"
*/

let arrow = (x) => console.log(x);

arrow(10);


//  CONCISE vs BLOCK BODY



// CONCISE BODY
//  When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way
//      When we use a concise body arrow function, the 'return' statement is implied (meaning we do not have to write it.)
                    //implied return gives us back a value.
let conciseBody = (a,b) => a + b ;

conciseBody(1,2);//3
console.log(conciseBody(1,2))
console.log(conciseBody(1,3) + 1)//5

let result = conciseBody(1,2); //return sets conciseBody(1,2) =3

console.log(result)

let sliCompConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : 
console.log(`${x} and ${y} are where we want them`);

sliCompConcise(3,1);
sliCompConcise(3,3);



// BLOCK BODY
//     the 'return' keyword is required. we will also include curley braces {}
//    sometimes it will make sense to use blockbody if we need to do multiple lines of code.

//console.log tells us, return tells us a computer(it sends the information outside the function/ {curley brackets})

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`
}
blockArrow(1,2)

console.log(blockArrow(1,2))// works but doesn't retain
let blockArrReturn = blockArrow(1,2) // how you hold the value of the returned string

console.log(blockArrReturn)

