import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>/
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default LanguageSwitcher;
