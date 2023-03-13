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
        country.nb_borders = country.getBorders().length;                                // Ajout de la propriété nb_borders à chacun des pays
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
    let lst_results = [];
    let n_countries = countries_array.map(country => {
        country.nb_borders = country.getBorders().length;                                // Ajout de la propriété nb_borders à chacun des pays
        return country;
    });
    lst_results = n_countries.filter(country => country.nb_borders == 0);     // On uniquement ceux qui n'ont pas de pays voisins
    return lst_results.map(country => {
        return {
            code : country.alpha3Code,
            name : country.names["Français"],
            border : country.getBorders(),
            nb_borders : country.nb_borders
        }
    });
}

// Pays (possibilité de plusieurs) parlant le plus de langues. Affichez aussi les langues.
function moreLanguage() {
    let lst_results = [];
    let n_countries = countries_array.map(country => {
        country.nb_languages = country.getLanguages().length;                                // Ajout de la propriété nb_languages à chacun des pays
        return country;
    });
    let max_languages = Math.max(...n_countries.map(n_country => n_country.nb_languages));  // Retourne le nombre de langues max
    lst_results = n_countries.filter(country => country.nb_languages == max_languages);     // On garder uniquement le/les max
    return lst_results.map(max_country => {
        return {
            code : max_country.alpha3Code,
            name : max_country.names["Français"],
            languages : max_country.getLanguages(),
            nb_languages : max_country.nb_languages
        }
    });
}

//Pays ayant au moins un voisin parlant l'une de ses langues. Affichez aussi les pays voisins et les langues en question.
function withCommonLanguage() {
    let countries = Object.values(Country.all_countries);
    retour=[];
    for (const iterator of countries) {
        countWithlangInCommon=[]
        for(const border of iterator.getBorders()){
            langInCommon=[];
            for(const langue of border.langues){
                if(iterator.langues.includes(langue)){
                    langInCommon.push(langue);
                }
            }
            if(langInCommon.length > 0){
                    countWithlangInCommon.push({
                    voisins: border,
                    langues: langInCommon
                })
            }
        }
        if(countWithlangInCommon.length > 0){
            retour.push({
                pays: iterator,
                neighboorWithlangInCommon: countWithlangInCommon
            })
        }
    }
    return retour;
    
}

//Pays sans aucun voisin ayant au moins une de ses monnaies.
function withoutCommonCurrency() {
    let countries = Object.values(Country.all_countries);
    retour=[];
    for (const iterator of countries) {
        countWithoutCommonCurr=[]
        for(const border of iterator.getBorders()){
            currInCommon=[];
            if(!border.monnaies.some( monnaie =>
                iterator.monnaies.includes(monnaie)
            ))
            {
                countWithoutCommonCurr.push(border)
            }
        }
        if(countWithoutCommonCurr.length > 0){
            retour.push({
                pays: iterator,
                neighboorWithoutCommonCurr: countWithoutCommonCurr
            })
        }
    }
    return retour;

}

//Pays triés par ordre décroissant de densité de population.
function sortingDecreasingDensity() {
    let lst_results = countries_array.sort((countryA, countryB) => {return countryB.getPopDensity() - countryA.getPopDensity();});
    return lst_results;
}

//Pays ayant plusieurs Top Level Domains Internet
function moreTopLevelDomains() {
    let lst_results = [];
    let n_countries = countries_array.map(country => {
        country.nb_level = country.topLevelDomain.length;                                // Ajout de la propriété nb_languages à chacun des pays
        return country;
    });
    lst_results = n_countries.filter(country => country.nb_level > 1);     // On garder uniquement le/les max
    return lst_results.map(max_level => {
        return {
            code : max_level.alpha3Code,
            name : max_level.names["Français"],
            top_level_domains : max_level.topLevelDomain,
            nb_level : max_level.nb_level
        }
    });
}

// Fonction recursive pour verylongtrip
function recurVeryLongTrip(pays,path = []) {
    path.push(pays.alpha3Code);
   
    let borderNotInPath = pays.getBorders().filter(border => !(path.includes(border.alpha3Code)));
    borderNotInPath.forEach(border => {
        recurVeryLongTrip(border, path);
    });
    
}

function findCountryByName(nom_pays) {
    return countries_array.find(pays => pays.names["Français"] == nom_pays);
}

//listez tous les pays que l'on peut visiter en passant de l'un à l'autre. Evidemment, seuls les pays frontaliers sont accessibles depuis un pays donné.
// Paramètre d'entrée : nom_pays
function veryLongTrip(nom_pays) {
    let pays_depart = findCountryByName(nom_pays);
    let paths = [];
    recurVeryLongTrip(pays_depart, paths);
    return paths;
}