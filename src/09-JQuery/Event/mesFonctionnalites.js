jQuery(document).ready(
    function ($){
        //ici correspond au window.onload
       console.log( $('div'));
    }
);

jQuery( ($) =>{
    //Ajout d'un event au bouton
    $('#btToutLeMondeSeCache').on('click', toutLeMondeSeCache);

    //Réaction du bouton par un click
    $('#btToutLeMondeReapparait').click(function(event){
        console.log(event.currentTarget);
        $('div').show(1000); //Le temps permet de faire une animation
    });

    $('#lienENIEcole').on('click', (event) => {
        //arrêter le comportement standard de l'event
        event.preventDefault();

        //Créer du html avec jQuery
        let elem = $('<div class="marin">M12</div>');

        let elem2 = $('<div>', {
           html: "Texte de la div",
           class: 'maClass'
        });
        /*A partir d'un élément existant
        append() : ajoute en tant qu'enfant à la fin des enfants
        prepend() : ajoute en tant qu'enfant au début des enfants
        before() : ajoute avant l'élément
        after() : ajoute après l'élémént
         */
        $('.equipage').append(elem);

        /*
        A partir du nouvel élément
        appendTo()
        prependTo()
        insertBefore()
        insertAfter()
         */
        elem2.appendTo($('.equipage'));
    });

    //Délégation d'évènements
    //$(parent).on(action, enfant, action)
    $('.equipage').on('click', '.marin', function (event){
       //event.currentTarget.remove();

       //Transformer un élément html en objet JQuery
       let elemt =  $(event.currentTarget).remove();

       //detach() supprime l'élément et le renvoi avec ses évènements
       //let elemt =  $(event.currentTarget).detach();

        //cloner un élément
        let newElemClone = elemt.clone();
    });
});

function toutLeMondeSeCache(){
    console.log(jQuery('div'));
    jQuery('div').hide(500);
}