import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/Accordion'
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

  return (
    <>
      <div>
        <Accordion items = {items} />
      </div>
    </>
  )
}

export default App
