//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const fecha = new Date()

console.log(fecha)
//- La fecha de tu nacimiento
const fechami = new Date(1982, 05, 22)

console.log(fechami)
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
var mastarde= (fecha > fechami)

console.log(mastarde)
//- Una variable que contenga el día de tu nacimiento
var fechami2 = new Date(1982, 05, 22)

console.log(fechami2)
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
var fechamimes = fechami.getMonth() + 1

console.log(fechamimes)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
var fechamianyo = fechami.getYear()

console.log(fechamianyo)