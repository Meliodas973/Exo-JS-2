class Contact {
    constructor(nom, prenom, email){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
    displayInfo(){
        console.log('nom: ' + this.nom + '|| prenom: ' + this.prenom + '|| email: ' + this.email);
    }
}

const caractere = prompt('Entrez votre nom');
if (Contact >= 2) {
   
} else {
    console.log('Veuillez rentrer plus de deux caracteres');
}