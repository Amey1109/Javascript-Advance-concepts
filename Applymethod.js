let data1 = {
    name: "Jack"
}
let data2 = {
    name: "Jill"
}

function sayHello(greeting,message){
    return `${greeting} ${this.name} ${message}`
}


console.log(sayHello.apply(data1,["hey","how are you ??"]))
console.log(sayHello.apply(data2,["hello","sup ??"]))


let binded = sayHello.bind(data1, "hola","amigos!!")
console.log(binded())