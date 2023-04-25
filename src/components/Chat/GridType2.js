import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ModalEmergencia from '../Modals/ModalEmergencia';

const GridType2 = () => {
	const [rows, setRows] = useState([
		{
			Orden: 'Paciente con contaje de plaquetas menor de 100,000.',
			Tipo: 'Atención y cuidado',
			Doctor: 'Dr. John Doe',
			Estado: 'Pendiente',
		},
		{
			Orden: ' Acetaminophen 500mg orally Q 6 hrs.',
			Tipo: 'Medicamento',
			Doctor: 'Dr. Jane Doe',
			Estado: 'Completado',
		},
		{
			Orden: 'Descontinuar Profilaxis de Trombosis Venosa',
			Tipo: 'Emergencia',
			Doctor: 'Dr. Max Mustermann',
			Estado: 'En proceso',
		},
	]);

	const handleAddRow = () => {
		const newRow = { Orden: '', Tipo: '', Doctor: '', Estado: '' };
		setRows([...rows, newRow]);
	};

	const handleDeleteRow = (index) => {
		const updatedRows = rows.filter((row, i) => i !== index);
		setRows(updatedRows);
	};

	const handleEditRow = (index) => {
		// open Modal component here
	};

	const handleInputChange = (e, index, key) => {
		const updatedRows = [...rows];
		updatedRows[index][key] = e.target.value;
		setRows(updatedRows);
	};

	return (
		<table
			className='pt-5 pb-5'
			style={{ borderCollapse: 'collapse', border: '1px solid grey' }}>
			<thead>
				<tr>
					<th>Orden</th>
					<th>Tipo</th>
					<th>Doctor</th>
					<th>Estado</th>
					<th>Opciones</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						<td className='fw-600'>{row.Orden}</td>
						<td>{row.Tipo}</td>
						<td>{row.Doctor}</td>
						<td>{row.Estado}</td>
						<td>
							<Button onClick={() => handleDeleteRow(index)}>Borrar</Button>
							<ModalEmergencia />
						</td>
					</tr>
				))}
				<tr>
					<td>
						<input
							type='text'
							value={''}
							onChange={(e) => handleInputChange(e, rows.length, 'Orden')}
						/>
					</td>
					<td>
						<input
							type='text'
							value={''}
							onChange={(e) => handleInputChange(e, rows.length, 'Tipo')}
						/>
					</td>
					<td>
						<input
							type='text'
							value={''}
							onChange={(e) => handleInputChange(e, rows.length, 'Doctor')}
						/>
					</td>
					<td>
						<input
							type='text'
							value={''}
							onChange={(e) => handleInputChange(e, rows.length, 'Estado')}
						/>
					</td>
					<td>
						<Button onClick={() => handleDeleteRow(rows.length)}>Borrar</Button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colSpan='5'>
						<Button onClick={handleAddRow}>Agregar fila</Button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default GridType2;
