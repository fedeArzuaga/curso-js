/* Destructuring  */

const client = {
    name: "Juansito",
    type: "Premium",
    data: {
        locations: {
            city: "Pato",
            country: "Patito"
        },
        account:{
            from: "10-12-2012",
            mount: 4000
        }
    }
}

// ECMA Script 6 en adelante
let { data: {locations} } = client;

console.log(locations);

