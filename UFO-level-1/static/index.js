var sightings = data;

var body = d3.select("body");

var table = body.append("table");
table.attr("class", "table table-hover table-bordered table-sm");

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

 