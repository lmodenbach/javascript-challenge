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
  
button.on("click", filterTable);
dateForm.on("submit", filterTable);
cityForm.on("submit", filterTable);
stateForm.on("submit", filterTable);
countryForm.on("submit", filterTable);
shapeForm.on("submit", filterTable);

function filterTable() {

    d3.event.preventDefault();
    
    var inputFound = false;
    var finalFiltered = sightings;

    var dateInputElement = d3.select("#date-form-input");
    var dateInputValue = dateInputElement.property("value");
    
    console.log(dateInputValue);
    
    if (dateInputValue) {
        inputFound = true; 
        finalFiltered = finalFiltered.filter(sighting =>
            sighting.datetime === dateInputValue);   
    }


    var cityInputElement = d3.select("#city-form-input");
    var cityInputValue = cityInputElement.property("value");
    if (cityInputValue) {
        inputFound = true; 
        finalFiltered = finalFiltered.filter(sighting => 
            sighting.city.toUpperCase() === cityInputValue.toUpperCase());
    }


    var stateInputElement = d3.select("#state-form-input");
    var stateInputValue = stateInputElement.property("value");
    if (stateInputValue) {
        inputFound = true; 
        finalFiltered = finalFiltered.filter(sighting =>
            sighting.state.toUpperCase() === stateInputValue.toUpperCase());
    }


    var countryInputElement = d3.select("#country-form-input");
    var countryInputValue = countryInputElement.property("value");
    if (countryInputValue) {
        inputFound = true; 
        finalFiltered = finalFiltered.filter(sighting =>
            sighting.country.toUpperCase() === countryInputValue.toUpperCase());
    }


    var shapeInputElement = d3.select("#shape-form-input");
    var shapeInputValue = shapeInputElement.property("value");
    if (shapeInputValue) {
        inputFound = true; 
        finalFiltered = finalFiltered.filter(sighting =>
            sighting.shape.toUpperCase() === shapeInputValue.toUpperCase());
    }



    d3.selectAll("table").remove();
    if (finalFiltered) {
        createTable(finalFiltered); 
    }
    else if (inputFound) {
        createTable();
    }
    else {
        createTable(sightings);
    }
}