import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { GeneratePassword } from "./GeneratePassword";
import { Password } from "./types/password";
import {
  LenghtCharactesBar,
  SecurityLevel,
  ShowResults,
  GeneratePassButton,
  CheckboxOptions,
} from "./components";
import { defaultOptions } from "./DefaultOptions";

function App() {
  const [optionsPass, setOptionsPass] = useState<Password>(defaultOptions);
  const [isBlockButton, setIsBlockButton] = useState(false)

  useEffect( () => {
    if(!optionsPass.lowerCaseOption && !optionsPass.upperCaseOption && !optionsPass.symbolsOption && !optionsPass.numbersOption){
      setIsBlockButton(true)
    }else {
      setIsBlockButton(false)
    }
  }, [optionsPass])

  const handleOptionChangeUpperCase = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => {
      return { ...optionsPass, upperCaseOption: e.target.checked };
    });
  };

  const handleOptionChangeLowerCase = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => {
      return { ...optionsPass, lowerCaseOption: e.target.checked };
    });
  };

  const handleOptionChangeNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => {
      return { ...optionsPass, numbersOption: e.target.checked };
    });
  };

  const handleOptionChangeUpperSymbols = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => {
      return { ...optionsPass, symbolsOption: e.target.checked };
    });
  };

  const handleOptionLenght = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsPass((optionsPass) => {
      return { ...optionsPass, lenghtOption: parseInt(e.target.value) };
    });
  };

  const handleGeneratePass = () => {
    setOptionsPass((optionsPass) => {
      return {
        ...optionsPass,
        passwordGenerated: GeneratePassword(optionsPass),
      };
    });
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="title">
          <h1>Password Generator</h1>
        </div>

        <ShowResults passwordGenerated={optionsPass.passwordGenerated} />

        <LenghtCharactesBar
          lenghtOption={optionsPass.lenghtOption}
          handleOptionLenght={handleOptionLenght}
        />

        <CheckboxOptions
          password={optionsPass}
          handleOptionChangeUpperCase={handleOptionChangeUpperCase}
          handleOptionChangeLowerCase={handleOptionChangeLowerCase}
          handleOptionChangeNumbers={handleOptionChangeNumbers}
          handleOptionChangeUpperSymbols={handleOptionChangeUpperSymbols}
        />

        <SecurityLevel password={optionsPass}/>

        <GeneratePassButton handleGeneratePass={handleGeneratePass} blockButton={isBlockButton} />
      </div>
    </div>
  );
}

export default App;
