window.onload = function (){
    document.getElementById('ecrire')
        .addEventListener('click', ()=>{
            //sessionStorage : lié à la session
            sessionStorage.setItem('cle','valeur');
            //localStorage : lié au navigateur (cookie)
            localStorage.setItem('key','value');
        })

    document.getElementById('lire')
        .addEventListener('click', ()=>{
            let data = localStorage.getItem('cle');
            console.log('cle : ' + data);
        })
}