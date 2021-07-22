/*
REFERENCE
    let word= "superdocious";

for(let b = 0; b < word.length; b++){
    //.length is a mothod we can use in JS that helps us determine a value we may not know.
    console.log(b, word[b]);
    //.)we set a value of each index and are displaying that.
    //.)We set to display the value within the "object" of word. Each character that is assigned to the
    //variable of "word" is provided an index value and this is how we are cycling through it
    console.log(`The letter ${word[b]} is in position: ${b}`);
}
*/

/*console.log(myName.length);

for(let nameLetter = 1; (nameLetter < 2 ? myName.toUpperCase[1] : nameLetter <= 6 ? myName.toLowerCase:); nameLetter++){
    console.log();
}
*/
/*
write a for loop that loops over a name, and will capitalize the first letter,
and make all other letters lowercase.
*/

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

