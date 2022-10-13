import { PasswordCode } from "./types/PasswordCode"



export const GeneratePassword = ( passwordOptions:PasswordCode ) => {
  const numbers = '1234567890'
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperLetters = lowerLetters.toUpperCase();
  const symbols = '~`!@#$%^&*()_-+={[}]|\:;"\'<,\>.?/'
  
  
  const finalOptions = (
    numbers = '', 
    lowerLetters = '', 
    upperLetters = '', 
    symbols= '' ) => {
    const characteresForPassword = (numbers + lowerLetters + upperLetters + symbols).split('')

      for (let i = characteresForPassword.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [characteresForPassword[i], characteresForPassword[j]] = [characteresForPassword[j], characteresForPassword[i]];
      }
    return characteresForPassword

  } 

  const finalPassword =  finalOptions(
    passwordOptions.numbersOption ? numbers : '', 
    passwordOptions.lowerCaseOption ? lowerLetters : '', 
    passwordOptions.upperCaseOption ? upperLetters : '',
    passwordOptions.symbolsOption ? symbols : ''
    ).slice(0, passwordOptions.lenghtOption).join('');

  return finalPassword
}