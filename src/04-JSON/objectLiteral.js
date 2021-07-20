//JSON
//tableau[]
//objet{}

//region passage de chaine de caractères à JSON et inversement
var json = '{"nom":"Bouvet", "prenom":"Laurent", "score":42}';
//Transforme une chaîne de caractères json en objet/array javascript
let obj=JSON.parse(json);
console.log(obj);
//Affichage d'un attribut de l'objet
console.log(obj.nom);
//Transfrome un objet JSON en chaîne de caractères
let str=JSON.stringify(obj);
console.log(str);
//endregion

//region Création d'objet
//Les objets se modifient dynamiquement
let unObjet = {};
unObjet.nom = 'Alain';
let unAutreObjet = {nom: 'Thierry', age: 42};
//fonction anonyme
unAutreObjet.afficher = function (){
    console.log(this.nom, this.age);
}
unAutreObjet.afficher();
//endregion