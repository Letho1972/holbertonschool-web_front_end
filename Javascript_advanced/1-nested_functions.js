
// mes variables
var globalVariable = "Welcome";

function outer() {
    // helper nested function to use below
    alert(globalVariable);

    var course = "Holberton";
    // Write the function inception within inner
    function inner() {
        alert(globalVariable + " " + course);

        var exclamation = "!";
        function inception() {
            alert(globalVariable + " " + course + exclamation);

        }
        inception();
    }
    inner();
}
outer();
