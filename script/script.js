// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();

    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    document.getElementById('nom').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

    alert('Nom: ' + nom + '\nEmail: ' + email + '\nMessage: ' + message);
}); 


// Gestion du scroll (le scroll par ancre fonctionnait mal du au menu fixed)
function scrollAccueil() {
    document.getElementById("accueil").scrollIntoView({ behavior: 'smooth', block: 'center' }); // "center" pour que l'élément soit au mileu de la page, "smooth" pour que la transition soit douce
}
function scrollProjets() {
    document.getElementById("projets").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollLangages() {
    document.getElementById("competences").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollApropos() {
    document.getElementById("apropos").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollContact() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Création du bouton pour le mode sombre
var boutton = document.createElement("button");
boutton.innerText = "🌙";
boutton.style.position = "fixed";
boutton.style.bottom = "20px";
boutton.style.right = "20px";
boutton.style.zIndex = "1000";
boutton.style.padding = "10px";
boutton.style.border = "none";
boutton.style.borderRadius = "50%";
boutton.style.cursor = "pointer";
document.body.appendChild(boutton);

var body = document.body;

// Appliquer le thème enregistré
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    boutton.innerText = "☀️";
}

// Basculer entre les thèmes
boutton.addEventListener("click", () => { // Ajoute un évenement sur le boutton (ici au clic)
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        boutton.innerText = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        boutton.innerText = "🌙";
    }
});

// Redirection vers les liens en js
function esp1() {
    window.location = "https://paristoday.fr/portfolio/p1";
}
function esp2() {
    window.location = "https://paristoday.fr/portfolio/p2";
}
function esp3() {
    window.location = "https://paristoday.fr/portfolio/p3";
}