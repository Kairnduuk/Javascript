/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */


const listalibros = [ 
    {nombre: String},
    {edad: Number}, 
    {desarrolador: Boolean}, 
    {fecha_nacimiento: Date},
    {libro_favorito: {
        titulo: String,
        autor: String,
        fecha: Date,
        url: URL
        }
    }
];

console.log(listalibros);
