var currentNumberWraper = document.getElementById('currentNumber')
var currentNumber = 0;
document.getElementById("currentNumber").style.color="green";

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWraper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color="green";
    } else {
        document.getElementById("currentNumber").style.color="red";
    }
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWraper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color="green";
    } else {
        document.getElementById("currentNumber").style.color="red";
    }
}