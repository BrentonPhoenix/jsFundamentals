/*
What is a variable?
variables are named containers for sorting data
we can think of these containers as resources we can call upon later.
Each variable allows us to store data, which could be a value or a function,
that we will want to reference back to.

 */

let a = 2;

/* 
-"let" is our KEYWORD
-"a" is the NAME of our variable
-"=" is our ASSIGNMENT OPERATOR
-"2" is our variable's VALUE
*/

let b = 1;


console.log(a+b);

console.log(a,b);

/*
    Restrictions with variables

    -a variable must begin with a letter, underscore, or dollar sign.
    -numbers may follow the above characters, but CANNOT come first in the name.
    -javaScript is case sensitive -'hello' and 'Hello' are different variables.
    -no spaces are allowed in variable names
    -camelCase is best practive for naming variables in js. This will help keep names of variables readable.
    ex:
        let myName = 'Phoenix';
        is easier to read than 
        let myname = 'Phoenix'
*/

let startingWithLetter = 'works'; //works
let _startingWithUnderscore = 'works'; //works
let $startingWithDollarSign = 'works'; //works
//let 5startingWithNumber = 'test';// BREAKS cannot have a variable name start with a number
// let -startingWithDash = 'test'; BREAKS cannot have a variable name start with a number

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign,);  

/*
    KEYWORDS

    var, let, and const
    
    -var: the 'old' keyword for variables. Not used much but used depending on the project and when it was made
        we will focus on let and const.
    
        -let: the 'new' keyword for variables which was introduced in ES6 *newest version of ECMAScript, which is 
    standardization of JavaScript
    
    -const: also 'new and declares an unchangable, or constant variable. The only limit to a const variable
    is that once they are declared and assigned the value will never change.

    */
    var variable = 'var variable';
    let lVariable = 'let variable';
    const cVariable = 'const Variable';

    console.log(variable, lVariable);

    /*
        Declarations are the LEFT SIDE of the assignment operator (=)
        within a variable
            -let x
        Initializations are the RIGHT SIDE of the assignment operator (=)
        and sets the value of the variable.
            let x = 10

            10 would be the initialization 

    */
   let x = 10;
   console.log('Declaration:',x);  //undefined

   x= 10;

   console.log('Initialization1:', x);

   //we can change the initialazation whenever we want

    x = 33;
    console.log('Initialization2:',x);


    //most recent initialization is what we get
    let y = 'hello';
    console.log(x, y);

    let today = 'Great!';
    const efa = 'Wonderful!';
    console.log(today,efa);

    today = 'Awesome';
    console.log(today, efa);

    //efa = 'super';
    // console.log(today, efa); //Awesome! Wonderful! or *error* cant reassigne a const variable

    // const example; //error
    // example = 'testing'

    // console.log(example); //cant declare a const you have to declare const someVariableName and initialize = 'value' on the same line

    