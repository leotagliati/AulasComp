import React, { useState, useEffect } from 'react'
import axios from 'axios'
import striptags from 'striptags'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { use } from 'react'
const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('')
    const [resultado, setResultado] = useState([])

    useEffect(() => {
        const buscar = async () => {
            // buscar na api do wikipedia
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php'
                , {
                    params: {
                        action: 'query',
                        format: 'json',
                        list: 'search',
                        srsearch: termoDeBusca,
                        origin: '*'
                    }
                })
            setResultado(data?.query?.search)
            console.log(data)
        }
        const timeoutId = setTimeout(() => {
            if (termoDeBusca)
                buscar()
        }, 500)


    }, [termoDeBusca])

    return (
        <div>
            <IconField>
                <InputIcon className="pi pi-search" />
                <InputText placeholder="Digite o que deseja buscar" onChange={(e) => setTermoDeBusca(e.target.value)} value={termoDeBusca} />
            </IconField>
            {
                resultado.map((result) => {
                    return (
                        <div key={result.pageid}
                            className='my-2 border border-1 border-400 p-2'>
                            {/* titulo */}
                            <div className='border-bottom-1 border-400 p-3 text-center font-bold'>
                                {result.title}
                                <span>
                                    <Button icon="pi pi-book" className='px-4 p-button-rounded p-button-outlined ml-2' label="Ver mais" onClick={() => window.open(`https://en.wikipedia.org/?curid=${result.pageid}`, '_blank')} />
                                </span>
                            </div>
                            {/* Conteudo */}
                            <div className='p-4'>
                                {striptags(result.snippet)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Busca