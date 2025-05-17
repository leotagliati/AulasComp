require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: process.env.PEXELS_KEY
    }
})

app.get('/search', async (req, res) => {
    // console.log(req.query.query)
    try {
        const result = await pexelsClient.get('/search', {
            params: {
                per_page: req.query.per_page || 10,
                query: req.query.query
            }
        })
        res.status(200).json(result.data)
    } catch (error) {
        console.error('Erro ao buscar fotos:', error)
        res.status(500).json({ error: 'Erro ao buscar fotos' })
    }
    res.end()
})


const PORT = 5070
app.listen(PORT, () => {
    console.clear()
    console.log('--------------------------------------')
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log('--------------------------------------')
})
