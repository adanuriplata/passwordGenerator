import { FC } from "react";

interface GeneratePassButonProps {
  handleGeneratePass: () => void;
  blockButton: boolean
}

export const GeneratePassButton: FC<GeneratePassButonProps> = ({
  handleGeneratePass,
  blockButton
}) => {
  return (
    <div className="container__button">
      <div>
        <button className={blockButton ? 'blockButton' : ''} disabled={blockButton} onClick={() => handleGeneratePass()}>Generar Contraseña</button>
      </div>
    </div>
  );
};
