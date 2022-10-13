import { ChangeEvent, FC } from "react";

interface LenghtCharactesBarProps {
  lenghtOption: number;
  handleOptionLenght: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LenghtCharactesBar: FC<LenghtCharactesBarProps> = ({
  handleOptionLenght,
  lenghtOption,
}) => {
  return (
    <div className="container__lenght-characters">
      <div>
        <h3>Longitud de caracteres</h3>
        <p>{lenghtOption}</p>
      </div>
      <label htmlFor="bar">
        <input
          name="bar"
          type="range"
          min="5"
          max="20"
          value={lenghtOption}
          onChange={(e) => handleOptionLenght(e)}
        />
      </label>
    </div>
  );
};
