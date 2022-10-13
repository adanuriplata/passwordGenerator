import React, { FC, useState } from "react";

interface ShowResultsProps {
  passwordGenerated: string;
}

export const ShowResults: FC<ShowResultsProps> = ({ passwordGenerated }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClipboard = () => {
    navigator.clipboard.writeText(passwordGenerated);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div className="container__results">
      <div
        className={`${copied ? "copied inputCopied" : ""}  container__input`}
      >
        <input
          placeholder="generate pass"
          type="text"
          name="results"
          value={passwordGenerated}
          disabled
        />
        <span className="copyPassword" onClick={() => handleClipboard()}>
          📋
        </span>
        <span className="done" aria-hidden="true">
          📋 Copied
        </span>
      </div>
    </div>
  );
};
