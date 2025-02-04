import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
<main className='bg-black '>
  <Navbar/>
  <Hero/>
  <Highlights/>
  <Model/>
</main>
  )
}

export default App
