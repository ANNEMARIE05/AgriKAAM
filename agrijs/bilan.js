let ajoutTV = JSON.parse(localStorage.getItem("travailleurs"))
let nbajoutTV = document.querySelector(".nbajoutTV label")
nbajoutTV.textContent = ajoutTV.length

let ajoutTC = JSON.parse(localStorage.getItem("tacheCle"))
let nbajoutTC = document.querySelector(".nbajoutTC label")
nbajoutTC.innerHTML = ajoutTC.length