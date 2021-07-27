for(num; num < 10; num++){
}

for(num; num < 10; num++){
    if(num % 2 === 0){
      console.log(num,'the number is even')
    } else if(num % 1 === 0 && num % 2 !== 0){
      console.log(num,'the number is odd')
    } else{
      console.log('what is this?')
    }
  }