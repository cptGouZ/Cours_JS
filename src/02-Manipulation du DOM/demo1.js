//region Sélection d'éléments du DOM
//Récupération du premier élément rencontré
document.getElementById('monId'); //par nom d'id
document.querySelector('.myClass #monId'); //par selecteur css (#id .class)
//Récupération d'un ensemble d'élements.
document.getElementsByTagName('div'); //par nom de balise (p h1 div)
document.getElementsByClassName('myClass'); //par nom de classe (myClass)
//Récupération de tous les éléments par rapport au selecteur CSS
document.querySelectorAll('.myClass #monId');
//endregion

//region Création/Modification d'éléments
function chargerContenu(){
    let titre = document.getElementById('titre');
    //Modification du titre
    titre.innerText = "Mon titre vachement <i>mieux</i>"; //Balise HTML non interprétée
    titre.innerHTML = "Mon titre vachement <i>mieux</i>"; //Balise HTML interprétée

    //Création d'un objet
        let elInput = document.createElement('input');
    //première méthode d'ajout d'attributs
        let attrValue = document.createAttribute('value');
        attrValue.value = 'Zone de saisie';
        elInput.setAttributeNode(attrValue);
    //version simplifiée d'ajout d'attribut
        elInput.name = 'nom';


    //Associer input au html existant
    //beforebegin : avant l'élément
    //afterbegin : dans l'élément au début
    //beforeend : dans l'élément à la fin
    //afterend : après l'élement
    titre.insertAdjacentElement("afterend", elInput);
    titre.insertAdjacentElement("beforebegin", elInput); //L'insertion est unique dans la page
}
//endregion