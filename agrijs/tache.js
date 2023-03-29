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
    let tacheTravailleur = document.querySelector("#tache")
    let salaireTravailleur = document.querySelector("#somme")
    let btnSoumettre = document.querySelector("#ajouter")

    btnSoumettre.addEventListener("click",(e) => {
        valTache = {
            tache:tacheTravailleur.value,
            salaire:salaireTravailleur.value 
        }
        recup = JSON.parse(localStorage.getItem('tacheCle'))
        recup.push(valTache)
        localStorage.setItem('tacheCle',JSON.stringify(recup))
        window.location.reload()



    let dataTable = [];
    if(localStorage.getItem("tacheCle")){
        data.id ="ADMIN00"+JSON.parse(localStorage.getItem("tacheCle")).length;
        let dataLocal =JSON.parse(localStorage.getItem("tacheCle"));
        dataLocal.push(valTache);
        localStorage.setItem("tacheCle", JSON.stringify(dataLocal));
        window.location.reload()
    }else{
        dataTable.push(valTache);
        data.id = "ADMIN001";
        localStorage.setItem("tacheCle", JSON.stringify(dataTable));
        window.location.reload()
    }
    })


    let test = JSON.parse(localStorage.getItem('tacheCle'))
    console.log(test.length)
    let tbody = document.querySelector("#all-ravailleurs")
    test.forEach(element => {
        row =  `<tr>
            <td>${element.tache}</td>
            <td>${element.tache}</td>
            <td>${element.salaire}</td>
            <td>
                <button class="btn">En cour ... <span class="termin"></span><span class="nonTerm"></span></button>
            </td>
        </tr>`
    });
    
    tbody.innerHTML += row
    
    


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
}


ajouterUneTache()
