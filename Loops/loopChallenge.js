//x = 0
//
//
//for (x of 100) {
//    if(x <= 100 && x/3 %= 0 && x/5 %=0; x + 3){
//        console.log('Fizz Buzz');
//    }   
//





//
//let officeCharacters = ['Dwight', 'Michael','Jim', 'Stanley', 'Pam']
//
//for(worker of officeCharacters){
//    if(worker === 'Dwight' || worker === 'Michael'){
//        console.log(worker, 'works through lunch.');
//    }
//    if(worker === 'Jim' && worker !== 'Dwight'){
//        console.log('bear. beats. battlestar galactia');
//    }
//}

// let x = 0; x < 100; x += 3

for (let i = 0; i <= 100 ; i++) {
   console.log(i);
   if(i % 3 == 0){
       console.log('fizz')
   }
   if(i % 5 == 0){
   console.log('buzz')
   }
}

for (let k = 1; k <= 100; k++){
    if(k % 3 == 0 && k % 5 == 0){
        console.log(k,'Fizz Buzz');
    } else if (k % 3 == 0){
        console.log(k,'fizz');
    } else if(k % 5 == 0){
        console.log(k, 'buzz');
    }else {
        console.log(k)
    }
}
