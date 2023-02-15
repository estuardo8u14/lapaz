import React, { Component, Fragment } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmision from '../../components/Header/HeaderAdmision';
// import {Button } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import ModalAdmision from '../../components/Modals/ModalAdmision';
import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ModalAseguradoras from '../../components/Modals/ModalAseguradoras';

export default class AdmisionAtencion extends Component {
	render() {
		// const FileUpload = () => {
		//     const [files, setFiles] = useState({});
		// }
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
														class='expand-btn text-grey-500 fw-700'
														href='/Admisiones'>
														{' '}
														Juan Pérez /
													</a>
													<a
														class='expand-btn text-grey-500 fw-900'
														href='/Admisiones'>
														{' '}
														Admisión
													</a>
												</p>
											</div>
										</div>

										<div class='col-xl-12 col-lg-12'>
											<div class='page-title'>
												<div class='col-xl-8  col-lg-12'>
													<div class='order-details'>
														<div className='hr-lines5'>
															<h4 class='mont-font fw-600 font-md mt-1 mb-3'>
																Resumen Paciente
															</h4>
														</div>
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
																			Seguro
																			<strong>
																				<span>:</span> Aseguradora General
																			</strong>
																		</th>
																		<th class='text-grey-700 fw-500 font-xsss'>
																			Póliza
																			<strong>
																				<span>:</span> 135-47-8569{' '}
																			</strong>
																		</th>
																	</tr>
																	<tr>
																		<th class='text-grey-700 fw-500 font-xsss'>
																			Tipo de póliza
																			<strong>
																				<span>:</span> Mediflex
																			</strong>
																		</th>
																		<th class='text-grey-700 fw-500 font-xsss'>
																			Certificado Póliza
																			<strong>
																				<span>:</span> Sí
																			</strong>
																		</th>
																	</tr>
																</tbody>
																<tfoot>
																	<tr class='order-total'>
																		<ModalAseguradoras></ModalAseguradoras>
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
												<div className='hr-lines6'>
													<h4 class='mont-font fw-600 font-md mb-3'>
														Admisión (Atención al cliente)
													</h4>
												</div>
												<div class='col'>
													<div class='col-lg-12 mb-3'>
														<div class='form-gorup'>
															<FormControl fullWidth>
																<InputLabel id='demo-simple-select-label'>
																	Tipo de admisión
																</InputLabel>
																<Select
																	labelId='demo-simple-select-label'
																	id='demo-simple-select'>
																	<MenuItem value='value1'>
																		Laboratorio
																	</MenuItem>
																	<MenuItem value='value2'>
																		Exámen diagnóstico
																	</MenuItem>
																	{/* <MenuItem value="value3">Sala Operaciones</MenuItem> */}
																	{/* <MenuItem value="value4">RN en Hospital</MenuItem>
                                                        <MenuItem value="value5">Paquete</MenuItem> */}
																</Select>
																{/* <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-1"  name="uname" required >
                                                        <option value="value1">Emergencia</option>
                                                        <option value="value2" >Interno</option>
                                                        <option value="value3" selected>IGSS</option>
                                                        <option value="value4">RN en Hospital</option>
                                                        <option value="value5" >Paquete</option>
                                                    </select> */}
															</FormControl>
														</div>
													</div>
												</div>
												<div class='col'>
													<div class='col-lg-12 mb-3'>
														<div class='form-gorup'>
															<FormControl fullWidth>
																<InputLabel id='demo-simple-select-label'>
																	Razón de admisión
																</InputLabel>
																<Select
																	labelId='demo-simple-select-label'
																	id='demo-simple-select'>
																	<MenuItem value='value1'>Medicina</MenuItem>
																	<MenuItem value='value2'>Cirugía</MenuItem>
																	<MenuItem value='value3'>
																		Obstetricia
																	</MenuItem>
																	<MenuItem value='value4'>Pediatría</MenuItem>
																	<MenuItem value='value5'>Ortopedia</MenuItem>
																</Select>
															</FormControl>
															{/* <label class="mont-font fw-600 font-xssss">Razón de admisión</label>
                                                    <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-3"  name="uname" required >
                                                        <option value="value1">Medicina</option>
                                                        <option value="value2" >Cirugía</option>
                                                        <option value="value3" selected>Obstetricia</option>
                                                        <option value="value1">Pediatría</option>
                                                        <option value="value2" >Ortopedia</option>
                                                    </select> */}
														</div>
													</div>
												</div>

												<div className='hr-lines8'>
													<h4 class='mont-font fw-600 font-md mb-3'>
														Responsable de la cuenta
													</h4>
												</div>
												<div class='col'>
													<div class='col-lg-12 mb-3'>
														<div class='form-gorup'>
															<FormControl fullWidth>
																<InputLabel id='demo-simple-select-label'>
																	Parentesco
																</InputLabel>
																<Select
																	labelId='demo-simple-select-label'
																	id='demo-simple-select'>
																	<MenuItem value='value1'>Terceros</MenuItem>
																	<MenuItem value='value2'>Padre</MenuItem>
																	<MenuItem value='value3'>Madre</MenuItem>
																	<MenuItem value='value4'>Paciente</MenuItem>
																</Select>
															</FormControl>
															{/* <label class="mont-font fw-600 font-xssss"></label>
                                                    <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-1" name="uname" required >
                                                        <option value="value1">Paciente</option>
                                                        <option value="value2" selected >Padre</option>
                                                        <option value="value3">Madre</option>

                                                    </select> */}
														</div>
													</div>
												</div>

												<div class='checkout-payment card border-0 ms-5 me-5 mt-5 bg-greyblue p-4'>
													<div class='payment-group mb-4'>
														<h4 class='mont-font fw-600 font-md mb-5'>
															Otros datos de admisión
														</h4>
														<div class='row'>
															<div class='col-lg-6 mx-auto mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Status
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>

															<div class='col-lg-6 mx-auto mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Interno
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>

														<div class='row'>
															<div class='col-lg-6 mx-auto mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Seguro
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
															<div class='col-lg-6 mx-auto mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		NivelPrecios
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>

														<div class='row'>
															<div class='col-lg-6 mx-auto mb-0'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		PaqueteQx
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
												<h4 class='mont-font fw-600 font-md mb-0 pt-5'>
													Cargar archivos
												</h4>
												<form action='#'>
													<div class='row'>
														<div class='col-lg-12 pt-1 mb-3'>
															<div class='form-check text-left mb-0'>
																<input type='file'></input>
															</div>
														</div>

														<div class='clearfix'></div>
													</div>
												</form>
												<h4 class='mont-font fw-600 font-md mb-2 pt-3'>
													Compromiso de pago
												</h4>
												<form action='#'>
													<div class='row'>
														<div class='col-lg-12 mb-3'>
															<div class='form-check text-left mb-3'>
																<input type='file'></input>
															</div>
														</div>

														<div class='clearfix'></div>
													</div>
												</form>

												<h4 class='mont-font fw-600 font-md mb-2'>
													Consentimiento informado
												</h4>
												<form action='#'>
													<div class='row'>
														<div class='col-lg-12 mb-5'>
															<div class='form-check text-left mb-3'>
																<input type='file'></input>
															</div>
														</div>

														<div class='clearfix'></div>
													</div>
												</form>
												<div class='row'>
													<div class='col-lg-12 mb-5 mt-2'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>

												<h4 class='mont-font fw-600 font-md mb-2'>
													Información del Facturación
												</h4>
												<form action='#'>
													<div class='row'>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Nombre Factura
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Dirección
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		NIT facturación
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col-lg-12 mb-3'>
															<FormControl className='mb-5 mt-1'>
																<RadioGroup
																	aria-label='newletter'
																	name='newletter'>
																	<FormControlLabel
																		value='newletter'
																		control={<Radio color='success' />}
																		label='Paciente solicita que nos comuniquemos con él para ofertas y/o promociones'
																	/>
																</RadioGroup>
															</FormControl>
															{/* <div class="form-check text-left mb-3">
                                                                <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                                                <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >Paciente solicita que nos comuniquemos con él para ofertas y/o promociones</label>
                                                            </div> */}
														</div>
														<h4 class='mont-font fw-600 font-md mb-1'>
															Observaciones Cobros
														</h4>
														<div class='row'>
															<div class='col-lg-10 mb-5'>
																<div class='form-gorup'>
																	<textarea
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<h4 class='mont-font fw-600 font-md  mb-2'>
															Información de Referencia
														</h4>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Nombre Padre
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Teléfono Padre
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Nombre Madre
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>
														<div class='col'>
															<div class='col-lg-12 mb-3'>
																<div class='form-gorup'>
																	<label class='mont-font fw-600 font-xssss'>
																		Teléfono Madre
																	</label>
																	<input
																		type='text'
																		name='comment-name'
																		class='form-control'
																	/>
																</div>
															</div>
														</div>

														<div class='col-lg-12 mb-3 pt-5'>
															<div class='form-check text-left mb-3'>
																<ModalAdmision></ModalAdmision>
															</div>
														</div>

														<div class='clearfix'></div>
													</div>
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
}
