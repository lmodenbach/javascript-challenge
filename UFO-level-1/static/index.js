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