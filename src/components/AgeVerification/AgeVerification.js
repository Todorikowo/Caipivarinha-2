import React, { useState } from 'react';
import "AgeVerification.css"

// WIP
function AgeVerification() {
  const [showPopup, setShowPopup] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const handleYes = () => {
    setIsVerified(true);
    setShowPopup(false);
  };

  const handleNo = () => {
    alert('Você deve ter mais de 18 anos para acessar o conteúdo.');
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div>
          <div>
            <h2>Você tem mais de 18 anos?</h2>
            <button onClick={handleYes}>Sim</button>
            <button onClick={handleNo}>Não</button>
          </div>
        </div>
      )}
      {!showPopup && isVerified && (
        <div>
          <h1>Bem-vindo ao conteúdo exclusivo para maiores de 18 anos!</h1>
        </div>
      )}
    </div>
  );
}

export default AgeVerification