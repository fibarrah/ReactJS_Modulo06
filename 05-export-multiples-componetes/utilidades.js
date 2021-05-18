// PASO 2

// Funcion que determine si mi matriz de Blog esta vacia
const matrizVacia = (matriz) => {
    if(matriz !== undefined && matriz !== null && matriz.length > 0){
        return false;
    }
    return true;
};

// PASO 3

// Funcion para crear un log
const enviarLogs = (mensajes) => { console.log(mensajes); };

// PASO 4

// Named Export :: Para enviar multiples Funciones
export {matrizVacia, enviarLogs}
