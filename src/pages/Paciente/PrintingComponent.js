import React from 'react';

class TableComponent extends React.Component {
	render() {
		return (
			<>
				<table className='table'>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Email</th>
							<th>CUI</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-black'>
							<td>Juan Antonio</td>
							<td>Pérez García</td>
							<td>johnPerez@ejemplo.com</td>
							<td>309748690101</td>
						</tr>
					</tbody>

					<thead>
						<tr>
							<th>Fecha</th>
							<th>Hora</th>
							<th>Edad</th>
							<th>Genero</th>
							<th>Número de cama</th>
							<th>Días de estancia</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-black'>
							<td>24/01/2023</td>
							<td>10:30</td>
							<td>26 años</td>
							<td>Masculino</td>
							<td>333</td>
							<td>8 días</td>
						</tr>
					</tbody>

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
						<tr className='text-black'>
							<td>TEMPERATURA 36.8°C</td>
							<td>97 LPM</td>
							<td>18 RPM</td>
							<td>97 LPM</td>
							<td>DXTX 100 MG/DL</td>
						</tr>
					</tbody>
				</table>

				<div>
					<h6 className='fw-bold pt-5'>
						CUENTA CON LOS SIGUIENTES DIAGNÓSTICOS:
					</h6>
					<ol>
						<li>
							1. TRASTORNO MENTAL Y DEL COMPORTAMIENTO ASOCIADO A CONSUMO DE
							SUSTANCIA NO ESPECIFICANTE (PB METANFETAMINAS)
						</li>
						<li>2. DESCARTAR PSICPSOS SECUNDARIA</li>
						<li>3. EVENTO TROMBOTICO DEL BRAZO DERECHO</li>
					</ol>
				</div>
				<div class='row'>
					<div class='col-lg-12 mb-3 mt-3'>
						<div class='form-gorup'>
							<div class='linea'></div>
						</div>
					</div>
				</div>
				<div>
					<h6 className='fw-bold pt-5'>EXPLORACION FISICA:</h6>
					<ol>
						<li className='pb-5'>
							FISICA DESPIERTO, ALERTA, ORIENTADO EN PERSONA, NO ORIENTADO EN
							LUGAR Y TIEMPO, REACTIVO AL ESTIMULO VERBAL, CON LIGERA PALIDEZ DE
							TEGUMENTOS, OJOS SIMETRICOS, PUPILAS ISOCORICAS, NARINAS
							PERMEABLES, MUCOSA ORAL SEMIHIDRATADA CON ADECUADA MECANICA
							VENTILATORIA, CAMPOS PULMONARES SIN ESTERTORES NI SIBILANCIAS, SIN
							INTEGRAR SINDROME PLEUROPULMONAR, PRECORDIO CON RUIDOS CARDIACOS
							RITMICOS DE BUEN TONO INTENSIDAD, ABDOMEN GLOBOSO A EXPENSAS DE
							PANICULO ADIPOSO, BLANDO DEPRESIBLE, NO DOLOROSO A LA PALPACION,
							SIN PRESENCIA DE MEGALIAS, PERISTALSIS PRESENTE, SIN DATOS DE
							IRRITACION PERITONEAL, EXTREMIDADES INTEGRAS SIMETRICAS SN EDEMA.
						</li>
					</ol>
				</div>
				<div class='row'>
					<div class='col-lg-12 mb-5 mt-0'>
						<div class='form-gorup'>
							<div class='linea2'></div>
						</div>
					</div>
				</div>
				<table className='table'>
					<tr>
						<th className='pb-5'>LABORATORIOS Y GABINETE:</th>
						<td className='pb-5'>
							<p className='text-black'>
								LABS 28/12/2021 LEU 8.87, HB 14.22, HTO 44.45, PLAQ 329. 4, GL
								78, UREA 32.1, CK 232, CK-MB 23, NA 144, K 3.5, BUN15 TAC DE
								CRANEO DEL DIA 29/12/ 21{' '}
							</p>
							QUE NO REPORTA DATOS DE HEMORRAGIA O ISQUEMIA, CON PARENQUIMA
							CEREBRAL HOMOGENEO, SE APRECIA AUMENTO DE AMPLITUD DE LOS SURCOS Y
							CISURAS DE PREDOMINIO FRONTAL, SIN OBSERVAR LESIONES EN LA
							SUSTANCIA GRIS O BLANCA. SISTEMA VENTRICULAR SUPRA E
							INFRATENTORIAL CON AUMENTO DE AMPLITUD.
						</td>
					</tr>

					<tr>
						<th className='pb-5'>PLAN DE ESTUDIO TRATAMIENTO PRONÓSTICO:</th>
						<td className='pb-5'>
							PACIENTE FEMENINO CON LOS DIAGNOSTICOS ANTES MENCIONADOS, SE
							REALIZA INTERCONSULTA A NEUROLOGIA PARA REVALORACION SIN RESPUESTA
							AÚN. RESONANCIA MAGNETICA E INTERPRETACION DE ENCEFALOGRAMA
							PENDIENTES. DIAGNOSTICO Y TRATAMIENTO DE ACUERDO CON GUÍA DE
							PRÁCTICA CLÍNICA Y ALGORITMOS IMSS.
						</td>
					</tr>
					<tr>
						<th>RIESGO DE CAÍDAS Y RECOMENDACIONES:</th>
						<td>
							CGE Y SVPT CONTROL DE LIQUIDOS Y URESIS POR TURNO CAMA CON
							BARANDALES EN ALTO, SEMIFOWLER VIGILANCIA DE DATOS DE SANGRADO A
							CUALQUIER NIVEL CUIDADO DE ESTADO NEUROLOGICO MANTENER EUTERMIA
						</td>
					</tr>
				</table>
				<div class='row'>
					<div class='col-lg-12 mb-5 mt-3'>
						<div class='form-gorup'>
							<div class='linea2'></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default TableComponent;
