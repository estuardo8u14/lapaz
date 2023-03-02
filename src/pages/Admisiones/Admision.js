import React, { Fragment, useState, useEffect } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmision from '../../components/Header/HeaderAdmision';
// import {Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
//import ModalAdmision from '../../components/Modals/ModalAdmision';
import { Button } from '@material-ui/core';

// import { InputLabel, MenuItem, Select, FormControl, Button } from '@material-ui/core';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import ModalAseguradoras from '../../components/Modals/ModalAseguradoras';
// import ModalDir from '../../components/Modals/ModalDir';
import Hospitalizacion from '../../components/Hospitalizacion/Hospitalizacion';
import Servicios from '../../components/Servicios/Servicios';

export default function Admision() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [tipoadmision, setTipoadmision] = useState('');
	const [hospitalizacionContentVisible, setHospitalizacionContentVisible] =
		useState(false);
	const [serviciosContentVisible, setServiciosContentVisible] = useState(false);

	// const [showHospitalization, setShowHospitalization] = useState(true);

	useEffect(() => {
		tipoadmision === 'hospitalizacion'
			? setHospitalizacionContentVisible(true)
			: setHospitalizacionContentVisible(false);
		tipoadmision === 'servicios'
			? setServiciosContentVisible(true)
			: setServiciosContentVisible(false);
	}, [tipoadmision]);

	const handleOnChange = (e) => {
		e.preventDefault();
		setTipoadmision(e.currentTarget.value);
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
													class='expand-btn text-grey-500 fw-700'
													href='/Tablas'>
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

									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<h4 class='mont-font fw-600 font-md pt-3 pb-3'>Admisión</h4>
									<div class='col-xl-12 col-lg-12'>
										<div class='page-title'>
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
																		Email
																		<strong>
																			<span>:</span> noseque@gmail.com
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

											<div class='row'>
												<div class='col-lg-12 mb-3 mt-3'>
													<div class='form-gorup'>
														<div class='linea'></div>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-6 mb-3'>
													<Button
														value={'hospitalizacion'}
														onClick={handleOnChange}
														variant='contained'
														fullWidth>
														Hospitalización
													</Button>
												</div>
												<div class='col-lg-6'>
													<Button
														value={'servicios'}
														onClick={handleOnChange}
														variant='contained'
														fullWidth>
														Servicios
													</Button>
												</div>
												<div class='row'>
													<div class='col-lg-12 mb-3 mt-3'>
														<div class='form-gorup'>
															<div class='linea'></div>
														</div>
													</div>
												</div>
											</div>
											{hospitalizacionContentVisible && <Hospitalizacion />}
											{serviciosContentVisible && <Servicios />}
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
