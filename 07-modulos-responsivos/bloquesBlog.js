import React from 'react';
import {enviarLogs} from './utilidades'
import classes from './bloqueBlog.module.css'

const BlogObjeto = (props) => {
    
    enviarLogs(props);
    
    return (
        <div className={classes.boxStyle}>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default BlogObjeto;