function add(num1,num2) {
    const add = num1+num2;
    return add
}
function subtraction(num1, num2) {
    const subtract = num1 - num2;
    return subtract
}
function multiply(num1, num2) {
    const multiply = num1*num2;
    return multiply;
}
function divide(num1, num2) {
    
    return num1/num2;
}
function square(num1 ) {
    return num1**2
}


function calculator(num1, num2, operation) {
    if (operation === 'add') {
        const result = add(num1, num2);
        return result
    }
     else if(operation === 'subtract') {
        const result = subtract(num1,num2)
        return result;
    }
    else if (operation === 'multiplay') {
        const result = multiply(num1,num2);
        return result
    }
    else if (operation === 'divide') {
        const result = divide(num1,num2);
        return result
    }
    else if (operation === 'square') {
        const result = square(num1);
        return result
    }
    else{
        return "this operation can't be done"
    }
}
const result = calculator(4,5, 'square');
console.log(result);