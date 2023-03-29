const cardModifier = document.getElementById("card(modifier")
var id = ""
let lien = location.href

function getTravailleurs(){
    let travailleurs = localStorage.getItem('travailleurs')
    if(travailleurs === null){
        return []
    }else{
        return JSON.parse(travailleurs)
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
    let tousLesTravailleurs = getTravailleurs()
    let chercherUnTravailleur = tousLesTravailleurs.find(t => t.id == id);
    cardModifier.innerHTML = `<div class="container2-element2">
    <h3>AJOUTER UN NOUVEAU TRAVAILLEUR</h3>
    <label for="name">N° :</label><input type="text" placeholder="id" id="id" value="${chercherUnTravailleur.id}" disabled>
    <label for="name">NOM :</label><input type="text" placeholder="Nom" id="nom" value="${chercherUnTravailleur.nom}">
    <label for="surname">PRENOM :</label><input type="text" placeholder="Prenom" id="prenom" value="${chercherUnTravailleur.prenom}">
    <label for="status">PROFESSION :</label><input type="text" placeholder="Profession" id="profession" value="${chercherUnTravailleur.profession}">
    <label for="contact">CONTACT :</label><input type="number" placeholder="Contact" id="contact" value="${chercherUnTravailleur.contact}">
    <button id="submit">+  AJOUTER</button>
    </div>`
}

modifierUnTravailleur()

function submit(){
    let soumettre = document.getElementById('submit')
    soumettre.addEventListener('click',(e)=>{
        let ourtravailleurs = getTravailleurs()
        let ref = document.getElementById('id').value;
        let nom = document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let profession = document.getElementById('profession').value;
        let contact = document.getElementById('contact').value;
        const datalocal = JSON.parse(localStorage.getItem("travailleurs"));
        let requette = datalocal.filter(cle=> cle.id==ref);
        const indece = datalocal.indexOf(requette[0]);
        const obj = requette[0];
        obj.nom =nom;
        obj.prenom=prenom;
        obj.profession=profession;
        obj.contact=contact;
        datalocal[indece] = obj;
        localStorage.setItem("travailleurs", JSON.stringify(datalocal));
        window.location.href ="travailleurAdmin.html";
    })
}
submit() 