function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Prevent multiple decimal points in a single number
    if (value === '.' && display.value.includes('.')) {
        return; // Do nothing if there's already a decimal point
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace the multiplication and division symbols for eval
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.value = 'Error';
    }
}
