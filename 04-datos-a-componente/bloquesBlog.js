import React from 'react';

const BlogObjeto = (props) => {
    // Paso 1
    console.log(props);
    return (
        <div className='boxStyle'>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default BlogObjeto;