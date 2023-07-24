import React from 'react';
import './InfoPanel.css';

function InfoPanel({ errorMessage, infoMessage }) {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  React.useEffect(() => {
    if (errorMessage || infoMessage) {
      return setIsDisplayed(true);
    }
    return setIsDisplayed(false);
  }, [errorMessage, infoMessage]);
  return (
    <div className={`info-panel ${!isDisplayed && 'info-panel__hidden'}`}>
      <p className="info-panel__text">{errorMessage || infoMessage}</p>
      <span className={`info-panel__icon ${errorMessage && 'info-panel__icon-error'}`}>i</span>
    </div>
  );
}

export default InfoPanel;
