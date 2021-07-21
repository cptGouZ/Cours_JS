window.addEventListener('load', finChargementPage);
function finChargementPage(){
    init();
    document.getElementById('ajout').addEventListener('click', ajouter);
    document.querySelectorAll('.trier').forEach((btn)=>{
        const tri = btn.dataset.search;
        btn.addEventListener('click', function(){
            trierSavoir(tri);
            afficherListe();
        });
    })
    loadSavoirs();
    afficherListe();
}
function init(){
    document.getElementById('savoir').value = "";
    document.getElementById('auteur').value = "";
    document.getElementById('date').valueAsDate= new Date(Date.now());
    document.getElementById('savoir').focus();
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

function supprimer(event){
    let savoir = getSavoirs()[event.currentTarget.id];
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + savoir.savoir)) {
        supprimerSavoir(event.currentTarget.id);
        afficherListe();
    }
}

function afficherListe(){
    let elOl = document.querySelector('ol');
    elOl.innerHTML = '';
    getSavoirs().forEach((objSavoir, index) => {
        let elPSavoir = document.createElement('p');
        let elPInfos = document.createElement('p');
        elPSavoir.innerText = objSavoir.savoir;
        elPInfos.innerText = `Par ${objSavoir.auteur} le ${objSavoir.date.toLocaleDateString()}`;

        let elLi = document.createElement('li');
        elLi.id=index.toString(10);
        elLi.addEventListener('click', supprimer);
        elLi.append(elPSavoir);
        elLi.append(elPInfos);

        elOl.append(elLi);
    })
}