Country.fill_db()
const countries_array = Object.values(Country.all_countries);

// Pays dont au moins un pays est frontalier n'est pas dans le même continent
function outstideTheContinent() {
    let lst_results = [];
    countries_array.forEach(country => {
        let local_continent = country.continent;                // Le continent du pays traité
        if (
            country.getBorders().some(
                country_border => 
                local_continent != country_border.continent     // Si un des pays voisin n'est pas dans le même continent
                )
            ) {
            lst_results.push(country);                          // on ajoute le pays concerné à la liste finale
        }
    });
    return lst_results;
}

// Pays (possibilité de plusieurs) ayant le plus grand nombre de voisins. Affichez aussi les voisins.
function moreNeighbors() {
    let lst_results = [];
    let n_countries = countries_array.map(country => {
        country.nb_borders = country.getBorders().length                                // Ajout de la propriété nb_borders à chacun des pays
        return country;
    });
    let max_borders = Math.max(...n_countries.map(n_country => n_country.nb_borders));  // Retourne le nombre de voisins max
    lst_results = n_countries.filter(country => country.nb_borders == max_borders);     // On garder uniquement le/les max
    return lst_results.map(max_country => {
        return {
            code : max_country.alpha3Code,
            name : max_country.names["Français"],
            border : max_country.getBorders(),
            nb_borders : max_country.nb_borders
        }
    });
}

//Pays n'ayant aucun voisin
function neighborless() {

}

// Pays (possibilité de plusieurs) parlant le plus de langues. Affichez aussi les langues.
function moreLanguage() {

}

//Pays ayant au moins un voisin parlant l'une de ses langues. Affichez aussi les pays voisins et les langues en question.
function withCommonLanguage() {

}

//Pays sans aucun voisin ayant au moins une de ses monnaies.
function withoutCommonCurrency() {

}

//Pays triés par ordre décroissant de densité de population.
function sortingDecreasingDensity() {

}

//Pays ayant plusieurs Top Level Domains Internet
function moreTopLevelDomains() {

}

//listez tous les pays que l'on peut visiter en passant de l'un à l'autre. Evidemment, seuls les pays frontaliers sont accessibles depuis un pays donné.
// Paramètre d'entrée : nom_pays
function veryLongTrip() {

}