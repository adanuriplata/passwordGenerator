import { ChangeEvent, useState } from 'react'
import './App.css'
import { GeneratePassword } from './GeneratePassword'
import { Password } from './types/password'

function App() {

  const defaultOptions: Password = {   
    lenghtOption: 5,
    upperCaseOption: true,
    lowerCaseOption: true,
    numbersOption: true,
    symbolsOption: true, 
  }

  const [optionsPass, setOptionsPass] = useState<Password>(defaultOptions)


  const handleOptionChangeUpperCase = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => { return {...optionsPass, upperCaseOption: e.target.checked}})
    console.log(GeneratePassword(optionsPass));
    console.log(e.target.checked)
  }

  const handleOptionChangeLowerCase = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => { return {...optionsPass, lowerCaseOption: e.target.checked}})
    console.log(GeneratePassword(optionsPass));
    console.log(e.target.checked)
  }

  const handleOptionChangeNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => { return {...optionsPass, numbersOption: e.target.checked}})
    console.log(GeneratePassword(optionsPass));
    console.log(e.target.checked)
  }

  const handleOptionChangeUpperSymbols = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => { return {...optionsPass, symbolsOption: e.target.checked}})
    console.log(GeneratePassword(optionsPass));
    console.log(e.target.checked)
  }

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
            <input checked={optionsPass.upperCaseOption} type="checkbox" onChange={e => handleOptionChangeUpperCase(e)}/> 
            <span> Inlcuye letras mayusculas </span>  
          </label>
          <label htmlFor="">
            <input checked={optionsPass.lowerCaseOption} type="checkbox" onChange={e => handleOptionChangeLowerCase(e)}/> 
            <span> Inlcuye letras minusculas </span>  
          </label>
          <label htmlFor="">
            <input checked={optionsPass.numbersOption} type="checkbox" onChange={e => handleOptionChangeNumbers(e)}/> 
            <span> Inlcuye letras y numeros </span>  
          </label>
          <label htmlFor="">
            <input checked={optionsPass.symbolsOption} type="checkbox" onChange={e => handleOptionChangeUpperSymbols(e)}/> 
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

export default App;