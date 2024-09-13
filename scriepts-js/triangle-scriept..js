/**
 * objective: get base, height of a triagle.calculate the area by using the provided formula.
 * and then display the area.
 * step - 1: get base value 0f the triangle
 * step - 2: added an id in the base input field
 * step - 3: use getElementById acess the input field
 * step - 4: get value from the input field. (value is string now)
 * step - 5: convert the vlaue to a number. use parseFloat
 * 
 */

function triangleCalculateArea(){
// get triangle base value
const triangleInputField = document.getElementById('triangle-base');
const triangleText = triangleInputField.value;
const base = parseFloat(triangleText);
console.log(typeof base);
// get triangle height value
const triangleInput = document.getElementById('triangle-height');
const triagleText = triangleInput.value;
const height = parseFloat(triagleText);
console.log(typeof height);
// get trianglearea value
const area = 0.5 * base * height;
console.log('area of the triangle is', area);
// display triangle value
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;
}