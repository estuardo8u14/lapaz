import './App.css';
//import de paginas para ruteo y nav
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Admisiones from './pages/Admisiones/Admisiones';
import Enfermeria from './pages/Enfermeria/Enfermeria';
import Signos from './pages/Enfermeria/Signos';
import Anamnesis from './pages/Medico/Anamnesis';
import Perfil from './pages/Paciente/Perfil';
import Login from './pages/Login/Login';
import Admision from './pages/Admisiones/Admision';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmisionAtencion from './pages/Admisiones/AdmisionAtencion';
import TablasPaciente from './pages/Paciente/TablasPaciente';
import AdmisionesEditar from './pages/Admisiones/AdmisionesEditar';
import Motivo from './pages/Medico/Motivo';
import HistEnf from './pages/Medico/HistEnf';
import NotasMedicas from './pages/Medico/NotasMedicas';
import OrdenesMedicas from './pages/Medico/OrdenesMedicas';
import Diagnostico from './pages/Medico/Diagnostico';
import ExportPdfComponent from './pages/Paciente/ExportPdfComponent';
import ResumenMedico from './pages/Medico/ResumenMedico';
import AnamnesisVisual from './pages/Enfermeria/AnamnesisVisual';
import OrdenesMedicasV from './pages/Enfermeria/OrdenesMedicasV';

import Coex from './pages/COEX/Coex';

import NewPatient from './pages/Admisiones/NewPatient';
import MedicoCoex from './pages/COEX/MedicoCoex';
import EditCupon from './pages/COEX/EditCupon';
import Anamnesis2 from './pages/Medico/Anamnesis2';
import NurseOrders from './pages/Enfermeria/NurseOrders';
import ScalesNursery from './pages/Enfermeria/ScalesNursery';
import OrdersPatient from './pages/Enfermeria/OrdersPatient';
import NewAdmission from './pages/Admisiones/NewAdmission';
import OrdenesChat from './components/PopoverMenu/OrdenesChat';
import PatientVitals from './pages/Enfermeria/PatientVitals';

function App() {
	return (
		<Router>
			<Routes>
				{/* root / login */}
				<Route
					path='/'
					element={<Login />}
				/>
				{/* Pagina despues de login con supersearh y tabla resumen con acciones sobre paciente */}
				<Route
					path='/Home'
					element={<Home2 />}
				/>
				{/* Completamente Nuevo paciente  */}
				<Route
					path='/Admisiones'
					element={<Admisiones />}
				/>
				{/* Edit de paciente */}
				<Route
					path='/Edit'
					element={<AdmisionesEditar />}
				/>
				{/* Admision Emergencia */}
				<Route
					path='/NewAdmission'
					element={<NewAdmission />}
				/>
				{/* Revision de admisiones pasadas */}
				<Route
					path='/Tablas'
					element={<TablasPaciente />}
				/>
				{/* Coex generar cita para paciente individual */}
				<Route
					path='/COEX'
					element={<Coex />}
				/>
				{/* Atencion de medico coex */}
				<Route
					path='/MedicoCOEX'
					element={<MedicoCoex />}
				/>
				{/* Editar cupon */}
				<Route
					path='/EditCupon'
					element={<EditCupon />}
				/>
				{/* Genracion de ordenes para emergencia */}
				<Route
					path='/OrdenesChat'
					element={<OrdenesChat />}
				/>
				{/* Gestion de Ordenes medicas para enfermera individual */}
				<Route
					path='/OrdenesMedicasV'
					element={<OrdenesMedicasV />}
				/>
				{/* Hoja de signos de paciente individual */}
				<Route
					path='/PatientVitals'
					element={<PatientVitals />}
				/>
				{/* Atencion de consulta coex y plantilla para cualquier admision */}
				<Route
					path='/Anamnesis'
					element={<Anamnesis />}
				/>

				{/*  */}
				<Route
					path='/Admision'
					element={<Admision />}
				/>
				{/*  */}
				<Route
					path='/AdmisionAtencion'
					element={<AdmisionAtencion />}
				/>
				{/*  */}
				<Route
					path='/Inicio'
					element={<Home />}
				/>

				{/*  */}
				<Route
					path='/Enfermeria'
					element={<Enfermeria />}
				/>

				{/*  */}
				<Route
					path='/Motivo'
					element={<Motivo />}
				/>
				{/*  */}
				<Route
					path='/HistEnf'
					element={<HistEnf />}
				/>
				{/*  */}
				<Route
					path='/Notas'
					element={<NotasMedicas />}
				/>
				{/*  */}
				<Route
					path='/Ordenes'
					element={<OrdenesMedicas />}
				/>
				{/*  */}
				<Route
					path='/Dx'
					element={<Diagnostico />}
				/>
				{/*  */}
				<Route
					path='/Perfil'
					element={<Perfil />}
				/>
				{/*  */}
				<Route
					path='/ResumenMedico'
					element={<ResumenMedico />}
				/>
				{/*  */}
				<Route
					path='/PdfConsultaMedica'
					element={<ExportPdfComponent />}
				/>
				{/*  */}
				<Route
					path='/AnamnesisV'
					element={<AnamnesisVisual />}
				/>
				{/*  */}
				<Route
					path='/Atencion'
					element={<Anamnesis2 />}
				/>
				{/*  */}
				<Route
					path='/NurseOrders'
					element={<NurseOrders />}
				/>
				{/*  */}
				<Route
					path='/ScalesNursery'
					element={<ScalesNursery />}
				/>
				{/*  */}
				<Route
					path='/OrdersPatient'
					element={<OrdersPatient />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
