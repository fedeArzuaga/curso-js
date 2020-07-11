const valor1 = parseInt(prompt("Ingrese el primer valor", 10));
const valor2 = parseInt(prompt("Ingrese el segundo valor", 10));
const operacion = prompt("Que operacion desea realizar?\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");

if( calcular() ){
    alert(`Felicidades! El resultado de su operacion es ${calcular(valor1, valor2)}`);
}

let calcAgain = confirm(`Necesita realizar otra operacion?`);

if( calcAgain ){
    window.location.reload();
}else{
    alert("Muchas gracias por usar la super calculadora intergalactica!");
} 

// Funciones
function calcular(valor1, valor2){

    let resultado;

    switch(operacion){
        case "1":
            resultado = valor1 + valor2;
            break;
        case "2":
            resultado = valor1 - valor2;
            break;
        case "3":
            resultado = valor1 * valor2;
            break
        case "4":
            resultado = valor1 / valor2;
            break;
        default:
            alert("Por favor, digite un numero de operacion valido");
            return false;
    }
    return resultado;

}