let savoirs=[];
const KEY_STORAGE = 'savoirs';
const URL = "http://localhost:1234/"

//savoirs = JSON.parse(localStorage.getItem(KEY_STORAGE)) ?? []
function loadSavoirs() {
    function getDatas(){
        return new Promise((resolve)=> {
            $.ajax({
                url: URL,
                method: 'GET'
            })
                .done((recup) => {
                    savoirs = recup;
                    resolve();
                });
        })
    }
    getDatas().then((retour)=>{
        //Retraitement de chaque élement pour lui redonner son prototype + retraitement de la date
        savoirs.forEach((value) => {
            Object.setPrototypeOf(value, SavoirInutile.prototype);
            value.date = new Date(value.date);
        });
        afficherListe();
    })
}


function ajouterSavoir(objSavoir){
    $.ajax({
        url: URL,
        method: 'POST',
        async: false,
        data: JSON.stringify(objSavoir)
    }).done();
    loadSavoirs();
}
function supprimerSavoir(idSavoir){
    $.ajax({
        url: URL,
        method: 'DELETE',
        async: false,
        data: idSavoir
    }).done();
    loadSavoirs();
}
function getSavoirs(){
    return savoirs;
}
function trierSavoir(tri){
    const sortMethod = tri || "sortDate";
    switch (sortMethod){
        case "sortName" : savoirs.sort((a,b) => a.auteur.localeCompare(b.auteur)); break;
        case "sortRevName" : savoirs.sort((a,b) => b.auteur.localeCompare(a.auteur)); break;
        case "sortDate" : savoirs.sort((a,b) => b.date - a.date); break;
        case "sortRevDate" : savoirs.sort((a,b) => a.date - b.date); break;
    }
}