let url = "https://pokeapi.co/api/v2/pokemon/chimchar";
let fluidContainer = document.getElementsByClassName("container-fluid")[0];
function createCaroselItem(pokemon){
    let caroselItem =document.createElement("div");
    caroselItem.setAttribute("class", "carousel-item active");
    let caroselImage=document.createElement("img");
    caroselImage.setAttribute("class", "d-block w-100");
    caroselImage.src=pokemon.image;
    caroselItem.appendChild(caroselImage);
    document.getElementsByClassName("carousel-inner")[0].appendChild(caroselItem);
}

function getTypes(pokemonJson){
    let types =[];
    for(let type of pokemonJson.types){
        types.push(type.type.name)
    }
    return types;
}
function getMoves(pokemonJson){
    let moves = [];
    for (let move of pokemonJson.moves){
        moves.push(move.move.name);
    }
    return moves;
}
function getAbilaties(pokemonJson){
    let abilities = [];
    for (let ability of pokemonJson.abilities){
        abilities.push(ability.ability.name);
    }
    return abilities;
}
function createPokemonElement(pokemon){
    let h1 = document.createElement("h1");
    h1.innerText = "Pokemon Id:" + pokemon.name;
    let h2 = document.createElement("h2");
    h2.innerText ="The pokemon is called:" + pokemon.number;
    let p = document.createElement("p");
    for(let type of pokemon.types){
        p.innerText +="The pokemon is a " + `${type}`+ " type."
    }
    let moveUl = document.createElement("ul");
    for(let move of pokemon.moves){
        moveUl.innerHTML += `<li>${move}</li>`
    }
    let abilityUl = document.createElement("ul");
    for(let ability of pokemon.abilities){
        abilityUl.innerHTML += `<li>${ability}</li>`
    }
    let div = document.createElement("div");
    div.append(h1, h2, p, moveUl, abilityUl);
    fluidContainer.appendChild(div);
}
fetch(url)
.then((response) => response.json())
.then(function(data){
    console.log(data);
    let name = data.name;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilaties(data);
    let image = data.sprites.front_default;
    let chimchar = new pokemon (number, name, types, moves, abilities,image);
    console.log(chimchar);
    createPokemonElement(chimchar);
    createCaroselItem(chimchar);
    
})
.catch(function(error){
    console.log(error);
})