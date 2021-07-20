let sent = 'This sentence will be split into individual parts ';

const words = sent.split(' ');
const experiLimit = sent.split(' ', [4]);
console.log(words[3]);

console.log(words); 

console.log(experiLimit); 




// const str = 'The quick brown fox jumps over the lazy dog.';

// const word = str.split(' ');
// console.log(word[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]
