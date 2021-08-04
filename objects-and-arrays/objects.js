/*
    OBJECTS

        -Objects are used to store multiple sets of data in the key/value pair format
        -denoted by {}
*/

let netflix ={
//name: value
    id: 1,
    name: 'The Office',
    genere: 'Comedy',
    season1: {
        seasonInfo:{
            
            episodeInfo:[
                {
                    episode:1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName:'Diversity Day'
                },
                {
                    episode:3,
                    episodeName:'Health Care'
                },
                {
                    episode:4,
                    episodeName:'The Alliance'
                },
                {
                    episode:5,
                    episodeName:'Basketball'
                },
                {
                    episode:6,
                    episodeName:'Hot Girl'
                },
            ]
            
        }
    }
}

console.log(netflix.name)//when we know the name of the key/value information we want, we will use dot notation.

console.log('All of our Data:', netflix)

console.log(netflix.season1.seasonInfo);

console.log(`Episode ${netflix.season1.seasonInfo.episodeInfo[4].episode}`, netflix.season1.seasonInfo.episodeInfo[4].episodeName);



/*  
     JSON OBJECT
    -JSON stands for JavaScript Object Notation
    -The JSON syntax is derived from JavaScript Object syntax, but
    the JSON format is text only 
    -JSON exists as a string - useful when fetching data from a server(api).
    It needs to be translated into a native JavaScript object if we want to
    access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//we can use some Object methods to help us gather information we might not otherwise know
//object.keys()

console.log(Object.keys(spaceJam.toonSquad));//gives an array of keys in an object

console.log(Object.keys(spaceJam.toonSquad.duck));//gives us index numbers for the string 'daffy duck'
console.log(Object.values(spaceJam.toonSquad))//just the values of each key in an object

/*

    OBJECT BRACKET NOTATION

    -object bracket notation can allow us to find a value in an object
     we wouldn't be able to access using dot notation.
    -we can also use object bracket notation to store a key in a variable and use that
    variable to access information in an object
    -this works because all key names in an object are strings

    */

    let garden = {
        vegetable: 'Zucchini',
        flower: 'Orchid',
        Fruit: 'kiwi',
        water: true,
        sun: true,
        size: 10
    }

    let test = Object.keys(garden);
    //console.log(test);
   // console.log(typeof test[0]);

    //dot notation
    //console.log(garden.flower)

    //square bracket notation
    //console.log(garden['flower']);

    let baking = {};
    baking['Zucchini'] = 'better make some bread!';
    baking.bakeTime = 60;
    //console.log(baking);




    let garden2 = {
        vegetable: 'Zucchini',
        flower: 'Orchid',
        Fruit: 'kiwi',
        water: true,
        sun: true,
        size: 10
    }
console.log(baking[garden2['vegetable']]);

//using square brackets can also be a good idea if the object's key has a space in the name.
let testObj = {
    'Spaces Here': true,
    noSpaces: true,
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here'])