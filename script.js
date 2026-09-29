// elementos que voy a usar
const botonCargar = document.getElementById("cargar");
const botonTema = document.getElementById("tema");
const contenedor = document.getElementById("contenedor");
const cuerpo = document.querySelector("body");


// trae los datos del json y arma una tarjeta por cada tostador
const cargarTarjetas = async () => {
    let res = await fetch("datos.json");
    let datos = await res.json();

    let htmlAcumulado = "";

    datos.forEach(item => {
        htmlAcumulado += `<div class="tarjeta">`;
        htmlAcumulado += `<h3>${item.titulo}</h3>`;
        htmlAcumulado += `<p>${item.descripcion}</p>`;
        htmlAcumulado += `<p class="detalles">${item.detalles}</p>`;
        htmlAcumulado += `</div>`;
    });

    contenedor.innerHTML = htmlAcumulado;
}


// cambia entre tema claro y oscuro poniendo/sacando la clase del body
function cambiarTema() {
    cuerpo.classList.toggle("dark");
}


botonCargar.addEventListener("click", cargarTarjetas);
botonTema.addEventListener("click", cambiarTema);
