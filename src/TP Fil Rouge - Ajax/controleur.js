$(document).ready(finChargementPage);

function finChargementPage(){
    init();
    $('#ajout').click(ajouter);
    $('.trier').click(function (){
        const tri = $(this).data('search');
        trierSavoir(tri);
        afficherListe();
    })

    afficherListe();
    $('ol').on('click', 'li', supprimer)
}
function init(){
    $('#savoir').val("");
    $('#auteur').val("");
    $('#date')[0].valueAsDate = new Date(Date.now());
    $('#savoir').focus();
}

function ajouter(){
    let savoir = new SavoirInutile(
        $('#savoir').val(),
        $('#auteur').val(),
        $('#date')[0].valueAsDate
    );
    if(savoir.control()) {
        ajouterSavoir(savoir)
            .then(()=>{
                afficherListe();
                init()
            })
            .catch(()=>{
                alert('erreur ajout')}
            );
    }else{
        alert('tous les champs doivent être remplis')
    }
}

function supprimer(event){
    const savoir =$(event.currentTarget);
    const libelle = savoir.find('.savoir').html();
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + libelle)) {
        supprimerSavoir(savoir.data('uuid'))
            .then(()=> {
                afficherListe();
                init()
            })
            .catch(()=>{
                alert("erreur suppression");
            });
    }
}

function afficherListe() {
    getSavoirs()
        .then((savoirs) => {
            $('ol').empty();
            savoirs.forEach((objSavoir) => {
                let elSavoir = $('<p>', {
                    text: objSavoir.savoir,
                    class: 'savoir'
                });

                let elInfos = $('<p>');
                elInfos.text(`Par ${objSavoir.auteur} le ${objSavoir.date.toLocaleDateString()}`);

                let elLi = $('<li>', {
                    click: supprimer
                });
                elLi.data('uuid', objSavoir.uuid.toString(10))

                elLi.append(elSavoir).append(elInfos);
                $('ol').append(elLi);
            })
        })
        .catch(() => {

            }
        )
}