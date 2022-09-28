const tableau = document.getElementById("conteneur");
console.log(tableau.innerHTML);

const newTab = document.createElement("div");
let tab = document.getElementById("conteneur");

tableau.appendChild(newTab);

var count = 0;
    var boutton = document.getElementById("cliquer");
    var disp = document.getElementById("display");
  
    boutton.onclick = function () {
    count++;
    disp.innerHTML = count;
    }
