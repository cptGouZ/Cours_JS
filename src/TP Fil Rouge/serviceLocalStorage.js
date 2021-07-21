let savoirs=[];
function loadSavoirs(){
    if(JSON.parse(localStorage.getItem('savoirs')) !== null) {
        //Récupération du tableau par JSON
        savoirs = JSON.parse(localStorage.getItem('savoirs'));
        //Retraitement de chaque élement pour lui redonner son prototype + retraitement de la date
        savoirs.forEach(value => {
            Object.setPrototypeOf(value, SavoirInutile.prototype);
            value.date = new Date(value.date);
        });
    }
}
function ajouterSavoir(objSavoir){
    savoirs.push(objSavoir);
    localStorage.setItem('savoirs', JSON.stringify(savoirs));
}
function supprimerSavoir(idSavoir){
    savoirs.splice(idSavoir,1);
    localStorage.setItem('savoirs', JSON.stringify(savoirs));
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
    localStorage.setItem('savoirs', JSON.stringify(savoirs));
}