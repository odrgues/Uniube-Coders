import "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
//import Programa from "./pages/Programa";
//import Faculdade from "./pages/Faculdade";
//import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/faculdade" element={<Faculdade />} />
      </Routes> */}
      <Home />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
