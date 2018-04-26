let fin = false;
window.onload = function() {

	let operate = () => {
    let math = document.getElementById('screen').value;
    math = math.replace('x', '*');
    math = math.replace('÷', '/');
    document.getElementById('screen').value = eval(math);
    fin = true;
}

function reset() {
    document.getElementById('screen').value = '';
}

function updateScreen() {
    var buttonValue = this.textContent;
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
/*var operate = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
}​​​​​ possible alternate method of running math in the screen */