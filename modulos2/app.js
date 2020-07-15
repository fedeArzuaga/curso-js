import * as clientes from './clases.js';

const { Cliente, holaMundo } = clientes;

holaMundo();

const cliente = new Cliente('Federico', 200);

document.getElementById('info').innerHTML = cliente.mostrarInfo();

