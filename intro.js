console.log("starting...");

const name = "Oladimeji";
const age = 23;
const isAlive = true;

console.log("hello", name);

function greet(name) {
    return "Hello" + " " + name;
}

console.log(greet("Dimeji"));

console.log("End of file");

// Math module (add and subtract functions)
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!');
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!');
    }
    return a - b;
}

module.exports = { add, subtract };