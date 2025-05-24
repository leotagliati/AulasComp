const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Definir um mapa de funcoes, tal qual feito no consulta
// Trate o evento do tipo observacaoCriada
// caso seu texto tenha palavra importante, altere o status para importante
// caso contrario, troque o status para normal
// emita um evento do tipo observacaoAtualizada
// com os campos tipo e dados
const funcoes = {
    ObservacaoCriada: async (observacao) => {
        observacao.status =
            observacao.texto.includes(palavraChave)
                ? 'importante'
                : 'comum'
        await axios.post('http://localhost:5200/eventos', {
            tipo: 'ObservacaoClassificada',
            dados: observacao
        })
    }
}
app.post('/eventos', async function (req, res) {
    try {
        const evento = req.body
        console.log(evento)
        await funcoes[evento.tipo](evento.dados)
    } catch (error) {
        // Descarta o erro
        console.log('Erro ao processar evento no Classificacoes', error)
    }
    finally {
        res.end()
    }
})


const port = 7000;
app.listen(port, function () {
    console.clear();
    console.log('-------------------------------------------')
    console.log(`Classificacao rodando na porta ${port}`);
    console.log('-------------------------------------------')
}
);