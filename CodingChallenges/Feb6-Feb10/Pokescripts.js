/*
    Created By: Sean Nuttall
    Last Updated: 02/09/2023
    Description: Scripts for the Pokedex
*/

let pokeName = "nidoking";
let working = document.querySelector("#work");
let fetching = document.querySelector("#fetching");

working.addEventListener("click", workin);
fetching.addEventListener("click", getStats);

function getName(){

    let name = document.getElementById("pokemonName").value;
    let formattedName = formatName(name);
    return(formattedName);

}

function formatName(name) {

    name = name.toLowerCase();
    name = name.replace(" ", "-");
    return name;

}

async function getStats() {
    
    const find = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    const thisOne = await find.json();
    document.getElementById("name").innerHTML = thisOne.name;
    document.getElementById("hitPoints").innerHTML = "";
    for(let stat of thisOne.stats) {
        document.getElementById("hitPoints").innerHTML += `<p>${stat.stat.name}: ${stat.base_stat}</p>`; 
    }
}

function workin() {

    pokeName = getName();
    let flash = document.getElementById("waiting");
    
    flash.innerHTML = "Working, Please Wait";
    setTimeout(() => {
        flash.innerHTML = "Waiting";
    }, 5000);

}