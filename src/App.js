import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TreeSreen from "./screens/TreeScreen";
import EmissionScreen from "./screens/EmissionScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import BackgroundScreen from "./screens/BackgroundScreen";
import AboutUsScreen from "./screens/AboutUsScreen";

const App = () => {

  // Set English as the default language for the website
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "EN");
  }

  return (
    <Router>
      <Header />
      <Container style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/">
            <Route index element={<WelcomeScreen />} />
            <Route path="paris-trees" element={<TreeSreen />} />
            <Route path="emission-map" element={<EmissionScreen />} />
            <Route
              path="scientific-background"
              element={<BackgroundScreen />}
            />
            <Route path="about-us" element={<AboutUsScreen />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};
export default App;
