class Language{
    codeIso;
    nom;

    static all_languages=new Object();

    constructor(codeIso,nom){
        this.codeIso=codeIso;
        this.nom=nom;

        if(Language.all_languages.keys()
            .some(lang => lang.codeIso===codeIso))
        {
            Language.all_languages[codeIso]=this;
        }
    }
    

    toString(){
        return `Langue-> ${nom}, Code iso: ${this.codeIso}`
    }
}