async function umaruChan() {
    const conexion = await fetch("http://localhost:3001/umaru");
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function crearCharacters(nombre,nombreJapones,tipo,descripcion,imagen){
    const conexion = await fetch("http://localhost:3001/umaru",{
        method:"POST",
        headers:{"Content-type":"aplication/json"},
        body:JSON.stringify({
            nombre:nombre,
            nombreJapones:nombreJapones,
            tipo:tipo,
            descripcion:descripcion,
            imagen:imagen
        })
    })
    const conexionConvertida=conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    umaruChan,crearCharacters
}