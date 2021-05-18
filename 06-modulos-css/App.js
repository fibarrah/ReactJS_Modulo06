import './App.css';
import BlogObjeto from './bloquesBlog'
import {matrizVacia} from './utilidades'

function App() {

  const dataBlog = {
    titulo: 'Titulo del Blog',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ' +
               'fringilla elementum sollicitudin. Duis nisl sem, tempor molestie velit in, ' +
               'vestibulum placerat lacus. '
  }

  const blogMatriz = [
    {
      id: 1,
      titulo: 'Titulo 1 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ' +
                 'fringilla elementum sollicitudin. Duis nisl sem, tempor molestie velit in, ' +
                 'vestibulum placerat lacus. '
    },
    {
      id: 2,
      titulo: 'Titulo 2 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ' +
                 'fringilla elementum sollicitudin. Duis nisl sem, tempor molestie velit in, ' +
                 'vestibulum placerat lacus. '
    },
    {
      id: 3,
      titulo: 'Titulo 3 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ' +
                 'fringilla elementum sollicitudin. Duis nisl sem, tempor molestie velit in, ' +
                 'vestibulum placerat lacus. '
    }
  ]
    

    const blogBloques = matrizVacia(blogMatriz) ? [] : blogMatriz.map((item,pos) => {
      return(
          <BlogObjeto key={pos} id_={item.id} titulo={item.titulo} descripcion={item.contenido}/>
      )
  
    });

    // PASO 1 Crear un archivo module.css

  return (
    <div className="App">
      {blogBloques}
    </div>
  );
}

export default App;
