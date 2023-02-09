/*
    Created By: Sean Nuttall
    Last Updated: 02/09/2023
    Description: Scripts for the AboutMeWebpage
        -- Creating a list
        -- Allow addition to the list through user input
        -- Force printing the list to an alert or a toast message
*/

let buttonAdd = document.querySelector("#add");
let buttonCheckout = document.querySelector("#checkout");
let productName = document.querySelector("#product");

let myList = [];

function addToList(newItem) {

    myList.push(newItem);
    
}

function checkout() {

    for(i=0, i < myList.length, i++){
        alert(myList[i]);
    }
    myList = [];

}

