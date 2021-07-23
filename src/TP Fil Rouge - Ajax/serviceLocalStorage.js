let savoirs=[];
const KEY_STORAGE = 'savoirs';
const URL = "http://localhost:1234/"

function ajouterSavoir(objSavoir){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: URL,
            method: 'POST',
            data: JSON.stringify(objSavoir)
        })
            .done(()=>{
                resolve();
            })
            .fail(()=>{
                reject();
            });
    })
}

function supprimerSavoir(uuid){
    return new Promise((resole,reject)=>{
        $.ajax({
            url: URL,
            method: 'DELETE',
            data: uuid
        })
            .done(()=>{
                resolve();
            })
            .fail(()=>{
                reject();
            });
    });
}

function getSavoirs(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: URL,
            method: 'GET'
        })
            .done((dataDuGet) => {
                data = date || [];
                dataDuGet.forEach((value) => {
                    Object.setPrototypeOf(value, SavoirInutile.prototype);
                    value.date = new Date(value.date);
                });
                resolve(dataDuGet);
            })
            .fail(()=>{
                reject();
            });
    });
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