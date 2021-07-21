let savoirs=[];
let sortMethod="sortDate";
function ajouterSavoir(objSavoir){
    savoirs.push(objSavoir);
}
function supprimerSavoir(objSavoir){
    console.log(savoirs.indexOf(objSavoir));
    savoirs.splice(savoirs.indexOf(objSavoir),1);
}
function getSavoirs(){
    return savoirs;
}
function sort(){
    switch (sortMethod){
        case "sortName" :
            orderByName();
            break;
        case "sortRevName" :
            orderByRevName();
            break;
        case "sortDate" :
            orderByDate()
            break;
        case "sortRevDate" :
            orderByRevDate()
            break;
    }
}

//region méthodes de tri
function orderByDate(){
    savoirs.sort((a,b) => {
        if(a.date < b.date) return 1;
        if(a.date === b.date) return 0;
        if(a.date > b.date) return -1;
    });
}
function orderByRevDate(){
    savoirs.sort((a,b) => {
        if(a.date < b.date) return -1;
        if(a.date === b.date) return 0;
        if(a.date > b.date) return 1;
    });
}

function orderByName(){
    savoirs.sort((a, b) => {
        if(a.auteur < b.auteur) return 1;
        if(a.auteur === b.auteur) return 0;
        if(a.auteur > b.auteur) return -1;
    });
}
function orderByRevName(){
    savoirs.sort((a,b) => {
        if(a.auteur < b.auteur) return -1;
        if(a.auteur === b.auteur) return 0;
        if(a.auteur > b.auteur) return 1;
    });
}
//endregion
