import Feedback from './Feedback'

const Cartao = (props) => {
    let fotoPerfilPath = `/FotosPerfil/${props.nome}-profilepic.png`
    const textoOK = 'Aprovar'
    const textoNOK = 'Reprovar'
    const functionOK = () => alert('Comentário aprovado')
    const functionNOK = () => alert('Comentario reprovado')
    const componenteFeeback = (
        <Feedback
            textoOK={textoOK}
            textoNOK={textoNOK}
            functionOK={functionOK}
            functionNOK={functionNOK}
        />
    )
    return (

        <div className="card">

            <div className="d-flex">

                <div className="card-body d-flex">
                    <div className="">
                        <img src={fotoPerfilPath} alt="" width={200} />
                    </div>
                    <div className="d-flex flex-grow-1">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                {componenteFeeback}
            </div>

        </div>
    )
}
export default Cartao;