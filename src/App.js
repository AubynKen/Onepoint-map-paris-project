import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TreeSreen from "./screens/TreeScreen";
import EmissionScreen from "./screens/EmissionScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import BackgroundScreen from "./screens/BackgroundScreen";
import AboutUsScreen from "./screens/AboutUsScreen";

import LanguageContext from "./contexts/LanguageContext";

const App = () => {
  // Set English as the default language for the website
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "EN");
  }

  const [lang, setLangHelper] = useState(localStorage.getItem("lang")); // use lang as a state
  const setLang = (newLang) => {
    localStorage.setItem("lang", newLang); // change the language setting stored in local storage
    setLangHelper(newLang); // change the state value
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <Header />
        <Container style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/">
              <Route index element={<WelcomeScreen />} />
              <Route path="paris-trees" element={<TreeSreen />} />
              <Route path="emission-map" element={<EmissionScreen />} />
              <Route path="scientific-background" element={<BackgroundScreen />} />
              <Route path="about-us" element={<AboutUsScreen />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </LanguageContext.Provider>
  );
};
export default App;
