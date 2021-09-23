// Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:
const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

// Aclaración: todos los valores monetarios serán expresados con 2 decimales

function redondeo(num) {
  return Math.round(num * 100) / 100;
}

// A) Los nombres de los productos en un string separados por comas.
const nombres = productos.map((p) => p.nombre).join(", ");
console.log(nombres);

// B) El precio total
const total = redondeo(
  productos.reduce((acumulador, actual) => {
    return acumulador + actual.precio;
  }, 0)
);
console.log(total);

// C) El precio promedio
const promedio = redondeo(total / productos.length);
console.log(promedio);

// D) El producto con menor precio
let minimo = Infinity;
productos.forEach((p) => {
  if (p.precio < minimo) minimo = p.precio;
});
console.log(minimo);

// E) El producto con mayor precio
let maximo = 0;
productos.forEach((p) => {
  if (p.precio > maximo) maximo = p.precio;
});
console.log(maximo);

// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
const carrito = {
  nombres,
  total,
  promedio,
  minimo,
  maximo,
};
console.log(carrito);
