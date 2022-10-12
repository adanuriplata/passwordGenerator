import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mainContainer'>
        <div className='title'><h1>Pasword Generator</h1></div>
        <div className='container__results'>
          <input type="text" name='results' value='results' disabled  />
          <span className='copyPassword'>copiar pass</span>
        </div>
        <div className='container__lenght-characters'>
          <h3>Longitud de caracteres</h3>
          <div>barrita</div>
        </div>
        <div className='container__options'>
          <label htmlFor="">
            <input type="checkbox" /> 
            <span> Inlcuye letras mayusculas </span>  
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 
            <span> Inlcuye letras minusculas </span>  
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 
            <span> Inlcuye letras y numeros </span>  
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 
            <span> Inlcuye letras y simbolos </span>  
          </label>
        </div>
        <div className='contianer__levelSecurity'>
          <div>
            <div>Nivel de seguridad</div>
            <div>barritas</div>
          </div>
        </div>
        <div className="container__button">
          <div>
            <button>Generar Contraseña</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
