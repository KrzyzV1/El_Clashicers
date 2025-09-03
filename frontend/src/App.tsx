import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Klany } from "./pages/Klany";
import { Discord } from "./pages/Discord";
import { Nagrody } from "./pages/Nagrody";
import { Navbar } from "./components/Navbar";
import { Zasady } from "./pages/Zasady";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/klany" element={<Klany />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/nagrody" element={<Nagrody />} />
          <Route path="/zasady" element={<Zasady />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
