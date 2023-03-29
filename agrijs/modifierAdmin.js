const cardModifier = document.getElementById("card(modifier")
var id = ""
let lien = location.href

function getAdministrateurs(){
    let Administrateurs = localStorage.getItem('Administrateurs')
    if(Administrateurs === null){
        return []
    }else{
        return JSON.parse(Administrateurs)
    }
}

const obtenirIdTravailleur = () => {
    let url = new URL(lien)
    let search_params = new URLSearchParams(url.search)

    if(search_params.has("id")){
        id = search_params.get('id')
    }
}

obtenirIdTravailleur()

const modifierUnTravailleur = () =>{
    const cardModifier = document.getElementById('card-modifier')
    let tousLesAdministrateurs = getAdministrateurs()
    let chercherUnTravailleur = tousLesAdministrateurs.find(t => t.id == id);
    cardModifier.innerHTML = `<div class="container2-element2">
    <h3>AJOUTER UN NOUVEAU TRAVAILLEUR</h3>
    <div class="itemsLab">
        <div class="label-item">
            <label for="name">N° :</label><br>
            <label for="name">NOM :</label><br>
            <label for="surname">PRENOM :</label><br>
            <label for="status">PROFESSION :</label><br>
            <label for="contact">CONTACT :</label><br>
        </div>
        <div class="input-div">
        <input type="text" placeholder="id" id="id" value="${chercherUnTravailleur.id}" disabled><br>
            <input type="text" placeholder="Nom" id="nom" value="${chercherUnTravailleur.nom}"><br>
            <input type="text" placeholder="Prenom" id="prenom" value="${chercherUnTravailleur.prenom}"><br>
            <input type="text" placeholder="Profession" id="profession" value="${chercherUnTravailleur.profession}"><br>
            <input type="tel" placeholder="Contact" id="contact" value="${chercherUnTravailleur.contact}"><br>
            <button id="submit">+  AJOUTER</button>
        </div>
    </div>
</div>`
}

modifierUnTravailleur()

function submit(){
    let soumettre = document.getElementById('submit')
    soumettre.addEventListener('click',(e)=>{
        let ourAdministrateurs = getAdministrateurs()
        let ref = document.getElementById('id').value;
        console.log(ref)
        let nom = document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let profession = document.getElementById('profession').value;
        let contact = document.getElementById('contact').value;
        const datalocal = JSON.parse(localStorage.getItem("Administrateurs"));
        let requette = datalocal.filter(cle=> cle.id==ref);
        const indece = datalocal.indexOf(requette[0]);
        const obj = requette[0];
        obj.nom =nom;
        obj.prenom=prenom;
        obj.profession=profession;
        obj.contact=contact;
        datalocal[indece] = obj;
        localStorage.setItem("Administrateurs", JSON.stringify(datalocal));
        window.location.href ="adminSec.html";
    })
}
submit() 