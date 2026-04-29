console.log("Conexion exitosa con JS...")

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let notas = 6.5
let nombre = "Juan"
if(notas >= 6.0)alert(`El estudiante ${nombre} tiene un excelente rendimiento`)
else if(notas >= 4.0)alert(`El estudiante ${nombre} esta aprobado`)
else{alert(`El estudiante ${nombre} esta reprobado`)}
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "Daniel Pérez"
alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = " ejemplo@gmail.com"
if(correo.length > 15)alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: "correo válido"`)
else{alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: "correo demasiado corto"`)}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase = "Estoy aprendiendo JavaScript"
if(frase.length > 20) {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase larga`)
} else if(frase.length <= 20 & frase.length > 10) {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase mediana`)
} else {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase corta`)
}
}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let producto = "TECLADO"
let precio = 50000
let descuento = 0.1
alert(`El producto ${producto} tiene un precio final de $${precio - (precio * descuento)}`)
}
