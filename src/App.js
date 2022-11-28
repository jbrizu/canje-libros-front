import { Routes, Route } from "react-router-dom";
import FormularioLector from "./Componentes/FormularioLector";   
import FormularioLibro from "./Componentes/FormularioLibro";
import MainLectores from "./Componentes/MainLectores";
import MainLibros from "./Componentes/MainLibros"; 
import Navegacion from "./Componentes/Navegacion";
import Carrusel  from "./Componentes/Carrusel";
import Footer from "./Componentes/Footer"
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navegacion />
        <Carrusel/>
        <Container>
        <Routes>
          <Route path="/" element={<MainLibros />} />
          <Route path="/FormularioLibro" element={<FormularioLibro />} />
          <Route path="/MainLectores" element={<MainLectores />} />
          <Route path="/Lectores" element={<FormularioLector />} />
        </Routes>
        </Container>
        <Footer/>
    </>
  );
}

export default App;
