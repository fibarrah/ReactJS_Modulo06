const matrizVacia = (matriz) => {
    if(matriz !== undefined && matriz !== null && matriz.length > 0){
        return false;
    }
    return true;
};

const enviarLogs = (mensajes) => { console.log(mensajes); };

export {matrizVacia, enviarLogs}
