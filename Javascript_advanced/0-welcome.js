
// do some job with local variables that should not be seen outside

function welcome(firstName, lastName) {
    // Let 
    var fullName = firstName + " " + lastName;
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}

