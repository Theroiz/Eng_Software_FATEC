//import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './Meu.css'
import nome from './calculo'

function App() {
  //const [count, setCount] = useState(0)

  const n = nome()
  return (
    <>
      <img src = {reactLogo} className = 'logo' alt = 'logo'></img>
      <input type = 'texto' value = {n}></input>
    </>
  )
}

export default App
