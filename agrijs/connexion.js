let admin = {
    email: 'admin.second@gmail.com',
    password: 'SND@admin',
};
let superAdmin = {
    email: 'super.Admin@gmail.com',
    password: 'superAdmin@',
};

let email = document.querySelector(".email")
let passe = document.querySelector(".passe")
let btn = document.querySelector("button")




btn.addEventListener("click" , function(e){
   let mail = email.value;
   let motPasse = passe.value;
   if(admin.email === mail && admin.password === motPasse){
    window.location.pathname="/AgriKAAM/agrihtml/accueil.html";
    localStorage.setItem("admin",JSON.stringify(admin))
   }else if(superAdmin.email === mail && superAdmin.password === motPasse){
    window.location.pathname="/AgriKAAM/agriadmin/accueilAdmin.html";
    localStorage.setItem("superAdmin",JSON.stringify(superAdmin))
   }else{
    alert("Les champs que vous avez remplir sont incorrects . Vous n'êtes pas autoriser a acceder a la plateforme ")
   }

})