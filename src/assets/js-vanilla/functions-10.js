/* Remove Vowels

Toma nota:

Las funciones flecha permiten una sintaxis corta para escribir expresiones de funciones.

const multi = (x, y) => x * y;
console.log(multi(2,2));

📝 Instrucciones:

  1. Crea una función flecha llamada rapid que tomará un string.
  2. Recorre (loop) el texto y elimina todas las vocales.
  3. Coloca en mayúscula todas las consonantes.
  4. Devuelve el nuevo string.

💡 Pista:

    Implementa estos métodos en tu código para retornar el resultado correcto:
    .toLowerCase() y .toUpperCase()
*/
// Your code goes here
const rapid = (myString) => {
  return myString.toLowerCase();
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
