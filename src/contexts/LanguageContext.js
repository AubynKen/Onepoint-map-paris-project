import React from "react";

const LanguageContextProvider = React.createContext({lang: "EN", setLang: function(){}});

export default LanguageContextProvider;