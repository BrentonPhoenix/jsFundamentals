/*
    ARRAY DESTRUCTURING
    -lets us 'unpack' values from arrays or properties from objects

    -has similar syntax to array literals BUT is on the left side of the assignment operator
        -this will define what values to unpack
    -great for pulling information out of an array/object and assigning that data to it's own variable
*/

const boardGames = ['Catan', 'Monopoly', 'Clue', 'Risk']
//console.log(boardGames[0])
//array destructuring syntax
//  when destructuring position is what's important, you can [ , gameTwo, gameThree] and gameTwo and gameThree will still corrispond with monopoly and clue

const [gameOne, gameTwo, gameThree, gameFour] = boardGames 
console.log(gameOne)
console.log(gameTwo);
//if we don't define game 3 it will ignore the value
console.log(gameThree)
console.log(gameFour);


/*
    REST OPERATOR
        -using the rest operator will look almost exactly like using the spread operator
            -Spread expands an array into it's elements 
            -Rest collects multiple elements and condenses them into one element
            -Rest MUST be the last element defined using array destructuring    
*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {
    day: 'Thursday', answer: 42}]

const [character1, character2, ...otherInfo] = hitchHikersGuide;
console.log(character1)
console.log(character2)
console.log(otherInfo)


const harryPotter = ["Snape", "Moaning Myrtle", "Harry", "Ron Weasley", "Hermione", "Dumbledore"]

const [ , , ...mainCharacters] = harryPotter
console.log(mainCharacters)

/*
 OBJECT DESTRUCTURING

*/
//
//const game = {
//    title: "Legend of Zelda: Breath of the Wild",
//    developer: 'Nintendo',
//    platforms: ['Nintendo Switch', 'Wii U']
//}
//
//const {title, developer, platforms} = game


const games =  [
    {
    title: "Legend of Zelda: Breath of the Wild",
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']},
    {
        title: "bloodborne",
        developer: 'From Software',
        platforms: ['ps4']
    },
    {
        title: 'Stardew Valley',
        developer: "ConcernedApe",
        platforms: ['PC', 'macOs', 'Linux', 'PS4', 'Xbox One', 'Nintendo Switch', 'PSVita', 'iOS', 'Android']
    }
]

//const [ {title: gameOne, developer: devOne, platforms: platOne}, gameTwo, {title: //gameThree, developer: devThree, platforms: platThree}] = games
//console.log(gameOne, devOne)
//console.log(gameTwo)
//console.log(gameThree)

for({title, developer} of games){
    console.log(`${title} is developed by ${developer}`)
}