let mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add(5);
mySet.add('Some text here');
mySet.add(true);
mySet.add( {
    a: 0,
    b: 1
} )

for( let item of mySet ) {

    if( item === 5 ){

        mySet.delete(item);

    }

}

let hasFive = mySet.has(5);
console.log(mySet);