class Currency{
    nom;
    code;
    symbole;

    static all_currencies=new Object();

    constructor(nom,code,symbole){
        this.nom=nom;
        this.code=code;
        this.symbole=symbole;
        if(Currency.all_currencies.keys()
            .some(curr => curr.code===code))
        {
            Currency.all_currencies[code]=this;
        }
    }

    toString() {
        return `Devise-> ${nom}, Code: ${code} Symbole: ${this.symbole}`
    }

}