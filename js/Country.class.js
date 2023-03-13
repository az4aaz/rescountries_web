class Country {
    static all_countries = new Object();

    constructor(
        alpha3Code,
        area,
        borders,
        capital,
        continent,
        nativeName,
        flag,
        names,
        population,
        topLevelDomain,
        codesMonnaies,
        codesLangues
    ) {
        this.alpha3Code = alpha3Code;
        this.area = area;
        this.borders = borders;
        this.capital = capital;
        this.continent = continent;
        this.nativeName = nativeName;
        this.flag = flag;
        this.names = names;
        this.population = population;
        this.topLevelDomain = topLevelDomain;
        this.monnaies=codesMonnaies;
        this.langues=codesLangues;
        
        Country.all_countries[this.alpha3Code] = this;
    }

    toString() {
        return (
            this.alpha3Code +
            " - " +
            this.area +
            " - " +
            this.borders +
            " - " +
            this.capital +
            " - " +
            this.continent +
            " - " +
            this.flag +
            " - " +
            Object.values(this.names) +
            " - " +
            this.population +
            " - " +
            this.topLevelDomain
        );
    }

    static fill_db() {

        countries.forEach((country) => {
            var currencies=[]
            var languages=[]
            console.log("1");
            currencies=(country.currencies)?Array.from(country.currencies).map(curr => {
                new Currency(curr.name,curr.code,curr.symbol);
                return curr.code;
            }) : [];
            languages=(country.languages)?Array.from(country.languages).map(lang=>{
                new Language(lang.iso639_2,lang.name);
                return lang.iso639_2;
            }) : [];
   
            let c = new Country(
                country.alpha3Code,
                country.area,
                (country.borders != undefined) ? country.borders : [],
                country.capital,
                country.region,
                country.nativeName,
                country.flags['svg'],
                {"Français": country.translations.fr?country.translations.fr:"",
                "Anglais": country.translations.br?country.translations.br:"",
                "Allemand": country.translations.de?country.translations.de:"",
                "Espagnol": country.translations.es?country.translations.es:"",
                "Italie": country.translations.it?country.translations.it:""},
                country.population,
                country.topLevelDomain,
                currencies,
                languages

            );
        });

        
    }

    getCurrencies(){
        var self=this;
        return Object.values(Currency.all_currencies).filter(currency => self.monnaies.includes(currency.code))
    }

    getLanguages(){
        var self=this;
        return Object.values(Language.all_languages).filter(lang => self.langues.includes(lang.codeIso))
    }

    getPopDensity(){
        return this.population / this.area;
    }  

    getBorders(){
        var self=this;
        return Object.values(Country.all_countries).filter(country => self.borders.includes(country.alpha3Code));
    }
}
