const Contenedor = require("./Contenedor");

// Crear instancia de la clase
const contenedor = new Contenedor("./productos.json");

const main = async () => {
  // Primer producto

  console.log("------------------- agregar elementos -------------------");
  const id1 = await contenedor.save({
    title: "Cinta de reparación de pantalla de 5x200CM",
    price: 4922,
    thumbnail:
      "https://ae01.alicdn.com/kf/H1b13e3760cc74dcd9b7e161256820bbdT/Cinta-de-reparaci-n-de-pantalla-de-5x200CM-parche-autoadhesivo-para-puerta-y-ventana-s-per.jpeg_Q90.jpeg_.webp",
  });
  console.log(id1);

  // Productos adicionales
  const id2 = await contenedor.save({
    title:
      "Interruptor Outemu de 3 pines para teclado mecánico, interruptores táctiles y silenciosos, RGB LED SMD, color azul y marrón, Compatible con interruptor MX",
    price: 38866,
    thumbnail:
      "https://ae01.alicdn.com/kf/H9013370bd7e64d24983d6cea7fbb4724y/Interruptor-Outemu-de-3-pines-para-teclado-mec-nico-interruptores-t-ctiles-y-silenciosos-RGB-LED.jpg_640x640.jpg",
  });
  console.log(id2);

  const id3 = await contenedor.save({
    title:
      "Teclado mecánico personalizado de 1,7 m, cable usb c, resorte en espiral",
    price: 38866,
    thumbnail:
      "https://ae01.alicdn.com/kf/H777100f369944bb7b003618ae4143030b/Teclado-mec-nico-personalizado-de-1-7-m-cable-usb-c-resorte-en-espiral-mini-interfaz.jpg_Q90.jpg_.webp",
  });
  console.log(id3);

  // probar obtener por id
  console.log("------------------- obtener por id -------------------");
  console.log(await contenedor.getById(1));
  console.log(await contenedor.getById(1234));

  // getAll
  console.log("------------------- obtener todos -------------------");
  console.log(await contenedor.getAll());

  // borrar por id
  console.log("------------------- borrar por id -------------------");
  await contenedor.deleteById(1);
  await contenedor.deleteById(1232134);
  console.log(await contenedor.getAll());

  // borrar todo
  console.log("------------------- borrar todo -------------------");
  await contenedor.deleteAll();
  console.log(await contenedor.getAll());
};

main();
