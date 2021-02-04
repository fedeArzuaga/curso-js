function Client(name, salary) {
    this.name = name;
    this.salary = salary;
}

function Bussine(name, salary, category) {
    this.name = name;
    this.salary = salary;
    this.category = category;
}

const jhon = new Client('Jhon Doe', 1500);

const siniestro = new Bussine('Siniestro', 100000, 'Development Agency');

function formatClient( client ) {
    const {name, salary} = client;
    return `${name} client has a salary of ${salary}`;
}

function formatBussine( bussine ) {
    const {name, salary, category} = bussine;
    return `${name} client has a salary of ${salary} on the ${category} category`;
}

console.log(formatClient(jhon))
console.log(formatBussine(siniestro));

/* Esto en un proyecto grande, con muchas personas trabajando en el equipo y modificando el código, puede llegar a ser un desastre, y es ahí cuando un prototype nos puede ayudar 
(ver 03-app.js) */