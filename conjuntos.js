//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Santi", 
    apellido: "López",
    edad: 40, 
    altura: 1.72, 
    eresDesarrollador: true
}

console.log(datos)

//- Una variable que obtenga tu edad a partir del objeto anterior
var edad1=datos.edad

console.log(edad1)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos1 = {
    nombre: "Amigo1", 
    apellido: "1",
    edad: 35, 
    altura: 1.72, 
    eresDesarrollador: true
}

const datos2 = {
    nombre: "Amigo2", 
    apellido: "2",
    edad: 38, 
    altura: 1.72, 
    eresDesarrollador: false
}

var lista = new Array(datos, datos1, datos2)

console.log(lista)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


lista.sort((a, b) => a.edad - b.edad)

console.log(lista)