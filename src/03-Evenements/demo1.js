//region Code excuté qu'à la fin du chargement de la page.
window.addEventListener('load', init);
function init(){
    var el = document.getElementById('saisie');
    console.log(el);
    document.querySelector('#btn1').addEventListener('click', validerSaisie);
}
//endregion

function validerSaisie(){
    let elInput = document.getElementById('btn1');
    let val = elInput.value;
    console.log('La valeur saisie est %s', val);

    //Listener de façon programmative
    document.querySelector('#btn2').addEventListener('click', clickBouton2);
}

function clickBouton2(event){
    console.log('objet qui déclenche l\'event' + event.target)
    console.log('objet qui supporte le listener' + event.currentTarget)
    console.log('Clic sur le bouton 2' + event);
    alert('Clic bouton 2');
}

function ajouterLien(){
    var lien = document.createElement('a');
    lien.href = 'https://www.eni-ecole.fr';
    lien.target = '_blank';
    lien.innerText = 'ENI';
    document.getElementById('btn3').insertAdjacentElement('afterend', lien);
}

function colorerBouton(){
    //tableau de boutons input
    let boutons = document.querySelectorAll('input[type="button"]');
    for(let bouton of boutons){
        bouton.className = 'couleur';
        //bouton.classList.add('couleur');
    }
}