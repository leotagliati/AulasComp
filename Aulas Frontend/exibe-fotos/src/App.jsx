import env from "react-dotenv"
import pexelsClient from "./utils/pexelsClient"
import React from "react"
import Busca from "./components/Busca"
import ListaImagens from "./components/ListaImagens"
import PexelsLogo from "./components/PexelsLogo"

export default class App extends React.Component {


  state = {
    photos: []
  }

  // pexelsClient = null
  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   }).then(result => this.setState({ photos: result.photos }))
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
      .then(result => this.setState({ photos: result.data.photos }))
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="grid border-1 justify-content-center w-9 m-auto " >
        <div className="col-12">
          <PexelsLogo></PexelsLogo>
          <h1>Exibir uma lista de ...</h1>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens imgStyle='md:col-6 lg:col-4 xl:col-3' photos={this.state.photos}></ListaImagens>
          </div>
        </div>
        <Busca onBuscaRealizada={this.onBuscaRealizada} />
      </div >
    )
  }
}