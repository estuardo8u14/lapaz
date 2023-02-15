import { Button } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderAdmision from '../../components/Header/HeaderAdmision';

function TablasPaciente() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
													href='/Tablas'>
													{' '}
													Juan Pérez
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
									<div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<div class='row'>
										<h4 class='mont-font fw-600 font-md mb-lg-3 mb-0'>
											Admisiones
										</h4>
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-0 mt-0'>
											<div class='form-gorup'>
												<table class='table'>
													<thead>
														<tr>
															<th>Código</th>
															<th>Servicio</th>
															<th>Fecha Entrada</th>
															<th>Fecha Salida</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>CL-346202023</td>
															<td>Emergencia</td>
															<td>01/06/2023</td>
															<td>01/06/2023</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-545702021</td>
															<td>Cirugía</td>
															<td>02/12/2021</td>
															<td>06/12/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<Link to={'/Admision'}>
										<Button
											variant='contained'
											color='primary'
											className='col-lg-11 mb-3'>
											Crear nueva admisión
										</Button>
									</Link>
									<div class='row'>
										<h4 class='mont-font fw-600 font-md mb-lg-3 mt-5'>
											Laboratorios
										</h4>
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-0 mt-0'>
											<div class='form-gorup'>
												<table class='table'>
													<thead>
														<tr>
															<th>Código</th>
															<th>Servicio</th>
															<th>Fecha Entrada</th>
															<th>Fecha Salida</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>CL-746202023</td>
															<td>Hemograma</td>
															<td>01/06/2023</td>
															<td>01/06/2023</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-9872021</td>
															<td>Panel básico metabólico</td>
															<td>02/12/2021</td>
															<td>03/12/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-6702021</td>
															<td>Heces por parásito</td>
															<td>20/08/2021</td>
															<td>22/08/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-54842021</td>
															<td>Perfil Renal</td>
															<td>07/11/2021</td>
															<td>07/11/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<Link to={'/Admision'}>
										<Button
											variant='contained'
											color='primary'
											className='col-lg-11 mb-3'>
											Crear nuevo laboratorio
										</Button>
									</Link>

									<div class='row'>
										<h4 class='mont-font fw-600 font-md mb-lg-3 mt-5'>
											Exámenes diagnósticos
										</h4>
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-0 mt-0'>
											<div class='form-gorup'>
												<table class='table'>
													<thead>
														<tr>
															<th>Código</th>
															<th>Servicio</th>
															<th>Fecha Entrada</th>
															<th>Fecha Salida</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>CL-3202023</td>
															<td>Electrocardiograma</td>
															<td>01/06/2023</td>
															<td>01/06/2023</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-9872021</td>
															<td>Rayos X</td>
															<td>02/12/2021</td>
															<td>03/12/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-6702021</td>
															<td>Rayos X</td>
															<td>20/08/2021</td>
															<td>22/08/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
														<tr>
															<td>CL-54842021</td>
															<td>Ecocardiograma</td>
															<td>07/11/2021</td>
															<td>07/11/2021</td>
															<Link to={'/Admision'}>
																<td className='feather-edit'></td>
															</Link>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<Link to={'/Admision'}>
										<Button
											variant='contained'
											color='primary'
											className='col-lg-11'>
											Crear nuevo exámen diagnóstico
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default TablasPaciente;
