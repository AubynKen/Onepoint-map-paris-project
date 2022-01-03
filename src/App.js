import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TemperatureScreen from "./screens/TemperatureScreen";

const App = () => (
  <Router>
    <Header />
    <Container style={{ minHeight: "80vh" }}>
      <Routes>
        <Route path="/">
          <Route path="temp-map" element={<TemperatureScreen />} />
        </Route>
      </Routes>
    </Container>
    <Footer />
  </Router>
);
export default App;
