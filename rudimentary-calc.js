var x = Number(prompt("Int1: "))
var y = Number(prompt("Int2: "))
var op = prompt('Select Operation: a - Addition, s - Subtraction, m - Multiplication, d - Division, e - Exponentiation, r - Remainder')

function calc(op, x, y) {
    switch(op) {
        case 'a': 
            op: '+';
            return x + y;
        case 's':
            op: '-';
            return x - y;
        case 'm':
            op: '*';
            return x * y;
        case 'd':
            op: "/";
            return x / y;
        case 'e':
            op: "^";
            return x ^ y;
        case 'r':
            op: "%";
            return x % y;
        default:
            return "Unknown operation"
    }
}

console.log(x + " " + op + " " + y + " =" + calc(op, x, y))
