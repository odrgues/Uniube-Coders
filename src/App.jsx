import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/GlobalStyle";

import NavBar from "./shared/NavBar/NavBar";
import Footer from "./shared/Footer/Footer";

import Home from "./pages/Home";
import Programa from "./pages/Programa";
import Faculdade from "./pages/Faculdade";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/faculdade" element={<Faculdade />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
