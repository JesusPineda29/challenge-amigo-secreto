
let amigos = [];
const nuevoAmigo = document.getElementById('amigo')
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


const agregarAmigo = () => {
    if (nuevoAmigo.value === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nuevoAmigo.value)
        // listaAmigos.innerText = amigos
        nuevoAmigo.value=""
    }

    // Limpiamos la lista antes de volver a generarla
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement('li');
        li.innerText = amigo
        listaAmigos.appendChild(li)
    })
    console.log(amigos)
}


const sortearAmigo = () => {
    if(amigos.length <= 1 ) {
        alert("No hay amigos para sortear, agrega almenos 2 amigos")
    } else {
        const numero = Math.floor(Math.random() * amigos.length);
        console.log(numero)
        console.log(`El amigo secreto es: ${amigos[numero]}`)
        const li = document.createElement('li')
        li.innerText = `El amigo secreto es: ${amigos[numero]}`
        resultado.innerHTML=''
        resultado.appendChild(li)
    }
}