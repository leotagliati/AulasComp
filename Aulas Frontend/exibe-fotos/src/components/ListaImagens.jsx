import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({ photos, imgStyle }) => {
    return (
        photos.map((photo, key) => (
            <div key={key}>
                <Imagem imgStyle={imgStyle} src={photo.src.small} alt={photo.alt}></Imagem>
            </div>
        ))
    )
}
export default ListaImagens
