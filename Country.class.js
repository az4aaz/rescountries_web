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
        topLevelDomain
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
                country.topLevelDomain
            );
        });
    }
}
