import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Title from './Components/Title.jsx'
import Result_val from './Components/Result_val.jsx'
import Buttons from './Components/Buttons.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='border border-dark px-3'>
      <Title />
      <Result_val/>
      <Buttons/>
    </div>
  )
}

export default App
