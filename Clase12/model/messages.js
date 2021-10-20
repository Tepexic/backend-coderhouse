const messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];


const getMessages = () => messages;
const addMessage = (message) => messages.push(message);

module.exports = { getMessages, addMessage };