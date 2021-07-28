/*
    ASYNC/AWAIT

    -ALLOWS US TO PROGRAM IN A SYNCHRONOUS MANNER WHILE STILL ALLOWING CODE TO RUN IN THE BACKGROUND

    -helps keep our sites responsive
*/ 

//  ASYNC FUNCTION(syntax)
// -allow us to make a normal function asynchronous: which means we can use await
//-must use the async keyword at the beginning of the function declaration

async function myFn(){
    await console.log('testing');//testing
}

const myAsyncFn = async () => {
    await console.log('testing')//testing
}

const newFn = () => {
    await console.log('testing')//error: await is only valid in an async function
}


async function fn(){
    return 'hello';
}

fn().then()  //promise of hello returned -> console.log the value

fn().then(dataFromAsyncFunc => console.log(dataFromAsyncFunc))

//AWAIT

//  -PAUSES an async function until a promise is settled (either resolved or rejected)


fetch('https://random.dog/woof.json')
    .then(result =>result.json())//takes in result and translates it into json
    .then(json => console.log(json)) //print to console
    .catch(errors => console.log(error))//print any errors that might happen



    async function getWoof(){
        //first stop is going to be waiting for the fetch to get a response
        const response = await fetch('https://random.dog/woof.json')
        //second stop is waiting for the response to get translated
        const json = await response.json();

        return json;
    }
    console.log(getWoof())//undefined: the function runs but does not return a value until the console.log has already printed something

    getWoof().then(console.log)//{object}:the console.log will not run until the promise from getWoof has resolved, meaning it will have a value or an error