//Tirage d'un nombre de 0 à 99 dans un tableau
console.log(plage());
function plage(){
    let nbIteration=0;
    let tabNbTire=[];
    while (tabNbTire.length < 100){
        let tirage = Math.round(Math.random()*100);
        if(!tabNbTire.includes(tirage)){
            tabNbTire.push(tirage);
        }
        nbIteration++;
    }
    return nbIteration;
}


var chaine ="une chaine avec des lettres dans un certain ordre pour donner du sens";
let tableau = chaine.replace(/ /g,'').split('');
console.log(tableau);
/*tri();
function tri(){
    let tabChar = [];
    for (const char of chaine.replace(/ /g,'')) {
        if(!tabChar.includes(char)) {
            tabChar.push(char);
        }
    }
    console.log(tabChar.sort());
}*/

var chaine2 = "une phrase sans majuscule";
let mots = chaine2.split(' ');
for (let ii=0; ii < mots.length; ii++){
    let premiereLettre = mots[ii].substring(0,1).toUpperCase();
    let finDuMot = mots[ii].substring(1).toLowerCase();
    mots[ii] = premiereLettre + finDuMot;
}
console.log(mots.join(' '));

/*
upperSnakeCase();
function upperSnakeCase(){
    let retour = "";
    for ( let ii = 0; ii < chaine2.length; ii++) {
        if (ii === 0 || chaine2.charAt(ii-1) === " ") {
            retour += chaine2.charAt(ii).toUpperCase();
        }else{
            retour += chaine2.charAt(ii);
        }
    }
    console.log(retour);
}*/
