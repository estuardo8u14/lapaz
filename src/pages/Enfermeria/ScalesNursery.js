import React, { Fragment } from 'react';
import HeaderNurseryPatient from '../../components/Header/HeaderNurseryPatient';
import { Link } from 'react-router-dom';
import ScaleUlceras from '../../components/Enfermeria/ScalesEvaluations/ScaleUlceras';

export default function ScalesNursery() {
	return (
		<Fragment>
			<HeaderNurseryPatient />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4 mt-5'>
								<div class='row'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500'>
												<i class='fa fa-exclamation-circle'></i> Escalas y
												evaluaciones
											</p>
										</div>
									</div>
									{/* <div class='col-xl-12'>
										<div class='page-title'>
											<h4 class='mont-font fw-600 font-md mb-lg-2 mb-0'>
												Ordenes médicas (General)
											</h4>
											<UncontrolledBoard />
										</div>
									</div> */}
									<div class='col-xl-10 offset-xl-1 col-lg-8 pt-3'>
										<div class='order-details'>
											<div class='table-content table-responsive mb-5 card border-1 bg-lightgrey p-lg-3 p-4'>
												<table class='table order-table bg-lightgrey order-table-2 mb-0'>
													<thead>
														<tr>
															<th class='border-0'>Detalles</th>
														</tr>
														{/* <tr>
															<Link to='/PdfConsultaMedica'>
																<th className=''>
																	<i className='feather-file-text'>Imprimir</i>
																</th>
															</Link>
														</tr> */}
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
																<th className='mt-1'>Editar</th>
															</Link>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-5 mt-2'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<ScaleUlceras />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
