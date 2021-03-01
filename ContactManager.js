class ContactManager {
    constructor(liste){
        this.liste = liste ? liste : [];
    }

    displayMenu(){
        let choix = prompt("Que souhaitez-vous faire ?\n\n 1 - Lister les contacts\n 2 - Ajouter un nouveau contact\n 3 - Supprimer un contact\n 4 - Quitter le gestionnaire de contacts\n");
        switch (choix) {
            case '1':
                console.log("Voici la liste de vos contacts");
                // je veux afficher tous les contacts de ma liste de contacts
                // je dois faire une boucle pour parcourir le tableau
                // J'ai decide d'utiliser la boucle for 
                for(let index = 0 ; index < this.liste.length ; index++){
                    // Dans la boucle je cherche a recuperer chaque contact
                    let contact = this.liste[index];
                    // une fois le contact recupere je peux appeler la methode displayInfo du contact qui va afficher les infos du contact
                    console.log(index + " - " + contact.displayInfo());
                }
                console.log("=====================");
                break;
            case '2':
                // creer un nouveau contact
                let name = prompt("Entrez votre nom");
                let surname = prompt("Entrez votre prenom");
                let email = prompt("Entrez votre email");

            	let contact = new Contact(name, surname, email);
                console.log(contact);
                // une fois cree je veux garder le contact dans la liste
                this.liste.push(contact);
                alert("Le contact a  bien ete ajoute");
                console.log("liste", this.liste);
               
                break;
            case '3':
                console.log("Entrée 3");
                // afficher une liste de contacts avec un numero d'index de chaque contact
                // l'utilisateur choisi l'index du contact a supprimer
                // on supprime le contact choisi du tableau
                // on envoie un message de confirmation 
                break;
            case '4':
                console.log("A bientôt");
                return
                break;
            default: 
                console.log('Veillez sectionner un chiffre entre 1 et 4');
                break;
        }
        return this.displayMenu();
    }
}
   