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
import AddressTable from '../../components/Tables/AddressTable';
import InsuranceTable from '../../components/Tables/InsuranceTable';
import { Link } from 'react-router-dom';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function Admisiones(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const location = useLocation();
	const propsData = location.state;

	const [value, setValue] = React.useState('');
	const [covid, setCovid] = useState('');
	const [covidContentVisible, setCovidContentVisible] = useState(false);
	const [padreContentVisible, setPadreContentVisible] = useState(false);
	const [madreContentVisible, setMadreContentVisible] = useState(false);
	const [tutorContentVisible, setTutorContentVisible] = useState(false);

	const [parentesco, setParentesco] = useState('Parentesco');
	useEffect(() => {
		parentesco === 'Padre'
			? setPadreContentVisible(true)
			: setPadreContentVisible(false);
		parentesco === 'Madre'
			? setMadreContentVisible(true)
			: setMadreContentVisible(false);
		parentesco === 'Tutor'
			? setTutorContentVisible(true)
			: setTutorContentVisible(false);
	}, [parentesco]);

	const handleOnChange = (e) => {
		setParentesco(e.target.value);
	};

	useEffect(() => {
		covid === 'Covid'
			? setCovidContentVisible(true)
			: setCovidContentVisible(false);
	}, [covid]);

	const handleOnChangeCovid = (e) => {
		setCovid(e.target.value);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
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

									<div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>

									<div class='col-xl-12 col-lg-12'>
										<div class='page-title'>
											<ModalAdRapida />
											<h4 class='mont-font fw-600 font-md mb-lg-5 mt-5'>
												Nuevo paciente
											</h4>
											<form action='#'>
												<div class='row'>
													<div class='col-lg-6 mt-1 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Nombre: ${propsData.component}`}</label>
																</div>
															)}
															<input
																required
																type='text'
																placeholder='Primer Nombre *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mt-1 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`2ndo Nombre: ${propsData.content}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Segundo nombre'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Apellido: ${propsData.component1}`}</label>
																</div>
															)}

															<input
																type='text'
																placeholder='Primer apellido *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`2ndo Apellido: ${propsData.content2}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Segundo apellido *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Sexo: ${propsData.content8}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Sexo'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Estado civil: ${propsData.content7}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Estado civil'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Fecha de nacimiento: ${propsData.content3}`}</label>
																</div>
															)}
															<input
																placeholder='Fecha de nacimiento *'
																onFocus={(e) => (e.target.type = 'date')}
																onBlur={(e) => (e.target.type = 'text')}
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													{/* <div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Nacionalidad: ${propsData.content4}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Nacionalidad'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div> */}
												</div>
												<div class='row'>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`CUI: ${propsData.content5}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='CUI / DPI *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Pasaporte: ${propsData.content6}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Pasasporte'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='row'>
														<div class='col-lg-12 mb-5 mt-5'>
															<div class='form-gorup'>
																<div class='linea'></div>
															</div>
														</div>
													</div>

													<div class='row'>
														<div class='row'>
															<h4 class='mont-font fw-600 font-md mb-lg-3'>
																Contacto
															</h4>
														</div>
													</div>

													{/* <div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Estado civil: ${propsData.content7}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Estado civil'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div> */}

													{/* <div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Sexo: ${propsData.content8}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Sexo'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div> */}
													{/* <div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Teléfono: ${propsData.content9}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Teléfono *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div> */}
													<div class='col-lg-6 mb-3 mt-2'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Correo electrónico: ${propsData.content10}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Correo electrónico *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-6 mb-3 mt-2'>
														<div class='form-gorup'>
															{propsData && (
																<div>
																	<label class='mont-font fw-600 font-xssss'>{`Teléfono: ${propsData.content9}`}</label>
																</div>
															)}
															<input
																type='text'
																placeholder='Teléfono *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='row'>
														<div class='col-lg-9 mb-3'>
															<div class='form-gorup'>
																{/* {propsData && (
																	<div>
																		<label class='mont-font fw-600 font-xssss'>{`Dirección Residencia: ${propsData.content11}`}</label>
																	</div>
																)} */}
																{/* <input
																	type='text'
																	placeholder='Dirección Residencia *'
																	name='comment-name'
																	class='form-control'></input> */}
															</div>
														</div>
														{/* <div class='col-lg-3 mb-3'>
															<div class='form-gorup pt-2'>
																<ModalDir />
															</div>
														</div> */}
													</div>
													<AddressTable />

													{/* <div class='col-lg-12 mb-3 pt-1'>
														<div class='form-check text-left mb-3'>
															<Radio color='warning' />
															<label class='pt-1 form-check-label fw-600 font-xsss text-grey-700'>
																Paciente con capacidades especiales
															</label>
														</div>
														<div class='col-lg-12 mb-3'>
															<div class='form-gorup pt-1'>
																<ModalAutoFill />
																<p className='ms-3 pt-2'>
																	Autofill: Muestra los pacientes
																	auto-registrados con la capacidad de corregir
																	datos
																</p>
															</div>
														</div>
													</div> */}
												</div>

												<div class='row'>
													<div class='col-lg-12 mb-5'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>

												<div class='row'>
													<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
														Datos de facturación
													</h4>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='NIT *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Nombre'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Dirección'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>

												{/* <div class='row'>
													<div class='row'>
														<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
															Profesión u oficio
														</h4>

														<div class='col-lg-6 mb-3'>
															<div class='form-gorup'>
																<label class='mont-font fw-600 font-xssss'></label>
																<input
																	type='text'
																	placeholder='Profesión'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
														<div class='col-lg-6 mb-3'>
															<div class='form-gorup'>
																<label class='mont-font fw-600 font-xssss'></label>
																<input
																	type='text'
																	placeholder='Lugar de trabajo'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
													</div>

													<div class='row'>
														<div class='col-lg-9 pt-2 mb-5'>
															<div class='form-gorup'>
																<input
																	type='text'
																	placeholder='Dirección de trabajo'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
														<div class='col-lg-3 pt-1 mb-5'>
															<div class='form-gorup pt-2'>
																<ModalDir />
															</div>
														</div>
													</div>
												</div> */}

												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>
												<div class='row'>
													<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
														Seguros y otras afilaciones
													</h4>
													<InsuranceTable />

													{/* <div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Número de afiliación IGSS'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Número de afiliación alerta médica'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<ModalAseguradoras></ModalAseguradoras>
														</div>
													</div> */}
												</div>

												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>
												{/* <div class='row'>
													<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
														Datos de facturación
													</h4>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='NIT *'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Nombre'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'></label>
															<input
																type='text'
																placeholder='Dirección'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div> */}

												<h4 class='mont-font fw-600 font-md mb-2'>Consulta</h4>
												<div class='row'>
													<div class='col-lg-6 mt-1 mb-3'>
														<div class='form-gorup'>
															<input
																required
																type='text'
																placeholder='Motivo de consulta [Dx (CIE-10)]'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mt-1 mb-3'>
														<div class='form-gorup'>
															<input
																required
																type='text'
																placeholder='Médico Referente'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='col-lg-12 mt-1 mb-3'>
														<div class='form-gorup'>
															<input
																required
																type='text'
																placeholder='Observaciones'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>

												<h4 class='mont-font fw-600 font-md mb-2'>
													Responsable de la cuenta
												</h4>
												<div class='col'>
													<div class='col-lg-12 mb-3'>
														<div class='form-gorup'>
															<FormControl className='col-lg-2'>
																<InputLabel id='demo-simple-select-label'>
																	Parentesco
																</InputLabel>
																<Select
																	className='pt-3'
																	value={parentesco}
																	onChange={handleOnChange}
																	labelId='demo-simple-select-label'
																	id='demo-simple-select'>
																	<MenuItem value='value0'>N/A</MenuItem>
																	<MenuItem value='Padre'>Padre</MenuItem>
																	<MenuItem value='Madre'>Madre</MenuItem>
																	<MenuItem value='Tutor'>Tutor</MenuItem>
																</Select>
															</FormControl>
															{padreContentVisible && <InfoPacienteForm />}
															{madreContentVisible && <InfoPacienteForm />}
															{tutorContentVisible && <InfoPacienteForm />}
															{/* <label class="mont-font fw-600 font-xssss"></label>
                                                    <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-1" name="uname" required >
                                                        <option value="value1">Paciente</option>
                                                        <option value="value2" selected >Padre</option>
                                                        <option value="value3">Madre</option>

                                                    </select> */}
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>
												{/* <div class="checkout-payment card border-0 mt-5 bg-greyblue p-lg-5 p-4">
                                              <form action="#" class="payment-form">
                                                  <div class="payment-group mb-4">
                                                    <h4 class="mont-font fw-600 font-md mb-5">Información adicional</h4>
                                                    <div class="row">
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Médico Cabecera</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Teléfono</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros Médicos</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Teléfono</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-4 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Tipo de sangre</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                        <div class="col-lg-4 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Estatura (cm)</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                        <div class="col-lg-4 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Peso (kg)</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                        <div class="payment-radio">
                                                        <FormControl className='mb-0 mt-1' >
                                                            <RadioGroup
                                                            aria-label="huellas"
                                                            name="huellas"
                                                            >
                                                            <FormControlLabel
                                                                value="huellas"
                                                                control={<Radio color="success"/>}
                                                                label="Paciente sin huellas registradas"
                                                            />
                                                            </RadioGroup>
                                                        </FormControl>
                                                      </div>
                                                      <div class="payment-info" data-method="bank" >
                                                          <p class="font-xssss lh-24 text-grey-500 ps-4">En caso el paciente no contara con huellas registraddas en el sístema</p>
                                                      </div>
                                                  </div>
                                                  
                                                  <div class="payment-group mb-0">
                                                      <div class="payment-radio">
                                                      <FormControl className='mb-0 mt-1' >
                                                        <RadioGroup
                                                        aria-label="ss"
                                                        name="ss"
                                                        >
                                                        <FormControlLabel
                                                            value="ss"
                                                            control={<Radio color="success"/>}
                                                            label="Seguro Salud Siempre"
                                                        />
                                                        </RadioGroup>
                                                    </FormControl>
                                                      </div>
                                                      <div class="payment-info cash hide-in-default mb-5" data-method="cash">
                                                          <p class="font-xssss lh-24 text-grey-500 ps-4">Marcar en caso el paciente cuente con el seguro Salud Siempre.</p>
                                                      </div>
                                                  </div>

                                                  <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    >
                                                    <Typography>Alergías</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography>
                                                    En caso el paciente fuera alergico a algun alimento o medicamento. Especificar en caso si se presenten alergías.
                                                    </Typography>
                                                    </AccordionDetails>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5 ">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Medicamentos</label>
                                                                <input type="text" name="comment-name" className="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Comidas</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Sustancias del ambiente</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Sustancias con efectos tópicos</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                    >
                                                    <Typography>Alimentos</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography>
                                                        Marcar en caso el paciente especifique algúna dieta especifica.
                                                    </Typography>
                                                    </AccordionDetails>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Carnes</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Frutas</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Vegetales</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Vegetariano (sí/no)</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3 px-5">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                </Accordion>
                                                <Accordion disabled>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    >
                                                    <Typography>Salud Siempre</Typography>
                                                    </AccordionSummary>
                                                </Accordion>
                                                
                                              </form>
                                          </div> */}

												<h4 class='mont-font fw-600 font-md mt-2 mb-2'>
													COVID
												</h4>

												<div class='row'>
													<div class='col-lg-12 mb-0 pt-1'>
														<div class='form-gorup'>
															<div class='row'>
																<div class='col-lg-6 mb-0 pt-1'>
																	<div class='form-check text-left mb-3'>
																		<FormControl>
																			<FormLabel id='demo-controlled-radio-buttons-group'>
																				¿Ha dado positivo a COVID?
																			</FormLabel>
																			<RadioGroup
																				aria-labelledby='demo-controlled-radio-buttons-group'
																				name='controlled-radio-buttons-group'
																				value={value}
																				onChange={handleChange}>
																				<FormControlLabel
																					value='Covid'
																					control={<Radio color='success' />}
																					label='Sí'
																				/>
																				<FormControlLabel
																					value=''
																					control={<Radio color='warning' />}
																					label='No'
																				/>
																			</RadioGroup>
																		</FormControl>
																	</div>
																</div>
																<div class='col-lg-6 mb-0 pt-1'>
																	<div class='form-check text-left mb-3'>
																		<FormControl>
																			<FormLabel id='demo-controlled-radio-buttons-group'>
																				¿Se ha vacunado contra COVID?
																			</FormLabel>
																			<RadioGroup
																				aria-labelledby='demo-controlled-radio-buttons-group'
																				name='controlled-radio-buttons-group'
																				value={covid}
																				onChange={handleOnChangeCovid}>
																				<FormControlLabel
																					value='Covid'
																					control={<Radio color='warning' />}
																					label='Sí'
																				/>
																				<FormControlLabel
																					value=''
																					control={<Radio color='warning' />}
																					label='No'
																				/>
																			</RadioGroup>
																		</FormControl>
																	</div>
																</div>
															</div>
															<div class='row'>
																<div class='col-lg-6 mb-3 '>
																	<div class='form-check text-left mb-3 '>
																		<label class='me-3 form-check-label fw-600 font-xsss text-grey-600'>
																			Fecha:
																		</label>
																		<input type='date'></input>
																	</div>
																</div>
															</div>

															{covidContentVisible && <Covid />}
															{/* <label class="mont-font fw-600 font-xssss"></label>
                                                    <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-1" name="uname" required >
                                                        <option value="value1">Paciente</option>
                                                        <option value="value2" selected >Padre</option>
                                                        <option value="value3">Madre</option>

                                                    </select> */}
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>

												{/* <h4 class="mont-font fw-600 font-md mb-2">Vacunas Covid</h4>
                                                
                                              <FormControl className='mb-5 mt-1' >
                                                <RadioGroup
                                                aria-label="dosis"
                                                name="dosis"
                                                >
                                                    <FormControlLabel
                                                    value="dosis0"
                                                    control={<Radio color="success"/>}
                                                    label="Sí"
                                                />
                                                <FormControlLabel
                                                    value="dosis1"
                                                    control={<Radio color="success"/>}
                                                    label="1era Dosis"
                                                />
                                                <FormControlLabel
                                                    value="dosis2"
                                                    control={<Radio color="success"/>}
                                                    label="2nda Dosis"
                                                />
                                                <FormControlLabel
                                                    value="dosis3"
                                                    control={<Radio color="success"/>}
                                                    label="3ra Dosis"
                                                />
                                                </RadioGroup>
                                                </FormControl> */}

												<div class='col-xl-8 offset-xl-1 col-lg-8 pt-5'>
													<div class='order-details'>
														<h4 class='mont-font fw-600 font-md mt-1'>
															Resumen Paciente
														</h4>
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
												<div class='clearfix'></div>
											</form>
										</div>
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
