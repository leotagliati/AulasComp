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
    const expressaoJSX = items.map((item, index) => (
        <Card id='accordion' key={index} className='border-1 border-400'>
            <div onClick={() => itemClicado(index)}>
                <i className="pi pi-angle-down"></i>
                <h5 className='inline'>{item.title}</h5>
                <p>{item.content}</p>
            </div>
        </Card>
    ))
    return (
        <div>
            <p>{activeIndex}</p>
            {expressaoJSX}
        </div>
    )
}

export default Accordion