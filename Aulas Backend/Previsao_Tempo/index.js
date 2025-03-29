//async/await
const fatorial = (n) => {
    return new Promise((resolve, reject) => {
        if (n < 0) return reject('apenas valores positivos!')
        let res = 1
        for (let i = 2; i <= n; i++) res *= i
        resolve(res)
    })
}

const comThenCatch = () => {
    fatorial(10)
        .then(res => console.log(`Resultado: ${res}`))
        .catch(err => console.log(`Erro: ${err}`))
    fatorial(-10)
        .then(res => console.log(`Resultado: ${res}`))
        .catch(err => console.log(`Erro: ${err}`))
}
comThenCatch()

const comAsyncAwait = async () => {
    try {
        const f1 = await fatorial(10)
        console.log(`Resultado: ${f1}`)
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
    try {
        const f1 = await fatorial(-10)
        console.log(`Resultado: ${f1}`)
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}
comAsyncAwait()


//asincrono
// async function hello(nome) {
//     return `Oi, ${nome}`
// }
// hello('ana').then(res => console.log(res))

//sincrono
// const res  = hello('ana')
// console.log(res)
// console.log("acabou")


// const axios = require('axios')
// const q = 'Itu'
// const appid = 'ff419fbecb214585b8e40231e5e85fa5'
// const cnt = '2'
// const units = 'metric'
// const lang = 'pt_br'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// axios.get(url)
//     .then((res) => {
//         console.log(res.data)
//         console.log("*******************************************************")
//         return res.data
//     })
//     .then(function (res) {
//         console.log(`cnt: ${res.cnt}`)
//         console.log("*******************************************************")
//         return res
//     })
//     .then(abc => {
//         console.log(`temp _min: ${abc.list[0].main.temp_min}`)
//         console.log(`temp _max: ${abc.list[0].main.temp_max}`)
//         return abc
//     })
//     .then(res => {
//         for (let i = 0; i < res.list.length; i++) {
//             console.log(`${i} descricao: ${res.list[i].weather[0].description}`)
//             console.log(`${i} sensacao: ${res.list[i].main.feels_like}`)

//         }
//         console.log("Sunset: " + new Date(res.city.sunset * 1000).toTimeString())
//         console.log("Sunrise: " + new Date(res.city.sunrise * 1000).toTimeString())
//     })


