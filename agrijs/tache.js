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
    const options = document.querySelector("select")
    options.addEventListener('change',(e)=>{
        let data = e.currentTarget.value;
        ajouter.addEventListener('click', (e)=>{
            let date = new Date()
            const id = document.getElementById("id").value
            const tache = document.getElementById("tache").value
            const somme = document.getElementById("somme").value
            const etat = document.getElementById("etat").value
            let jour = date.getDate()
            let mois = date.getMonth()
            let annee = date.getFullYear()

            let info = {id,tache,somme, jour, mois, annee, etat}
            let ourTravailleur = getTravailleurs()
            let travailleur = ourTravailleur.find((t)=>t.id===data)

            travailleur.tache.push(info)
            addTravailleur(ourTravailleur)

        })
    })   
}


ajouterUneTache()

function afficherUneTache(){
    let taches;
    const listOfTravailleurs = document.getElementById('all-ravailleurs')

    let ourtravailleurs = getTravailleurs()
    ourtravailleurs.map((tached)=>{
        taches = tached.tache;
    }).join('')

    for (const tach of taches) {
        listOfTravailleurs.innerHTML += `
        <tr>
                <tr class="table1">
                    <td>${tach.tache}</td>
                    <td>${tach.somme}</td>
                    <td>
                        <button>
                            ${tach.etat} 
                            <div class="span">
                                <span class="termin"></span>
                                <span class="nonTerm"></span>
                            </div>
                        </button>
                    </td>
                    <td>
                    <a href="modifier.html?id=${travailleur.id}"><i class="fa fa-edit"></i>Modifier</a>
                <a href="" onclick='deleteTravailleurs(${tach.id})' ><i class="fa fa-trash"></i>Supprimer</a></td>
                </tr>

        `
        
    }

    
}
afficherUneTache()

function deleteTravailleurs(id){
    let taches;
    let ourtravailleurs = getTravailleurs()
    ourtravailleurs.map((tached)=>{
        taches = tached.tache;
    }).join('')

    let travailleur = taches.filter((t)=> t.id != id)
    addTravailleur(travailleur)
    // location.pathname='tache.html'
}

deleteTravailleurs()





let terminer = document.querySelector(".termin")
let nonTerminer = document.querySelector(".nonTerm")
let maDiv = document.querySelector(".span")

terminer.addEventListener("click", (e)=>{
    maDiv.style.backgroundColor="#479C32";
    maDiv.innerHTML="Terminer"
})
nonTerminer.addEventListener("click", (e)=>{
    maDiv.style.backgroundColor="#479C32";
    maDiv.innerHTML="Non terminer"
})