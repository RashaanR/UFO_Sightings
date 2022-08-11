// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clearing out all the existing data
    tbody.html("");
    //looping through each object in the data and appending a row and cells
    // for each value in the row
    data.forEach((dataRow) => {
        //adding a row to the table body
        let row = tbody.append("tr");
        //looping through each field in the data row and adding each value 
        //as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}

function handleClick() {
    //grabing the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData
    //check to see if the a date was entered and filter for that date
    if (date) {
        //making it to where the table only show the rows where the datetime
        // is present
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuilding the table with the filterd data 
    // if no date is present the table will stay the same
    buildTable(filteredData);
//attatching an event to listen for the form button
d3.selectAll("#Filter-btn").on("click", handleClick);

//building the table when the page loads
buildTable(tableData);

};