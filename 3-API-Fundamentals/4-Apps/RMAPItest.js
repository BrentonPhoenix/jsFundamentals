fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(json => console.log(json.results[0].image)