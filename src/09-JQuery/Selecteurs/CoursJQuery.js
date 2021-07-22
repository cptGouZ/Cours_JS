//JQuery sert à la manipulation du DOM
//nom de la librairie : jQuery
//alias de la librairie : $ (attention il peut être utilisé par d'autres librairies

function toutLeMondeSeCache(){
    console.log("bonjour");
    console.log(jQuery('div'));
    jQuery('div').hide();
}
function toutLeMondeReapparait(){
    jQuery('div').show();
}
function leCapitaineSeCache(){
    $('#capitaine').hide();
}
function lesMarinsSeCachent(){
    $('.marin:eq(2)').hide();
}
function lesBateauxSeCache(){
    $('div>div[class="bateau"]').hide();
}