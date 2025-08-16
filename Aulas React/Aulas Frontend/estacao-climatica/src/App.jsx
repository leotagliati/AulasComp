import React from 'react';
import Hippo from './Hippo';
import EstacaoClimatica from './EstacaoClimatica';
import Loading from './Loading';
class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    icone: null,
    mensagemDeErro: null
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.obterLocalizacao();
  }

  componentDidUpdate() {
    console.log('componenteDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  estacao = {
    VERAO: { icone: "sun", nome: "Verão" },
    INVERNO: { icone: "snowman", nome: "Inverno" },
    OUTONO: { icone: "leaf", nome: "Outono" },
    PRIMAVERA: { icone: "fan", nome: "Primavera" }
  };

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);

    const estouNoSul = latitude < 0;
    if (data >= d1 && data < d2) {
      return estouNoSul ? this.estacao.INVERNO : this.estacao.VERAO;
    }
    if (data >= d2 && data < d3) {
      return estouNoSul ? this.estacao.PRIMAVERA : this.estacao.OUTONO;
    }
    if (data >= d3 || data < d4) {
      return estouNoSul ? this.estacao.VERAO : this.estacao.INVERNO;
    }
    return estouNoSul ? this.estacao.OUTONO : this.estacao.PRIMAVERA;
  };

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date(); // Mantém como objeto Date
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
        const icone = estacao.icone;

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude, // Corrigido
          estacao: estacao.nome,
          data: dataAtual.toLocaleTimeString(),
          icone: icone
        });
      },
      (err) => {
        this.setState({
          mensagemDeErro: 'Habilite a localização'
        })
      }
    );
  };


  render() {
    console.log('render')
    return (
      <div>
        <div className="container mt-2 text-center">
          <div className="row">
            <div className="col-12">
              <div className="justify-content-center d-flex">
                <Hippo />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              {
                (!this.state.latitude && !this.state.mensagemDeErro) ?
                  <Loading mensagem="Por favor, responda à solicitacao de localização"></Loading>
                  :
                  this.state.mensagemDeErro ?
                    <p className="border rounded p-2 fs-1 text-center">
                      É preciso dar permissao para acessar a localizacao.
                    </p>

                    :
                    <EstacaoClimatica
                      latitude={this.state.latitude}
                      longitude={this.state.longitude}
                      estacao={this.state.estacao}
                      icone={this.state.icone}
                      mensagemDeErro={this.state.mensagemDeErro}
                      obterLocalizacao={this.obterLocalizacao()}
                    />

              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
