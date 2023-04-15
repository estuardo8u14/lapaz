import React, { useState } from 'react';

const medications = [
	{ name: 'Medicamento A 5 MG / 1 ML', availability: 'Disponible' },
	{ name: 'Medicamento A 15 MG Tableta', availability: 'No Disponible' },
	{ name: 'Medicamento B 800 MG', availability: 'Disponible' },
	{ name: 'Medicamento C 20 ML / MG', availability: 'No Disponible' },
];

const Dropdown = () => {
	const [selectedMedication, setSelectedMedication] = useState(null);

	const handleMedicationChange = (event) => {
		setSelectedMedication(event.target.value);
	};

	return (
		<div>
			<label
				className='pb-5'
				htmlFor='medication'>
				Select a medication:
			</label>
			<select
				id='medication'
				onChange={handleMedicationChange}>
				<option value=''>Select a medication</option>
				{medications.map((medication, index) => (
					<option
						key={index}
						value={medication.name}>
						{medication.name}
					</option>
				))}
			</select>

			{selectedMedication && (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Availability</th>
						</tr>
					</thead>
					<tbody>
						{medications
							.filter((medication) => medication.name === selectedMedication)
							.map((medication, index) => (
								<tr key={index}>
									<td>{medication.name}</td>
									<td>{medication.availability}</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Dropdown;
