class ContactManager {
    constructor(liste){
        this.liste = liste;
    }

    displayMenu(){
        let choix = prompt("Que souhaitez-vous faire ?\n\n 1 - Lister les contacts\n 2 - Ajouter un nouveau contact\n 3 - Supprimer un contact\n 4 - Quitter le gestionnaire de contacts\n");
        switch (choix) {
            case '1':
                console.log("Entrée 1");
                break;
            case '2':
                console.log("Entrée 2");
                break;
            case '3':
                console.log("Entrée 3");
                break;
            case '4':
                console.log("A bientôt 4");
                break;
            default: 
                console.log('Veillez sectionner un chiffre entre 1 et 4');
                break;
        }
    }
}
   