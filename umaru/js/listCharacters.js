import { conexionAPI } from "./conexionAPI.js";

const listCharacters = document.querySelector("[data-lista]");

function createCard(nombre, nombreJapones, tipo, descripcion, imagen) {
    const liCharacter = document.createElement("li");
    Object.assign(liCharacter.style, {
        width: "80%",
        padding: "15px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap: "20px",
        borderRadius: "20px",
        background: "linear-gradient(132deg, #FF9800 17%, #faadff99 51%, #ffecd2 94%)",
        border: "1px solid white"
    })
    liCharacter.className = "character__item";
    liCharacter.innerHTML = `
        <figure style="width:200px">
            <img src="${imagen}" alt="nombre" style="width: 100%">
        </figure>
        <article style="background: linear-gradient(132deg, rgb(255 236 210 / 41%) 17%, rgb(250 173 255 / 22%) 51%, rgb(255 152 0 / 27%) 94%); padding: 15px; border-radius: 5px; border: 1px solid white">
            <h2 style="text-align:center; color:#4d3630">${nombreJapones} <br><br> ${nombre}</h2>
            <h3 style="width:100%; color:#4d3630">Tipo</h3>
            <p style="width:100%; color:#4d3630">${tipo}</p>
            <h3 style="width:100%; color:#4d3630">Descripcion</h3>
            <p style="width:100%; color:#4d3630">${descripcion}</p>
        </article>
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
