import Pedidos from './Comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'
import Comentario from './Comentario'
import ListaComentarios from './ListaComentarios'
const App = () => {
  
  const currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <ListaComentarios>
        <Cartao nome="Leo">
          <Comentario
            titulo="Leo"
            descricao=""
            time={currentTime}
          />
        </Cartao>
        <Cartao nome="Arthur">
          <Comentario
            titulo="Arthur"
            descricao=""
            time={currentTime}
          />
        </Cartao>
      </ListaComentarios>
    </>
  )
}

export default App