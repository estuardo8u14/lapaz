import React, { Fragment, useState, useEffect } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmision from '../../components/Header/HeaderAdmision';
import { Button, Card, CardContent, CardActionArea } from '@material-ui/core';
// import {Accordion, AccordionSummary, AccordionDetails, Typography, MenuItem, Select, InputLabel } from '@material-ui/core';
import {
	MenuItem,
	Select,
	InputLabel,
	RadioGroup,
	FormLabel,
	FormControlLabel,
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
import Calendar from '../../components/Appointments/Calendar';
import { DatePicker } from 'rsuite';
import PickerDateTime from '../../components/Appointments/PickerDateTime';
import PickerDateTimeEdit from '../../components/Appointments/PickerDateTimeEdit';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function EditCupon(props) {
	const [value, setValue] = useState(props.text);
	const [editing, setEditing] = useState(false);

	const [value1, setValue1] = useState(props.text);
	const [editing1, setEditing1] = useState(false);

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			setEditing(false);
			props.onSave(value);
		}
	}

	function handleDoubleClick() {
		setEditing(true);
	}

	function handleChange1(event) {
		setValue(event.target.value);
	}

	function handleKeyPress1(event) {
		if (event.key === 'Enter') {
			setEditing(false);
			props.onSave(value);
		}
	}

	function handleDoubleClick1() {
		setEditing(true);
	}

	const [isShownTC, setIsShownTC] = useState(false);
	const handleClickTC = (e) => {
		setIsShownTC(!isShownTC);
	};

	const [isShownDT, setIsShownDT] = useState(false);
	const handleClickDT = (e) => {
		setIsShownDT(!isShownDT);
	};

	const [isShownCaja, setIsShownCaja] = useState(false);
	const handleClickCaja = (e) => {
		setIsShownCaja(!isShownCaja);
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
													href='/EditCupom'>
													{' '}
													Editar Cupón
												</a>
												{/* <a
													class='expand-btn text-grey-500 fw-900'
													href='/NuevoPaciente'>
													{' '}
													
												</a> */}
											</p>
										</div>
									</div>

									<div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea3'></div>
											</div>
										</div>
									</div>

									<div>
										<Card
											sx={{
												maxWidth: 340,
												display: 'flex',
												justifyContent: 'center',
											}}>
											<CardActionArea>
												<CardContent>
													<h3 className='fw-monoscpase fw-500 mb-3'>
														Cúpon Consulta Externa
													</h3>

													<div class='col-xl-10 offset-xl-1 col-lg-8 pt-0'>
														<label class='mont-font fw-600 font-xs'>
															Datos Demográficos:
														</label>
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
																					<i className='feather-file-text'>
																						{' '}
																						Imprimir
																					</i>
																				</th>
																			</Link>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<th class='text-grey-700 fw-500 font-xsss'>
																				Nombre
																				<strong>
																					<span>:</span> Juan Alberto Pérez
																					García
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
																				Fecha de nacimiento
																				<strong>
																					<span>:</span> 14/08/2000
																				</strong>
																			</th>
																		</tr>
																		<tr>
																			<th class='text-grey-700 fw-500 font-xsss'>
																				Seguro
																				<strong>
																					<span>:</span> Salud Siempre
																				</strong>
																			</th>
																			<th class='text-grey-700 fw-500 font-xsss'>
																				Teléfono
																				<strong>
																					<span>:</span> 41067268
																				</strong>
																			</th>
																		</tr>
																		<tr>
																			<th class='text-grey-700 fw-500 font-xsss'>
																				Póliza
																				<strong>
																					<span>:</span> 21548124
																				</strong>
																			</th>
																			<th class='text-grey-700 fw-500 font-xsss'>
																				NIT
																				<strong>
																					<span>:</span> 15443528-5
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

													<div class='clearfix'></div>

													<label class='mont-font fw-600 font-xs pb-3'>
														Profesional a visitar:
													</label>

													<div onDoubleClick={handleDoubleClick}>
														<label class='mont-font fw-500 font-xssss pe-3'>
															Especialidad:
														</label>
														{editing ? (
															<input
																type='text'
																value={value}
																onChange={handleChange}
																onKeyDown={handleKeyPress}
															/>
														) : (
															<span>Ginecología</span>
														)}
													</div>

													<div onDoubleClick={handleDoubleClick1}>
														<label class='mont-font fw-500 font-xssss pe-5'>
															Médico:
														</label>
														{editing ? (
															<input
																type='text'
																value={value1}
																onChange={handleChange1}
																onKeyDown={handleKeyPress1}
															/>
														) : (
															<span>María Gómez</span>
														)}
													</div>

													<label class='mont-font fw-bold font-xsssss pb-5'>
														*Doble click para editar
													</label>

													{/* <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                            <label class="mont-font fw-600 font-xssss">Seguro paciente:</label>
                                            <input type="text" name="comment-name" class="form-control" />
                                        </div>        
                                    </div>
                                </div> */}

													<div class='row'>
														<div class='col-lg-3 mb-1'>
															<div class='form-gorup'></div>
														</div>
													</div>

													<label class='mont-font fw-600 font-xs pb-3'>
														Calendario:
													</label>

													<PickerDateTimeEdit />

													<div class='row'>
														<div class='col-lg-12 mb-5 mt-3'>
															<div class='form-gorup'>
																<div class='linea'></div>
															</div>
														</div>
													</div>

													<label class='mont-font fw-600 font-xs pb-4'>
														Medio de Pago:
													</label>

													<div className='row ms-5'>
														<div className='col-lg-2 mb-2'>
															<Button
																onClick={handleClickDT}
																variant='contained'>
																Deposito
															</Button>
														</div>
														<div className='col-lg-2 ms-3 mb-2'>
															<Button
																onClick={handleClickTC}
																variant='contained'>
																TC o TD
															</Button>
														</div>

														<div className='col-lg-2 pe-3 mb-2'>
															<Button
																onClick={handleClickCaja}
																variant='contained'>
																Pago en caja
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
													{isShownTC && (
														<>
															<h2>Modulo de TC o TD</h2>
														</>
													)}
													{isShownDT && (
														<>
															<h2>Modulo de deposito o transferencia</h2>
														</>
													)}
													{isShownCaja && (
														<>
															<h2>Modulo de Caja</h2>
														</>
													)}

													<div class='row'>
														<div class='col-lg-12 mb-5 mt-3'>
															<div class='form-gorup'>
																<div class='linea3'></div>
															</div>
														</div>
													</div>
													<div className='col-lg-12'>
														<label class='mont-font fw-600 font-xs pb-4'>
															Facturación y validación:
														</label>
													</div>

													<label class='mont-font fw-600 font-xsss pb-4'>
														Pago confirmado o pendiente:
													</label>

													<table>
														<tr>
															<td>Factura 1</td>
															<td>Cancelado</td>
														</tr>
														<tr>
															<td>Factura 2</td>
															<td>Cancelado</td>
														</tr>
														<tr>
															<td>Factura 3</td>
															<td>Cancelado</td>
														</tr>
														<tr>
															<td>Factura 4</td>
															<td class='fw-bold'>Pendiente</td>
														</tr>
													</table>

													<div class='row'>
														<div class='col-lg-12 mb-5 mt-3'>
															<div class='form-gorup'>
																<div class='linea3'></div>
															</div>
														</div>
													</div>

													<div class='row'>
														<label class='mont-font fw-500 font-xssss pt-1'>
															Observaciones
														</label>

														<div class='form-check text-left mb-0'>
															<textarea
																type='text'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='row'>
														<form action='#'>
															<div class='row'>
																<div class='col-lg-12 pt-3 mb-3'>
																	<div class='form-check text-left mb-0'>
																		<Button variant='contained'>
																			Agendar y finalizar edición
																		</Button>
																	</div>
																</div>

																<div class='clearfix'></div>
															</div>
														</form>
													</div>
												</CardContent>
											</CardActionArea>
										</Card>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
