class Country {
    static all_countries = [];

    constructor(
        alpha3Code,
        area,
        borders,
        capital,
        continent,
        nativeName,
        flags,
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
        this.flags = flags;
        this.names = names;
        this.population = population;
        this.topLevelDomain = topLevelDomain;
        this.monnaies=codesMonnaies;
        this.langues=codesLangues;
        
        Country.all_countries[this.alpha3Code] = this;
    }

    get toString() {
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
            this.flags +
            " - " +
            this.names +
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
            currencies=country.currencies.map(curr => {
                new Currency(curr.code,curr.name,curr.symbole);
                return curr.code;
            });
            languages=country.languages.map(lang=>{
                new Language(lang.iso639_2,lang.nom);
                return lang.code;
            });
            new Country(
                country.alpha3Code,
                country.area,
                (country.borders != undefined) ? country.borders : [],
                country.capital,
                country.continent,
                country.nativeName,
                country.flags,
                country.translations,
                country.population,
                country.topLevelDomain,
                currencies,
                languages

            );
        });
    }

    getCurrencies(){
        var self=this;
        return Currency.all_currencies.values().filter(currency => self.monnaies.contains(currency.code))
    }

    getLanguages(){
        var self=this;
        return Language.all_languages.values().filter(lang => self.langues.contains(lang.code))
    }

    getPopDensity(){
        return this.population / this.area;
    }

    getBorders(){
        var self=this;
        return Country.all_countries.values().filter(country => self.country.contains(country.code));
    }
}
