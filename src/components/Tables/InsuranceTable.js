import React, { useState } from 'react';
import ModalDir from '../Modals/ModalDir';
import { Button } from '@material-ui/core';
import ModalAseguradoras from '../Modals/ModalAseguradoras';

const InsuranceTable = () => {
	const [rows, setRows] = useState([{ insurance: 'Salud Siempre' }]);
	const [newRow, setNewRow] = useState({ insurance: '' });

	const handleInputChange = (event, index) => {
		const { name, value } = event.target;
		const newRows = [...rows];
		newRows[index][name] = value;
		setRows(newRows);
	};

	const handleAddRow = () => {
		setRows([...rows, newRow]);
		setNewRow({ insurance: '' });
	};

	const handleDeleteRow = (index) => {
		const newRows = [...rows];
		newRows.splice(index, 1);
		setRows(newRows);
	};

	return (
		<div className='row'>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Seguro</th>
						<th>Opciones</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr key={index}>
							<td class='col-1 addresstable'>
								<Button
									variant='contained'
									onClick={() => handleDeleteRow(index)}>
									<i className='feather-x'></i>
								</Button>
							</td>
							<td>
								<input
									class='form-control'
									type='text'
									name='insurance'
									value={row.insurance}
									onChange={(event) => handleInputChange(event, index)}
								/>
							</td>
							<td>
								<div className='row'>
									<div className='col-lg-12'>
										<ModalAseguradoras />
									</div>
								</div>
							</td>
						</tr>
					))}
					<tr>
						<td></td>
						<td>
							<input
								type='text'
								class='form-control'
								name='insurance'
								value={newRow.insurance}
								onChange={(event) =>
									setNewRow({ ...newRow, insurance: event.target.value })
								}
							/>
						</td>
						<td>
							<Button
								style={{ width: '153px' }}
								variant='contained'
								color='warning'
								onClick={handleAddRow}>
								Agregar nuevo
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default InsuranceTable;
