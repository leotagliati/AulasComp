const q = 'Itu'
const appid = 'nao coloque o chave da api aqui'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `http://${baseURL}?q=${q}&appid=${appid}`
console.log(url)