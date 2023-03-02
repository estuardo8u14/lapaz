import { Button } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
// import HeaderAdmision from '../../components/Header/HeaderAdmision';
// import { Button } from '@material-ui/core';
// import SimpleModal from '../../components/Modals/SimpleModal';
import { Link } from 'react-router-dom';
import GridEntries from '../../components/GridEntries/GridEntries';
import HeaderMedico from '../../components/Header/HeaderMedico';
import { useLocation } from 'react-router';

export default function Motivo(props) {
	useEffect(() => {
		window.scrollTo(0, 490);
	}, []);
	const location = useLocation();
	const propsData = location.state;

	const Antecedentes = {
		medicos: 'Ejemplo Medicos',
		quirurgicos: 'Ejemplo Quirúrgicos',
		trauma: 'Ejemplo Traumáticos',
		alergicos: 'Ejemplo Alérgicos',
		gineco:
			'Notas de ginecobstétricos elaborada por el médico con una descripción detallada.',
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
		motivo1:
			'Dolor de garganta, palpitaciones, dolor de estómago, dolor de cabeza y fiebre',
	};

	return (
		<Fragment>
			<HeaderMedico />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4'>
								<div class='row pt-5'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-500 text-grey-500'>
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
													href='/Motivo'>
													{' '}
													Motivo Consulta
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
									<h4>Resumen anamnesis</h4>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>

									<table>
										<thead>
											<tr>
												<th>SIGNOS VITALES</th>
												<th>FRECUENCIA CARDIACA</th>
												<th>FRECUENCIA RESPIRATORIA </th>
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
										</tbody>
									</table>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<table className='tablita'>
										<thead>
											<tr>
												<th>Antecedentes</th>
												<th>Quirúrgicos</th>
												<th>Traumáticos</th>
												<th>Alérgicos</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.medicos}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.quirurgicos}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.trauma}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.alergicos}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<table className='tablita'>
										<thead>
											<tr>
												<th>Ginecobstétricos</th>
												<th>FUR</th>
												<th>G</th>
												<th>P</th>
												<th>Ab</th>
												<th>Cesarea</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.gineco}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.fecha}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.g}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.p}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.ab}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.cesa}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<table className='tablita'>
										<thead>
											<tr>
												<th>Familiares</th>
												<th>Hábitos</th>
												<th>Medicamentos</th>
												<th>Otros</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.familiares}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.habitos}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.meds}`}</label>
													)}
												</td>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.otros}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<table className='tablita'>
										<thead>
											<tr>
												<th>Revisión por sistemas</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.revision}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<GridEntries />
						</div>
						<div
							className='pt-1 pb-5'
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '3vh',
							}}>
							<Link to='/Anamnesis'>
								<Button variant='contained'>
									<i className='feather-arrow-left-circle'></i>
								</Button>
							</Link>
							<Link
								to='/HistEnf'
								state={Antecedentes}>
								<Button variant='contained'>
									<i className='feather-arrow-right-circle'></i>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
