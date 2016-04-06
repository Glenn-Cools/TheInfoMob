	function loadCSV(file) {
		var request;
		if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        request = new XMLHttpRequest();
    } else {
        // Code voor IE6, IE5
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open('GET', file, false);
    request.send();
    return csvJSON(request.responseText);
    }

    //var csv is the CSV file with headers
    function csvJSON(csv){

        var lines=csv.split("\n" );

        var result = [];

        var headers=lines[0].split(",");

        for(var i=1;i<lines.length;i++){

            var obj = {};
            var currentline=lines[i].split(",");

                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }

            result.push(obj);

        }
  
        return result; //JavaScript object
        //return JSON.stringify(result); //JSON
    }
