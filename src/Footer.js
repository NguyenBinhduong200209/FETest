import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Footer = () => {
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <div onChange={changeLanguage}>
          <span
            className={`languague-picker ${
              language === "vi" ? "selected" : ""
            }`}
            onClick={() => handleLanguageChange("vi")}
          >
            🇻🇳
          </span>
          <span
            className={`languague-picker ${
              language === "en" ? "selected" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            🇺🇸
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
