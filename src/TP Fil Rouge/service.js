let savoirs=[];
function ajouterSavoir(objSavoir){
    savoirs.push(objSavoir);
}
function supprimerSavoir(idSavoir){
    savoirs.splice(idSavoir,1);
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