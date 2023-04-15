import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const PesoTallaTable = () => {
	const [data, setData] = useState([
		{ fecha: '2022-04-14', peso: '70 kg', talla: '175 cm' },
	]);

	const handleInputChange = (e, index, field) => {
		const newData = [...data];
		newData[index][field] = e.target.value;
		setData(newData);
	};

	const handleAddRow = () => {
		setData([...data, { fecha: '', peso: '', talla: '' }]);
	};

	return (
		<div className='table-container pb-5'>
			<table className='peso-talla-table'>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Peso</th>
						<th>Talla</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<td>
								<input
									type='date'
									value={row.fecha}
									onChange={(e) => handleInputChange(e, index, 'fecha')}
								/>
							</td>
							<td>
								<input
									type='text'
									value={row.peso}
									onChange={(e) => handleInputChange(e, index, 'peso')}
								/>
							</td>
							<td>
								<input
									type='text'
									value={row.talla}
									onChange={(e) => handleInputChange(e, index, 'talla')}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Button
				className='mt-4'
				onClick={handleAddRow}>
				Agregar fila
			</Button>
		</div>
	);
};

export default PesoTallaTable;
