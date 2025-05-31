const express = require('express');
const app = express();
app.use(express.json());

app.get('/hey-docker', (req, res) => {
    res.json({
        message: 'Hey Docker, I am alive!'
    });
})

app.listen(3000, () => {
    console.log('------------------------------------')
    console.log('Server is running on port 3000');
    console.log('------------------------------------')
})