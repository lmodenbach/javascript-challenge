var sightings = data;
createTable(sightings);

function createTable(data) {
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
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
var button = d3.select("#button");
var form = d3.select("#form");
  
button.on("click", searchTable);
form.on("submit", searchTable);

function searchTable() {

    d3.event.preventDefault();
    
    var inputElement = d3.select("#sightings-form-input");
    var inputValue = inputElement.property("value");

    var filtered = sightings.filter(sighting => sighting.datetime === inputValue);
    
    d3.selectAll("table").remove();
    if (filtered.length > 0)
        createTable(filtered); 
    else
        createTable(sightings);
}








function searchTable() {

    d3.event.preventDefault();
    
    var dateInputElement = d3.select("#date-form-input");
    var dateInputValue = dateInputElement.property("value");
    var dateFiltered = sightings.filter(sighting => sighting.datetime === dateInputValue);

    var cityInputElement = d3.select("#city-form-input");
    var cityInputValue = cityInputElement.property("value");
    var cityFiltered = sightings.filter(sighting => sighting.city.toUpperCase() === cityInputValue.toUpperCase());
    
    var stateInputElement = d3.select("#state-form-input");
    var stateInputValue = stateInputElement.property("value");
    var stateFiltered = sightings.filter(sighting => sighting.state.toUpperCase() === stateInputValue.toUpperCase());
    
    var countryInputElement = d3.select("#country-form-input");
    var countryInputValue = countryInputElement.property("value");
    var countryFiltered = sightings.filter(sighting => sighting.country.toUpperCase() === countryInputValue.toUpperCase());

    var shapeInputElement = d3.select("#shape-form-input");
    var shapeInputValue = shapeInputElement.property("value");
    var shapeFiltered = sightings.filter(sighting => sighting.shape.toUpperCase() === shapeInputValue.toUpperCase());
    
    
     
    
}