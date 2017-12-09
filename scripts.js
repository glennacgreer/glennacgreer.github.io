function refleciton() {
	var date = document.getElementById("input");
	if (date = "MDCCCLXXXVIII") || (date = "mdccclxxxviii") || (date = "Mdccclxxxviii") {
		window.location.assign("bplinside.html") ;
	}
	else {
		window.location.assign("reflectionpool.html");
	}
}

function inside() {
	var title = document.getElementById("input");
	if (title = "A touchstone to antiquity") || (title = "A Touchstone to Antiquity") || (title = "a touchstone to antiquity") {
		window.location.assign("courtyard.html");
	}
	else {
		window.location.assign("bplinside.html");
	}
}

function courtyard() {
	var name = document.getElementById("input");
	if (name = "Elizabeth") || (name = "elizabeth") {
		window.location.assign("end.html");
	}
	else {
		window.location.assign("courtyard.html");
	}
}