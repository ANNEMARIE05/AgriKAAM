let travailleurs = [
    {
        id: 1,
        nom: "david",
        prenom: "steve",
        profession:"admin second",
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



function addAdministrateur(Administrateurs){
        localStorage.setItem('Administrateurs',JSON.stringify(Administrateurs))
}

// addAdministrateur(Administrateurs)//



function getAdministrateurs(){
    let Administrateurs = localStorage.getItem('Administrateurs')
    if(Administrateurs === null){
        return []
    }else{
        return JSON.parse(Administrateurs)
    }
}


function afficherAdministrateurs(){
    const listOfAdministrateurs = document.getElementById('all-ravailleurs');
    const datalocal = JSON.parse(localStorage.getItem("Administrateurs"));
    console.log(localStorage.getItem("Administrateurs"))
    if(localStorage.getItem("Administrateurs")){
        const all = JSON.parse(localStorage.getItem("Administrateurs")).filter(cle=>cle.statut==1);
        if(all.length > 0){
            all.forEach(element => {
                listOfAdministrateurs.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.nom}</td>
                <td>${element.prenom}</td>
                <td>${element.profession}</td>
                <td>${element.contact}</td>
                <td>
                <a href="modifierAdmin.html?id=${element.id}" id="modiTravailleur"><i class="fa fa-edit"></i></a>
                <a href="" onclick='deleteTravailleurs(${element.id})' id="suprimerTravailleurs"><i class="fa fa-trash"></i></a>
                </td>
            </tr>`;
            });
        }
    }
}
afficherAdministrateurs()
let soumettre = document.getElementById("submit").addEventListener('click', saveAdministrateur);
function saveAdministrateur(event){
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
    if(localStorage.getItem("Administrateurs")){
        data.id ="ADMIN00"+JSON.parse(localStorage.getItem("Administrateurs")).length;
        let dataLocal =JSON.parse(localStorage.getItem("Administrateurs"));
        dataLocal.push(data);
        localStorage.setItem("Administrateurs", JSON.stringify(dataLocal));
        window.location.reload()
    }else{
        dataTable.push(data);
        data.id = "ADMIN001";
        localStorage.setItem("Administrateurs", JSON.stringify(dataTable));
        window.location.reload()
    }
}

function deleteAdministrateurs(id){
    let ourAdministrateurs = getAdministrateurs()
    let Administrateur = ourAdministrateurs.filter((t)=> t.id != id)
    addAdministrateur(Administrateur)
    location.pathname='Administrateur.html'
}

function rechercheTracvailleurs(){
    let affichage = document.getElementById('reponse-serveur')
    let recherche = document.getElementById("recherche")
    let ourAdministrateurs = getAdministrateurs()
    recherche.addEventListener("input", (e)=>{
        let motAChercher = e.currentTarget.value
        let reponse = ourAdministrateurs.filter((t)=>t.nom.toLowerCase()===motAChercher.toLowerCase())
        if(motAChercher!== ""){
            if(reponse !== []){
                affichage.classList.add("reponse")
                for (const Administrateur of reponse) {
                    affichage.innerHTML+=`
                    <div class="row">
                        <p>${Administrateur.nom} ${Administrateur.prenom} </p>
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



function nombreTotalAdministrateur(e){
    
}