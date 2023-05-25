// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numero = 10
let i = 0

factorial: while (true) {
    console.log(i*numero);
    if (numero  <= 0) {
            break factorial
    }
    if (i === numero) {
        break factorial
    }
    i++
}

console.log("Ya hemos terminado")