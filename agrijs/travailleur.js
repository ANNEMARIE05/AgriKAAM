let travailleurs = [
    {
        id: 1,
        nom: "anne",
        prenom: "marie",
        profession:"programmeuse",
        contact: "234567890",
        taches: [
            {
                id:1,
                tache:'dormir',
                somme:'40000',
                jour: '22',
                mois: '11',
                annee: '1092',
                etat: "termine"
            }
        ]
    }
]



function addTravailleur(travailleurs){
        localStorage.setItem('travailleurs',JSON.stringify(travailleurs))
}

// addTravailleur(travailleurs)//



function getTravailleurs(){
    let travailleurs = localStorage.getItem('travailleurs')
    if(travailleurs === null){
        return []
    }else{
        return JSON.parse(travailleurs)
    }
}


function afficherTravailleurs(){
    const listOfTravailleurs = document.getElementById('all-ravailleurs');
    const datalocal = JSON.parse(localStorage.getItem("travailleurs"));
    if(localStorage.getItem("travailleurs")){
        const all = JSON.parse(localStorage.getItem("travailleurs")).filter(cle=>cle.statut==1);
        if(all.length > 0){
            all.forEach(element => {
                listOfTravailleurs.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.nom}</td>
                <td>${element.prenom}</td>
                <td>${element.profession}</td>
                <td>${element.contact}</td>
                <td>
                    <a href="modifier.html?id=${element.id}" id="modiTravailleur"><i class="fa fa-edit"></i></a>
                    <a href="" onclick='deleteTravailleurs(${element.id})' id="suprimerTravailleurs"><i class="fa fa-trash"></i></a>
                </td>
            </tr>`;
            });
        }
    }
}
afficherTravailleurs()
let soumettre = document.getElementById("submit").addEventListener('click', savetravailleur);
function savetravailleur(event){
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let profession = document.getElementById('profession').value;
    let contact = document.getElementById('contact').value;
    let data = {
        id:"",
        nom:nom,
        prenom:prenom,
        profession:profession,
        contact:contact,
        statut: 1,
    }
    let dataTable = [];
    if(localStorage.getItem("travailleurs")){
        data.id ="TRAV00"+JSON.parse(localStorage.getItem("travailleurs")).length;
        let dataLocal =JSON.parse(localStorage.getItem("travailleurs"));
        dataLocal.push(data);
        localStorage.setItem("travailleurs", JSON.stringify(dataLocal));
    }else{
        dataTable.push(data);
        data.id = "TRAV001";
        localStorage.setItem("travailleurs", JSON.stringify(dataTable));
    }
}



let btnSupprimer = document.getElementById("suprimerTravailleurs")
btnSupprimer.addEventListener("click", deleteTravailleurs)

function deleteTravailleurs () {
    
}

function rechercheTracvailleurs(){
    let affichage = document.getElementById('reponse-serveur')
    let recherche = document.getElementById("recherche")
    let ourtravailleurs = getTravailleurs()
    recherche.addEventListener("input", (e)=>{
        let motAChercher = e.currentTarget.value
        let reponse = ourtravailleurs.filter((t)=>t.nom.toLowerCase()===motAChercher.toLowerCase())
        if(motAChercher!== ""){
            if(reponse !== []){
                affichage.classList.add("reponse")
                for (const travailleur of reponse) {
                    affichage.innerHTML+=`
                    <div class="row">
                        <p>${travailleur.nom} ${travailleur.prenom} </p>
                    </div>
                    `
                }
            }else{
                affichage.classList.remove("reponse")
            }
        }else{
            affichage.classList.remove('reponse')
            affichage.innerHTML = ""
            motAChercher = ""
        }
    })
}
rechercheTracvailleurs()



function nombreTotalTravailleur(e){
    
}
let suprimerTravailleurs = document.querySelectorAll("#suprimerTravailleurs")
    suprimerTravailleurs.forEach(item => item.addEventListener("click", ()=>{
        console.log(item)
    }) )