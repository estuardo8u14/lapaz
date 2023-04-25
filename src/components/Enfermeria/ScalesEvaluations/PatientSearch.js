import React, { useState } from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';

const mockData = [
	'Juan Perez',
	'Jane Doe',
	'Bob Smith',
	'Alice Johnson',
	'Mark Davis',
];

const SearchPatients = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedPatient, setSelectedPatient] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSelectPatient = (patientName) => {
		setSelectedPatient(patientName);
	};

	const filteredPatients = mockData.filter((patient) =>
		patient.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className='d-flex flex-column align-items-center'>
			<Form.Group className='mt-3 w-50'>
				<Form.Control
					type='text'
					placeholder='Busqueda de pacientes...'
					value={searchTerm}
					onChange={handleChange}
					style={{ borderColor: selectedPatient ? '#007bff' : 'black' }}
				/>
			</Form.Group>
			<Container className='text-center'>
				<p className='pt-2'>
					Selecciona a un paciente antes de realizar cualquier escala
				</p>
			</Container>
			{searchTerm && (
				<ListGroup className='mt-3 w-50'>
					{filteredPatients.map((patient, index) => (
						<ListGroup.Item
							key={index}
							action
							active={selectedPatient === patient}
							onClick={() => handleSelectPatient(patient)}>
							{patient}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</div>
	);
};

export default SearchPatients;

// import { useState } from 'react';
// import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';

// export default function PatientSearch() {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const patients = [
// 		'John Doe',
// 		'Juan Perez',
// 		'Bob Smith',
// 		'Alice Johnson',
// 		'Tom Lee',
// 		'Sara Kim',
// 	];

// 	const handleSearch = (e) => {
// 		setSearchTerm(e.target.value);
// 	};

// 	const filteredPatients = patients.filter((patient) =>
// 		patient.toLowerCase().includes(searchTerm.toLowerCase()),
// 	);

// 	return (
// 		<Container className='d-flex flex-column align-items-center mt-5'>
// 			<Form className='mt-3'>
// 				<InputGroup className='w-200'>
// 					<FormControl
// 						type='text'
// 						placeholder='Search patient names'
// 						value={searchTerm}
// 						onChange={handleSearch}
// 					/>
// 				</InputGroup>
// 			</Form>
// 			<ul className='mt-3 list-group w-50'>
// 				{filteredPatients.map((patient) => (
// 					<li
// 						key={patient}
// 						className='list-group-item text-center'>
// 						{patient}
// 					</li>
// 				))}
// 			</ul>
// 		</Container>
// 	);
// }
