function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        {
            city :'Oakland',
            population: 406253         
        },
        
        {
            city:'Minneapolis',
            population: 400070
        },
        
        {
            city:'Houston',
            population: 2196000
        },
        
        {
            city:'Atlanta',
            population: 447841
        }   
    ];
        

    //create the table element
   $("mydiv").append("<table>");

   $("table").append("<tr>");

   $("tr").append("<th>City</th><th>Population</th>");

   for (var i = 0; i < cityPop.length; i++) {
       var rowHtml = "<tr><td>"+ cityPop[i].city+"</td><td>" + cityPop[i].population + "</td></tr>";
        $("table").append(rowHtml);
        };
   };

//call the initialize function when the window has loaded
window.onload = initialize();