import React from 'react';
// PASO 6
import {enviarLogs} from './utilidades'

const BlogObjeto = (props) => {
    
    // PASO 7
    enviarLogs(props);
    
    return (
        <div className='boxStyle'>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default BlogObjeto;