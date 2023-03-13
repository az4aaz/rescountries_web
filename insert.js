Country.fill_db()
const countries_array = Object.values(Country.all_countries);

const countries_tab = document.getElementsByTagName("tbody")[0];

function insert_dom() {
    countries_array.forEach(pays => {
        countries_tab.innerHTML += '<tr><td>' + pays.names["Français"] + '</td><td>' + pays.population + '</td><td>' + pays.area + '</td><td>' + pays.getPopDensity() + '</td><td>' + pays.continent + '</td><td><img height=20px src="' + pays.flag + '"></td></tr>';
    });
}

function insert_dom_v2() {
    const tr_template = document.getElementsByTagName["tr"];
}