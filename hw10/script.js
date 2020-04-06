document.addEventListener('DOMContentLoaded', function () {
    var q = "tada"; // search query
    requestData(q);
    
    function requestData(q) {
        // Make instance of request object
        let request = new XMLHttpRequest;
        console.log("1: request object created");
    
        // Set the URL for the AJAX request to be the JSON file 
        request.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=`+q, true);
        console.log("2: opened request file");
        
        // Set up event handler/callback
        request.onload = function() {
            console.log("3: readystatechange event fired");
    
            if (request.status >= 200 && request.status < 400) {
                // wait for done + success
                // data.data.images.original.url
                var data = JSON.parse(request.responseText).meals[0].strMeal;
                console.log('ID:', data);
                console.log(JSON.parse(request.responseText).data);
                
                document.getElementById("giphyme").innerHTML = '<center><img src = "https://media.giphy.com/media/'+data+'/giphy.gif"  title="GIF via Giphy"></center>';
            } else {
                console.log('Reached giphy, but API returned an error');
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
        requestData(q);
    }

    document.getElementById("button").addEventListener("click", generate);
});
