import React, { useState } from "react";

const LanguageSelect: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    // You can also handle other actions here, like saving the selected language
  };

  return (
    <form className="mx-auto max-w-sm">
      <select
        id="languages"
        value={selectedLanguage}
        onChange={handleChange}
        className="block w-full cursor-pointer rounded-lg border-none bg-transparent p-2.5 text-sm text-gray-900 focus:border-transparent focus:ring-transparent"
      >
        <option value="" disabled>
          Choose a language
        </option>
        <option value="fa">Persian</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </form>
  );
};

export default LanguageSelect;
