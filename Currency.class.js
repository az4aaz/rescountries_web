class Currency{
    nom;
    code;
    symbole;

    constructor(nom,code,symbole){
        this.nom=nom;
        this.code=code;
        this.symbole=symbole;
    }

    toString() {
        return `Devise-> ${nom}, Code: ${code} Symbole: ${this.symbole}`
    }

}