const express = require('express')
const app = express()
app.use(express.json())

/*
{
  1: {
    id: 1,
    texto: 'ver um filme',
    observacoes: [
      {
        id: 1000,
        texto: 'comprar pipoca',
        lembreteId: 1
      }
    ]
  }
  2: {
    id: 2,
    texto: 'ir à feira'
  }
}
*/
const baseConsolidada = {}


const funcoes = {
  LembreteCriado: async (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: async (observacao) => {
    const observacoes =
      baseConsolidada[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes

  },
  // lida com com o evento de observacao atualizado
  ObservacaoAtualizada: (observacao) => {
    const observacoes = baseConsolidada[observacao.idLembrete]['observacoes']
    const index = observacoes.findIndex(obs => obs.id === observacao.id)
    observacoes[index] = observacao
  }
}
app.get('/lembretes', (req, res) => {
  res.json(baseConsolidada)
})

app.post('/eventos', async (req, res) => {
  try {
    const evento = req.body
    console.log(evento)
    await funcoes[evento.tipo](evento.dados)
  } catch (error) {
    // Descarta o erro
    console.log('Erro ao processar evento no Consulta', error)
  }
  finally {
    res.end()
  }
})

const port = 6000
app.listen(port, () => {
    console.clear()
    console.log('-------------------------------------------')
    console.log(`Consulta Porta ${port}`)
    console.log('-------------------------------------------')
})