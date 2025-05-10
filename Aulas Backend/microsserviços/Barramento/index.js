const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/eventos', async (req, res) => {
    const evento = req.body
    try {
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
    try {
        await axios.post('http://localhost:4500/eventos', evento)
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
    try {
        await axios.post('http://localhost:6000/eventos', evento)
    } catch (error) {
        console.log(error)
    }
    res.end()
})



const port = 5200
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}`)
})