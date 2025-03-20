import Pedidos from './Comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'
import Comentario from './Comentario'

function ListaComentarios(props) {

   
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    );
}
export default ListaComentarios;