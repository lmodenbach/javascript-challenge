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

/*select button and form and specify fiterTable function for listener response*/
var button = d3.select("#button");
var form = d3.select("#form");
  
button.on("click", filterTable);
form.on("submit", filterTable);


function filterTable() {

    /*prevent default page refresh*/
    d3.event.preventDefault();
    
    /*note whether or not there's input*/
    var inputFound = false;

    /*collect input from form by connecting to input id, get value of the element, if input found
    turn flag on*/
    var inputElement = d3.select("#sightings-form-input");
    var inputValue = inputElement.property("value");
    if (inputValue) {
        inputFound = true;
    }

    /*filter out sighting entries where datetime matches user input*/
    var filtered = sightings.filter(sighting => sighting.datetime === inputValue);
    
    /*drop table to redraw it*/
    d3.selectAll("table").remove();

    /*if there are any results pass them to create table function, else if there was input but 
    no results draw an empty table, else if no input just refresh the original table*/
    if (filtered) {
        createTable(filtered); 
    }
    else if (inputFound) {
        createTable();
    }
    else {
        createTable(sightings);
    }
}