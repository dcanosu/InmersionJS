var nombre = prompt("Por favor ingrese su nombre: ")
var valorCelsius = prompt("Por favor ingrese el valor en grados celsius que desea convertir: ")
const valorFarenheit = 33.8;

var conversorFarenheit = (valorCelsius * 9/5) + 32;
var conversorKelvin = parseInt(valorCelsius) + 213.15;
alert(`${nombre} ${valorCelsius}°C corresponde a ${conversorFarenheit}°F grados farenheit y en grados Kelvin equivale a ${conversorKelvin}°K`);

