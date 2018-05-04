$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

data_url = 'https://doyouknow-server.herokuapp.com/fact';
count_url = 'https://doyouknow-server.herokuapp.com/fact_number';


function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

$(document).ready(function(){
    httpGetAsync(data_url, function (data) {
        var obj = JSON.parse(data);
        console.log(obj.content);
        document.getElementById("fact-content").textContent = obj.content;
        document.getElementById("fact-question").textContent = obj.question;
    });

    httpGetAsync(count_url, function (data) {
        var obj = JSON.parse(data);
        console.log(obj.count);
        document.getElementById("count-fact").textContent = obj.count;
    });

});
