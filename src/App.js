import "./App.css";
//import de paginas para ruteo y nav
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Admisiones from "./pages/Admisiones/Admisiones";
import Enfermeria from "./pages/Enfermeria/Enfermeria";
import Signos from "./pages/Enfermeria/Signos";
import Anamnesis from "./pages/Medico/Anamnesis";
import Perfil from "./pages/Paciente/Perfil";
import Login from "./pages/Login/Login";
import Admision from "./pages/Admisiones/Admision";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdmisionAtencion from "./pages/Admisiones/AdmisionAtencion";
import TablasPaciente from "./pages/Paciente/TablasPaciente";
import AdmisionesEditar from "./pages/Admisiones/AdmisionesEditar";
import Motivo from "./pages/Medico/Motivo";
import HistEnf from "./pages/Medico/HistEnf";
import NotasMedicas from "./pages/Medico/NotasMedicas";
import OrdenesMedicas from "./pages/Medico/OrdenesMedicas";
import Diagnostico from "./pages/Medico/Diagnostico";
import ExportPdfComponent from "./pages/Paciente/ExportPdfComponent";
import ResumenMedico from "./pages/Medico/ResumenMedico";
import AnamnesisVisual from "./pages/Enfermeria/AnamnesisVisual";
import OrdenesMedicasV from "./pages/Enfermeria/OrdenesMedicasV";

import Coex from "./pages/COEX/Coex";

import NewPatient from "./pages/Admisiones/NewPatient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admision" element={<Admision />} />
        <Route path="/AdmisionAtencion" element={<AdmisionAtencion />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Home" element={<Home2 />} />
        <Route path="/Admisiones" element={<Admisiones />} />
        <Route path="/NuevoPaciente" element={<NewPatient />} />
        <Route path="/Enfermeria" element={<Enfermeria />} />
        <Route path="/Signos" element={<Signos />} />
        <Route path="/Anamnesis" element={<Anamnesis />} />
        <Route path="/Motivo" element={<Motivo />} />
        <Route path="/HistEnf" element={<HistEnf />} />
        <Route path="/Notas" element={<NotasMedicas />} />
        <Route path="/Ordenes" element={<OrdenesMedicas />} />
        <Route path="/Dx" element={<Diagnostico />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Tablas" element={<TablasPaciente />} />
        <Route path="/Edit" element={<AdmisionesEditar />} />
        <Route path="/ResumenMedico" element={<ResumenMedico />} />
        <Route path="/PdfConsultaMedica" element={<ExportPdfComponent />} />
        <Route path="/AnamnesisV" element={<AnamnesisVisual />} />
        <Route path="/OrdenesMedicasV" element={<OrdenesMedicasV />} />
        <Route path="/COEX" element={<Coex />} />
      </Routes>
    </Router>
  );
}

export default App;
