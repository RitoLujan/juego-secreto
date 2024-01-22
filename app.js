// Variables
let numeroMaximoPosible = 100; // *10 para 1-10 *100 para 1-100 *1000 para 1-1000.
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) + 1; 
let numeroUsuario = 0;
let intentos = 1;
// let palabraveces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición.
        alert(`Acertaste, el numero es: ${numeroSecreto}. Lo hicieste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }
    else{
        // La condicion no se cumplio.
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor.');
        }
        else{
            alert('El número secreto es mayor.');
        }
        // incrementamos el contador cuando no acierta.
        // intentos = intentos + 1;
        // intentos +=1;
        intentos ++;
        
        // palabraveces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}