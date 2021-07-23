//Recompile on changes à mettre à vrai dans intelliJ. Rechercher le mot TypeScript et c'est en bas de la liste
//Typage identique à JavaScript
let unBooleen: boolean = true;
let autreVar: any = 'salut';

//Tableau
let tableau: string[] = ['un', 'deux'];
let var2: (string | number) = 10;
var2 = 'false';

//Enumeration
enum Etablissement{
    Maternelle = 10,
    Primaire = 20,
    College,
    Liycee,
    Universite
}
var ecole : Etablissement = Etablissement.College;

class Sport{
    public publique: string;
    private prive: string;
    constructor(parametre: string, public attribut: string) {
        //La déclaration de public param crée automatique l'attribut et réalise l'affectation
        this.attribut = parametre;
    }
    public afficher(): void{
        console.log(this.publique + ' ' + this.attribut);
    }
}

class SportDeCompet extends Sport implements Jouable{
    constructor(parametre: string, public attribut: string, public niveau: string) {
        super(parametre, attribut);
    }

    public afficher(): void{
        console.log(this.publique + ' ' + this.attribut + ' ' + this.niveau);
    }

    score: string;

    jouer(joueur1: string, joueur2: string): string {
        return "On a joué";
    }
}

var football:Sport = new Sport('foot', 'pourri');
var voile:SportDeCompet = new SportDeCompet('voile', 'géniale', 'top niveau');

//Interface de classe
interface Jouable{
    score: string;
    optionnel ?: string;
    jouer(joueur1: string, joueur2: string, joueur3 ?: string): string;
}

//Interface de fonction. Contrat sur le type et paramètre
interface jouer{
    (jouer: string):string;
}
var jouerAuTennis: jouer = function (jouer){
    return 'Je joue au tennis';
}

//Généricité

class Viande{}
interface Legume{}
class Poulet extends Viande{}
class Boeuf extends Viande{}
class Salade implements Legume {}
class Tomate implements Legume {}

class Sandwich<V extends Viande, L extends Legume>{
    constructor(public viande : V, public legume : L) {
    }
}
var s1 : Sandwich<Viande, Legume> = new Sandwich<Viande, Legume>(new Poulet(), new Tomate());
