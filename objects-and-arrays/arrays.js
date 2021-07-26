/*
    -populating and referring
    -methods
    -length
    -iterating
*/


//  POPULATING and REFERRING
//             0          1        2
let list = ['orange', 'banana', 'oreos'];

//console.log(list[1]);

/*
    -we we call an array, we can append, or add, square brackets onto the end of the array name with the index
    number of the value we want to reference. This is known as SQUARE BRACKET NOTATION.

    -javascript starts counting at 0, so when we console log 'list[1]' we should see 'banana'
*/
/* let students = {
     0: 'Evan'
     1: 'ricky'
     2 'kali.
     ... 
} The key in an array is the index number
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n bake', 'Sophie'], 15 % 4];


//console.log(students[10]);
//console.log(typeof students);
//console.log(students instanceof Array);//gives us TRUE
//console.log(students = Array)//doesnt work just tells them to log students as an array
//instance of operator is used to check the type of object at run time. remember arrays are technical objects

console.log(students[4], students[7], students[9][1])
console.log('Hello',students[9][2]);


/* 
    ARRAY METHODS
    we can call on multiple different array methods that will allow us to manipulate arrays as we need to.
*/

let food= ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

//Add to our array

food.push('Pizza', 'spring onion');// how to do multiple? just add a comma. 
//method is a function attached to the object.
//console.log(food.push('spring onion'))//gives the length of the array starting from 1
console.log('push:', food[6])

//REMOVE FROM ARRAY
food.pop();//this should remove the last item from the array, only ever removes last item from array
console.log('pop:', food);

food.shift();//removes the first item in an array
console.log('Shift: ', food);

food.unshift('Chicken', 'garlic')//adds an item to the front of an array
console.log('Unshift: ', food)


food.splice(2, 2, 'bananas')//remove and insert items from an array
//(position to remove, how many to remove, what to add in that location)

console.log('splice: ', food)

food.splice(1,0, "icecream")
console.log('second splice:', food)

//   LENGTH  - used on an array or a string

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length)// 11  

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];//6

console.log(colors.length)

/* 
    ITERATING

    forEach-
        -the forEach() method executes a provided function once for each element in an array
        -the forEach(method does the same thing as a for loop or a for of loop -> both iterate 
            over the properties in an array)
        -provide a callback function that has up to 3 arguments:
            1.) The Value.
            2.) The Index.
            3.) The array object itself    
*/ 


for(let i = 0; i < colorList.length; i++){
    console.log(colorList[i]);
}
//forEach only works for arrays
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach(
    color => console.log(color)
)
//how do i make an arrow function.
//let something = (color) => {
//
//}
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item)
colorList.forEach(logItem);

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach((item,index) => {
    console.log(item);
    console.log(index);
})