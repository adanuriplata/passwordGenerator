import { FC, useEffect, useState } from "react";
import { PasswordCode } from "../types/PasswordCode";

interface SecurityLevelProps {
  password: PasswordCode;
}

export const SecurityLevel:FC<SecurityLevelProps> = ({password}) => {

  const [securityLevel, setSecurityLevel] = useState({
    level1: false,
    level2: false,
    level3: false,
  })

  useEffect( () => {
    //Zero security
    if(!password.lowerCaseOption && !password.upperCaseOption && !password.symbolsOption && !password.numbersOption){
      setSecurityLevel({level1: false, level2: false, level3: false})
      return
    }
    if(password.lenghtOption < 8) {
      setSecurityLevel({level1: true, level2: false, level3: false})
      return
    }
    //3 security
    if(password.lenghtOption > 10 && password.lowerCaseOption && password.upperCaseOption && password.symbolsOption && password.numbersOption) {
      setSecurityLevel({level1: true, level2: true, level3: true})
      return
    }
    //2 security
    if(
      ((password.lenghtOption > 7) && (!password.upperCaseOption || !password.numbersOption || !password.symbolsOption || !password.lowerCaseOption))
      ||
      ((password.lenghtOption > 7 && password.lenghtOption < 11) && (password.upperCaseOption && password.numbersOption && password.symbolsOption && password.lowerCaseOption))
      )
      {
      setSecurityLevel({level1: true, level2: true, level3: false})
      return
    }
    //1 security
    if(
      ((password.lenghtOption < 8) && (password.upperCaseOption && password.numbersOption && password.symbolsOption && password.lowerCaseOption))
      ||
      ((password.lenghtOption < 8) && (password.upperCaseOption && password.numbersOption && password.symbolsOption && !password.lowerCaseOption))
      )
      {
      setSecurityLevel({level1: true, level2: false, level3: false})
      return
    }

  }, [password])



  return (
    <div className="container__levelSecurity">
      <div>
        <div>Nivel de seguridad</div>
        <div className="levelBarContianer">
          <div className={`${ securityLevel.level1 ? 'levelBarCheck' : ''} levelBar levelBar1 full`}></div>
          <div className={`${ securityLevel.level2 ? 'levelBarCheck' : ''} levelBar levelBar2 full`}></div>
          <div className={`${ securityLevel.level3 ? 'levelBarCheck' : ''} levelBar levelBar3 full`}></div>
        </div>
      </div>
    </div>
  );
};
