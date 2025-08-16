import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';




export default class Busca extends Component {
    state = {
        termoDeBusca: '',

    }
    onTermoAlterado = (event) => {
        this.setState({ termoDeBusca: event.target.value })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText className='w-full' placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca}
                        />
                    </IconField>
                    <Button
                        className='mt-3'
                        label='Buscar' />
                </div>
            </form>
        )
    }
}
Busca.defaultProps = {
    dica: 'Buscar...'
}
