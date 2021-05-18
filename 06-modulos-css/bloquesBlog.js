import React from 'react';
import {enviarLogs} from './utilidades'
// PASO 2 - Hacer la referencia al module.css
import classes from './bloqueBlog.module.css'

const BlogObjeto = (props) => {
    
    enviarLogs(props);
    
    // PASO 3 - Direccionamos el module.css
    return (
        <div className={classes.boxStyle}>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default BlogObjeto;