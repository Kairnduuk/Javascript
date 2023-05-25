//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"

function funcion(){
    return true
}

console.log(funcion())

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asincrona(){
    setTimeout(function(){
        console.log("Hola soy una promesa")
    }, 5000)
}

asincrona()

//- Una función generadora de índices pares automáticos

function* generaId() {
    let id = 0;
    while(true) {
        id=id+2
        if (id === 50) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)