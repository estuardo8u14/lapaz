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
import Emergencia from '../../components/Hospitalizacion/Emergencia';
import InfoPacienteCoex from '../../components/InfoPacienteForm/InfoPacienteCoex';
import ImgDx from '../../components/Servicios/ImgDx';
import Encamamiento from '../../components/Hospitalizacion/Encamamiento';
import SalaOperaciones from '../../components/Hospitalizacion/SalaOperaciones';
import Labs from '../../components/Servicios/Labs';
import HeaderAdmision from '../../components/Header/HeaderAdmision';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function NewAdmission(props) {
	const [isShownEmergencia, setIsShownEmergencia] = useState(false);
	const handleClickEmergencia = (e) => {
		setIsShownEmergencia(!isShownEmergencia);
	};

	const [isShownCoex, setIsShownCoex] = useState(false);
	const handleClickCoex = (e) => {
		setIsShownCoex(!isShownCoex);
	};

	const [isShownDx, setIsShownDx] = useState(false);
	const handleClickDx = (e) => {
		setIsShownDx(!isShownDx);
	};

	const [isShownBed, setIsShownBed] = useState(false);
	const handleClickBed = (e) => {
		setIsShownBed(!isShownBed);
	};

	const [isShownSo, setIsShownSo] = useState(false);
	const handleClickSo = (e) => {
		setIsShownSo(!isShownSo);
	};

	const [isShownLab, setIsShownLab] = useState(false);
	const handleClickLab = (e) => {
		setIsShownLab(!isShownLab);
	};

	return (
		<Fragment>
			<HeaderAdmision />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4'>
								<div class='row pt-5'>
									<div class='col-xl-12 col-lg-12'>
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
														href='/Tablas'>
														{' '}
														Juan Pérez /
													</a>
													<a
														class='expand-btn text-grey-500 fw-900'
														href='/NewAdmission'>
														{' '}
														Admisión Emergencia
														{/*
													{isShownEmergencia && <p>/ Emergencia</p>}
													{isShownCoex && <p>/ Coex</p>}
													{isShownDx && <p>/ Diagnosticos</p>}
													{isShownBed && <p>/ Encamamiento</p>}
													{isShownSo && <p>/ Sala de operaciones</p>}
													{isShownLab && <p>/ Laboratorios</p>} */}
													</a>
												</p>
											</div>
										</div>
										<div class='page-title'>
											<h4 class='mont-font fw-600 font-md mb-lg-5 mb-4'>
												Información del paciente
											</h4>
										</div>
									</div>
									<div class='col-xl-10 offset-xl-1 col-lg-8 pt-0'>
										<div class='order-details'>
											<div class='table-content table-responsive mb-5 card border-1 bg-lightgrey p-lg-3 p-4'>
												<table class='table order-table bg-lightgrey order-table-2 mb-0'>
													<thead>
														<tr>
															<th class='border-0'>Detalles</th>
														</tr>
														<tr>
															<Link to='/PdfConsultaMedica'>
																<th className=''>
																	<i className='feather-file-text'> Imprimir</i>
																</th>
															</Link>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Nombre
																<strong>
																	<span>:</span> Juan Alberto Pérez García
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																Última visita
																<strong>
																	<span>:</span> 14/08/2021
																</strong>
															</th>
														</tr>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																DPI
																<strong>
																	<span>:</span> 3019748690101
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																Edad
																<strong>
																	<span>:</span> 25 años
																</strong>
															</th>
														</tr>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Dirección
																<strong>
																	<span>:</span>Blvd A. 3-12 Guatemala
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																Email
																<strong>
																	<span>:</span> Juanperez@gmail.com
																</strong>
															</th>
														</tr>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Teléfono
																<strong>
																	<span>:</span> 41067268
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																NIT
																<strong>
																	<span>:</span> 15443528-5
																</strong>
															</th>
														</tr>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Responsable
																<strong>
																	<span>:</span> N/A
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																Información Covid
																<strong>
																	<span>:</span> Vacuna (3 dosis)
																</strong>
															</th>
														</tr>
													</tbody>
													<tfoot>
														<tr class='order-total'>
															<Link to='/Edit'>
																<th className='pt-1'>Editar</th>
															</Link>
															<td class='text-right text-grey-700 font-xsss fw-700'>
																<span class='order-total-ammount'></span>
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									{/* <div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div> */}

									{/* <div className='row ms-5'>
										<div className='col-lg-2 mb-2'>
											<Button
												onClick={handleClickEmergencia}
												variant='contained'>
												Emergencia
											</Button>
										</div>
										<div className='col-lg-1 me-3 mb-2'>
											<Button
												onClick={handleClickCoex}
												variant='contained'>
												COEX
											</Button>
										</div>

										<div className='col-lg-2 mb-2'>
											<Button
												onClick={handleClickDx}
												variant='contained'>
												Diagnosticos
											</Button>
										</div>
										<div className='col-lg-2 mb-2'>
											<Button
												onClick={handleClickBed}
												variant='contained'>
												Encamamiento
											</Button>
										</div>
										<div className='col-lg-2 mb-2'>
											<Button
												onClick={handleClickSo}
												variant='contained'>
												Sala de operaciones
											</Button>
										</div>
										<div className='col-lg-1 mb-2'>
											<Button
												onClick={handleClickLab}
												variant='contained'>
												Labs
											</Button>
										</div>
									</div>*/}
									<Emergencia />

									{/* <div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea3'></div>
											</div>
										</div>
									</div> */}

									{/* {isShownEmergencia && <InfoPacienteForm />} */}
									{/* {isShownEmergencia && <Emergencia />} */}

									{/* {isShownCoex && <InfoPacienteCoex />}
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
									<div className='col-lg-12'>
										{isShownCoex && (
											<Link to={'/COEX'}>
												<Button
													className='ms-6'
													variant='outlined'>
													Continuar para abrir calendario y agendar cita para el
													paciente (Asegurarse de llenar todos los datos
													requeridos)
												</Button>
											</Link>
										)}
									</div>

									{isShownDx && <InfoPacienteCoex />}
									{isShownDx && <ImgDx />}

									{isShownBed && <InfoPacienteForm />}
									{isShownBed && <Encamamiento />}

									{isShownSo && <InfoPacienteForm />}
									{isShownSo && <SalaOperaciones />}

									{isShownLab && <InfoPacienteCoex />}
									{isShownLab && <Labs />} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
