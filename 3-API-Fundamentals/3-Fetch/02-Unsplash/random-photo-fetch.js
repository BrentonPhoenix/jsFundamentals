let randomImage = document.querySelector('.random-image');
console.log('randomImage:', randomImage)
let randomURL = 'https://source.unsplash.com/random'

fetch(randomURL)
.then(function(response){
    if(!response.ok) {
        console.log(response);
        return new Error(response);
    }
    console.log('Response: ', response);
    return response.blob()
})
.then(function(photoBlob){
    console.log('My Blob: ', photoBlob);
    var objectURL = URL.createObjectURL(photoBlob);
    console.log('object URL: ', objectURL)
    randomImage.src = objectURL;

    console.log('randomImage.src: ', randomImage.src)
})

.catch(function(err){
    console.log(err)
})