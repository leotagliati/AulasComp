const axios = require('axios')
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
/*
{
  1: [
    {
      id: 1001,
      idLembrete: 1,
      texto: Sem açúcar
    },
    {
      id: 1002, idLembrete: 1, texto: Comprar o pó
    }
  ],
}
*/
const baseObservacoes = {}
// fazer o mapa de funcoes e tratamento do evento do tipo ObservacaoClassificada
// Esse tipo de evento deve ser traduzido para outro do tipo observacaoAtualizada
// e enviado para o barramento
const funcoes = {
    ObservacaoClassificada: async function (observacao) {
        const observacoes = baseObservacoes[observacao.idLembrete]
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status
        await axios.post('http://localhost:5200/eventos', {
            tipo: 'ObservacaoAtualizada',
            dados: observacao
        })
    }
}


//GET /lembretes/1/observacoes
app.get('/lembretes/:idLembrete/observacoes', function (req, res) {
    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])
})

//POST /lembretes/1/observacoes
app.post('/lembretes/:idLembrete/observacoes', async (req, res) => {
    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao,
        texto: texto,
        idLembrete: idLembrete,
        status: 'pendente'
    }
    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    await axios.post('http://localhost:5200/eventos', {
        tipo: "ObservacaoCriada",
        dados: observacao
    })
    res.status(201).json(observacoes)
})
app.post('/eventos', async (req, res) => {
    observacao = req.body
    funcoes[ObservacaoClassificada](observacao)
    await axios.post('http://localhost:5200/eventos', {
        tipo: "ObservacaoAtualizada",
        dados: observacao
    })
})

app.post('/eventos', async (req, res) => {
    try {
        const evento = req.body
        console.log(evento)
        await funcoes[evento.tipo](evento.dados)

    } catch (error) {
        // Descarta o erro
        console.log('Erro ao processar evento no Observacoes', error)

    }
    finally {
        res.end()
    }
})


const port = 5000
app.listen(port, () => {
    console.clear()
    console.log('-------------------------------------------')
    console.log(`Observações. Porta ${port}.`)
    console.log('-------------------------------------------')
})