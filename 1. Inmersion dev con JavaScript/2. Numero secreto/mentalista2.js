// var jugar = prompt("¿Quiere jugar? s/n")
// if (jugar == "s"){
//     var numeroSecreto = parseInt(Math.random() * 1000 + 1);
//     var intentos = 0;
    
//     while (numeroSecreto != numeroUsuario){
//         var numeroUsuario = prompt("Por favor ingresa un número entre 1 y 1000");
        
//         if (numeroSecreto == numeroUsuario){
//             alert(`Acertaste el número en ${intentos} ${(intentos === 1 ? "vez" : "veces")}`);
//         } else if (numeroSecreto > numeroUsuario){
//             alert(`El número es mayor al que ingresado que fue: ${numeroUsuario}`);
//         } else if (numeroSecreto < numeroUsuario){
//             alert(`El número es menor al que ingresado que fue: ${numeroUsuario}`);
//         }
//         intentos ++;
//     }
// }else alert("En otra oportunidad será, hasta luego.")

var jugar = prompt('¿Quieres jugar? (s/n)');

if (jugar == 's') {
  var numeroSecreto = parseInt(Math.random() * 1000) + 1;
  var intentos = 0; 
  var numeroDigitado;
  var maxIntentos = 10; 

  console.log(numeroSecreto);

  while (intentos < maxIntentos) {
    numeroDigitado = prompt('Digite un número entre 1 y 1000. Tienes ' + maxIntentos + ' intentos!');
    intentos += 1; 
    var intentosRestantes = maxIntentos - intentos;

    if (numeroDigitado == numeroSecreto) {
      alert('Enhorabuena! Acertaste en ' + intentos + ' intentos!');
      break;
    } else if (numeroDigitado > numeroSecreto) {
      alert('El número secreto es menor que ' + numeroDigitado + '. Te quedan ' + intentosRestantes + ' intentos.');
    } else {
      alert('El número secreto es mayor que ' + numeroDigitado + '. Te quedan ' + intentosRestantes + ' intentos!');
    }
  }

  if (intentos == maxIntentos) {
    alert('Agotaste tus ' + maxIntentos + ' intentos! El número secreto era ' + numeroSecreto);
  }
} 