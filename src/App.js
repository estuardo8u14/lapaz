import './App.css';
//import de paginas para ruteo y nav
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Admisiones from "./pages/Admisiones/Admisiones";
import Enfermeria from "./pages/Enfermeria/Enfermeria";
import Signos from "./pages/Enfermeria/Signos";
import Medico from "./pages/Medico/Medico";
import Perfil from "./pages/Paciente/Perfil";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home2/>}/>      
        <Route path="/Admisiones" element={<Admisiones/>}/>
        <Route path="/Enfermeria" element={<Enfermeria/>}/>
        <Route path="/Signos" element={<Signos/>}/>
        <Route path="/Medico" element={<Medico/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
      </Routes>
    </Router>
  );
}

export default App;
