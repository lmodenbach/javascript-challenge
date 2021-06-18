/*import data and send to function to create table*/
var sightings = data;
createTable(sightings);

/*append a table to the body of html, set bootstrap table classes*/
function createTable(passed) {
    var body = d3.select("body");
    var table = body.append("table");
    table.attr("class", "table table-hover table-bordered");

/*add table head to table, then a row, then loop through header array and add them to table headers*/
    var thead = table.append("thead");
    var row = thead.append("tr");
    var headers = ["Date/Time", "City", "State", "Country", "Shape", "Duration", "Comment"];
    headers.forEach((header) => {
        var cell = row.append("th");
        cell.text(header);
    });

    /*add a table body to table, loop through sightings data and append value of pairs to a table data
    element*/
    var tbody = table.append("tbody");
    passed.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

/*select button and forms and specify fiterTable function for listener response*/
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

    /*prevent default page refresh*/
    d3.event.preventDefault();
    
    /*note whether or not there's input, create final filtered list to absorb other filters*/
    var inputFound = false;
    var finalFiltered = sightings;

    /*collect input from forms by connecting to input ids, get value of the elements, if input found
    turn flag on*/
    /*if input found filter out the final array to just entries also found in that particular filter,
    down the line*/
    var dateInputElement = d3.select("#date-form-input");
    var dateInputValue = dateInputElement.property("value");    
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


    /*drop table to redraw it*/
    d3.selectAll("table").remove();

    /*if there are any results pass them to create table function, else if there was input but 
    no results draw an empty table, else if no input just refresh the original table*/
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