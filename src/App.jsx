import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import SubHeader from './components/subHeader'
import Hero from './components/hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-primary-bg'>
      <div className=''>
        <Header />
        <SubHeader />
        <Hero />
      </div>
    </div>
  )
}

export default App
