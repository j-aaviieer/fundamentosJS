// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

const nombre = "Camila";
const edad = "25";
console.log("Hola, mi nombre es " + nombre + " y mi edad es " + edad);

console.log("El tipo de dato de edad es: " + typeof edad);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas

const comuna = "Maipú";
const region = "Metropolitana";
console.log("La persona vive en la region " + region.toLocaleLowerCase() + " y su comuna es " + comuna.toUpperCase());

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato

const lenguaje = "Python"
console.log(`La frase ${lenguaje.toLocaleUpperCase()} tiene ${lenguaje.length} caracteres. Y su tipo de dato es ` + typeof lenguaje);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

const mensaje = "Me encanta programar en JavaScript"
console.log(`La cantidad de caracteres de "${mensaje.toLocaleLowerCase()}" es de ${mensaje.length}. ¿Contiene la palabra "JavaScript": ${mensaje.includes("JavaScript")}`.toLowerCase())


// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres

let compras = "arroz, fideos, aceite, sal"
console.log(`${compras.toLocaleUpperCase()} "tiene ${compras.length} caracteres" y tiene la palabra aceite? ${compras.includes("aceite")}`.toUpperCase());


// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene

let numeroCasa = "456"
let numeroCasaTexto = String(numeroCasa);
console.log(`El numero de telefono de mi casa es: ${numeroCasaTexto} es de tipo ${typeof numeroCasaTexto} tiene ${numeroCasaTexto.length} caracteres`)

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let name = "Diego";
let lastname = "Rojas";
let nombreCompleto = `${name} ${lastname}`
console.log(`El nombre es: ${name} y el apellido es: ${lastname} el nombre completo tiene ${nombreCompleto.length} caracteres`.toUpperCase());

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let frase = "Hoy aprenderemos sobre strings";
console.log(`La frase ${frase} contiene la palabra "strings": ${frase.includes("strings")}`);
console.log(`${frase.toUpperCase()} - Tiene ${frase.length} caracteres.`);

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto = "Programar es divertido";
console.log(`El texto original es: ${texto}, en minúsculas se escribe ${texto.toLowerCase()}, en mayuscúlas se escribe ${texto.toUpperCase()} y tiene ${texto.length} caracteres.`)

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso = "3C"
let anio = 2026;
let aniotexto = String(anio);
console.log(`Hola soy del curso ${curso} del año ${aniotexto} es de tipo ${typeof aniotexto} tiene ${aniotexto.length} caracteres.`.toUpperCase())

// ⭐ Desafío extra (nivel alto)
// Crea la variable:
// textoFinal: Estoy listo para el desafío
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "desafío"
// Muestre el texto en MAYÚSCULAS
// Indique el tipo de dato 

