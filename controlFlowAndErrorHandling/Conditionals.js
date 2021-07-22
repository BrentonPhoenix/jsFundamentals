/*
    CONDITIONALS

        FALSEY VALUES
            A falsey value is a value that is considered false when encountered
            in a boole-an context. There are six valsey values.
                -false
                -0
                -"".'', ``(`back tick) Any Empty String
                -null
                -undefined
                -NaN (Not a Number)

            What does this mean? Whenever JS is expecting a boole-an value  and is 
            given on of these 6, it is evaluated as false.
        *side note: there are also the Truthy values in JS, which tend to be much
                less limited. examples include: 
                -true, 
                -{}, 
                -[], 
                -42, //any number not 0, including negative numbers
                -fractions? //
                -"false" //any non empty string
                think about it as if something has value its true, if it doesn't have
                value its false.
*/


//TEST IF FRACTIONS ARE TRUTHY

/*
    IF STATEMENTS

    When we use comparison operators, we are typically are asking if we can move on to the next section of code. "IF"
    something is true, do "this thing"

*/

// keyword   expression
if      (true) {
    //code to run if the expression evaluates to true
    console.log('Truthy Test');
}
//condition 
if(false){
    console.log('Falsey Test')


}
let light = 'on';

if(light == 'on'){
    console.log('The light is on.');
}

if(light != 'on'){
    console.log('The light is off');
}

/*
if(weather <= 70){
    console.log("Wear a jacket! It's cold")
}
if(rain == true){
    console.log("Raining, wear a jacket");
}
*/
let weather = 65;
let rain = true;

if(weather <= 70 && rain == true){
    console.log("Test to check multiple statements at once");
}


/*
    IF ELSE

    We can think of this as not only providing an answer if our condition evaluates to be 
    true, but also if it ends up being false.
*/

let today = 50;

if(today < 70){
    //string interpolation use back tics and cash money brackets ${}
    console.log(`It's ${today}, wear a jacket`);
} else { 
    console.log(`It's ${today}. No jacket needed!`);
}
//Use else{} to check If Statements!


/*
    ELSE IF

    this is a condition that will be checked if the above condition was not met
*/

let cookTime = 60;
 if(cookTime === 45){
    console.log('Let us feast');
} else if(cookTime > 45){
    console.log(`${cookTime} you might need a glass of water.`)
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5-15 minutes.`);
} else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes. Wait another 10-25`);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps we could at least try cooking it...`);
}



//conditional challenge 2


/*
    TERNARIES
    THey are if/else statements but they look a little different.


*/

let inName = 'Jerome';

if(inName === 'Jerome'){
    console.log(`Hi, ${inName}!`);
} else {
    console.log(`Not sure I know ${inName}`);
}

// condition ? if true : else result
//condition           if true run this                 if false
inName === 'Jerome' ? console.log(`Hi, ${inName}!`) : console.log(`Not sure I know ${inName}`);

//condition
inName === 'Jerome' ?
//if true
console.log(`Hi, ${inName}!`) :
//else false
console.log(`Not sure I know ${inName}`);


let hero = 'batman'
let villain = 'Mr.Freeze'

hero == 'batman' && villain == "Riddler" ? console.log('What has a head and a tail but no body?'):
hero == 'batman' && villain == 'joker' ? console.log('Why so serious?') :
hero == 'batman' && villain == 'Mr.Freeze' ? console.log('Ice to meet you!') : 
console.log(`${hero} is the night!`);



/*
    SWITCH STATMENTS
        
    The switch statement executes a block of code depending on different cases
    command is (case)

*/

let instructor = 'Jerome'

switch(instructor){
    //if instructor === 'Jerome'
    case 'Jerome':
        console.log(`${instructor} is a part of the Web Development Team`);
        //if you want to exit out of a case in a switch statement
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;

        //default is equivalant to 'else' it is the behavior if none of the conditions are met.
        default: 
            console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
}

let staff = 'Jerome';

switch(staff){
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches at this time`);  
        break; 
}

let switchConditional = 'example'

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
      default:
          console.log(`${switchConditional} is Not a string or boolean`);
}