let tableauvert = JSON.parse(localStorage.getItem("travailleurs"))
let nombadmin = document.querySelector(".itemsTravailleur p")
nombadmin.textContent = tableauvert.length

let tableauvert1 = JSON.parse(localStorage.getItem("tacheCle"))
let nmbemployer = document.querySelector(".itemsTaches p")
nmbemployer.innerHTML = tableauvert1.length

let tableauvert2 = JSON.parse(localStorage.getItem("Administrateurs"))
let nombadmins = document.querySelector(".itemsAdministrateurs p")
nombadmins.innerHTML = tableauvert2.length

let tableauvert3 = JSON.parse(localStorage.getItem("lesTaches"))
let nombtaches = document.querySelector(".itemsPayement p")
nombtaches.innerHTML = tableauvert3.length

