const tableau = document.getElementById("conteneur");
console.log(tableau.innerHTML);

const newTab = document.createElement("div");
let tab = document.getElementById("conteneur");

tableau.appendChild(newTab);

var count = 0;
    var bouton = document.getElementById("cliquer");
    var disp = document.getElementById("display");
  
    bouton.onclick = function () {
    count++;
    disp.innerHTML = count;
    }

localStorage.setItem ("prenom", "louise");
localStorage.setItem ("nom", "ellermann");

localStorage.getItem ("prenom");
localStorage.getItem ("nom");



let objCar1 = {
	marque : "Audi",
	couleur : "Noire",
}
let objLinea1 = JSON.stringify(objCar1);

let objCar2 = {
	marque : "Renault",
	couleur : "Grise",
}
let objLinea2 = JSON.stringify(objCar2);


let objCar3 = {
	marque : "Mini",
	couleur : "Rouge",
}
let objLinea3 = JSON.stringify(objCar3);

let objCar4 = {
	marque : "Fiat",
	couleur : "Bleue",
}
let objLinea4 = JSON.stringify(objCar4);

let objCar5 = {
	marque : "Nissan",
	couleur : "Rose",
}
let objLinea5 = JSON.stringify(objCar5);

localStorage.setItem("obj1", objLinea1);
localStorage.setItem("obj2", objLinea2);
localStorage.setItem("obj3", objLinea3);
localStorage.setItem("obj4", objLinea4);
localStorage.setItem("obj5", objLinea5);


