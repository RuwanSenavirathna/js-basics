let name = 'Ruwan';
let age = 30;
let isApproved = true;
let firstName = undefined
let selectedColor = null

let person = {
    name: 'Ruwan',
    age:30 
}
let selection = 'age'
person[selection] = 45

console.log(person.name = 'Chamara')

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1
console.log(selectedColors.length);


// Performing a task
function greet(name, lastName){

    console.log('Hello World ' + name + ' ' + lastName)
}

// Calculatig a value

function square(number){
    return number * number
}

greet('Ruwan Senavirathna');
greet('Ruwan', 'Senavirathna...')

console.log(square(2));