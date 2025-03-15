const Pedidos = (props) => {
    return (

        <div className="d-flex">
            <div className="d-flex align-items-center">
                <i className={`fa-solid fa-${props.icone} fa-3x`}></i>
            </div>
            <div className="border flex-grow-1 py-3 ms-3">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
            </div>
        </div>
    )
}
export default Pedidos;