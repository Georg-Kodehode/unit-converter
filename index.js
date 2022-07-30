const meterToFeet = 3.2808399;
const literToGallon = 0.264172052;
const kilogramToPound = 2.20462262;
const btn = document.getElementById("btn");
const input = document.getElementById("input-number");
let length = document.getElementById("length-answers");
let volume = document.getElementById("volume-answers");
let mass = document.getElementById("mass-answers");
let meters = 0;
let feet = 0;
let liters = 0;
let gallons = 0;
let kilograms = 0;
let pounds = 0;

btn.addEventListener("click", function(){
    calculate();
});

// Calculates the units to be displayed
function calculate(){
    meters = (input.value/meterToFeet).toFixed(3);
    feet = (input.value*meterToFeet).toFixed(3);
    length.textContent = `${input.value} meters = ${feet} feet | ${input.value} feet = ${meters} meters`;

    liters = (input.value/literToGallon).toFixed(3);
    gallons = (input.value*literToGallon).toFixed(3);
    volume.textContent = `${input.value} liters = ${gallons} gallons | ${input.value} gallons = ${liters} liters`;

    kilograms = (input.value/kilogramToPound).toFixed(3);
    pounds = (input.value*kilogramToPound).toFixed(3);
    mass.textContent = `${input.value} kilograms = ${pounds} pounds | ${input.value} pounds = ${kilograms} kilograms`;
};
