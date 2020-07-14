/* 

Clase: Expresiones regulares

Sinceramente no entiendo muy bien en que casos pueden ser especialmente utiles...

A lo mejor cuando empieze a trabajar con ellas las entendere un poco mas

Por ahora se que una expresion regular sirve para crear patrones con el fin de testear que cierto dato venga con dicho formato, por ejemplo una fecha o una hora.

Pero mas nada...


*/

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1, exp2);

let valor,expReg;

expReg = /[0-9]/;
valor = 1992;

//FECHAS
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

// Horas 10:30
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 am';

expReg = /\d+/;
valor = '4444';

// Negando la expresion regular
expReg = /[^0-9]/;
valor = 1995;

// Sintaxis con llaves
expReg =/\d{1,2}-\d{1,2}-\d{4}/;
valor = '21-55-2020';

// Letras o numeros
expReg = /\w+/;
valor = 'Mensaje de prueba';
valor = '123456';


// Validar mayusculas
expReg = /([A-Z])\w+/;
valor = 'VALIDANDO MAYUSCULAS';
valor = '123456';
console.log(expReg.test(valor));