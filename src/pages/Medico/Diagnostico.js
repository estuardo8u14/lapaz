import { Button } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
// import HeaderAdmision from '../../components/Header/HeaderAdmision';
// import { Button } from '@material-ui/core';
// import SimpleModal from '../../components/Modals/SimpleModal';
import { Link, useLocation } from 'react-router-dom';
// import GridEntries from '../../components/GridEntries/GridEntries';
import GridEntriesDx from '../../components/GridEntries/GridEntriesDx';
import HeaderMedico from '../../components/Header/HeaderMedico';
//import Dropdown from '../../components/MedicationControl/Dropdown';
// import MedicationInput from '../../components/MedicationControl/MedicationSelect ';
// import MedicationSelect from '../../components/MedicationControl/MedicationSelect ';
// import SelectInput from '../../components/MedicationControl/SelectInput';
import ReviewOfSystemsForm from '../../components/SystemReview/ReviewOfSystemsForm';
import EditableTable from '../../components/Tables/EditableTable';

export default function Diagnostico() {
	useEffect(() => {
		window.scrollTo(0, 1500);
	}, []);

	const location = useLocation();
	const propsData = location.state;

	const [dataTable, setDataTable] = useState([
		{
			id: 1,
			name: 'Dolor de garganta, palpitaciones, dolor de estómago, dolor de cabeza y fiebre',
		},
	]);

	const columns = [
		{ label: 'Motivo de la consulta', field: 'name', editable: true },
	];

	const [dataTable1, setDataTable1] = useState([
		{
			id: 1,
			name: 'Paciente Juan Alberto cuenta que hace aproximadamente 3 meses, comenzó a sentir malestares de tipo cólico en el estómago, a nivel del abdomen, de baja intensidad (4/10). Informa que dura varias horas. Manifiesta “siento ardor en las paredes de la barriga"',
		},
		{
			id: 2,
			name: 'Personal de guardia en la clínica en ese momento, le realizaron diversos exámenes de laboratorio y estudios como eco abdominal, tomografía de cráneo, rayos x del tórax, entre otros, con el fin de evaluar todos sus órganos.',
		},
	]);

	const columns1 = [
		{ label: 'Historial de la enfermedad', field: 'name', editable: true },
	];

	const [dataTable2, setDataTable2] = useState([
		{
			id: 1,
			name: 'Se trata de paciente masculino quien cuenta con el diagnostico de traumatismo raquimedular',
		},
		{
			id: 2,
			name: 'Neurologico: Despierto alerta cooperador, ancamado, debilidad de extremidades toracicas a expensas de la derecha la cual no realiza presión.',
		},
	]);

	const columns2 = [
		{ label: 'Impresión Clínica', field: 'name', editable: true },
	];

	const [dataTable3, setDataTable3] = useState([
		{
			id: 1,
			name: 'Administración de oxígeno',
		},
		{
			id: 2,
			name: 'Conectar monitor cardíaco',
		},
		{
			id: 3,
			name: 'Acetaminofen 100 MG/ML (10%) SOLUCIÓN ORAL',
		},
		{
			id: 4,
			name: 'AZITROMGINA 500 MG TABLETA',
		},
	]);

	const columns3 = [
		{ label: 'Ordenes médicas', field: 'name', editable: true },
	];

	const [dataTable4, setDataTable4] = useState([
		{
			id: 1,
			name: 'Comentario uno ejemplo de comentarios número 1',
		},
		{
			id: 2,
			name: 'Comentario uno ejemplo de comentarios número 2',
		},
	]);

	const columns4 = [{ label: 'Comentarios', field: 'name', editable: true }];

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
		historial1:
			'Paciente Juan Alberto cuenta que hace aproximadamente 3 meses, comenzó a sentir malestares de tipo cólico en el estómago, a nivel del abdomen, de baja intensidad (4/10). Informa que dura varias horas. Manifiesta “siento ardor en las paredes de la barriga"',
		historial2:
			'Personal de guardia en la clínica en ese momento, le realizaron diversos exámenes de laboratorio y estudios como eco abdominal, tomografía de cráneo, rayos x del tórax, entre otros, con el fin de evaluar todos sus órganos.',
		notasmedicas1:
			'Se trata de paciente masculino quien cuenta con el diagnostico de traumatismo raquimedular',
		notasmedicas2:
			'Neurologico: Despierto alerta cooperador, ancamado, debilidad de extremidades toracicas a expensas de la derecha la cual no realiza presion.',
		ordenesmedicas1: 'Administración de oxígeno',
		ordenesmedicas2: 'Conectar monitor cardíaco',
		diagnostico1:
			'Neurologico: Despierto alerta cooperador, ancamado, debilidad de extremidades toracicas a expensas de la derecha la cual no realiza presion.',
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
													href='/Dx'>
													{' '}
													Diagnóstico
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
									<h4>Evaluación y anamnesis</h4>
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
									<EditableTable
										data={dataTable}
										columns={columns}
									/>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<EditableTable
										data={dataTable1}
										columns={columns1}
									/>
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
												<th>Antecedentes Médicos</th>
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
									<div className='pt-5 pb-5'>
										<h2>Revisión por sistemas</h2>
										<ReviewOfSystemsForm />
									</div>

									{/* <table className='tablita'>
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
									</table> */}

									{/* <table className='tablita'>
										<thead>
											<tr>
												<th>Motivo de consulta</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.motivo1}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table> */}

									{/* <table className='tablita'>
										<thead>
											<tr>
												<th>Historial Enfermedad</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.historial1}`}</label>
													)}
												</td>
											</tr>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.historial2}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table> */}
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<EditableTable
										data={dataTable2}
										columns={columns2}
									/>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<EditableTable
										data={dataTable4}
										columns={columns4}
									/>
									{/* <table className='tablita'>
										<thead>
											<tr>
												<th>Notas Médicas</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.notasmedicas1}`}</label>
													)}
												</td>
											</tr>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.notasmedicas2}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table> */}
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<EditableTable
										data={dataTable3}
										columns={columns3}
									/>
									{/* <table className='tablita'>
										<thead>
											<tr>
												<th>Ordenes Médicas</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.ordenesmedicas1}`}</label>
													)}
												</td>
											</tr>
											<tr>
												<td>
													{propsData && (
														<label class='mont-font fw-500 font-xssss'>{`${propsData.ordenesmedicas2}`}</label>
													)}
												</td>
											</tr>
										</tbody>
									</table> */}
								</div>
							</div>
							<GridEntriesDx />
						</div>
						<div
							className='pt-5 pb-5'
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '3vh',
							}}>
							<Link
								to='/Anamnesis'
								state={Antecedentes}>
								<Button variant='contained'>
									<i className='feather-arrow-left-circle'></i>
								</Button>
							</Link>
							<Link
								to='/ResumenMedico'
								state={Antecedentes}>
								<Button variant='contained'>
									<i className='feather-arrow-right-circle'> Resumen</i>
								</Button>
							</Link>
						</div>
						<div
							className='pt-3 pb-5'
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '3vh',
							}}>
							<Link to='/AnamnesisV'>
								<Button variant='contained'>
									<i className='feather-save'></i>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
