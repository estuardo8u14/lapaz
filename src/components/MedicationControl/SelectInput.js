import React, { useState } from 'react';

const medications = [
	{ name: 'Medicamento A 5 MG / 1 ML', availability: 'Disponible' },
	{ name: 'Medicamento A 15 MG Tableta', availability: 'No Disponible' },
	{ name: 'Medicamento B 800 MG', availability: 'Disponible' },
	{ name: 'Medicamento C 20 ML / MG', availability: 'No Disponible' },
];

const SelectInput = () => {
	const [selectedMedication, setSelectedMedication] = useState('');

	const handleChange = (event) => {
		setSelectedMedication(event.target.value);
	};

	return (
		<div>
			<label htmlFor='medications'>Select a medication:</label>
			<select
				id='medications'
				value={selectedMedication}
				onChange={handleChange}>
				<option value=''>Select a medication</option>
				{medications.map((medication, index) => (
					<option
						key={index}
						value={medication.name}>
						{medication.name}
					</option>
				))}
			</select>

			{selectedMedication !== '' && (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Availability</th>
						</tr>
					</thead>
					<tbody>
						{medications.map((medication, index) => {
							if (medication.name === selectedMedication) {
								return (
									<tr key={index}>
										<td>{medication.name}</td>
										<td>{medication.availability}</td>
									</tr>
								);
							}
							return null;
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default SelectInput;
