/* Crea un archivo JS que contenga las siguientes líneas */

//- Una variable que contenga tu altura en centímetros (entero)
const mialturacm = 172;
//- Una variable que contenga tu altura en metros (número de coma flotante)
const mialturam = 1.72;
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const mipeso = 76.3;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
var alturaround = Math.round(mialturam)

console.log(alturaround)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
var pesoround = mipeso.toFixed()

console.log(pesoround)


//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_valor_JS = (Number.MAX_VALUE+1)-Number.MAX_VALUE;
console.log(max_valor_JS)