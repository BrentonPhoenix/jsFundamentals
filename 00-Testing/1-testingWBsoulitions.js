let firstName = 'James'
let lastName = 'Bond'


function printName(first,last){
    console.log(`${first} ${last}`);
   }
   printName(firstName,lastName)


function  fizzBuzz(i) =>   for( i=0 ; i  <  101; i++){
	if(i  % 15   ===   0){
		console.log('Fizz Buzz')
	} else if(i   %   3   ===   0){
		console.log('Fizz')
	} else if(i   %  5   === 0){
		console.log('Buzz')
	} else {
		console.log('Something is wrong')  }
    }

}


function isRightTriangle(side,base,hypotenuse) {
	if((side** + base**2 === hypotenuse**){
		return true
	} else if(side**2 + base**2 !== hypotenuse**2){
		return false
	} else{ 
		console.log('Something is wrong')
}

isRightTriangle(1,2,5)