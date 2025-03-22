import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      logitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null,
    }
  }
  estacao = {

    VERAO: {
      icone: "sun",
      nome: "Verão"
    },

    INVERNO: {
      icone: "snowman",
      nome: "Inverno"
    },

    OUTONO: {
      icone: "leaf",
      nome: "Outono"
    },

    PRIMAVERA: {
      icone: "fan",
      nome: "Primavera"
    }
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)

    const estouNoSul = latitude < 0

    if (data >= d1 && data < d2)
      return estouNoSul ? this.estacao.INVERNO : this.estacao.VERAO
    if (data >= d2 && data < d3)
      return estouNoSul ? this.estacao.PRIMAVERA : this.estacao.OUTONO
    if (data >= d3 || data < d4)
      return estouNoSul ? this.estacao.VERAO : this.estacao.INVERNO
    return estouNoSul ? this.estacao.OUTONO : this.estacao.PRIMAVERA
  }
  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 1. extrair a data atual do sistema
        const newData = new Date()
        // 2. obter a estacao climatica do usuario usando sua latitude e data atual
        const newEstacao = this.obterEstacao(newData, position.coords.latitude)
        // 3. obter o icone apropriado para aquela estacao
        const newIcone = newEstacao.icone
        // 4. atualizar o estado, causando, como efeito colateral, a atualizacao da tela.
        this.setState({
          data: newData.toLocaleTimeString(),
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: newEstacao.nome,
          icone: newIcone
        })
        // dica: use a fucnao setState().
      },
      (err) => {
        this.setState({
          mensagemDeErro: 'Falhou...'
        })
      }
    )
  }
  render() {
    return (
      <>
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <div className="justify-content-center d-flex">
                <i className="fa-hippo fas fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              <div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
                      <i className={`fas fa-5x fa-${this.state.icone}`}></i>
                      <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>

                    </div>
                    <p className="text-center">
                      {
                        this.state.latitude ?
                          `Coordenadas: ${this.state.latitude},${this.state.longitude}, Data: ${this.state.data}` 
                          :
                          this.state.mensagemDeErro ?
                            `${this.state.mensagemDeErro}` :
                            'Clique no botao para saber a sua estacao!'
                      }
                    </p>
                    <button type="button"
                      className='btn btn-primary w-100'
                      onClick={this.obterLocalizacao}>Qual a minha estacao</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default App