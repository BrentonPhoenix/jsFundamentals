//let vowelList = ['a','e','i','o','u','A','E','I','O','U']

//
//function pigLatin(string){
//    for(let a = 0; a < string.length ; a++ ){
//        if(string[0] === vowelList[a]){
//            console.log(string + 'ay')
//            return
//        } else {
//            console.log('there is a problem')
//        }
//    }
//
//}

//pigLatin('at')
/*

1 function
2 variables in function
3 for loop
4 if else
5 console.log
6 call function

*/

function pLatin(myString){
    //checks if the first letter is a vowel or consonant
    //first letter is a consonant 
        //more it to the back and put an 'ay' after
    //first letter is a vowel
        //ad an 'ay'
    //let vowelList = ['a','e','i','o','u','A','E','I','O','U']

    //if i get a sentence, how do i know when a word ends or begins
    //'the quick brown fox jumps over the lazy dog'
    const wordArray = myString.split(' ');
    let newWordArray = []
    //console.log(wordArray)
    for(let word of wordArray){
        if(word[0] == 'a' || word[0] == 'e' || word[0] ==  'i' || word[0] == 'o' || word[0] == 'u'){            
            word += 'ay'
            newWordArray.push(word)
        } else {
            let letters = word.split('')
            
            let shift = letters.shift()
            
            letters.push(shift + 'ay')
            let word = letters.join("")

            console.log(word)
            newWordArray.push(word)
        }
    } 
    console.log(wordArray.join(" "))
}

pLatin('the quick brown fox jumps over the lazy dog') // testing const word array w line 39