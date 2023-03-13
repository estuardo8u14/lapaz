import React, { Fragment, useState, useEffect } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
// import {Accordion, AccordionSummary, AccordionDetails, Typography, MenuItem, Select, InputLabel } from '@material-ui/core';
import {
	MenuItem,
	Select,
	InputLabel,
	RadioGroup,
	FormLabel,
	FormControlLabel,
	Button,
} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleModal from '../../components/Modals/SimpleModal';
import ModalDir from '../../components/Modals/ModalDir';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import ModalAseguradoras from '../../components/Modals/ModalAseguradoras';
import ModalAutoFill from '../../components/Modals/ModalAutoFill';
import InfoPacienteForm from '../../components/InfoPacienteForm/InfoPacienteForm';
import Covid from '../../components/Vacunas/Covid';
import { useLocation } from 'react-router';
import ModalAdRapida from '../../components/Modals/ModalAdRapida';
import InfoPacienteEmergencia from '../../components/InfoPacienteForm/InfoPacienteEmergencia';
import { Link } from 'react-router-dom';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function NewPatient(props) {
	const [isShownEmergencia, setIsShownEmergencia] = useState(false);

	const handleClickEmergencia = (e) => {
		setIsShownEmergencia(true);
	};

	const [isShownCoex, setIsShownCoex] = useState(false);

	const handleClickCoex = (e) => {
		setIsShownCoex(true);
	};

	return (
		<Fragment>
			<HeaderAdmisiones />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4'>
								<div class='row pt-5'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500'>
												<i class='fa fa-exclamation-circle'></i>{' '}
												<a
													class='expand-btn text-grey-500 fw-700'
													href='/'>
													Inicio /
												</a>{' '}
												<a
													class='expand-btn text-grey-500 fw-900'
													href='/Admisiones'>
													{' '}
													Nuevo Paciente
												</a>
											</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-2'>
											<Button
												onClick={handleClickEmergencia}
												variant='contained'>
												Emergencia
											</Button>
										</div>
										<div className='col-lg-1 me-3'>
											<Button
												onClick={handleClickCoex}
												variant='contained'>
												COEX
											</Button>
										</div>

										<div className='col-lg-2'>
											<Button
												//onClick={}
												variant='contained'>
												Diagnosticos
											</Button>
										</div>
										<div className='col-lg-2'>
											<Button
												//onClick={}
												variant='contained'>
												Encamamiento
											</Button>
										</div>
										<div className='col-lg-2'>
											<Button
												//onClick={}
												variant='contained'>
												Sala de operaciones
											</Button>
										</div>
										<div className='col-lg-1'>
											<Button
												//onClick={}
												variant='contained'>
												Labs
											</Button>
										</div>
									</div>

									<div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea3'></div>
											</div>
										</div>
									</div>

									{isShownEmergencia && <InfoPacienteForm />}
									{isShownEmergencia && <InfoPacienteEmergencia />}
									{isShownCoex && <InfoPacienteForm />}

									{isShownCoex && <ModalAseguradoras />}

									{isShownCoex && (
										<div class='row'>
											<div class='col-lg-12 mb-5 mt-3'>
												<div class='form-gorup'>
													<div class='linea3'></div>
												</div>
											</div>
										</div>
									)}

									{isShownCoex && (
										<Link to={'/COEX'}>
											<Button variant='contained'>
												Agendar cita para el paciente
											</Button>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
