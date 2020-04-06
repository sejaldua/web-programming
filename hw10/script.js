document.addEventListener('DOMContentLoaded', function () {
    // default search query
    var q = "chicken";
    requestData(q);
    
    function requestData(q) {
        // create new request object
        let request = new XMLHttpRequest;
        console.log("1: request object created");
        console.log(q);
        // Set the URL for the AJAX request to be the JSON file 
        request.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=`+q, true);
        console.log("2: opened request file");
        
        request.onload = function() {
            console.log("3: readystatechange event fired");
    
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText).meals;
                if (data == null) 
                {
                    document.getElementById("meals").innerHTML = "<br><br><span>Could not find any meals with that ingredient. :(</span>";
                } else 
                {
                    s = "<br><br><table class='table'>";
                    s += "<tr class='hrow'>";
                    s += "<th id='col1'><b>Meal Title</b></th>";
                    s += "<th><b>Image</b></th>";
                    s += "</tr>";
                    for (x in data) {
                        s += "<tr>";
                        s += "<th id='col1'>" + data[x].strMeal + "</th>";
                        s += "<th><img src='" + data[x].strMealThumb + "' width='100' height='100'></img></th>";
                        s += "</tr>";
                    }

                    console.log('ID:', data);
                    console.log(JSON.parse(request.responseText).data);
                    
                    document.getElementById("meals").innerHTML = s;
                }
            } else {
                console.log('Reached API but threw error');
            }
        }
        
        request.onerror = function() {
            console.log("Connection error");
        };
    
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
