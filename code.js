 function convert() {
     //dropdown box getting their value from ID
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
     // AJAX API to request data.
            var xmlhttp = new XMLHttpRequest();
     // FOREX API address
            var url = "http://api.fixer.io/latest?symbols=" + from + "," + to;
     //get request to server. true = Asynchronous
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
     
            xmlhttp.onreadystatechange = function() {
                // ajax server
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    
                    var result = xmlhttp.responseText;
                    //convert json data to JS
                    var jsResult = JSON.parse(result);
                    //calc the return between 2 forex rates
                    var oneUnit = jsResult.rates[to]/jsResult.rates[from];
                    // get the value inputted in the valid text box.
                    var amount = document.getElementById("fromCurrency").value;
                    // calc the inputted box to the 'To' box
                    document.getElementById("toCurrency").value = (oneUnit*amount).toFixed(2);
                }
            }
        }
var tableContainer = document.getElementById("forex-info");

var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/forex.json', true);
xhr.responseText = 'text';
xhr.send();

xhr.onload = function() {
    if (xhr.status=== 200) {
        var longCountries = JSON.parse(xhr.responseText);
        console.log(longCountries);
myCountry = "";
    for (i = 0; i < longCountries.currency.length; i++) {

        myCountry += "<p>"+longCountries.currency[i].long+"</p>";
    }// end of for loop
        document.getElementById('currencyList').innerHTML = myCountry;
    }
};

var myData = 'https://api.fixer.io/latest'
// new ajax request for list
var xhttp = new XMLHttpRequest();
//ajax function
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(xhttp.responseText)
            var myString = "";
        // forEach loop, looping through the object
            Object.keys(res.rates).forEach((e)=>{
            //selecting the data from api
                var x = (`${e}: ${res.rates[e]}`);
                //show the Country Codes
                myString += "<p>"+ e +" - ";
                //Shows the rate
                myString += res.rates[e]+ "</p>";
                var lastUpload = res.date;
                            document.getElementById("date").innerHTML = "Rates correct at  (" +lastUpload+")";

                
})
            document.getElementById("currencyList").innerHTML = myString;
        
    }
};

xhttp.open("GET", myData, true);
xhttp.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/forex.json', true);
xhr.responseText = 'text';
xhr.send();

xhr.onload = function() {
    if (xhr.status=== 200) {
        var longCountries = JSON.parse(xhr.responseText);
        console.log(longCountries);
myCountry = "";
    for (i = 0; i < longCountries.currency.length; i++) {

        myCountry += "<p>"+longCountries.currency[i].long+"</p>";
    }// end of for loop
        document.getElementById('long').innerHTML = myCountry;
    }
};
