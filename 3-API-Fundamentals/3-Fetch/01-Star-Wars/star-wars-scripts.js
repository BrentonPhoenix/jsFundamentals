let starWarsPeopleList = document.querySelector('ul');
const urlAPI = "https://swapi.dev/api/people"

fetch(urlAPI)
.then(function(response){
    return response.json();
})
.then(function(json){
    let people = json.results;
    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }

    
    //for(p in people){
    //    console.log(p)
    //}
})

