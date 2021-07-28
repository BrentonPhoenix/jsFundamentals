const baseUrl = 'https://api.spacexdata.com/v2/rockets';


const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); //gets the first ul tag(the first tag/class/id combo we give it in the string)

  /*HOISTING MINI LESSON
        JS will compile code reading from top to bottom, BUT it actually reads code twice. The first time it reads code, it will store
            anything in memory such as : variable names, functions (when using the keyword)
    */
searchForm.addEventListener('submit', fetchSpace)

function fetchSpace(e){ 
   e.preventDefault() //this will stop the page from reloading when we submit our form. It prevents a default action by the browser
   console.log('test')
   fetch(baseUrl) //starts the process of getting information from our resource
 /*  .then(/*function goes here)*/
    .then(result => { //when we have a promise, we can called a method called '.then(). this will be given a callback function to send the results into
        console.log(result);
        return result.json(); //this will json-ify, or translate our result into json, which will be more easily readable and accessable within our app.
    })//.then() also returns a promise, meaning if we want to continue to run code after one is done, we can just add another .then()
    .then(json => {
        displayRockets(json)
    })
}
function displayRockets(data) {
    console.log('Inside displayRockets:',data)
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li');//creates an empty li tag <li></li>
        listItem.innerText = rocket.name;
        spaceShips.appendChild(listItem)//will add one of our tags into another tag. in this case we are adding lisItem into the ul(spaceShips)

        /* container.appendChile(itemInContainer) */
    })
}






//optional challenge
/* add a table to the html page, and comment out the ul
comment out the above forEach loop and make a new one
make a new row in the table for each rocket
inside of each new row, add the name and cost of each rocket
*/







