import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ModalEmergencia from '../Modals/ModalEmergencia';

const GridType = () => {
	const [rows, setRows] = useState([]);

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
			className='mt-5 mb-5'
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
						<td>
							<input
								type='text'
								value={row.Orden}
								onChange={(e) => handleInputChange(e, index, 'Orden')}
							/>
						</td>
						<td>
							<input
								type='text'
								value={row.Tipo}
								onChange={(e) => handleInputChange(e, index, 'Tipo')}
							/>
						</td>
						<td>
							<input
								type='text'
								value={row.Doctor}
								onChange={(e) => handleInputChange(e, index, 'Doctor')}
							/>
						</td>
						<td>
							<input
								type='text'
								value={row.Estado}
								onChange={(e) => handleInputChange(e, index, 'Estado')}
							/>
						</td>
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

export default GridType;
