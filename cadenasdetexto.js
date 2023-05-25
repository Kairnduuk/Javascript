/* Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

const Nombre = "Santi"
const Apellido = "López"

const Estudiante = "".concat(Nombre," ", Apellido)

console.log(Estudiante)

var estudianteMayus = Estudiante.toUpperCase()

console.log(estudianteMayus)

var estudianteMinus = Estudiante.toLocaleLowerCase()

console.log(estudianteMinus)

var longitudconespacios = Estudiante.length

console.log(longitudconespacios)

var primeraletra = Nombre[0]

console.log(primeraletra)

var ultimaletra = Apellido[Apellido.length-1]

console.log(ultimaletra)

var sinespacios = Estudiante.replace(/\s+/g, '') //Alternativa: var sinespacios = Estudiante.split(" ").join("")

console.log(sinespacios)

var includes = Estudiante.includes(Nombre)

console.log(includes)