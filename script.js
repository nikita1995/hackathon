var allPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=200';
let pokemonData = [];
var pokemonValue;
document.body.style.background = 'beige';
async function getData() {
   var data = await fetch(allPokemons)
    .then((result) => result.json())
    .catch((error) => console.log(error));
    if(data) {
        displayData(data.results);
        console.log(data.results);
    }
}

getData();

async function displayData(pokemons) {
    let pokemonContainer = document.getElementById("pokemonContainer")
  
    let heading = document.createElement("h2")
  
    let pokemonList = document.createElement("ol")

    pokemonList.setAttribute("id", "ulele1")

    heading.style.color = "darkgoldenrod"
    heading.textContent = "Here's the data for 50 Pokemons: "

    pokemonContainer.appendChild(heading);
    pokemonContainer.style.border = "2px solid"
    pokemonContainer.style.padding = "5px"

    pokemonContainer.appendChild(pokemonList);

    for (i in pokemons) {
        let li_elem1 = document.createElement("li");
        pokemonList.appendChild(li_elem1);
        li_elem1.innerHTML = pokemons[i].name;

        await getEachPokemonData(pokemons[i].url);

        //Abilities
        let innerUl = document.createElement("ul");
        li_elem1.appendChild(innerUl);
        let abilityHeading = document.createElement("label");
        abilityHeading.textContent = "Ability: "
        abilityHeading.style.fontWeight = "bold";
        innerUl.appendChild(abilityHeading);
        for(i in pokemonValue?.abilities) {
            let li_elem2 = document.createElement("li");
            li_elem2.setAttribute("id", "ulele2");
            innerUl.appendChild(li_elem2);
            li_elem2.innerHTML = pokemonValue.abilities[i].ability.name;
        }

        //Weight
        let innerUl2 = document.createElement("ul");
        li_elem1.appendChild(innerUl2);
        let weightHeading = document.createElement("label");
        weightHeading.textContent = "Weight: "
        weightHeading.style.fontWeight = "bold";
        innerUl2.appendChild(weightHeading);
        let li_elem3 = document.createElement("li");
        li_elem3.setAttribute("id", "liele3");
        innerUl2.appendChild(li_elem3);
        li_elem3.innerHTML = pokemonValue.weight;

        //Moves
        let innerUl3 = document.createElement("ul");
        li_elem1.appendChild(innerUl3);
        let movesHeading = document.createElement("label");
        movesHeading.textContent = "Moves: "
        movesHeading.style.fontWeight = "bold";
        innerUl3.appendChild(movesHeading);
        for(i in pokemonValue?.moves) {
            let li_elem4 = document.createElement("li");
            li_elem4.setAttribute("id", "liele4");
            innerUl3.appendChild(li_elem4);
            li_elem4.innerHTML = pokemonValue.moves[i].move.name;
        }
    }

}

async function getEachPokemonData(pokemon) {
    
    return await fetch(pokemon)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        pokemonValue = data;
    })
    .catch((error) => console.log(error));
}