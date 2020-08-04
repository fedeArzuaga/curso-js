import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


function App() {

  // Definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  const [completado, guardarCompletado] = useState(false);

  let componente;

  if ( cargando ) {
    componente = <Spinner/>
  } else if ( !completado ) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
  }

  return (
    <Fragment>
      {/* My first time using React!!! YAAAYYY! */}
      <Header 
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario 
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
          guardarCompletado={guardarCompletado}
        />

        <div className="mensajes">
          { componente }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
