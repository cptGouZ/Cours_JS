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
//Callback
function alertMsg(callback){
    const msg = document.querySelector('input[name="messageCallback"]').value;
    alert(msg);
    callback(msg);
}

//Promise : traitement des appels asynchrones
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
    console.log('Success' + message);
}