/*

    FUNCTIONS

    functions are processes that we call upon to run an action. They can do the following:
        -take in an input to process, modify or respond to (not required tho)
        -Return a value (not required)
        -can be invoked (or called) as often as needed
    (can be thought of as a variable that calls something.)
*/


//(1)    (2)
function hi() {

    // (3)
    console.log('Hi!')
    // 1 : function keyword we use this to define a function
    // 2: name of the function followed by parentheses - this is how we will call the function
    // 3: code goes here - this will be the "brains" of the function
}

//calling the function
// a.k.a puttiing the "fun" in function
//in order to invoke (call) a function, we will simply write it's name and put parenthesis after it
hi()

//will not work because JS is case sensitive
//Hi()


//console.log(hi());

//When we console.log a function, javascript will first evaluate the function, meaning it will run all of the code and look for a value from it. IF we do not have a return statement within the function, we will get back undefined.




let myName = 'Jerome'


function myNameCap(){
    myName = myName.toLocaleUpperCase();

    //avoid this if you can (until much later)
    //this is called recursion
    //calling a function within itself

}
//console.log will not always run, or save, changes we make to see in the console. It is PURELY for us to se what is happening
//i get to look at it
//console.log()


//the computer gets to look at this
//myName 


myNameCap()

console.log(myName);



let myName = 'Jerome'


function myNameCap(){
    myName = myName.toLocaleUpperCase();
}

console.log(`This is working ${myName}`)

myNameCap()

//console.log(myName);

/*

    FUNCTION DECLARATION


    A chunk of code that preforms a set chunk of code when it is invoked (or called)

    */

    function funcOne(){
        console.log("This is the code that we run in function one");
    }

    // console.log(funcOne); funcOne will still refer to the function , but without () it will not invoke
    funcOne()//we invoke (or call) a function by writing it's declared name followed by parenthesis


/*

    FUNCTION EXPRESSIONS

    assigning a function to a variable is what we call function expression!

*/
    

let first = function funcTwo() {
    console.log('code being run in the function expression');
}

first()

let example = function(){
    console.log('What is my name?');
} 


//console.log(typeof example); logs function

console.log(typeof example());//undefined

/*

    ANONYMOUS FUNCTIONS

    anonymous functions are stored in memory but the runtime does not automatically create a reference to it.(We do get a spot to know what it does, but don't automatically make a name to invoke it.)

    The main use would be to pass these functions through another function. Maybe have a ternary where if something is true we run one function, else we run a different function.
*/

let anon = function(){
    console.log('Anonymous Function');
}

anon();

//EX of anonymous function
//true || false ? function(){console.log('true')} : 
//function(){console.log('false')}

//fetch('something')
    //.then(function(response) {(response.json()})


/*

    PARAMETERS

    we will be using functions to pass in information and return a result

    parameters will allow our functions to take in outside information
*/

function parameterFunc(num) {
    console.log(num + 1);
    return num + 5;  //return = replace everything i called with num + 5
}
//
//parameterFunc(7);
//parameterFunc('bruce');
//parameterFunc('another test');
//parameterFunc([1,2,3,4,5]);


let returnTest = 5;

//parameterFunc(returnTest);  // 6
parameterFunc(parameterFunc(returnTest));// 11
console.log(parameterFunc(returnTest))//10

let myReturn = parameterFunc(returnTest)
console.log('RETURN', myReturn);