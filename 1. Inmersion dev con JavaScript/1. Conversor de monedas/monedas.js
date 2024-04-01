var nombre = prompt("Por favor ingese su nombre: ")

var ValorEnDolar = 155.5;
var valorEnPesos = 16.893;

var conversorPesos = (ValorEnDolar * valorEnPesos).toFixed(2);
// var conversorPesos = ValorEnDolar * valorEnPesos;
// valorEnPesos = valorEnPesos.toFixed(2);
// alert("$ " + conversorPesos.toFixed(2));
alert(`${nombre} el valor en pesos es: ${conversorPesos}`)