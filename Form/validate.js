function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    var y = document.forms["myForm"]["lastname"].value;
    var p = document.forms["myForm"]["createpass"].value;
    var q = document.forms["myForm"]["confirmpass"].value;
    var d = document.forms["myForm"]["bday"].value;
    var g = document.forms["myForm"]["gender"].value;
    if (x == null || x == ""||x=="First") {
        alert("First Name must be filled out");
        return false;
    }
    else if (y == null || y == ""||x=="Last") {
        alert("Last Name must be filled out");
        return false;
    }
    else if (p == null || p == ""||p=="Create Password") {
        alert("Password must be filled out");
        return false;
    }
    else if (q!=p){
    	alert("Both passwords are not the same");
    	return false;
    }
    else if (d == null || d == "") {
        alert("Birth Date must be entered");
        return false;
    }
    else if (g == null || !(g == "Male"||g == "Female"||g == "Other")) {
        alert("Please enter Male,Female or Other for Gender");
        return false;
    }
}