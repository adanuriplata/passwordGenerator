import { FC } from "react";

interface GeneratePassButonProps {
  handleGeneratePass: () => void;
}

export const GeneratePassButton: FC<GeneratePassButonProps> = ({
  handleGeneratePass,
}) => {
  return (
    <div className="container__button">
      <div>
        <button onClick={() => handleGeneratePass()}>Generar Contraseña</button>
      </div>
    </div>
  );
};
