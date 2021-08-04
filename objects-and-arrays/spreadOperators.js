/*
    SPREAD OPERATOR

    used with arrays// we can use it to change one of our arrays while also keeping an unchanged copy of it
    ...
*/

const nameOne = ["Summer", "Jerome"];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];

//console.log(copiedNames[2][1]);//to get Hustin

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo]
nameOne.unshift('Justin')
console.log('Altered:', nameOne, 'Spread:',copiedNamesSpread);


//...nameTwo    cannot use spread operator on it's own

console.log(nameTwo)//gives us the Array ['adam', 'hustin']
console.log(...nameTwo)//takes the names out of the array, prints them as strings



/*
    ...numbers
*/

console.log(Math.min(1,5,-3)) 

const prices = [10.99, 5.99, 3.50, 2.49, 5.49]

console.log(Math.min(...prices))//minus the ... NaN


/*
    ... objects
*/

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo',
        enemies: true
    }
];

const copiedPersons = [...persons];

persons.push({name: 'Bill and or Ted', enemies: false})

console.log('original:', persons, 'copy:', copiedPersons)//array is a reference type and that means that when you make the copy line 52 it copies the location of the values so both are changed.






/*
    -primitive variables = primitive value
        //variables which DIRECTLY hold the value

    let x = 10
    let y = 'abc'
    let z = null
        variables       Values
        x               10
        y               'abc'
        z               null

-------------------------------------------------------

    let x = 10
    let y = 'abc'
    
    let a = x
    let b = y
 
    console.log(x,y,a,b) -> 10, 'abc', 10, 'abc'

    a = 5
    b = 'xyz'
    console.log(x,y,a,b) -> 10, 'abc, 5, 'xyz'

-----------------------------------------------

    -3 Data Types that are passed by reference:
        -Arrays
        -Functions
        -Objects
            *all 3 are technically objects
    -these non-primitive variables are givien a reference to the value they "contain"
    this reference 'points' to a location in memory

-----------------------------------------------
let arr = []
arr.push(1)
//VALUES will not change
VARIABLES  VALUES  ADDRESS OBJECT
arr        <#001>  #001    []
arr        <#001>  #001    [1]

-----------------------------------------
let reference = [1]
let refCopy = reference
VARIABLES  VALUES  ADDRESS OBJECT
reference  <#001>  #001    [1]
refCopy    <#001>  

reference.push(2)
refCopy.push(3)
VARIABLES  VALUES  ADDRESS OBJECT
reference  <#001>  #001    [1,2,3]  /started as just 1
refCopy    <#001>  #001    [1,2,3] 

*/

//
//const persons = [
//    {
//        name: 'John Wick',
//        enemies: true
//    },
//    {
//        name: 'Neo',
//        enemies: true
//    }
//];
//
//const copiedPersons = [...persons];

//persons.push({name: 'Bill and or Ted', enemies: false})

console.log('original:', persons, 'copy:', copiedPersons)

/*
    ... & avoiding changing both the original and copied array
*/

const comics = [
    {title: 'spider-man',
    year: 1962},
    {title: 'Detective Comics',
    year: 1939}

]

const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year
 }))
comics.push({title: 'Calvin and Hobbs', year: 1985})
copiedComics[1].title = 'Detective Comics #27'
console.log('OR:', comics, 'copied:', copiedComics)

