// Closure
function crearGritarNombre(nombre) {
  const exclamacion = "!!!"
  return function() {
    console.log(`${nombre}${exclamacion}`)
  }
}

const gritarCoder = crearGritarNombre('coder')

gritarCoder()

/*
Funciones y Closures - Practica
*/
/*
1. Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
*/
function mostrarLista(datos) {
  console.log( datos.length ? datos : 'lista vacía')
}
mostrarLista([])
mostrarLista([1,2,3])
mostrarLista(['a','b','c'])

/*
2. Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
*/

/*
3. Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.
*/
function crearMultiplicador(num1) {
  return function(num2) {
    return num2*num1;
  } 
}

function duplicar(num) {
  const dos = crearMultiplicador(2)
  return dos(num)
}

function triplicar(num) {
  const tres = crearMultiplicador(3)
  return tres(num)
}

const m1 = crearMultiplicador(10)
console.log(m1(2))
console.log(duplicar(25))
console.log(triplicar(25))

// o bien :
const duplicador = crearMultiplicador(2)
const triplicador = crearMultiplicador(3)
console.log(duplicador(25))
console.log(triplicador(25))

