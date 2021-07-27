console.log('Hello from the script file!');

//  
console.log(document)

console.log(document.body)
// using console.dir() to see the properties of the object instead of the html tag
console.dir(document.getElementById('testParagraph'));


//1  get element by id 
//hex codes work still within ""
//document.getElementById('testParagraph').style.color = 'red';

let testPara = document.getElementById('testParagraph')

testPara.style.color = "#001FFF";
testPara.style.backgroundColor = "#01DE48";

//This method will reach out to the html page and grab the first HTML element with the specific id passed
//into the method (in this case, testParagraph). This is important to know because if you have 2 elements
//with the same id, you will ONLY get the first, though you usually will not have 2 elements with the same
//id

// 2 get element by class

console.log(document.querySelectorAll('.sampleClass'));
// right now this gives us an array of all items with the class 'sampleClass' in a "NodeList"

console.log(document.querySelectorAll('p.sampleClass'));
//gives us an array with only <p class='sampleClass>

//all elements are considered the same type of object = a Node

document.querySelectorAll('p.sampleClass')[0].innerText = "My text has changed!";
//We use square bracket notation to select an index from the array, even if there's 
//only one element. innerText just references or changes the text inside of that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag  => {
    console.log(pTag)
    //pTag.innerText = "My text has been changed using a forEach() method!"
    //pTag.textContent = "My text has been changed using a forEach() method!"
    pTag.innerHTML = "My text has been changed using a forEach() method!"
});

/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT
        -innertext will simply reference or allow us to change the text of a specified elemetn. Will return
        visible text in a Node

        -textContent does the same thing that innerText does, but will return the Full text of a Node

        -innerHTML allows us to set text as well as HTML elements, which will be nested inside the current
        HTML element we are referencing.
*/

// ILLUSTRATING THE DIFFERENCES BETWEEN

console.log(document.getElementById('spanTest').innerText );
console.log(document.getElementById('spanTest').textContent );
console.log(document.getElementById('spanTest').innerHTML );



//3   addEventListener()
//event anything that happens on the page, buttons interact with the click 
//callback function is a function that is being called in the parameters of another function
document.getElementById('clickThis').addEventListener('click', function(event) {
   // console.log(event);
    console.log(event.target)
    event.target.style.backgroundColor = "#001FFF"
})


let input = document.getElementById('nameInput')

input.addEventListener('keyup', e => {
  //console.log(e.target)  
  console.log(e.target.value)
  console.log(document.getElementsByTagName('p'))  
  //everytime there is a keyup in our input field
  document.getElementsByTagName('p')[0].innerText = 'Something has Changed'
  
  if(e.target.value  === ''){
      document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed'
  } else{
    document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${e.target.value}` 
  }
})

