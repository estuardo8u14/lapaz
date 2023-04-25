import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const ScaleFalls = () => {
	const title = 'Ingreso de datos para escala de riesgo en caídas de pacientes';
	const cardTitles = [
		'Edad del paciente',
		'Caídas previas',
		'Compromiso de conciencia',
		'Antecedentes',
	];

	return (
		<Card>
			<Card.Header>{title}</Card.Header>
			<Card.Body>
				{cardTitles.map((title) => (
					<Card
						key={title}
						className='mb-3'>
						<Card.Header>{title}</Card.Header>
						<Card.Body>
							<Form>
								<Form.Group controlId={`${title}-select1`}>
									<Form.Label>Select 1</Form.Label>
									<Form.Select>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</Form.Select>
								</Form.Group>
								<Form.Group controlId={`${title}-select2`}>
									<Form.Label>Select 2</Form.Label>
									<Form.Select>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</Form.Select>
								</Form.Group>
								<Form.Group controlId={`${title}-select3`}>
									<Form.Label>Select 3</Form.Label>
									<Form.Select>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</Form.Select>
								</Form.Group>
								<Form.Group controlId={`${title}-select4`}>
									<Form.Label>Select 4</Form.Label>
									<Form.Select>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</Form.Select>
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				))}
			</Card.Body>
		</Card>
	);
};
export default ScaleFalls;
