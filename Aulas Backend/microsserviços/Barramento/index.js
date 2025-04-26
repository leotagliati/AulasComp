const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/eventos', async (req, res) => {
    // 1. Pegar o evento do corpo da requisição
    const evento = req.body

    // 2. Enviar o evento para os microsserviços de lembretes
    try {
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch (error) {
        console.error('Erro:', error.message);
    }

    // 3. Enviar o evento para os microsserviços de observações
    try {
        await axios.post('http://localhost:4500/eventos', evento)
    }
    catch (error) {
        console.error('Erro:', error.message);
    }

    // 4. "responder"
    res.end()


})



const port = 5200
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}`)
})