//region Les variables
//Variables typage dynamique
maVariable = 'Texte';
maVariable = 10;

//Types boolean, number, string, bigint, null, undefined

//Objets ou Class
//Date, Math, Array, Object, Function, NaN Not a Number .....

//Conversion automatique des String en Number
var value = '12'*12;
console.log(value);
console.log(parseInt('11',2)) //parseInt(chiffre, base)
//endregion

//region Fonction et Procédure c'est pareil ! (en dehors du return)
//Le surcharge ne fonctionne pas (dans ce cas)
maFonction(12,45);
maFonction();
maFonction(12,34, 'TOTO');
function maFonction(param1, param2) {
    console.log(param1);
    console.log(param2);
    return false;
}
function maFonction(){
    console.log('TEST');
    return false;
}
//Passage de n paramètres en tableau
paramFunc(3,5,'erz','e');
function paramFunc(...params){
    console.log(params.length);
}
//endregion

//region Portées :
var autreVariable; //Variable globale ou si déclarée dans une fonction, valable dans toute la fonction
let letVariable = 42; //Portée dans la paire d'accolage
const CONSTANTE = 'une constante'; //portée dans la paire d'accolade

//Exemples :
var uneVariableGlobale = 'Bonjour';
traitement();
function traitement(){
    var uneVariableLocale = 'Coucou';
    console.log("uneVariableGlobale : '%s'", uneVariableGlobale);
    console.log("uneVariableLocale : '%s'", uneVariableLocale);
    //Variable globale pour I
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
    //Variable d'accolade pour J
    for(let j=0; j<5; j++){
        console.log(j);
    }
    //console.log(j); //Génère une erreur
}
//endregion

//region Tableaux et Liste c'est la même !!
var tab1 = new Array();
var tab2 = [];
var tab3 = [10,45,'test']; //Ajout d'éléments (pas de typage fort)
console.log("Taille du tableau " + tab3.length); //Concatenation +
console.log("Indice 1 : '%s'", tab3[2]);
tab3[1] = 54;
tab3.push(55);
console.log(tab3);
console.log(tab3.toString());
//endregion

//region Tests et conditions
if('1' == 1){console.log(true)}  //Contrôle valeur uniquement et aussi !=
if('1' !== 1){console.log(true)} //Contrôle valeur et type et aussi ===
//Tout ceci est vrai avec le double égale et pas avec le triple
console.log(0==false);
console.log(''==false);
console.log([]==false);
//endregion

//region Math
let nombreReel = Math.random() * 100;
let nombreEntier = parseInt(nombreReel,10);
console.log(nombreReel);
console.log(nombreEntier);
//endregion

//region Date
let noel2019 = new Date(2019,11,25);
console.log(noel2019);
console.log(noel2019.toLocaleDateString());
console.log(noel2019.getDay()); //Jour de la semaine
console.log(noel2019.getMonth());
console.log(noel2019.getFullYear());
//endregion

//region EXEMPLE : Compter des lettres
/*
Nombre de voyelles
Nombre de consonnes
Nombre de e
Nombre de a
 */
let phrase = 'une phrase avec des voyelles et des consonnes';
let cptrVoyelles = 0;
let nbE = 0;
let nbA = 0;
for (const lettre of phrase) {
    if(estUneVoyelle(lettre)) {
        cptrVoyelles++
        switch (lettre.toLowerCase()) {
            case 'a': nbA++; break;
            case 'e': nbE++; break;
        }
    }
}

console.log('nombre de e : ' + nbE);
console.log('nombre de a : ' + nbA);
console.log('nombre de voyelles : ' + cptrVoyelles);
console.log('nombre de consonnes : %d', phrase.replace(/ /g, '').length - cptrVoyelles);

//Savoir si une lettre est une voyelle
function estUneVoyelle(lettre){
    const voyelles = 'aeiouy';
    let retour = false;
    if(lettre !== undefined && voyelles.indexOf(lettre.toLowerCase())!=-1){
        retour = true;
    }
    return retour;
}

//endregion