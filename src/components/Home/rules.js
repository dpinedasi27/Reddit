import LanguageSwitcher from "components/navigation/LanguageSwitcher";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Rules() {
  const { t } = useTranslation(); // Usamos el hook useTranslation para obtener las traducciones
  const [open, setOpen] = useState(null);

  const toggleDropdown = (index) => {
    setOpen(open === index ? null : index); // Alternar dropdown
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-1 space-y-1">
      {/* Header */}
      <div className="bg-blue-950 h-10 text-white flex justify-between p-1">
        {t("rulesTitle")} {/* Usamos t() para obtener el título traducido */}
        <LanguageSwitcher/>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {[t("rule1"), t("rule2"), t("rule3"), t("rule4"), t("rule5")].map(
          (rule, index) => (
            <div key={index}>
              {/* Dropdown Header */}
              <div
                className="flex justify-between items-center border-b border-gray-300 py-2 cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <span>{rule}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>

              {/* Dropdown Content */}
              {open === index && (
                <div className="text-gray-500 mt-2">{rule}</div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Rules;
