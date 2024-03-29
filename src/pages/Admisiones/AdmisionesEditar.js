import React, { Fragment, useState, useEffect } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
// import {Accordion, AccordionSummary, AccordionDetails, Typography, MenuItem, Select, InputLabel } from '@material-ui/core';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleModal from '../../components/Modals/SimpleModal';
import ModalDir from '../../components/Modals/ModalDir';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import ModalAseguradoras from '../../components/Modals/ModalAseguradoras';
import InfoPacienteForm from '../../components/InfoPacienteForm/InfoPacienteForm';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function AdmisionesEditar() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [parentesco, setParentesco] = useState('Parentesco');
	const [padreContentVisible, setPadreContentVisible] = useState(false);
	const [madreContentVisible, setMadreContentVisible] = useState(false);
	const [tutorContentVisible, setTutorContentVisible] = useState(false);

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
											<h4 class='mont-font fw-600 font-md mb-lg-5 mb-4'>
												Información del paciente
											</h4>
											<form action='#'>
												<div class='row'>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Nombre:
															</label>
															<input
																type='text'
																placeholder='Juan'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Apellido:
															</label>
															<input
																type='text'
																placeholder='Pérez'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Fecha de nancimiento (dd/mm/aaaa)
															</label>
															<input
																type='text'
																placeholder='14/02/2000'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Nacionalidad
															</label>
															<input
																type='text'
																placeholder='Guatemalteco'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																CUI / DPI
															</label>
															<input
																type='text'
																placeholder='3019748690101'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Pasasporte
															</label>
															<input
																type='text'
																placeholder='30197489'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Estado civil
															</label>
															<input
																type='text'
																placeholder='Soltero'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>

													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Sexo
															</label>
															<input
																type='text'
																placeholder='Masculino'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-3 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Teléfono
															</label>
															<input
																type='text'
																placeholder='+502 41067299'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-6 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Correo electrónico
															</label>
															<input
																type='text'
																placeholder='juanperez2000@gmail.com'
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
																<label class='mont-font fw-600 font-xssss'>
																	Dirección Residencia
																</label>
																<input
																	type='text'
																	placeholder='Blvd. Acatan 31-85 z.17 Gremias de San Isidro'
																	name='comment-name'
																	class='form-control'></input>
															</div>
														</div>
														<div class='col-lg-3 mb-3'>
															<div class='form-gorup pt-1'>
																<ModalDir />
															</div>
														</div>
													</div>

													<div class='col-lg-12 mb-3 pt-1'>
														<div class='form-check text-left mb-3'>
															<Radio
																checked
																color='warning'
															/>
															<label class='pt-1 form-check-label fw-600 font-xsss text-grey-700'>
																Paciente con capacidades especiales
															</label>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-lg-12 mb-5'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>

												<div class='row'>
													<div class='row'>
														<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
															Profesión u oficio
														</h4>

														<div class='col-lg-6 mb-3'>
															<div class='form-gorup'>
																<label class='mont-font fw-600 font-xssss'>
																	Profesión
																</label>
																<input
																	type='text'
																	placeholder='Ingeniero cívil'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
														<div class='col-lg-6 mb-3'>
															<div class='form-gorup'>
																<label class='mont-font fw-600 font-xssss'>
																	Lugar de trabajo
																</label>
																<input
																	type='text'
																	placeholder='ECODESA'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
													</div>

													<div class='row'>
														<div class='col-lg-9 pt-2 mb-5'>
															<div class='form-gorup'>
																<label class='mont-font fw-600 font-xssss'>
																	Dirección de trabajo
																</label>
																<input
																	type='text'
																	placeholder='57ª Calle 35-67 Zona 24'
																	name='comment-name'
																	class='form-control'
																/>
															</div>
														</div>
														<div class='col-lg-3 pt-1 mb-5'>
															<div class='form-gorup pt-4'>
																<ModalDir />
															</div>
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
												<div class='row'>
													<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
														Seguros y otras afilaciones
													</h4>

													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Número de afiliación IGSS
															</label>
															<input
																type='text'
																placeholder='5846698'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Número de afiliación alerta médica
															</label>
															<input
																type='text'
																placeholder='458421'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<ModalAseguradoras></ModalAseguradoras>
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
												<div class='row'>
													<h4 class='mont-font fw-600 font-md mb-lg-3 mb-2'>
														Datos de facturación
													</h4>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																NIT
															</label>
															<input
																type='text'
																placeholder='1084759-5'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Nombre
															</label>
															<input
																type='text'
																placeholder='Juan Pérez'
																name='comment-name'
																class='form-control'
															/>
														</div>
													</div>
													<div class='col-lg-4 mb-3'>
														<div class='form-gorup'>
															<label class='mont-font fw-600 font-xssss'>
																Dirección
															</label>
															<input
																type='text'
																placeholder='Blvd. Acatan 31-85 z.17 Gremias de San Isidro'
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
																</thead>
																<tbody>
																	<tr>
																		<th class='text-grey-700 fw-500 font-xsss'>
																			Nombre
																			<strong>
																				<span>:</span> Juan Pérez
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
																			Ciudad
																			<strong>
																				<span>:</span> Guatemala
																			</strong>
																		</th>
																		<th class='text-grey-700 fw-500 font-xsss'>
																			Afilación IGSS
																			<strong>
																				<span>:</span> Sí
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
																			Estado civil
																			<strong>
																				<span>:</span> Soltero
																			</strong>
																		</th>
																	</tr>
																</tbody>
																<tfoot>
																	<tr class='order-total'>
																		<th></th>
																		<td class='text-right text-grey-700 font-xsss fw-700'>
																			<span class='order-total-ammount'>
																				<SimpleModal />
																			</span>
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
