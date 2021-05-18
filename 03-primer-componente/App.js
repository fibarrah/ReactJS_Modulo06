import './App.css';

// Paso 5
import BlogObjeto from './bloquesBlog'

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

    const blogBloques = blogMatriz.map((item,pos) => {
      //console.log(item);
      return(
          <BlogObjeto key={pos} />
          //<div className="boxStyle" key={item.id}>
          //  <h3>{item.titulo}</h3>
          //  <p>{item.contenido}</p>
          //</div>
      )
  
    });

  // Paso 1: Creamos una nueva libreria JS

  return (
    <div className="App">

      {blogBloques}

    </div>
  );
}

export default App;
