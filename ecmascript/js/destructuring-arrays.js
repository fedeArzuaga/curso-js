const client = {
    type: 'Premium',
    mount: 30000,
    data: {
        name: 'Pedro',
        surname: 'Gonzalez',
        home: {
            city: 'Mexico'
        }
    },
    transactions: [
        '02-11-2017',
        '13-05-2013',
        '24-09-2011'
    ]
}

let { type, data: {home}, transactions: [ , second ] } = client;

console.log(type, home);
console.log(second);