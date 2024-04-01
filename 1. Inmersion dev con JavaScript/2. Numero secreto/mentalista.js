var numeroSecreto = parseInt(Math.random() * 1000 + 1);
var intentos = 1;

while (numeroSecreto != numeroUsuario){
    var numeroUsuario = prompt("Por favor ingresa un número entre 1 y 1000");
    
    if (numeroSecreto == numeroUsuario){
        alert(`Acertaste el número en ${intentos} ${(intentos === 1 ? "vez" : "veces")}`);
    } else if (numeroSecreto > numeroUsuario){
        alert(`El número es mayor al que ingresado que fue: ${numeroUsuario}`);
    } else if (numeroSecreto < numeroUsuario){
        alert(`El número es menor al que ingresado que fue: ${numeroUsuario}`);
    }
    intentos ++;
}
