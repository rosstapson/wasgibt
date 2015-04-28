document.querySelector('#uName').onkeydown = validate;
    	function validate(e) {
    		//console.log("dude");
        	var regex = new RegExp("[a-zA-Z0-9\b\n\r]");
	        var key = e.keyCode || e.which;
    	    key = String.fromCharCode(key);

	        if(!regex.test(key)) {
	            $('input[type="submit"]').prop( "disabled", true );
	        }
	        else {
	        	$('input[type="submit"]').prop( "disabled", false );
	        }
    }