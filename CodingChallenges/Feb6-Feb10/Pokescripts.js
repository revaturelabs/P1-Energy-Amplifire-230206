/*
    Created By: Sean Nuttall
    Last Updated: 02/09/2023
    Description: Scripts for the Pokedex
*/

function working() {

    let flash = document.getElementById("waiting");
    
    flash.innerHTML = "Working, Please Wait";
    setTimeout(() => {
        flash.innerHTML = "Waiting";
    }, 5000);

}