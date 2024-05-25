// lets practice fetch 

//lets fetch datta from pokemon api
fetch(" https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.the(data => console.log(data))
.catch(error => console.log(error));