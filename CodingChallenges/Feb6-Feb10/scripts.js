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

let myList = [];
let myBlank = [];
buttonAdd.addEventListener("click", getName);
buttonCheckout.addEventListener("click", checkout);


function getName(){

    let productName = document.getElementById("product").value;
    addToList(productName);

}

function addToList(prodName) {
    
    myList.push(prodName);
    
}

function checkout() {

    let toast = document.getElementById("shoppinglist");
    
    toast.innerHTML = myList;
    toast.className = "show";
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
    myList = myBlank;

}

