//COMPARISON OPERATORS

//EQUAL
'3' == 3
console.log('3' == 3);

/*
JavaScript is helpfull and does something known as coercion when compairing values.
    -coercion is the process of converting a value from one type to another.
    -in the above example, JavaScript assumed we were checking if the string of '3' 
        is equal to the # of 3. Even tho one of our values is a string and one is
        an interger
*/

//STRICT EQUALITY - this overrides JavaScripts coercion

console.log(3 === 3);  //true
console.log('3' === 3);//false


//NOT EQUAL

console.log('3' != 3); // False because they are equal

//STRICT NOT EQUAL
'3' !== 4;
console.log('3' !== 4);

//GREATER THAN

3 > 2;

//LESS THAN

2 < 3;

//GREATER THAN OR EQUAL TO
3 >= 2;  //NOT TO BE CONFUSED WITH A => (FAT ARROW FUNCTION WHICH WE WILL EXPLORE LATER)


//LESS THAN OR EQUAL TO 
2 <= 3;

//AND 
2 && 3;

//OR
2 || 3;  //called vertical lines but also(pipe,piping symbol, Sheffer stroke, vertical slash, thick colon, or divider line)