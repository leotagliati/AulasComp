const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())
/*
{
  1: {
    id: 1,
    texto: 'fazer café'
  },
  2: {
    id: 2,
    texto: 'ir à feira'
  }
}
*/
const baseLembretes = {}
let id = 1
//GET /lembretes () => {}
//localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
  res.json(baseLembretes)
})

//POST /lembretes () => {}
//localhost:4000/lembretes
app.post('/lembretes', (req, res) => {
  const { texto } = req.body
  const lembrete = { id, texto }
  baseLembretes[id] = lembrete
  id++
  axios.post('http://localhost:5200/eventos', {
    tipo: 'LembreteCriado',
    dados: lembrete
  })
    .then((resAxios) => {

    })
    .catch((e) => {
      console.log('Erro ao enviar evento para o barramento', e.message)
    })
    .finally(() => {
      res.status(201).json(lembrete)
    })
})

//POST /eventos
app.post('/eventos', async (req, res) => {
  try {
    console.log('Evento recebido no Lembretes:')
    console.log(req.body)

  } catch (error) {
    // Descarta o erro
    console.log('Erro ao processar evento no Lembretes', error)

  }
  finally {
    res.end()
  }
})

const port = 4000
app.listen(port, () => {
  console.clear()
  console.log('-------------------------------------------')
  console.log(`Lembretes. Porta ${port}.`)
  console.log('-------------------------------------------')
})