import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

function ScaleFallsBootstap() {
	return (
		<Container>
			<h2 class='mont-font fw-900 font-md mb-lg-2 mb-0'>
				Escala de riesgo de caídas
			</h2>
			<Card>
				<Card.Header className='fw-900'>
					Ingreso de datos para escala de riesgo en caídas de pacientes
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Card>
								<Card.Header className='fw-600'>¿Caídas previas?</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Sí'
										/>
										<Form.Check
											type='radio'
											label='No'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header className='fw-600'>
									¿Compromiso de conciencia?
								</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Sí'
										/>
										<Form.Check
											type='radio'
											label='No'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Header className='fw-600'>Edad del paciente</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Recien nacido'
										/>
										<Form.Check
											type='radio'
											label='Escolar'
										/>
										<Form.Check
											type='radio'
											label='Adulto mayor'
										/>
										<Form.Check
											type='radio'
											label='Adulto'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header className='fw-600'>Antecedentes</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Estado mental alterado'
										/>
										<Form.Check
											type='radio'
											label='Limitación física'
										/>
										<Form.Check
											type='radio'
											label='Tratamiento de medicamento que implica riesgos'
										/>
										<Form.Check
											type='radio'
											label='Paciente sin factores de riesgo evidentes'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
}
export default ScaleFallsBootstap;
