import './App.css';

function App() {

  const dataBlog = {
    titulo: 'Titulo del Blog',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
               'Donec a risus vitae augue facilisis mattis. Maecenas ut' +
               'risus lorem. Vivamus diam ipsum, vulputate vel neque nec,' +
               'rhoncus laoreet mi.'
  }

  // Creando los Objetos
  const blogMatriz = [

    {
      id: 1,
      titulo: 'Titulo 1 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                 'Donec a risus vitae augue facilisis mattis. Maecenas ut' +
                 'risus lorem. Vivamus diam ipsum, vulputate vel neque nec,' +
                 'rhoncus laoreet mi.'
    },
    {
      id: 2,
      titulo: 'Titulo 2 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                 'Donec a risus vitae augue facilisis mattis. Maecenas ut' +
                 'risus lorem. Vivamus diam ipsum, vulputate vel neque nec,' +
                 'rhoncus laoreet mi.'
    },
    {
      id: 3,
      titulo: 'Titulo 3 del Blog',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                 'Donec a risus vitae augue facilisis mattis. Maecenas ut' +
                 'risus lorem. Vivamus diam ipsum, vulputate vel neque nec,' +
                 'rhoncus laoreet mi.'
    }

  ]

  // Interactuar con la Matriz
  const blogBloques = blogMatriz.map((item,pos) => {

    console.log(item);

    // key = {pos}
    return(
        <div className="boxStyle" key={item.id}>
          <h3>{item.titulo}</h3>
          <p>{item.contenido}</p>
        </div>
    )

  });

  return (
    <div className="App">

      {blogBloques}

    </div>
  );
}

export default App;
