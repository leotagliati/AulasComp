import Pedidos from './Pedidos'
import Cartao from './Cartao'
import Feedback from './Feedback'
const App = () => {
  const textoOK = 'ja chegou'
  const textoNOK = 'Nao chegou ainda'
  const functionOK = () => alert('agradecemos a confirmacao')
  const functionNOK = () => alert('Verificamos o ocorrido')
  const componenteFeeback= (
    <Feedback 
      textoOK = {textoOK}
      textoNOK = {textoNOK}
      functionOK = {functionOK}
      functionNOK = {functionNOK}
    />
  )
  return (
    <div className="container border mt-2 ">
      <div className="row">

        <div className="col-lg-6 col-xxl-4">

          <Cartao
            cabecalho={new Date().toLocaleDateString()}>

            <Pedidos
              titulo="SSD"
              descricao="Um SSd de 512Gb"
              icone="hdd" />
              {componenteFeeback}
          </Cartao>


        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toLocaleDateString()}>

            <Pedidos
              titulo="Livro"
              descricao="Harry Potter"
              icone="book" />
            {componenteFeeback}
          </Cartao>

        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toLocaleDateString()}>

            <Pedidos
              titulo="Hippo"
              descricao="Adult hippo"
              icone="hippo" />
            {componenteFeeback}
          </Cartao>


        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toLocaleDateString()}>

            <Pedidos
              titulo="SnowMan"
              descricao="Um boneco de neve magico"
              icone="snowman fa-shake" />
            {componenteFeeback}
          </Cartao>


        </div>
      </div>

    </div>
  )
}

export default App