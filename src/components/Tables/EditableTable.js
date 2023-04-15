import React, { useState } from 'react';

const EditableTable = ({ data, columns }) => {
	// state to track the edited data
	const [editedData, setEditedData] = useState({});

	// handle changes in the edited data
	const handleEditChange = (event, id, field) => {
		setEditedData({
			...editedData,
			[id]: {
				...editedData[id],
				[field]: event.target.value,
			},
		});
	};

	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.field}>{column.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						{columns.map((column) => (
							<td key={`${item.id}-${column.field}`}>
								{column.editable ? (
									<input
										class='form-control'
										type='textarea'
										value={
											editedData[item.id]?.[column.field] ?? item[column.field]
										}
										onChange={(event) =>
											handleEditChange(event, item.id, column.field)
										}
									/>
								) : (
									item[column.field]
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EditableTable;
