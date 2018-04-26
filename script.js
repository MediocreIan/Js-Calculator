let fin = false;
window.onload = function() {

	let operate = () => {
    let math = document.getElementById('screen').value;
    math = math.replace('x', '*');
    math = math.replace('÷', '/');
    document.getElementById('screen').value = eval(math);
    fin = true;
} // tied to equals key. evaluates whatever is on the screen.


function reset() {
    document.getElementById('screen').value = '';
}

function updateScreen() {
    var buttonValue = this.textContent; //takes the actual text of each button consider reworking
    if (fin && !isNaN(buttonValue)) {
    	reset()
    }
    document.getElementById('screen').value += buttonValue
    fin = false;
}
    let maths = document.getElementsByClassName("print");
    for (var i = 0; i < maths.length; i++) {
        maths[i].addEventListener('click', updateScreen);
    }
    document.getElementById('clear').addEventListener('click', reset)
    document.getElementById('equals').addEventListener('click', operate)
}