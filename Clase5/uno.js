// A - Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20
function getRandom(min, max) {
  min = min - 1; // para que el redondeo incluya el limite inferior
  return Math.ceil(Math.random() * (max - min) + min);
}

// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.
const list = [];
function createArray() {
  for (let i = 0; i < 10000; i++) {
    list.push(getRandom(1, 20));
  }
}

createArray();
const numeros = {};
list.forEach((n) => {
  if (numeros[n]) {
    numeros[n] += 1;
  } else {
    numeros[n] = 1;
  }
});
console.table(numeros);

// for (let i = 0; i < 10000; i++) {
//   let actual = getRandom(1, 20);
//   if (numeros[actual]) {
//     numeros[actual] += 1;
//   } else {
//     numeros[actual] = 1;
//   }
// }
