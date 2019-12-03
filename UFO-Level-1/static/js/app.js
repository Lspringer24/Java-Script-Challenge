// UFO Sightings - Javascript


let tbody = d3.select("tbody");

var tableData = data;

// Build Table
function buildTable(data){
   
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
       
        let row = tbody.append("tr");
       
        Object.values(dataRow).forEach((val) => {
            
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

function handleClick(){
    // No Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);