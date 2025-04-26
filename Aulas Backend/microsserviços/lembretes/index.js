const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

/*
{
    1: {
        id: 1,
        texto: 'fazer cafe'
    },
    2: {
        id: 2,
        texto: 'andar com o cachorro'
    }
}
*/

const baseLembretes = {}
let id = 1
// GET /lembretes () => {}
// localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

// POST /lembretes () => {}
// localhost:4000/lembretes
app.post('/lembretes', (req, res) => {
    // 1. Pegar o texto do lembrete
    // 2. Criar um objeto com id e texto
    // 3. Adicionar o objeto no baseLembretes
    // 4. incrementar o id
    // 5. Retornar o objeto criado

    const { texto } = req.body // Desestrutura o texto do corpo da requisição
    const lembrete = {
        id: id,
        texto: texto
    }
    baseLembretes[id] = lembrete
    id++
    axios.post('http://localhost:5200/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
        .then(resAxios => {
            console.log('Evento enviado para o barramento')
        })
        .catch(err => {
            console.error('Erro:', err.message)
        })
    res.status(201).json(lembrete)
})

// POST /eventos
app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log('Evento recebido:', evento)
    res.end()
})

const port = 4000
app.listen(port, () => {
    console.log(`lembretes rodando na porta ${port}.`)
})

