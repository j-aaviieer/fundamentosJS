console.log("Conexion exitosa con JS...")

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Juan";
    alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let suma2 = 10;
    let suma1 = 5;
    alert(`La suma es: ${suma1 + suma2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let resta2 = 2;
    let resta1 = 14;
    alert(`La resta es: ${resta1 - resta2}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let mult2 = 2;
    let mult1 = 12;
    alert(`La multiplicación es: ${mult1 * mult2}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 5.6;
    let nota2 = 4.5;
    let nota3 = 7.0;
    let total = 3;
    alert(`El promedio es: ${(nota1 + nota2 + nota3) / total}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 23;
    if(edad > 18) alert(`Es mayor de edad`)
        else{
            (`Es menor de edad`)
        };
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 20;
    if (numero % 2 == 0) {
        alert(`El número es par`)
    } else {
        alert(`El número es impar`)
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 4.5;
    if (nota => 4.0){
        alert(`Estudiante aprobado`)
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precio = 20000;
    let descuento = 0.1;
    alert(`Precio final con descuento: $${precio - (precio * descuento)}`)

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 22;
    let num2 = 18;
    if(num1 > num2){
        alert(`El número mayor es: ${num1}`)
    } else {
        alert(`El número mayor es: ${num2}`)
    }
}
