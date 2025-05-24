const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/eventos', async (req, res) => {
    const evento = req.body
    try {
        await axios.post('http://localhost:4000/eventos', evento)
        console.log('Evento enviado para Lembretes')
    }
    catch (error) {
        console.error('Erro:', error);
    }
    try {
        await axios.post('http://localhost:5000/eventos', evento)
        console.log('Evento enviado para Observacoes')
    }
    catch (error) {
        console.error('Erro:', error);
    }
    // try {
    //     await axios.post('http://localhost:7000/eventos', evento)
    //     console.log('Evento enviado para Classificacoes')
    // } catch (error) {
    //     console.log(error)
    // }
    // try {
    //     await axios.post('http://localhost:6000/eventos', evento)
    //     console.log('Evento enviado para Consulta')
    // } catch (error) {
    //     console.log(error)
    // }
    res.end()
})



const port = 5200
app.listen(port, () => {
    console.clear()
    console.log('-------------------------------------------')
    console.log(`Barramento de eventos. Porta ${port}`)
    console.log('-------------------------------------------')
})