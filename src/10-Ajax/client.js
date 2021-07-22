jQuery(function($){

    const URL = 'http://localhost:8080/';

    init();

    function init(){
        //Gérer le clic sur le form
        $('#monFormulaire').submit(function(e) {
            e.preventDefault();
            let marin = $('#nouveauMarin').val();
            $('#nouveauMarin').val('').focus();

            ajouterMarin(marin)
                .then((retour) => {
                    console.log(retour);
                    afficherMarins();
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        //afficher les marins
        afficherMarins();
    }

    function ajouterMarin(marin){
        return new Promise(((resolve, reject) => {
            if(marin === null){
                reject('Le marin est null');
            }
            else{
                $.ajax({
                    url: URL,
                    method: 'POST',
                    data: marin
                })
                    .done(() => {
                        resolve('L\'ajout du marin c\'est bien passé');
                    })
                    .fail(() => {
                        reject('Echec de l\'ajout du marin')
                    });
            }
        }));
    }

    function afficherMarins(){
        $.ajax({
            url: URL,
            method: 'GET'
        })
            //OK
            .done((marins) => {
                console.log(marins);
                let liste = $('#listeMarins');
                liste.empty();

                marins.forEach((m) => {
                    $('<div>').text(m).appendTo(liste);
                });

            })
            //Echec
            .fail((xhr, status, errorThrown) => {
                console.log('Une erreur est intervenue ' + errorThrown + ' ' + status);
                console.log(xhr);
            })
            //Toujours exécuter
            .always(() => {
                console.log('Always toujour exécuté')
            })
        ;
    }


});