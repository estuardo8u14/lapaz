import { Button } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
// import HeaderAdmision from '../../components/Header/HeaderAdmision';
// import { Button } from '@material-ui/core';
// import SimpleModal from '../../components/Modals/SimpleModal';
import { Link } from 'react-router-dom';
//import GridEntries from '../../components/GridEntries/GridEntries';
import HeaderMedico from '../../components/Header/HeaderMedico';
import SignsEditableTable from '../../components/Tables/SignsEditableTable';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
import HeaderAdmision from '../../components/Header/HeaderAdmision';

export default function Anamnesis() {
	useEffect(() => {
		window.scrollTo(0, 450);
	}, []);

	const Antecedentes = {
		medicos: 'Ejemplo Medicos',
		quirurgicos: 'Ejemplo Quirúrgicos',
		trauma: 'Ejemplo Traumáticos',
		alergicos: 'Ejemplo Alérgicos',
		gineco: 'Notas de ginecobstétricos elaborada por el médico detalladamente.',
		fecha: '14/02/1998',
		g: '2.5',
		p: '57',
		ab: '78',
		cesa: '1',
		familiares: 'N/A',
		habitos: 'N/A',
		meds: 'Aspirina',
		otros: 'N/A',
		revision:
			'LABS 28/12/2021 LEU 8.87, HB 14.22, HTO 44.45, PLAQ 329. 4, GL 78, UREA 32.1, CK 232, CK-MB 23, NA 144, K 3.5, BUN15 TAC DE CRANEO DEL DIA 29/12/ 21',
	};

	const data = [
		{
			signosid: '01',
			name: '',
			email: '',
			position: '',
			position1: '',
			position2: '',
		},
	];
	const [employeeData, setEmployeeData] = useState(data);

	const onChangeInput = (e, signosid) => {
		const { name, value } = e.target;

		const editData = employeeData.map((item) =>
			item.signosid === signosid && name ? { ...item, [name]: value } : item,
		);

		setEmployeeData(editData);
	};

	function ChangeIcon() {
		var el = document.getElementById('check0');
		el.classList.toggle('feather-upload-cloud');
		el.classList.toggle('feather-check-circle');
		console.log(el);
	}

	function ChangeIcon1() {
		var el = document.getElementById('check1');
		el.classList.toggle('feather-upload-cloud');
		el.classList.toggle('feather-check-circle');
		console.log(el);
	}

	function ChangeIcon2() {
		var el = document.getElementById('check2');
		el.classList.toggle('feather-upload-cloud');
		el.classList.toggle('feather-check-circle');
		console.log(el);
	}

	function ChangeIcon3() {
		var el = document.getElementById('check3');
		el.classList.toggle('feather-upload-cloud');
		el.classList.toggle('feather-check-circle');
		console.log(el);
	}

	function ChangeIcon4() {
		var el = document.getElementById('check4');
		el.classList.toggle('feather-upload-cloud');
		el.classList.toggle('feather-check-circle');
		console.log(el);
	}

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
													href='/Anamnesis'>
													{' '}
													Anamnesis
												</a>
											</p>
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
																	<span>:</span> johnperez@gmail.com
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

									{/* <table>
										<thead>
											<tr>
												<th>SIGNOS VITALES</th>
												<th>F. CARDIACA</th>
												<th>F. RESPIRATORIA </th>
												<th>TENSIÓN ARTERIAL</th>
												<th>SPO2 94%</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>TEMPERATURA 36.8°C</td>
												<td>97 LPM</td>
												<td>18 RPM</td>
												<td>97 LPM</td>
												<td>DXTX 100 MG/DL</td>
											</tr>
											{employeeData.map(
												({
													signosid,
													name,
													email,
													position,
													position1,
													position2,
												}) => (
													<tr key={signosid}>
														<td>
															<input
																name='name'
																value={name}
																type='text'
																onChange={(e) => onChangeInput(e, signosid)}
																placeholder='Actualizar'
																class='form-control-signos'
															/>
															<Button onClick={(x) => ChangeIcon(x)}>
																<i
																	id='check0'
																	className='feather-upload-cloud'></i>
															</Button>
														</td>
														<td>
															<input
																name='position2'
																value={position2}
																type='text'
																onChange={(e) => onChangeInput(e, signosid)}
																placeholder='Actualizar'
																class='form-control-signos'
															/>
															<Button onClick={(x) => ChangeIcon1(x)}>
																<i
																	id='check1'
																	className='feather-upload-cloud'></i>
															</Button>
														</td>
														<td>
															<input
																name='email'
																value={email}
																type='text'
																onChange={(e) => onChangeInput(e, signosid)}
																placeholder='Actualizar'
																class='form-control-signos'
															/>
															<Button onClick={(x) => ChangeIcon2(x)}>
																<i
																	id='check2'
																	className='feather-upload-cloud'></i>
															</Button>
														</td>
														<td>
															<input
																name='position'
																type='text'
																value={position}
																onChange={(e) => onChangeInput(e, signosid)}
																placeholder='Actualizar'
																class='form-control-signos'
															/>
															<Button onClick={(x) => ChangeIcon3(x)}>
																<i
																	id='check3'
																	className='feather-upload-cloud'></i>
															</Button>
														</td>
														<td>
															<input
																name='position1'
																type='text'
																value={position1}
																onChange={(e) => onChangeInput(e, signosid)}
																placeholder='Actualizar'
																class='form-control-signos'
															/>
															<Button onClick={(x) => ChangeIcon4(x)}>
																<i
																	id='check4'
																	className='feather-upload-cloud'></i>
															</Button>
														</td>
													</tr>
												),
											)}
										</tbody>
									</table> */}

									<div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<div class='col-xl-12 col-lg-12'>
										<div>
											<h4 class='mont-font fw-600 font-md mb-lg-5 mb-4'>
												Antecedentes personales
											</h4>
										</div>
										<form action='#'>
											<div class='row'>
												<div class='col-lg-6 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='Médicos'
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
															placeholder='Quirúrgicos'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-6 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='Traumáticos'
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
															placeholder='Alérgicos'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>
											</div>

											<div class='row'>
												<div class='col-lg-12 mb-5 mt-3'>
													<div class='form-gorup'>
														<div class='linea'></div>
													</div>
												</div>
											</div>

											<div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<input
															type='text'
															placeholder='Familiares'
															name='comment-name'
															class='form-control'></input>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<input
															type='text'
															placeholder='Hábitos'
															name='comment-name'
															class='form-control'></input>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<input
															type='text'
															placeholder='Que medicamentos toma'
															name='comment-name'
															class='form-control'></input>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<input
															type='text'
															placeholder='Otros'
															name='comment-name'
															class='form-control'></input>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-12 mb-5 mt-3'>
													<div class='form-gorup'>
														<div class='linea'></div>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='Ginecobstétricos'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>
											</div>
											<div class='row'>
												<div class='col-lg-4 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															placeholder='FUR //'
															onFocus={(e) => (e.target.type = 'date')}
															onBlur={(e) => (e.target.type = 'text')}
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>

												<div class='col-lg-2 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='G'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>

												<div class='col-lg-2 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='P'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>

												<div class='col-lg-2 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='Ab'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>
												<div class='col-lg-2 mb-3'>
													<div class='form-gorup'>
														<label class='mont-font fw-600 font-xssss'></label>
														<input
															type='text'
															placeholder='Cesarea'
															name='comment-name'
															class='form-control'
														/>
													</div>
												</div>
											</div>

											{/* <div class='row'>
												<div class='col-lg-12 mb-3'>
													<div class='form-gorup'>
														<input
															type='text'
															placeholder='Revisión por sistemas'
															name='comment-name'
															class='form-control'></input>
													</div>
												</div>
											</div> */}
											<div class='row'>
												<div className='col-lg-12 pt-3 pb-5'>
													<div
														style={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
															height: '3vh',
														}}>
														<Link to='/Tablas'>
															<Button variant='contained'>
																<i className='feather-arrow-left-circle'></i>
															</Button>
														</Link>
														<Link
															to='/Dx'
															state={Antecedentes}>
															<Button variant='contained'>
																<i className='feather-arrow-right-circle'></i>
															</Button>
														</Link>
													</div>
												</div>
											</div>
										</form>
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
