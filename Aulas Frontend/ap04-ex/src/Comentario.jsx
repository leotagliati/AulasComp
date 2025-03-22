const Comentario = (props) => {

    return (

        <div className="d-flex">
            <div className="border flex-grow-1 py-3 ms-3">
                <h4 className="">{props.titulo}</h4>
                {/* <p className="">{props.descricao}</p> */}
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, eligendi vero alias repudiandae voluptas nobis saepe, ex suscipit quod, hic adipisci beatae distinctio consectetur doloribus iusto voluptatibus non numquam deleniti?</h5>
                <div className="text-muted mt-auto">
                    {props.time}
                </div>
            </div>
        </div>
    )
}
export default Comentario;