console.log("Conexion con js correcta...");

const nombre = "Javier";
const apellido = "Colque";

console.log("Hola, mi nombre es: " + nombre + " " + apellido);

console.log("La variable nombre es un tipo de dato: " + typeof nombre);

console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

let frase = "Me gusta Javascript!";
console.log(`La frase ${frase} tiene ${frase.length} caracteres.`);

let texto1 = "¡JaVASCRiPt Es LO MEjOr!"
console.log(texto1.toUpperCase());

console.log(texto1.toLocaleLowerCase());

let texto2 = "Leche, azucar, peras, huevos, harina"
console.log(texto2.includes("peras"));

let telefono = +56933316641;
let telefono_texto = String(telefono);
console.log(`Mi numero de teléfono ${telefono_texto} es de tipo ${typeof telefono_texto}`);




