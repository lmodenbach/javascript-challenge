var sightings = data;

var body = d3.select("body");

var table = body.append("table").style("background-color", "powderblue").style("width", "500px");
table.attr("class", "table table-hover table-bordered");

var thead = table.append("thead");

var row = thead.append("tr");

var headers = ["date/time", "city", "state", "country", "shape", "comment"];

headers.forEach((header) => {
    var cell = row.append("th");
     cell.text(header);
  });

/* data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  }); */

 