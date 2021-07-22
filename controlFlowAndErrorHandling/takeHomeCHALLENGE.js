let grade = 88

switch(grade){
    case 100:
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
    case 89:
        console.log('You have an A in the class, Fantastic!')
        break;
    case 88:  //ect. I am Not typing All of this just because my brain wont go ok??? The Pre-work was enough...
        console.log('If only you had one more point.Oh well B\'s are still good.');
        break;
    default:
        console.log('Yeah there has to be a better way than to case 100-0');
}

/*Create a switch statement that takes in a value (number) that represents a grade. 
If it is True, console log that they are passing with the correct letter grade.

*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-58


*/

//correct way

let Grade = 89;

switch (true) {
    case Grade >= 89:
        console.log(`Your grade is ${Grade}, you have an A`)
        break;
    case Grade >= 79:
        console.log(`Your grade is ${Grade}, you have a B`)
        break;
    case Grade >= 66:
        console.log(`Your grade is ${Grade}, you have a B`) 
        break;
    case Grade >= 59:
        console.log(`Your grade is ${Grade}, you have a B`)
        break;
    case Grade >= 0:
        console.log(`Your grade is ${Grade}, you have a B`)
        break;
    default:
        console.log('please insert a value')
        break;
}
