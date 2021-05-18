import './App.css';

function App() {

  const dataBlog = {
    titulo: 'Titulo del Blog',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
               'Donec a risus vitae augue facilisis mattis. Maecenas ut' +
               'risus lorem. Vivamus diam ipsum, vulputate vel neque nec,' +
               'rhoncus laoreet mi.'
  }

  // Estilos Modo 2
  const estilos = {
    margin: '20px',
    padding: '19px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 10px 10px #ccc'
  }

  return (
    <div className="App">

      {/** Estilos Modo 1 */}
      <div style = {
        {
          margin: '20px',
          padding: '19px',
          boxSizing: 'border-box',
          borderRadius: '5px',
          boxShadow: '0 10px 10px #ccc'
        }
      }>
        <h3>{dataBlog.titulo}</h3>
        <p>{dataBlog.contenido}</p>
      </div>

      {/** Estilos Modo 2 */}
      <div style={estilos}>
        <h3>{dataBlog.titulo}</h3>
        <p>{dataBlog.contenido}</p>
      </div>

      <div className="boxStyle">
        <h3>{dataBlog.titulo}</h3>
        <p>{dataBlog.contenido}</p>
      </div>

    </div>
  );
}

export default App;
