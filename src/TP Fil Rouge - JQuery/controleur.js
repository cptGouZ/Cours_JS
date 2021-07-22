$(document).ready(finChargementPage);

function finChargementPage(){
    init();
/*    $('#ajout').click(ajouter);
    $('.trier').each( (idx)=>{
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

    afficherListe();
}
function init(){
    $('#savoir').val("");
    $('#auteur').val("");
    $('#date').val(new Date(Date.now()).toJSON().slice(0,10));
    $('#savoir').focus();
}

function ajouter(){
    let savoir = new SavoirInutile(
        $('#savoir').val(),
        $('#auteur').val(),
        new Date($('#date').val())
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
    let savoir = getSavoirs()[event.currentTarget.id];
    if(confirm('Etes-vous sûr de vouloir supprimer : ' + savoir.savoir)) {
        supprimerSavoir(event.currentTarget.id);
        afficherListe();
    }
}

function afficherListe(){
    let elOl = $('ol');
    elOl.html('');
    getSavoirs().forEach((objSavoir, index) => {
        let elSavoir = $('<p>', {
            text: objSavoir.savoir
        });

        let elInfos = $('<p>');
        elInfos.text(`Par ${objSavoir.auteur} le ${objSavoir.date.toLocaleDateString()}`);

        let elLi = $('<li>', {
            id: index.toString(10),
            click: supprimer
        });

        elLi.append(elSavoir);
        elLi.append(elInfos);

        elOl.append(elLi);
    })
}