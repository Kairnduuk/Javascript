//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
var listacompra = [ "Verduras", "Heüra", "Tofu", "Legumbres", "Cereales"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listacompra.push("Aceite de Girasol");
console.log(listacompra)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listacompra.pop();
console.log(listacompra)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var pelisfav =[
    { titulo: "titulo1", director: "Dir1", fecha: new Date("2008/10/30") },
    { titulo: "titulo2", director: "Dir2", fecha: new Date("2008/10/30") },
    { titulo: "titulo3", director: "Dir3", fecha: new Date("2018/10/30") }
];

console.log(pelisfav)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisposteriores = pelisfav.filter(obj => obj.fecha > new Date("2010/01/01"))
console.log(pelisposteriores)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newArray = pelisfav.map(obj => obj.director)
console.log(newArray)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newArray2 = pelisfav.map(obj => obj.titulo)
console.log(newArray2)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newArray3 = newArray.concat(newArray2)
console.log(newArray3)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newArray4 = [newArray, newArray2]
console.log(newArray4)