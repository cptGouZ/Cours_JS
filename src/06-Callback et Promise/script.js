window.addEventListener('load', ()=>{
    document.getElementById('alert-callback')
        .addEventListener(('click'), function(){
            alertMsg(afficherResultat);
        })
    document.getElementById('alert-promise')
        .addEventListener(('click'), function(){
            let data = document.querySelector('input[name="messagePromise"]').value;
            enregistrer(data)
                //En cas de resolve
                .then(afficherResultat)
                //En cas de reject
                .catch((err)=>{
                    console.log('erreur : ' + err);
                })
        })
})
//Callback : traitement des appels asynchrones sans retour succes echoué
function alertMsg(callback){
    console.log('debutCallBack');
    setTimeout( function(){
        console.log('début traitement asynchrone');
        if(Date.now().valueOf() % 2 === 0){
            callback('Callback Success');
        }else{
            callback('Callback Failed');
        }
        console.log('fin traitement asynchrone');
    }, 2000);
    console.log('finCallBack');
}

//Promise : traitement des appels asynchrones avec un retour succes echoué
function enregistrer(data){
    console.log('début enregistrement');
    return new Promise(((resolve, reject) => {
        //setTimeout déclenche la fonction après tant de temps et non la durée max autorisée pour la fonction
        setTimeout( function(){
            console.log('début traitement asynchrone');

            if(Date.now().valueOf() % 2 === 0){
                //Tout c'est bien passé
                resolve('Enregistrement Ok');
            }else{
                //Il y a eu une erreur
                reject('Enregistrement failed');
            }
        }, 2000);
    }));
}


function afficherResultat(message){
    console.log(message);
}