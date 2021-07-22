let savoirs=[];
const KEY_STORAGE = 'savoirs';

savoirs = JSON.parse(localStorage.getItem(KEY_STORAGE)) ??[]
//Retraitement de chaque élement pour lui redonner son prototype + retraitement de la date
savoirs.forEach(value => {
    Object.setPrototypeOf(value, SavoirInutile.prototype);
    value.date = new Date(value.date);
});

function ajouterSavoir(objSavoir){
    savoirs.push(objSavoir);
    persist();
}
function supprimerSavoir(idSavoir){
    savoirs.splice(idSavoir,1);
    persist();
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

function persist(){
    localStorage.setItem(KEY_STORAGE, JSON.stringify(savoirs));
}