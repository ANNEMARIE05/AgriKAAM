function addTravailleur(travailleurs){
    localStorage.setItem('travailleurs',JSON.stringify(travailleurs))
}

function getTravailleurs(){
    let travailleurs = localStorage.getItem('travailleurs')
    if(travailleurs === null){
        return []
    }else{
        return JSON.parse(travailleurs)
    }
}
function listDeroulante(){
    const travailleur = document.getElementById("travailleur")
    let tousTravailleurs = getTravailleurs()

    tousTravailleurs.map((tr)=>{
        let nomsEtPrenoms = [tr.id, tr.nom, tr.prenom]
        travailleur.innerHTML += `
        <option value="${nomsEtPrenoms[0]}">${nomsEtPrenoms[1]} ${nomsEtPrenoms[2]}</option>
        `
    })
}
listDeroulante()

function ajouterUneTache(){
    let options = document.querySelector("select")
    let tacheTravailleur = document.querySelector("#tache")
    let salaireTravailleur = document.querySelector("#somme")
    let btnSoumettre = document.querySelector("#ajouter")

    btnSoumettre.addEventListener("click",(e) => {
        valTache = {
            option:options.value,
            tache:tacheTravailleur.value,
            salaire:salaireTravailleur.value 
        }
        // if(localStorage.getItem("tacheCle")){
        //     recup = JSON.parse(localStorage.getItem("tacheCle"))
        //     recup.push(valTache)
        //     localStorage.setItem('tacheCle',JSON.stringify(recup))
        //     window.location.reload()
        // }
        recup = JSON.parse(localStorage.getItem("tacheCle")) || []
        recup.push(valTache)
        localStorage.setItem('tacheCle',JSON.stringify(recup))
        window.location.reload()
    })

    if(localStorage.getItem('tacheCle')){
        let test = JSON.parse(localStorage.getItem('tacheCle'))
        let tbody = document.querySelector("#all-ravailleurs")
        test.forEach(element => {
            let row =  `<tr>
            <td>${element.option}</td>
            <td>${element.tache}</td>
            <td>${element.salaire+" FCFA"}</td>
            <td>
                <button class="btn">En cour ... <span class="termin"></span><span class="nonTerm"></span></button>
            </td>
        </tr>`

        tbody.innerHTML += row
    });
    }
}
ajouterUneTache()

let termin = document.querySelector(".termin")
let nonTerm = document.querySelector(".nonTerm")
let btn = document.querySelector(".btn")
termin.addEventListener("click", (e)=>{
    btn.style.backgroundColor=" #479C32"
    btn.innerHTML="TERMINER"
})

nonTerm.addEventListener("click", (e)=>{
    btn.style.backgroundColor= "#199EE1"
    btn.innerHTML="NON TERMINER"
})







    // const options = document.querySelector("select")
    // options.addEventListener('change',(e)=>{
    //     let data = e.currentTarget.value;
    //     ajouter.addEventListener('click', (e)=>{
    //         let date = new Date()
    //         const tache = document.getElementById("tache").value
    //         const somme = document.getElementById("somme").value
    //         console.log((tache,somme));
    //         let jour = date.getDate()
    //         let mois = date.getMonth()
    //         let annee = date.getFullYear()

    //         let info = {id,tache,somme, jour, mois, annee}
    //         let ourTravailleur = getTravailleurs()
    //         let travailleur = ourTravailleur.find((t)=>t.id===data)

    //         travailleur.tache.push(info)
    //         addTravailleur(ourTravailleur)

    //     })
    // })   

