/* Funciones Flecha */
/*Funcion Modo Tradicional */

const date = function() {
    return new Date();
}
console.log(date()); // Fri Dec 23 2022 18:38:04 GMT-0300 (hora estándar de Argentina)

/* Funcion Flecha */

const secondDate = () => new Date();
console.log(secondDate()); // Fri Dec 23 2022 18:38:19 GMT-0300 (hora estándar de Argentina)

/* Funciones Flecha con Parametros */

/*Funcion Modo Tradicional */

const sumarTres1 = function(x) {
    return x + 3;
};
console.log(sumarTres1(4)); // 7

/* Funcion Flecha */

const sumarDos = (x) => x + 2;
console.log(sumarDos(4)); // 6

/* Funciones Flecha con 2 Parametros */

/*Funcion Modo Tradicional */

const concatenarArreglos1 = function(arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2);
};
console.log(concatenarArreglos1([1, 2], [3, 4])); // [1, 2, 3, 4]

/* Funcion Flecha con 2 Parametros*/

const concatenarArreglos2 = (arreglo1, arreglo2) => arreglo1.concat(arreglo2);
console.log(concatenarArreglos2([1, 2], [3, 4])); // [1, 2, 3, 4]

/*Funciones Flecha con mas de una Linea */

/*Funcion Modo Tradicional */

const sumar = function (a, b) {
    let num = 6;
    return a + b + num;
};
console.log(sumar(2, 3)); // 11

/* Funcion Flecha con 2 Parametros*/

const sumar2 = (a, b) => {
    let num = 6;
    return a + b + num;
}
console.log(sumar2(3, 7)); // 16

/* Valores Por Defecto para Parametros */

/* En el primer caso vemos el segundo parametro de la funciona anonima(valor) esta definido
por defecto. Por ende cuando llamamos a la funcion con una solo parametro (num), cuando
tiene 2*/

const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5)); // 6

/* En el segundo caso vemos 2 parametros (num, valor), el segundo definido por defecto,
pero en el llamado de la funcion anonima, vemos 2 valor de los parametros.
El resultado nos muestra que al asignar el segundo valor, este sobreescribio al definido
por defecto, dando la cuenta final 15 (5 + 10) */

const incrementar2 = (num, valor = 1) => num + valor;
console.log(incrementar(5, 10)); // 15

/* Operador Rest (...) */
/* Esta funcion permite agrupar los argumentos de una funcion como un arreglo */
/* Se usa la abreviatura "args" (argumentos), pero se puede usar cualquier palabra. */

function miFuncion(...args) {
    console.log(args);
}
miFuncion(1) // [1]
miFuncion(1, 2, 3) //[1, 2, 3]
miFuncion("Ramiro", "Gaston", "Berenice"); // ['Ramiro', 'Gaston', 'Berenice']
miFuncion([1, 2, 3], ["Martinez", "Otamendi", "Romero"]); // [1, 2, 3], ["Martinez", "Otamendi", "Romero"]

/* Funcion .reduce() */
/* Esta funcion suma los elementos de un arreglo y retorna el resultado */

const sumar3 = (...args) => args.reduce((a, b) => a + b);
console.log(sumar3(1, 2, 3)); // 6

/* Operador spread */
/* Esta funcion hace lo contrario a "reduce", esta descompone el elemento y los transforma
en elementos individuales.
Pasa los parametros en el orden de ubicacion que se encontraban en el arreglo.
Este funcion usa "..." en la llamada a la funcion, mas el nombre del arreglo (numeros) */

const numeros = [1, 2, 3];

function sumar4(a, b, c) {
    return a + b + c;
};
console.log(sumar4(...numeros)); // 6

/*Sintaxis de Desestructuracion */

/*Nos Permite asignar las propiedades de un objeto a variables que podemos usar en 
nuestro programa.*/

const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

// Para asignar propiedades a variables, lo haciamos asi:
//const nombre = usuario.nombre;
//const edad = usuario.edad;

//Pero con la sintaxis de la Desestructuracion podemos hacerlo en una sola linea:

const {nombre, edad} = usuario;

// Otro Ejemplo:

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

//const x = coordenadas.x;
//const y = coordenadas.y;
//const z = coordenadas.z;

const {x, y, z} = coordenadas;

console.log(x); // 4
console.log(y); // 6
console.log(z); // 12

/*Sintaxis de Desestructuracion: Objetos Anidados */

const usuarioFem = {
    bere: {
        edad2: 32,
        correo: "bere@gmail.com"
    }
};

const {bere: {edad2, correo}} = usuarioFem;

console.log(edad2); // 32
console.log(correo); // bere@gmail.com

// Otro Ejemplo:

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 18,
        maxima: 32
    },
    "hoy" : {
        minima: 15,
        maxima: 30
},
    "manana": {
        minima: 12,
        maxima: 27
    }
};

// const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
// const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// console.log(minimoHoy); // 15
// console.log(maximaHoy); // 30

// console.log(minimoHoy, maximaHoy); // 15 30

// En el proxima caso (linea 186), asignamos la temperatura minima de hoy a la variable "minimoHoy", la cual
//sobreescribe a la variable "minima" (linea 188).

const {hoy: {minima: minimoHoy}} = PRONOSTICO_LOCAL;
console.log(minimoHoy); // 15
//console.log(minima); // Uncaught ReferenceError: minima is not defined

//const {hoy: {maxima: maximaHoy}} = PRONOSTICO_LOCAL;
//console.log(maximaHoy); // 30

//Para asignar dos variable en una sola linea, hacemos lo siguiente:

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy); // 15 30

