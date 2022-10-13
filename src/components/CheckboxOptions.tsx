import { ChangeEvent, FC } from "react";
import { PasswordCode } from "../types/PasswordCode";

interface CheckboxOptionsProps {
  password: PasswordCode;
  handleOptionChangeUpperCase: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionChangeLowerCase: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionChangeNumbers: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionChangeUpperSymbols: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxOptions: FC<CheckboxOptionsProps> = ({
  handleOptionChangeUpperCase,
  handleOptionChangeLowerCase,
  handleOptionChangeNumbers,
  handleOptionChangeUpperSymbols,
  password,
}) => {
  return (
    <div className="container__options">
      <label>
        <input
          name="upperCase"
          checked={password.upperCaseOption}
          type="checkbox"
          onChange={(e) => handleOptionChangeUpperCase(e)}
        />
        <span> Inlcuye letras mayusculas </span>
      </label>
      <label>
        <input
          checked={password.lowerCaseOption}
          type="checkbox"
          onChange={(e) => handleOptionChangeLowerCase(e)}
        />
        <span> Inlcuye letras minusculas </span>
      </label>
      <label>
        <input
          checked={password.numbersOption}
          type="checkbox"
          onChange={(e) => handleOptionChangeNumbers(e)}
        />
        <span> Inlcuye numeros </span>
      </label>
      <label>
        <input
          checked={password.symbolsOption}
          type="checkbox"
          onChange={(e) => handleOptionChangeUpperSymbols(e)}
        />
        <span> Inlcuye simbolos </span>
      </label>
    </div>
  );
};
