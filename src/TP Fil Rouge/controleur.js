window.addEventListener('load', init);
function init(){
    document.getElementById('savoir').value = "";
    document.getElementById('auteur').value = "";
    document.getElementById('date').valueAsDate= new Date(Date.now());

    document.getElementById('savoir').focus();
    document.getElementById('ajout').addEventListener('click', ajouter);

    document.getElementById('sortName').addEventListener('click', setSortMethod);
    document.getElementById('sortRevName').addEventListener('click', setSortMethod);
    document.getElementById('sortDate').addEventListener('click', setSortMethod);
    document.getElementById('sortRevDate').addEventListener('click', setSortMethod);
}

function ajouter(){
    let savoir = new SavoirInutile(
        document.getElementById('savoir').value,
        document.getElementById('auteur').value,
        document.getElementById('date').valueAsDate
    );
    if(savoir.control()) {
        ajouterSavoir(savoir);
        afficherListe();
        init();
    }else{
        alert('tous les champs doivent être remplis')
    }
}

function setSortMethod(event){
    sortMethod = event.currentTarget.id
    afficherListe();
}

function supprimer(event){
    let savoir = getSavoirs()[event.currentTarget.id];
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + savoir.savoir)) {
        supprimerSavoir(savoir);
        afficherListe();
    }
}

function afficherListe(){
    sort();
    let elOl = document.querySelector('ol');
    let idx = 0;
    elOl.querySelectorAll('li').forEach(value => value.remove());
    for (const objSavoir of getSavoirs()) {

        let elPSavoir = document.createElement('p');
        let elPInfos = document.createElement('p');
        elPSavoir.innerText = objSavoir.savoir;
        elPInfos.innerText = `Par ${objSavoir.auteur} le ${objSavoir.date.toLocaleDateString()}`;

        let elLi = document.createElement('li');
        elLi.id=idx;
        elLi.addEventListener('click', supprimer);
        elLi.append(elPSavoir);
        elLi.append(elPInfos);

        elOl.append(elLi);
        idx++;
    }
}