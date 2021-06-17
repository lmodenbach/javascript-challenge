var sightings = data;
createTable(sightings);

function createTable(passed) {
    var body = d3.select("body");
    var table = body.append("table");
    table.attr("class", "table table-hover table-bordered");

    var thead = table.append("thead");
    var row = thead.append("tr");
    var headers = ["Date/Time", "City", "State", "Country", "Shape", "Duration", "Comment"];
    headers.forEach((header) => {
        var cell = row.append("th");
        cell.text(header);
    });

    var tbody = table.append("tbody");
    passed.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
var button = d3.select("#button");
var dateForm = d3.select("#date-form");
var cityForm = d3.select("#city-form");
var stateForm = d3.select("#state-form");
var countryForm = d3.select("#country-form");
var shapeForm = d3.select("#shape-form");
  
button.on("click", searchTable);
dateForm.on("submit", searchTable);
cityForm.on("submit", searchTable);
stateForm.on("submit", searchTable);
countryForm.on("submit", searchTable);
shapeForm.on("submit", searchTable);

function searchTable() {

    d3.event.preventDefault();
    
    var inputFound = false;
    var finalFiltered = sightings;

    var dateInputElement = d3.select("#date-form-input");
    var dateInputValue = dateInputElement.property("value");
    var dateFiltered = sightings.filter(sighting => sighting.datetime === dateInputValue);
    if (dateFiltered.length > 0) {
        inputFound = true;
        finalFiltered = dateFiltered;
    }

    var cityInputElement = d3.select("#city-form-input");
    var cityInputValue = cityInputElement.property("value");
    var cityFiltered = sightings.filter(sighting => sighting.city.toUpperCase() === cityInputValue.toUpperCase());
    if (cityFiltered.length > 0) {
        inputFound = true;
        finalFiltered = finalFiltered.filter(value => cityFiltered.includes(value));
    }

    var stateInputElement = d3.select("#state-form-input");
    var stateInputValue = stateInputElement.property("value");
    var stateFiltered = sightings.filter(sighting => sighting.state.toUpperCase() === stateInputValue.toUpperCase());
    if (stateFiltered.length > 0) {
        inputFound = true;
        finalFiltered = finalFiltered.filter(value => stateFiltered.includes(value));
    }

    var countryInputElement = d3.select("#country-form-input");
    var countryInputValue = countryInputElement.property("value");
    var countryFiltered = sightings.filter(sighting => sighting.country.toUpperCase() === countryInputValue.toUpperCase());
    if (countryFiltered.length > 0) {
        inputFound = true;
        finalFiltered = finalFiltered.filter(value => countryFiltered.includes(value));
    }

    var shapeInputElement = d3.select("#shape-form-input");
    var shapeInputValue = shapeInputElement.property("value");
    var shapeFiltered = sightings.filter(sighting => sighting.shape.toUpperCase() === shapeInputValue.toUpperCase());
    if (shapeFiltered.length > 0) {
        inputFound = true;  
        finalFiltered = finalFiltered.filter(value => shapeFiltered.includes(value));
    }
    
    d3.selectAll("table").remove();
    if (finalFiltered.length > 0)
        createTable(filtered); 
    else if (dateFiltered.length <= 0 && cityFiltered.length <= 0 && stateFiltered.length <= 0 && countryFiltered.length <= 0 && shapeFiltered.length <= 0 && inputFound)
        createTable();
    else
        createTable(sightings);
    
}