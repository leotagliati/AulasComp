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
            texto: "sem açúcar"   
        },
        {
            id:1002, idLembrete: 1, texto: "Comprar pó"
        }
    ]
}

*/

const baseObservacoes = {}

//GET /lembretes
app.get('/lembretes/:idLembrete/observacoes', function(req,res){
    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])
})

//POSt /lembretes/1/observacoes
app.post('/lembretes/:idLembrete/observacoes', (req, res) => { 
    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao, 
        texto: texto, 
        idLembrete: idLembrete
    }
    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    res.status(201).json(observacoes)
})
const port = 4500
app.listen(port,() => {
    console.log(`Observações. Porta ${port}`)
})