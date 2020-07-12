const paciente = new Map(
    [
        ['name', 'paciente'],
        ['room', 'Undefined']
    ]
);

console.log(paciente);

paciente.set('name', 'Jose')
paciente.set('room', 403);

paciente.forEach( (data, index) => console.log(`${index} => ${data}`) )

console.log(paciente);