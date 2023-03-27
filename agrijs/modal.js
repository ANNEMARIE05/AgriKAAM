let modalContainer = document.querySelector(".modal-container")
let btn = document.querySelector(".btn")
let modalTriggers = document.querySelectorAll(".modal-trigger")
let inpt = document.querySelector(".inpt")


modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active");
    console.log("hello")
}


// btn.addEventListener("click", function (e){
//     inpt.value = ""
    // location.reload()
// })


let textContainer = document.querySelector(".text-container")
let btnClic = document.querySelectorAll(".btn-clic")

btnClic.forEach(clic => clic.addEventListener("click", modalClick))
function modalClick(){
    textContainer.classList.toggle("active")
}


let orangeContainer = document.querySelector(".orange_container")
let btnOrange = document.querySelectorAll(".btn-orange")

btnOrange.forEach(orang => orang.addEventListener("click", orangeClick))
function orangeClick(){
    orangeContainer.classList.toggle("active")
}

let mtnContainer = document.querySelector(".mtn_container")
let btnmtn = document.querySelectorAll(".btn-mtn")

btnmtn.forEach(mtn => mtn.addEventListener("click", mtnClick))
function mtnClick(){
    mtnContainer.classList.toggle("active")
}

let waveContainer = document.querySelector(".wave_container")
let btnwave = document.querySelectorAll(".btn-wave")

btnwave.forEach(wave => wave.addEventListener("click", waveClick))
function waveClick(){
    waveContainer.classList.toggle("active")
}


let moovContainer = document.querySelector(".moov_container")
let btnmoov = document.querySelectorAll(".btn-moov")

btnmoov.forEach(moov => moov.addEventListener("click", moovClick))
function moovClick(){
    moovContainer.classList.toggle("active")
}