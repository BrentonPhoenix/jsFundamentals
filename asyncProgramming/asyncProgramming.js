/*
    ASYNCHRONOUS PROGRAMMING

    -generally, JS is read from top to bottom, preforming each line of code one after another- this is known as synchronous programming
        -ex. line 1 is run and completed before line 2 begines, which is then run and completed before line 3, ect.
    
    -this can become an issue when we fetch, or gather, information from an outside source, from something such as an API. If Js
    did not have the ability to run code asynchronously we would be forced to wait for our line of code to finish as it tried to gather mountains 
    data from a database

    -Async programming allows a program to do more than one thing at a time.

    -makes it possible to run long-running actions without stopping the program to wait for a response

    
*/

//Synchronous code
const secondSync = () => {
    console.log('second hello')
}

const firstSync = () => {
    console.log('First Hello')
    secondSync()
    console.log('End')
}
firstSync()



//Asynchronous Code

const networkRequest = () => {
    setTimeout(() =>{
        //setTimeout is a method that will work in the browser and node.js - we are using it to simulate a network request
        //setTimeout has 2 parameters, the first is a callback function(a function that we pass into a parameter), and the second is how time to wait measured in milliseconds
        console.log('async code');
    }, 2000)
}
console.log('hello world')
networkRequest()
console.log('the end')


/*
    API

    -Application Program Interface

    -an API is something will allow us to talk to other programs, such as a database or a server, however, the API itself 
    is not a database or server, it is the code with access points to the server

    -access to a server will come in the form of ENDPOINTS
        -endpoints will direct us to sets of data
    

    REST API
    (RE)presentational (S)tate (T)ransfer = representational state transfer
        -creates an object of requested data from a client, and sends values back as a response

    -Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
        //we will talk more about them in blue badge       




    FETCH()
        -The fetch method is an asynchronous method, and is part of the browser window, NOT JS. This method will start the process of 
        'fetching', or grabbing, a resource from the network, and will return a promise which is fulfilled when the response is availiable 

        -Promise is an unknown value that will eventually be filled with either a value or a rejection(error)
        has three states
            -pending: initial state, neither fulfilled or rejected
            -fulfilled: meaning the operation completed successfully 
            -rejected: meaning the operation failed
*/