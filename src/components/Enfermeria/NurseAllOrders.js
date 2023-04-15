import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NurseAllOrders = () => {
	const data = [
		{
			fecha: '2022-02-14',
			orden: '1234',
			paciente: 'Juan Pérez',
		},
		{
			fecha: '2022-02-15',
			orden: '5678',
			paciente: 'Maria Garcia',
		},
		{
			fecha: '2022-02-15',
			orden: '5639',
			paciente: 'Pedro Helbert',
		},
		{
			fecha: '2022-02-15',
			orden: '5638',
			paciente: 'Pedro Helbert',
		},
		{
			fecha: '2022-02-14',
			orden: '5555',
			paciente: 'José Ramírez',
		},
		{
			fecha: '2022-02-15',
			orden: '5556',
			paciente: 'José Ramírez',
		},
		{
			fecha: '2022-02-15',
			orden: '5557',
			paciente: 'José Ramírez',
		},
		{
			fecha: '2022-02-15',
			orden: '5558',
			paciente: 'José Ramírez',
		},
	];

	return (
		<div className='table-container'>
			<table className='orders-table'>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Orden</th>
						<th>Paciente</th>
						<th>Acción</th>
					</tr>
				</thead>
				<tbody>
					{data.map((order, index) => (
						<tr key={index}>
							<td>{order.fecha}</td>
							<td>{order.orden}</td>
							<td>{order.paciente}</td>
							<td>
								<Link to='/Enfermeria'>
									<Button variant='contained'>Visualizar</Button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default NurseAllOrders;
