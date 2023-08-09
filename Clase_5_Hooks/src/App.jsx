import { useState } from 'react'
import Hijo from './Hijo'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState(0)

  return (
    <>
      <h1>Clase 5 - Hooks</h1>
      <div className="card">
        <button onClick={() => setMensaje((mensaje) => mensaje + "React")}>Ampliar mensaje</button>
        <p>
          <Hijo mensaje={mensaje}/>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
