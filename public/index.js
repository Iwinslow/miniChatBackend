const socket = io('http://localhost:8080');
  const formMsj = document.getElementById('miFormulario')
  const listMsj = document.querySelector('#misMensajes')

  formMsj.addEventListener("submit", (e)=>{
    e.preventDefault()
    const newMsj = e.target.elements[0].value
    socket.emit('mensaje-cliente', {
        newMsj
    })
    e.target.elements[0].value = ""
  })
  
  socket.on('mensaje-server', (data)=>{
        const newLiElement = document.createElement('li')
        newLiElement.textContent = `${data.user} - ${data.newMsj}`  
        listMsj.append(newLiElement)
    })