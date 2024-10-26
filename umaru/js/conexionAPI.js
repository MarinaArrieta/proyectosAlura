async function umaruChan() {
    const conexion = await fetch("http://localhost:3001/umaru");
    const conexionConvertida = conexion.json();
    // console.log(conexionConvertida);

    return conexionConvertida;
}

// umaruChan();
export const conexionAPI={
    umaruChan
}