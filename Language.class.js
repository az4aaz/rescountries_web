class Language{
    codeIso;
    nom;

    constructor(codeIso,nom){
        this.codeIso=codeIso;
        this.nom=nom;
    }

    toString(){
        return `Langue-> ${nom}, Code iso: ${this.codeIso}`
    }
}