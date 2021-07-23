let hero = 'Robin Hood';
let nock = 1; //tested 3, tested 4 both work

//let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`):
//console.log(`${x} shot ${y} arrows at the target!`);

//shot(hero,nock);

/* using a block body, pass the same variables but increase the number of shots until the second console.log is printed
*/

let shot = (x,y) => {
    y < 3 ?  console.log(`${x} only shot ${y} arrow...`):
    console.log(`${x} shot ${y} arrows at the target!`);

}

let shots = shot(y)

shot(hero,nock);


//1 block body arrow function (*)
//2 pass in two variables(*)
//3 run the conditional
//4 repeat the code until result changes?
let hero = 'Robin Hood';
let nock = 7; 


let shot = (x,y) => {
    for(y ; y <= 3; y++){
        console.log("y:",y)
    if(y < 3) {console.log(`${x} only shot ${y} arrow...`, )
} else {
    console.log(`${x} shot ${y} arrows at the target!`)
        }
    }
}

shot(hero,nock)