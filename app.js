
let amigos = [];
const nuevoAmigo = document.getElementById('amigo')
const listaAmigos = document.getElementById('listaAmigos');


const agregarAmigo = () => {
    if (nuevoAmigo.value === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nuevoAmigo.value)
        // listaAmigos.innerText = amigos
        nuevoAmigo.value=""
    }

    console.log(amigos)

    // Limpiamos la lista antes de volver a generarla
    listaAmigos.innerHTML = "";


    amigos.forEach(amigo => {
        const li =document.createElement('li');
        li.innerText = amigo
        listaAmigos.appendChild(li)
    })
}