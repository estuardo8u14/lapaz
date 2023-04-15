import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const GlucoTable = () => {
	const [data, setData] = useState([
		{
			fecha: '2022-04-14',
			nivel: '100',
		},
	]);

	const handleInputChange = (e, index, field) => {
		const newData = [...data];
		newData[index][field] = e.target.value;
		setData(newData);
	};

	const handleAddRow = () => {
		setData([...data, { fecha: '', nivel: '' }]);
	};

	return (
		<div className='table-container pb-5'>
			<table className='gluco-table'>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Nivel de glucemia (mg/dL)</th>
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
									value={row.nivel}
									onChange={(e) => handleInputChange(e, index, 'nivel')}
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

export default GlucoTable;
