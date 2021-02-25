class Contact {
    constructor(nom, prenom, email){
        this.nom = this.verifName(nom, 'nom', 2);
        this.prenom = this.verifName(prenom, 'prenom', 2);
        this.email = this.verifMail(email);
    }
    displayInfo(){
        console.log('nom: ' + this.nom + '|| prenom: ' + this.prenom + '|| email: ' + this.email);
    }

    verifName(nom, type, length){
        if (nom.length >= length) {
            return nom
        } else {
            let newName = "";
            do{
                console.log('Veuillez rentrer plus de deux caracteres');
                newName = prompt('Entrez votre ' + type);
            }while(newName.length < length)
            return newName;            
        }
    }

    verifMail(email){
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email)) {
            return email
        } else {
            let newEmail = "";
            do{
                console.log('Veuillez rentrer votre email');
                newEmail = prompt('Entrez votre email');
            }while(!regex.test(newEmail))
            return newEmail; 
        }
    }
}



