import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/Accordion'
import Busca from './components/Busca'
const items = [
  {
    title: 'Java',
    content: 'Linguagem compilada e interpretada'
  },
  {
    title: 'Python',
    content: 'Linguagem interpretada e dinamicamente tipada'
  },
  {
    title: 'JavaScript',
    content: 'Interpretada. Executada do lado do cliente e do servidor também'
  },
]
function App() {

  const expressaoJSX = <Busca />
  return (
    <>
      <div>
        {/* <Accordion items={items} /> */}
        {expressaoJSX}

      </div>
    </>
  )
}

export default App
