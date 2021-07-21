class SavoirInutile {
    constructor(savoir, auteur, date) {
        this.savoir = savoir || '';
        this.auteur = auteur || '';
        this.date = date;
    }
    control(){
        return  this.savoir !== ''
            && this.auteur !== ''
            && this.date !== '';
    }
}