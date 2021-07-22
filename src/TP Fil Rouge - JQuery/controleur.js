$(document).ready(finChargementPage);

function finChargementPage(){
    init();
/*  $('.trier').each( (idx)=>{
        const btn=$('.trier')[idx];
        const tri = $(btn).data("search");
        $(btn).click( ()=>{
            trierSavoir(tri);
            afficherListe();
        });
    })*/

// autre solution avec THIS
    $('.trier').click(function (){
        const tri = $(this).data('search');
        trierSavoir(tri);
        afficherListe();
    })

    $('#ajout').click(ajouter);
    afficherListe();

    //Délégation d'évènement
    //$(parent).on(action, enfant, action)
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
        ajouterSavoir(savoir);
        afficherListe();
        init();
    }else{
        alert('tous les champs doivent être remplis')
    }
}

function supprimer(event){
    const savoir =$(event.currentTarget);
    const libelle = savoir.find('.savoir').html();
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + libelle)) {
        supprimerSavoir(savoir.attr('id'));
        afficherListe();
    }
}

function afficherListe(){
    let elOl = $('ol');
    elOl.empty();
    getSavoirs().forEach((objSavoir, index) => {
        let elSavoir = $('<p>', {
            text: objSavoir.savoir,
            class: 'savoir'
        });

        let elInfos = $('<p>');
        elInfos.text(`Par ${objSavoir.auteur} le ${objSavoir.date.toLocaleDateString()}`);

        let elLi = $('<li>', {
            id: index.toString(10),
            click: supprimer
        });

        elLi.append(elSavoir).append(elInfos);
        elOl.append(elLi);
    })
}