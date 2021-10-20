const socket = io.connect();

socket.on('message', (data) => {
  console.log(data);
  alert(data);
  socket.emit('notification', 'Mensaje recibido exitosamente');
});

function render(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author}</strong>:
          <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
  const mensaje = {
      author: document.getElementById('username').value,
      text: document.getElementById('texto').value
  };
  socket.emit('new-message', mensaje);
  return false;
}
