import React, { useState } from 'react';

const medications = [
	{
		name: 'Medicamento A',
		children: [
			{ name: 'Medicamento A - 50 MG TABLETA', availability: 'Disponible' },
			{
				name: 'Medicamento A - 20 ML INYECCIÓN',
				availability: 'No Disponible',
			},
			{ name: 'Medicamento A - 5 MG / 2 ML', availability: 'Disponible' },
		],
	},
	{
		name: 'Medicamento B',
		children: [
			{ name: 'Medicamento B - 500 MG TABLETA', availability: 'No Disponible' },
			{ name: 'Medicamento B - 20 ML ORAL', availability: 'No Disponible' },
			{ name: 'Medicamento B - 50 DL / MG', availability: 'Disponible' },
		],
	},
	{
		name: 'Azitromicina',
		children: [
			{ name: 'Zithromax - 100 MG TABLETA', availability: 'Disponible' },
			{ name: 'Sumamed - 250 MG', availability: 'Disponible' },
			{ name: 'Zitrocin - 20CC', availability: 'No Disponible' },
		],
	},
	{
		name: 'Ofloxacin',
		children: [
			{ name: 'Floxin - 10 MG', availability: 'No Disponible' },
			{ name: 'Ocuflox - 20 MG TABLETA', availability: 'Disponible' },
		],
	},
];

const MedicationSelect = () => {
	const [selectedMedication, setSelectedMedication] = useState(null);

	const handleSelectChange = (event) => {
		setSelectedMedication(event.target.value);
	};

	return (
		<div>
			<h4 class='mont-font fw-600 font-md mb-3 mb-0'>
				Ver Disponibilidad de medicamentos
			</h4>
			<label htmlFor='medication-select'>Selecciona medicamento:</label>
			<select
				id='medication-select'
				onChange={handleSelectChange}>
				<option value=''>Busca y Selecciona Medicamento</option>
				{medications.map((medication) => (
					<option
						value={medication.name}
						key={medication.name}>
						{medication.name}
					</option>
				))}
			</select>

			{selectedMedication && (
				<div className='pb-5'>
					<h2 className='pt-3 pb-3'>Medicamento: {selectedMedication}</h2>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Disponibilidad</th>
							</tr>
						</thead>
						<tbody>
							{medications
								.find((medication) => medication.name === selectedMedication)
								.children.map((childMedication) => (
									<tr key={childMedication.name}>
										<td>{childMedication.name}</td>
										<td>{childMedication.availability}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default MedicationSelect;
