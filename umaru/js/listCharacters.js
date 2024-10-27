import { conexionAPI } from "./conexionAPI.js";

const listCharacters = document.querySelector("[data-lista]");

function createCard(nombre, nombreJapones, tipo, descripcion, imagen) {
    const liCharacter = document.createElement("li");
    liCharacter.className = "character__item";
    liCharacter.innerHTML = `
        <figure>
            <img src="${imagen}" alt="nombre">
        </figure>
        <h2>${nombre}</h2>
        <p>${nombreJapones}</p>
        <p>${tipo}</p>
        <p>${descripcion}</p>
    `;

    return liCharacter;
}

async function characters() {
    const listAPI = await conexionAPI.umaruChan();

    listAPI.forEach(character => {
        listCharacters.appendChild(createCard(character.nombre, character.nombreJapones, character.tipo, character.descripcion, character.imagen));
    });
}

characters();
