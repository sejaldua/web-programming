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
                var data = JSON.parse(request.responseText).global;
                console.log(data);

                document.getElementById("results").innerHTML =  "<p>"+data+"</p>";
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
