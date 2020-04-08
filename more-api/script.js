document.addEventListener('DOMContentLoaded', function () {
    // default search query
    var q = "country";
    requestData(q);
    
    function requestData(q) {
        // Step 1: create new instance of request object
        let request = new XMLHttpRequest;
        console.log("1: request object created");
        console.log(q);
        // Step 2: Set the URL for the AJAX request to be the JSON file 
        request.open('GET', `https://api.covid19api.com/summary`, true);
        console.log("2: opened request file");
        // Step 3: set up event handler / callback
        request.onreadystatechange = function() {
            console.log("3: readystatechange event fired");
            
            if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText).Countries;
                console.log(data);
                s = "<table class='table'><tr>";
                s += "<tr>";
                s += "<th>Country</th>";
                s += "<th>New Confirmed</th>";
                s += "<th>Total Confirmed</th>";
                s += "<th>New Deaths</th>";
                s += "<th>Total Deaths</th>";
                s += "<th>New Recovered</th>";
                s += "<th>Total Recovered</th>";
                s += "</tr>";
                for (x in data) {
                    s += "<tr>"
                    s += "<th>" + data[x].Country + "</th>";
                    s += "<th>" + data[x].NewConfirmed + "</th>";
                    s += "<th>" + data[x].TotalConfirmed + "</th>";
                    s += "<th>" + data[x].NewDeaths + "</th>";
                    s += "<th>" + data[x].TotalDeaths + "</th>";
                    s += "<th>" + data[x].NewRecovered + "</th>";
                    s += "<th>" + data[x].TotalRecovered + "</th>";
                    s += "</tr>"
                }
                s += "</table>"

                document.getElementById("results").innerHTML = s;
            } 
            else if (request.readyState == 4 && request.status != 200) {
                document.getElementById("results").innerHTML = "Uh Oh. Something went wrong."
            }
            else {
                console.log('Reached API but threw error');
            }
        }
        
        request.onerror = function() {
            console.log("Connection error");
        };
    
        // Step 4: fire off HTTP request
        request.send();
        console.log("4: Request sent");
    }

    function generate() {
        q = document.getElementById("query").value;
        console.log('Query: ',document.getElementById("query").value);
        setTimeout(clear, 1000);
        requestData(q);
    }

    function clear() {
        document.getElementById('query').value = "";
    }

    document.getElementById("button").addEventListener("click", generate);
    document.addEventListener("keypress", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $('#button').trigger("click");
        }
    });
});
