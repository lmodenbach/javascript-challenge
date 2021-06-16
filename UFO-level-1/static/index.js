var sightings = data;

var body = d3.select("body");

var table = body.append("table");
table.attr("class", "table table-bordered table-hover");
//table.attr("class", "table");

var thead = table.append("thead");

var row = thead.append("tr");

var headers = ["Date/Time", "City", "State", "Country", "Shape", "Duration", "Comment"];

headers.forEach((header) => {
    var cell = row.append("th");
     cell.text(header);
  });

data.forEach((sighting) => {
    var row = table.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });

 