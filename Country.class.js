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
        topLevelDomain
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
}
