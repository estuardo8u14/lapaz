import React, { useState } from 'react';
import { Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const initialData = [
	{
		code: '001',
		user: 'john',
		rol: 'admin',
		name: 'John Smith',
		state: 'active',
	},
	{
		code: '002',
		user: 'jane',
		rol: 'medico',
		name: 'Jane Doe',
		state: 'inactive',
	},
	{
		code: '003',
		user: 'bob',
		rol: 'paciente',
		name: 'Bob Johnson',
		state: 'active',
	},
	{
		code: '004',
		user: 'susan',
		rol: 'enfermera',
		name: 'Susan Lee',
		state: 'inactive',
	},
	{
		code: '005',
		user: 'dave',
		rol: 'clinicaext',
		name: 'Dave Wilson',
		state: 'active',
	},
];

const rols = ['admin', 'paciente', 'clinicaext', 'medico', 'enfermera'];
const states = ['active', 'inactive'];

const TableCrud = () => {
	const [data, setData] = useState(initialData);
	const [editableRowIndex, setEditableRowIndex] = useState(-1);

	const handleEdit = (index) => {
		setEditableRowIndex(index);
	};

	const handleDelete = (index) => {
		const newData = [...data];
		newData.splice(index, 1);
		setData(newData);
	};

	const handleSave = (index, updatedData) => {
		const newData = [...data];
		newData[index] = updatedData;
		setData(newData);
		setEditableRowIndex(-1);
	};

	const handleAdd = () => {
		const newRecord = {
			code: '',
			user: '',
			rol: '',
			name: '',
			state: '',
		};
		setData([...data, newRecord]);
		setEditableRowIndex(data.length);
	};

	const renderCell = (value, fieldName, index) => {
		if (editableRowIndex === index) {
			return (
				<Input
					type='text'
					value={value}
					onChange={(e) => {
						const newData = [...data];
						newData[index][fieldName] = e.target.value;
						setData(newData);
					}}
				/>
			);
		} else {
			return value;
		}
	};

	const renderSelect = (value, fieldName, index, options) => {
		if (editableRowIndex === index) {
			return (
				<Input
					type='select'
					value={value}
					onChange={(e) => {
						const newData = [...data];
						newData[index][fieldName] = e.target.value;
						setData(newData);
					}}>
					{options.map((option) => (
						<option
							key={option}
							value={option}>
							{option}
						</option>
					))}
				</Input>
			);
		} else {
			return value;
		}
	};
	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Code</th>
						<th>User</th>
						<th>Rol</th>
						<th>Name</th>
						<th>State</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<td>{renderCell(row.code, 'code', index)}</td>
							<td>{renderCell(row.user, 'user', index)}</td>
							<td>{renderSelect(row.rol, 'rol', index, rols)}</td>
							<td>{renderCell(row.name, 'name', index)}</td>
							<td>{renderSelect(row.state, 'state', index, states)}</td>
							<td>
								{editableRowIndex === index ? (
									<>
										<Button
											color='primary'
											onClick={() => handleSave(index, row)}>
											Save
										</Button>{' '}
										<Button
											color='secondary'
											onClick={() => setEditableRowIndex(-1)}>
											Cancel
										</Button>{' '}
									</>
								) : (
									<>
										<Button
											color='primary'
											onClick={() => handleEdit(index)}>
											Edit
										</Button>{' '}
										<Button
											color='danger'
											onClick={() => handleDelete(index)}>
											Delete
										</Button>{' '}
										<Button color='info'>Password</Button>{' '}
										<Button color='warning'>Institution</Button>{' '}
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Button
				color='success'
				onClick={handleAdd}>
				Add new row
			</Button>
		</div>
	);
};

export default TableCrud;
