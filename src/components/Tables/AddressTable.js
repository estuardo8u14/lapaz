import React, { useState } from 'react';
import ModalDir from '../Modals/ModalDir';
import { Button } from '@material-ui/core';

const AddressTable = () => {
	const [rows, setRows] = useState([{ direccion: '123 Blvd Acatan St' }]);
	const [newRow, setNewRow] = useState({ direccion: '' });

	const handleInputChange = (event, index) => {
		const { name, value } = event.target;
		const newRows = [...rows];
		newRows[index][name] = value;
		setRows(newRows);
	};

	const handleAddRow = () => {
		setRows([...rows, newRow]);
		setNewRow({ direccion: '' });
	};

	const handleDeleteRow = (index) => {
		const newRows = [...rows];
		newRows.splice(index, 1);
		setRows(newRows);
	};

	return (
		<div className='row'>
			<table className=''>
				<thead>
					<tr>
						<th></th>
						<th>Dirección</th>
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
									name='direccion'
									value={row.direccion}
									onChange={(event) => handleInputChange(event, index)}
								/>
							</td>
							<td>
								<div className='row'>
									<div className='col-lg-12'>
										<ModalDir />
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
								name='direccion'
								value={newRow.direccion}
								onChange={(event) =>
									setNewRow({ ...newRow, direccion: event.target.value })
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

export default AddressTable;
