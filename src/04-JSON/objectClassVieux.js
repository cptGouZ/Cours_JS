//Une classe
var Sport = function(nom, description){
    //Si nom est false on va prendre "pas de nom"
    this.nom = nom || "pas de nom";
    //En cas de null ou undefined uniquement
    this.description = description ?? "";

    //Fonction qui n'est pas liée au prototype ni disponible à l'héritage
    this.afficher = function (){
        console.log(this.nom, this.description);
        console.log(this);
    }
}
//Fonction dans le prototype
Sport.prototype.jouer = function(){
    console.log('Je joue au : ' + this.nom);
}

//Héritage
var SportDeCompetition = function(nom, description, niveau){
    Sport.call(this, nom, description);
    this.niveau = niveau || "";
}
SportDeCompetition.prototype = Object.create(Sport);
SportDeCompetition.prototype.jouer = function(){
    console.log('Je joue au : ' + this.nom + ' au niveau ' + this.niveau);
}

//Instance
var tennis = new Sport('tennis', 'jeu de raquette');
var foot = new Sport('footmerde', 'jeu de ballon');
tennis.afficher();
foot.afficher();
foot.jouer();
var pelote = new SportDeCompetition('pelote', 'jeu basque', 'National');
pelote.afficher();
pelote.jouer();