const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //URL to access the API
const key = 'ZqDkjQ09G7Z1BGgscR8IZvVlfQCLRUdq'; //"code" to access the url
let url; //a varible to hold url when we build it 
// Holds the DOM elements already in our HTML file
// dot in front is the class name
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
// no . or # in front means we are grabbing the first Element Tag that matches 
const nav = document.querySelector('nav');
const section = document.querySelector('section');
nav.style.display = 'none'; // changing the style in js
let pageNumber = 0; // made a variable of pageNumber and sets it to 0
// Submit event added to searchForm, fetchResults hoisted
searchForm.addEventListener('submit', fetchResults);
// Click event listener nextPage is hoisted up to this event Listener
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
function fetchResults(e) { // Upon submit this function is called
    // The e is the call from the event 
    // console.log(e);
    e.preventDefault(); //to prevent the page from refreshing upon submit
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //Creating a URL with our search values, key, etc.
    // console.log('URL:', url);
    //Checks if start date is empty
    if (startDate.value !== '') {
        console.log(startDate.value)
        // The value of start date is added to the url along with its search query label
        url += '&begin_date=' + startDate.value;
        console.log('URL:', url);
    }
    // Does the same as line 35-40 but with the endDate
    if (endDate.value !== '') {
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        console.log('URL:', url);
    }
    fetch(url) //starting the fetch, passing in url
        .then(function (result) { //.then promise set result parameter which is the result of the fetch call
            console.log(result)
            return result.json(); //returning the JSONified result 
        })
        .then(function (json) { // the JSONified result becomes json and send that as a parameter in a new function
            console.log(json);
            displayResults(json); //hoisting displayResults and passing in the json results as the parameter
        })
}
////////////////////////////////////////////////////////////////////////////////////////
function displayResults(json) { //Creating a function that accepts a parameter
    console.log('Display Results', json);
    //While the element section has any nested elements
    while (section.firstChild) {
        // removing the first child of the element section
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs; //setting the array of json.response.docs as the value of articles
    // console.log(articles);
    if (articles.length === 0) { //if the length of articles is 0 console log No results
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) { // as long as i, which starts at 0, is less than the articles.length, i++ and do the loop again
            // console.log(i);
            //in the following lines, creating empty HTML elements for later use
            //inside quotes inside paranthesis we list the HTML tag we would like the element to bew
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i]; //Grab the corresponding article for the i we are on in the for loop
            console.log('Current:', current);
            link.href = current.web_url; //Setting the href to the current articles web_url
            link.textContent = current.headline.main; //Setting the textContent of the element link to the headline.main
            para.textContent = 'Keywords: '; //Setting the para element's textContent to the string of 'Keywords: '
            for (let j = 0; j < current.keywords.length; j++) { // for loop that loops through the keywords
                let span = document.createElement('span'); // Creating an HTML element stored in the js variable we named span
                span.textContent += current.keywords[j].value + ' '; //adding the keyword to the span's textContent (plus as space)
                para.appendChild(span); //nesting the span element we created on line 95 as a child of the para element we created on line 83
            }
            if (current.multimedia.length > 0) { //checking if there is multimedia for the article we are currently on
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //Setting img's src to the multimedia url we got from the json data
                img.alt = current.headline.main; //Setting the img's alt to the headline 
            }
            clearfix.setAttribute('class', 'clearfix'); //setting the div named clearfix to have a class name of clarfix
            //(1)      (2)       (3)
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
            //1 - Which element is the parent
            //2 - the method to add a child
            //3 - the element that is the child
            //! ORDER OF THESE MATTER
        }
    }
    if (articles.length === 10) { //if there are exactly 10 articles set nav display to block
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none'; //if there are not 10 articles don't show nav
    }
}
function nextPage(e) { //function that is set to an event listener function from line 25 (e is the event)
    // console.log('Next button clicked');
    pageNumber++; //adds to page number
    fetchResults(e); // calling the function fetchResults
    console.log('Page Number:', pageNumber);
}
function previousPage(e) { // Defining the function previousPage
    // console.log('Previous button clicked');
    if (pageNumber > 0) { // if the pageNumber is bigger than 0
        pageNumber--; //it lets us make page number one less than whatever it was before
        // fetchResults(e);
    } else {
        return; //stops the function, breaks you out of the function 
    }
    fetchResults(e); //calling the function fetchResults
    console.log('Page:', pageNumber);
}