import React, { Component } from 'react'

export default class EstacaoClimatica extends Component {
    timer = null
    state = {
        data: null
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                data: new Date().toLocaleTimeString()

            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <div
                            className="d-flex align-items-center border rounded mb-2"
                            style={{ height: "6rem" }}
                        >
                            <i className={`fas fa-5x fa-${this.props.icone}`}></i> {/* Corrigido */}
                            <p className="w-75 ms-3 text-center fs-1">
                                {this.props.estacao}
                            </p>
                        </div>
                        <div>
                            <p className='text-center'>
                                {
                                    this.props.latitude ?
                                        `Coordenadas: ${this.props.latitude}, ${this.props.longitude}, Data: ${this.props.data}`
                                        :
                                        this.props.mensagemDeErro ?
                                            `${this.props.mensagemDeErro}`
                                            :
                                            "Clique no botão para saber sua estação"

                                }
                            </p>
                        </div>
                        <button type="button"
                            className='btn btn-primary w-100 mt-3'
                            onClick={() => this.props.obterLocalizacao()}
                        >Qual a minha estação?</button>
                    </div>
                </div>
            </>

        )
    }
}
