const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';  //URL to access the API
const key = 'YeN0KFky8UqzszU0eI6wgO8UkjAsmJli'; //"code" to access the url
//let url: //a variable to hold the url when we build it I built it later but its better to have it here due to scope

//SEARCH FORM 1
//holds the dom elements that are already in the HTML file  1,2,3
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION 2
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
//no (.) for element tags we are grabbing the first element tag that matches
const nav = document.querySelector('nav');

//RESULTS SECTION 3
const section = document.querySelector('section');

nav.style.display = 'none'; // changing the CSS style display in javascript
let pageNumber = 0;  // made a variable page number and sets it to zero
let displayNav = false;

//submit event added to searchForm, fetchResults hoisted
searchForm.addEventListener('submit', fetchResults);
//click event listener nextPage is hoisted up to this event Listener
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {   //upon submit this function will be called
    //e is the call from the event
    e.preventDefault()// prevent the page from refreshing, since submit refreshes by default
    url= baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //Creating a URL with out search values, key, ect.
    //checks if the startdate is empty
    if(startDate.value !== ''){
        console.log(startDate.value)
        //value of start date along with '&begin_date' (search query) 
        url += '&begin_date' + startDate.value;
    };
    if(endDate !== ''){
        //does the same as above but with end date
        url += '&end_date=' + endDate.value
    }
    //starting the fetch, passing in the url
    fetch(url)
        .then(function (result){//.then promise set result parameter which is the result of the fetch call
        console.log(result)
        return result.json();// returning the jasonifyed result
    }).then(function(json){  //the jasonified result becomes the parameter(json)
        console.log(json)
    })
    
    function displayResults(json) {
        console.log('displayResults', json) //hoisting the displayResults function and passing in the json results as the parameter
    }
}

function nextPage(){
    console.log('next button clicked')
}

function previousPage() {
    console.log('previous Page button clicked')
}