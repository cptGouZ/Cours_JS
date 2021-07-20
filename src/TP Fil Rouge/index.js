window.addEventListener('load', init);
let idx = 0;

function init(){
    document.getElementById('ajout').addEventListener('click', ajouter);
    clearInputs();
}

function ajouter(){
    let savoir = document.getElementById('savoir');
    let auteur = document.getElementById('auteur');
    let date = document.getElementById('date')
    if(control(savoir, auteur, date)) {
        let orderedList = document.getElementsByTagName('ol')[0];
        let titre = document.createElement('h1');
        titre.addEventListener('click', supprimer);
        titre.id = idx;
        titre.innerHTML = savoir.value;

        let sujetAuteur = document.createElement('span')
        sujetAuteur.innerText = auteur.value + ' ' + date.valueAsDate.toLocaleDateString();

        let ligne = document.createElement('li');
        ligne.id = 'li' + idx;
        ligne.append(titre);
        ligne.append(sujetAuteur);

        //Ajout de l'élement en fin de liste
        orderedList.insertAdjacentElement('beforeend', ligne);

        clearInputs();

        idx++;
    }else{
        alert('tous les champs doivent être remplis')
    }
}

function clearInputs(){
    savoir.value = "";
    auteur.value = "";
    date.valueAsDate= new Date(Date.now());
}

function supprimer(event){
    console.log(event.target);
    console.log(event.currentTarget);
    let li = document.getElementById('li' + event.target.id);
    let h1 = document.getElementById(event.target.id);
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + h1.innerText)) {
        li.remove();
    }
}

function control(savoir, auteur, date){
    if(savoir.value !== ''
    && auteur.value !== ''
    && date.value !== ''){
        return true;
    }
    return false;
}