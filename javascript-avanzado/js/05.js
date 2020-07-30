// Javascript Event Loop

console.log("Yo me mostrare primero")
setTimeout(() => {
    console.log("Yo me mostrare segundo")
}, 0)
console.log("Yo me mostrare tercero")
setTimeout(() => {
    console.log("Yo me mostrare cuarto")
}, 0)
console.log("Yo me mostrare quinto")