//Syntaxe cosmétique
class Sport{
    constructor(nom, description) {
        this.nom = nom || 'pas de nom';
        this.description = description ?? '';
    }

    //Méthode automatique liée au prototype
    afficher(){
        console.log(this.nom, this.description);
    }
    jouer(){
        console.log('Je joue au : ' + this.nom);
    }
}

//Héritage
class SportDeCompetition extends Sport{
    constructor(nom, description, niveau) {
        super(nom, description);
        this.niveau = niveau|| '';
    }
    jouer(){
        console.log('Je joue au : ' + this.nom + ' au niveau ' + this.niveau);
    }
}

//Instance
var tennis = new Sport('tennis', 'jeu de raquette');
var foot = new SportDeCompetition('footmerde', 'jeu de ballon', 'bas niveua');
tennis.jouer();
foot.jouer();