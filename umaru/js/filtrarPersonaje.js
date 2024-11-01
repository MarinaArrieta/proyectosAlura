import { conexionAPI } from "./conexionAPI.js";
import createCard from "./listCharacters.js";

async function filtrarPersonaje(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    let busqueda = await conexionAPI.buscarPersonajes(datosDeBusqueda);

    const listCharacters = document.querySelector("[data-lista]");

    while(listCharacters.firstChild){
        listCharacters.removeChild(listCharacters.firstChild);
    }
    busqueda.forEach(character => listCharacters.appendChild(createCard(character.nombre, character.tipo, character.descripcion, character.imagen)));
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento=>filtrarPersonaje(evento))