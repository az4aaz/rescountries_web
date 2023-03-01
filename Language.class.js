class Language{
    codeIso;
    nom;

    static all_languages=new Array();

    constructor(codeIso,nom){
        this.codeIso=codeIso;
        this.nom=nom;

        if(Language.all_languages
            .some(lang => lang.codeIso===codeIso))
        {
            Language.push(this);
        }
    }
    

    toString(){
        return `Langue-> ${nom}, Code iso: ${this.codeIso}`
    }
}