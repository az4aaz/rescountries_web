class Currency{
    nom;
    code;
    symbole;

    static all_currencies=new Array();

    constructor(nom,code,symbole){
        this.nom=nom;
        this.code=code;
        this.symbole=symbole;
        if(Currency.all_currencies
            .some(curr => curr.code===code))
        {
            Currency.push(this);
        }
    }

    toString() {
        return `Devise-> ${nom}, Code: ${code} Symbole: ${this.symbole}`
    }

}