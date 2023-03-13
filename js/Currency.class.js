class Currency{
    nom;
    code;
    symbole;

    static all_currencies=new Object();

    constructor(nom,code,symbole){
        this.nom=nom;
        this.code=code;
        this.symbole=symbole;
        if(!Object.keys(Currency.all_currencies)
            .some(curr => curr.code===code))
        {
            Currency.all_currencies[code]=this;
        }
    }

    toString() {
        return `Devise-> ${nom}, Code: ${code} Symbole: ${this.symbole}`
    }

}