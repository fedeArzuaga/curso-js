/* const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Se ejecuto!");
    }, 5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
}) */

const waiting = () => {
    return new Promise( (resolve, reject) => {
        console.log("Esperando confirmacion")
        setTimeout( () => {
            resolve(true)
        }, 2000)
    });
};

const confirm = () => {
    return new Promise( (resolve, reject) => {
        console.log("Confirmado")
        setTimeout( () => {
            console.log("Descargando informacion desde la base de datos")
            setTimeout( () => {
                resolve(true)
            }, 2000 )
        }, 500);
    });
}

const show = () => {
    return new Promise( (resolve, reject) => {
        console.log("Datos descargados")
        resolve(true);
    });
}

waiting()
    .then( authorization => {
        if( authorization ){
            return confirm()
        }
    }).then( confirm => {
        if( confirm ){
            return show()
        }
    }).then( success => {
        if( success ){
            setTimeout( () => {
                console.log("Secuencia terminada");
            }, 500);
        }
    })