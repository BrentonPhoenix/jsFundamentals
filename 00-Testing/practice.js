let myName = 'Phoenix'
let conciseBody = (x) => console.log(x)
conciseBody('Phoenix')

let conciseBody2 = (y) => y === 'Phoenix' ? console.log(`${y} is my name.`) :
y !== 'Phoenix' ? console.log(`Oh no my name isn't ${y}, I'm Phoenix.`):
console.log('whats up here?')

conciseBody2(myName)


let space = {
    planets: ["earth",'mercury', 'venus', 'pluto'],
    void: ['void1', 'void2', [
        'void3', 'void4', 'void5', 'void6', "void7", {
            void8: true, void9: true, void10: false
        },
    ],
],
    stars: ['sun', 'big dipper', '2nd to the right'],
    spaceJunk: true,
    astroids: true,
}

console.log(space.stars[2])

console.log(space)

console.log(myName.length)

for(i = 0; i < myName.length ; i++){
    
}