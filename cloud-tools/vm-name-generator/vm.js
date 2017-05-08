

    function generateName() {
        var purpose = document.getElementById("purpose").value;
        purpose = purpose.charAt(0).toUpperCase() + purpose.slice(1);
        var e = document.getElementById("environment");
        var environment = e.options[e.selectedIndex].value;
        var st = document.getElementById("servertype");
        var servertype = st.options[st.selectedIndex].value;
        var servernumber = 1; //TODO: come up with a way to keep track of this

        var generatedName = "";
        var storageAccName = "";

        if (purpose !== "" && environment !== "" & servertype !== "") {
        	generatedName = purpose + "-" + environment + servertype + servernumber;
        	storageAccName = purpose.toLowerCase() + environment.toLowerCase() + servertype.toLowerCase() + servernumber + "st0"
        } 
    	document.getElementById("generatedName").innerHTML = generatedName;
    	document.getElementById("storageAccName").innerHTML = storageAccName;
    }
