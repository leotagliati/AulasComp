// import React from 'react';
// import Hippo from './Hippo';
// import EstacaoClimatica from './EstacaoClimatica';

// class App extends React.Component {
//   state = {
//     latitude: null,
//     longitude: null,
//     estacao: null,
//     data: null,
//     icone: null,
//     mensagemDeErro: null
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//   }

//   componentDidUpdate() {
//     console.log('componenteDidUpdate')
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//   }

//   estacao = {
//     VERAO: { icone: "sun", nome: "Verão" },
//     INVERNO: { icone: "snowman", nome: "Inverno" },
//     OUTONO: { icone: "leaf", nome: "Outono" },
//     PRIMAVERA: { icone: "fan", nome: "Primavera" }
//   };

//   obterEstacao = (data, latitude) => {
//     const anoAtual = data.getFullYear();
//     const d1 = new Date(anoAtual, 5, 21);
//     const d2 = new Date(anoAtual, 8, 24);
//     const d3 = new Date(anoAtual, 11, 22);
//     const d4 = new Date(anoAtual, 2, 21);

//     const estouNoSul = latitude < 0;
//     if (data >= d1 && data < d2) {
//       return estouNoSul ? this.estacao.INVERNO : this.estacao.VERAO;
//     }
//     if (data >= d2 && data < d3) {
//       return estouNoSul ? this.estacao.PRIMAVERA : this.estacao.OUTONO;
//     }
//     if (data >= d3 || data < d4) {
//       return estouNoSul ? this.estacao.VERAO : this.estacao.INVERNO;
//     }
//     return estouNoSul ? this.estacao.OUTONO : this.estacao.PRIMAVERA;
//   };

//   obterLocalizacao = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const dataAtual = new Date(); // Mantém como objeto Date
//         const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
//         const icone = estacao.icone;

//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude, // Corrigido
//           estacao: estacao.nome,
//           data: dataAtual.toLocaleDateString(),
//           icone: icone,
//           mensagemDeErro: {this.state.mensagemDeErro},
//         });
//       },
//       (err) => {
//         this.setState({
//           mensagemDeErro: 'Habilite a localização'
//         })
//       }
//     );
//   };


//   render() {
//     console.log('render')
//     return (
//       <div>
//         <div className="container mt-2 text-center">
//           <div className="row">
//             <div className="col-12">
//               <div className="justify-content-center d-flex">
//                 <Hippo />
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-sm-12 col-lg-6 col-xxl-4">
//               <EstacaoClimatica
//                 latitude={this.state.latitude}
//                 longitude={this.state.latitude}
//                 estacao={this.state.estacao}
//                 data={this.state.data}
//                 icone={this.state.icone}
//                 mensagemDeErro={this.state.mensagemDeErro}
//                 obterLocalizacao={this.obterLocalizacao} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;