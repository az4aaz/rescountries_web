import countries from './countries.json' assert {type: 'json'};
// TODO Importer plus proprement parceque dans le sujet ils disent d'importer dans la fonction fill_db

class Country {
    constructor(
        alpha3Code,
        area,
        borders = null,
        capital,
        continent,
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
        this.flags = flags;
        this.names = names;
        this.population = population;
        this.topLevelDomain = topLevelDomain;
        this.monnaies=codesMonnaies;
        this.langues=codesLangues;
        
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
            this.topLevelDomain +
            " - "
        );
    }

    fill_db() {
        
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
