import { conexionAPI } from "./conexionAPI.js";

const listCharacters = document.querySelector("[data-lista]");

function createCard(nombre) {
    const liCharacter = document.createElement("li");
    liCharacter.className = "character__item";
    liCharacter.innerHTML = `<h2>${nombre}</h2>`;

    return liCharacter;
}

async function characters() {
    const listAPI = await conexionAPI.umaruChan();

    listAPI.forEach(character => {
        listCharacters.appendChild(createCard(character.nombre));
    });
}

characters();
