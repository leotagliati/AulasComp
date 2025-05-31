import React, { useState } from 'react'
import { Card } from 'primereact/card'
import './Accordion.css'


const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const itemClicado = (index) => {
        console.log(index)
        // atualizar a variavel de estado
        setActiveIndex(index)
    }
    const expressaoJSX = items.map((item, index) => {
        // escolher entre o down ou right, comparando o index do item clicado com o index do item atual
        const classExibirIcone = activeIndex === index ? 'pi pi-angle-down' : 'pi pi-angle-right'
        // decidir se o paragrafo deve ser exibido ou não
        const classExibirParagrafo = activeIndex === index ? '' : 'hidden'

        return (<Card id='accordion' key={index} className='border-1 border-400'>
            <div onClick={() => itemClicado(index)}>
                <i className={classExibirIcone}></i>
                <h5 className='inline'>{item.title}</h5>
            </div>
            <p className={classExibirParagrafo}>{item.content}</p>
        </Card>)

    }
    )
    return (
        <div>
            <p>{activeIndex}</p>
            {expressaoJSX}
        </div>
    )
}

export default Accordion