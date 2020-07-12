function createIterator( carrito ) {

    // Inizialize index
    let i = 0;

    return{
        siguiente: () => {
            let end = (i >= carrito.length);
            let value = !end ? carrito[i++] : undefined;

            return {
                end: end,
                value: value
            }

        }
    }

}

const carrito = ['One Product', 'Another product', 'And other product again'];

const loopCarrito = createIterator(carrito);

console.log( loopCarrito.siguiente() );
console.log( loopCarrito.siguiente() );
console.log( loopCarrito.siguiente() );
console.log( loopCarrito.siguiente() );
console.log( loopCarrito.siguiente() );