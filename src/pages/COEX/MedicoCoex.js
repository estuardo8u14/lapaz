import React, { Fragment, useEffect, useState } from 'react';
import './MedicoCoex.css';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
import { Button } from 'semantic-ui-react';
import ModalCuponCoex from '../../components/Modals/ModalCuponCoex';
import { Link } from 'react-router-dom';
import ModalEditCuponCoex from '../../components/Modals/ModalEditCuponCoex';

import TablaCuponesCoex from './TablaCuponesCoex';
import CalendarMedico from '../../components/Appointments/CalendarMedico';

export default function MedicoCoex() {
	useEffect(() => {
		window.scrollTo(0, 520);
	}, []);

	const handleOnChange = (e) => {
		e.preventDefault();
		setButtonMostrar(e.currentTarget.value);
	};

	const [buttonmostrar, setButtonMostrar] = useState('');
	const [calendarContentVisible, setCalendarContentVisible] = useState(false);

	// const [showHospitalization, setShowHospitalization] = useState(true);

	useEffect(() => {
		buttonmostrar === 'mostrar'
			? setCalendarContentVisible(true)
			: setCalendarContentVisible(false);
	}, [buttonmostrar]);

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
												<a class='expand-btn text-grey-500 fw-700'>
													{' '}
													Dra. María Gómez /
												</a>
												<a
													class='expand-btn text-grey-500 fw-900'
													href='/Coex'>
													{' '}
													Coex
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

									<div class='col-xl-12 col-lg-12'>
										<div class='page-title'>
											<h4 class='mont-font fw-600 font-md pt-3 pb-3'>
												COEX - Citas Confirmadas
											</h4>
										</div>
										<div>
											<table className='tablacoex'>
												<tr>
													<th>Código</th>
													<th>Nombre</th>
													<th>Fecha y hora</th>
													<th>Status</th>
													<th>Acciones</th>
												</tr>
												<tr>
													<td>301947968</td>
													<td>Juan Pérez</td>
													<td>21/03/2023 10:00AM</td>
													<td className='fw-bold'>Confirmada</td>
													<td className='izquierda'>
														<div class='col-lg-12'>
															<Link to='/Anamnesis'>
																<Button
																	variant='contained'
																	color='warning'>
																	Atención COEX
																</Button>
															</Link>
															<ModalEditCuponCoex />
														</div>
													</td>
												</tr>
												<tr>
													<td>78465416</td>
													<td>José Rodríguez</td>
													<td>21/03/2023 10:30AM</td>
													<td>No confirmada</td>
													<td className='izquierda'>
														<div class='col-lg-12'>
															<Link to='/Anamnesis'>
																<Button variant='contained'>
																	Atención COEX
																</Button>
															</Link>
															<ModalEditCuponCoex />
														</div>
													</td>
												</tr>
												<tr>
													<td>654654</td>
													<td>Hugo Cuyuche</td>
													<td>21/03/2023 15:00AM</td>
													<td>No confirmada</td>
													<td className='izquierda'>
														<div class='col-lg-12'>
															<Link to='/Anamnesis'>
																<Button variant='contained'>
																	Atención COEX
																</Button>
															</Link>
															<ModalEditCuponCoex />
														</div>
													</td>
												</tr>
											</table>
										</div>
									</div>
									<h4 class='mont-font fw-600 font-md pt-5'>
										COEX - Calendario
									</h4>
									<div className='pt-3 ps-6 col-lg-12'>
										<CalendarMedico />
										<div className='col-lg-8'>
											<Button
												value={'mostrar'}
												onClick={handleOnChange}
												variant='contained'
												fullWidth>
												Mostrar
											</Button>
										</div>
									</div>
									<div className='row'>
										{calendarContentVisible && <TablaCuponesCoex />}
										{calendarContentVisible && (
											<div className='col-lg-8'>
												<Button variant='contained'>Descargar</Button>
											</div>
										)}
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