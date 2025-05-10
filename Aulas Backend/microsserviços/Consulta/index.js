const express = require('express')
const app = express()
app.use(express.json())


const baseConsolidada = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacacaoCriada: (observacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
    },
    // resolvendo o problema do conceito aberto/fechado
}
app.get('/lembretes', (req, res) => {
    res.json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    funcoes[evento.tipo](req.dados)
    res.end()
})
const port = 6000
app.listen(port, () => {
    console.log(`consulta at port ${port}`)
})