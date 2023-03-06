class Language{
    codeIso;
    nom;

    static all_languages=new Object();

    constructor(codeIso,nom){
        this.codeIso=codeIso;
        this.nom=nom;

        if(!Object.keys(Language.all_languages)
            .some(lang => lang.codeIso===codeIso))
        {
            Language.all_languages[codeIso]=this;
        }
    }
    

    toString(){
        return `Langue-> ${nom}, Code iso: ${this.codeIso}`
    }
}