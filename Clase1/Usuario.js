class Usuario {
  constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  /**
  * Retorna el completo del usuario con template strings
  */
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  /**
  * Recibe un nombre de mascota y lo agrega al array de mascotas
  */
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  /**
  * Retorna la cantidad de mascotas que tiene el usuario.
  */
  countMascotas() {
    return this.mascotas.length;
  }
  /**
  * Recibe un string 'nombre' y un string 'autor' y debe agregar 
  * un objeto: { nombre: String, autor: String } al array de libros
  */
  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }
  /**
  * Retorna un array con sólo los nombres del array de libros del usuario
  */
  getBookNames() {
    return this.libros.map((book) => { return book.nombre })
  }
}

const pp = new Usuario("Pedro", "Paramo",
                      [{
                        nombre: 'El señor de las moscas',
                        autor: 'William Golding'},
                       {
                         nombre: 'Fundacion',
                         autor: 'Isaac Asimov'
                       }],
                      ['perro']);
// ver el usuario creado
console.log(pp)
// obtener nombre completo
console.log(pp.getFullName())
// agregar mascotas
pp.addMascota("gato")
pp.addMascota("serpiente")
// contar mascotas
console.log(pp.countMascotas())
// agregar libros
pp.addBook("El llano en llamas", "Juan Rulfo")
pp.addBook("Harry Potter", "JK Rowling")
// obtener los nombres de los libros
console.log(pp.getBookNames())
