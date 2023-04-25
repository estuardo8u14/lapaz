import React from 'react';
import { Container, Col, Row, Card, Form } from 'react-bootstrap';

function AccidentReport() {
	return (
		<Container>
			<h2 class='mont-font fw-900 font-md mb-lg-2 mb-0'>
				Reporte de accidente
			</h2>
			<Card>
				<Card.Header className='fw-900'>
					Reportar accidente de paciente
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Card>
								<Card.Header className='fw-600'>
									Información general del paciente
								</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Control
											type='text'
											placeholder='Actividad del paciente'
										/>
										<Form.Control
											className='mt-2'
											type='text'
											placeholder='Estado de conciencia'
										/>
										<Form.Control
											className='mt-2'
											type='text'
											placeholder='Motivo de accidente'
										/>
										<Form.Label className='fw-600 mt-4'>
											Estado del paciente
										</Form.Label>
										<Form.Check
											type='radio'
											label='Reposo absoluto'
											name='estadoPaciente'
										/>
										<Form.Check
											type='radio'
											label='Reposo relativo'
											name='estadoPaciente'
										/>
										<Form.Check
											type='radio'
											label='Ambulatorio'
											name='estadoPaciente'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header className='fw-600'>
									Información de medicamentos
								</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Sedantes'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Hipnóticos'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Anticonvulsivos'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Otros'
											name='tratamiento'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
							<Card className='mt-3'>
								<Card.Header className='fw-600'>Precauciones</Card.Header>
								<Card.Body>
									<Form.Group>
										<Form.Check
											type='radio'
											label='Paciente sujetado'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Cama sin baranda'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Cama con baranda'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Silla de ruedas'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Camilla'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Camilla sin seguro'
											name='tratamiento'
										/>
										<Form.Check
											type='radio'
											label='Baño'
											name='tratamiento'
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col>
							<Card>
								<Card.Header className='fw-600'>Acciones tomadas</Card.Header>
								<Card.Body>
									<Form.Group className='d-flex align-items-center'>
										<Form.Label
											style={{ width: 'calc(70% - 40px)', margin: '0 10px' }}>
											¿El personal del servicio estaba presente?
										</Form.Label>
										<div className='mx-4'>
											<Form.Check
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
										<Form.Label className='mx-3'>¿Por qué?</Form.Label>
										<div
											className=' mx-4'
											style={{ width: 'calc(100% - 40px)', margin: '0 20px' }}>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
									</Form.Group>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label
											style={{ width: 'calc(70% - 40px)', margin: '0 10px' }}>
											¿Se llamó a médico de turno para evaluarlo?
										</Form.Label>
										<div className='mx-4'>
											<Form.Check
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
										<Form.Label className='mx-3'>¿Por qué?</Form.Label>
										<div
											className='mx-4'
											style={{ width: 'calc(100% - 40px)', margin: '0 20px' }}>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
									</Form.Group>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label
											style={{ width: 'calc(70% - 40px)', margin: '0 10px' }}>
											¿Se llamó a supervisora de turno?
										</Form.Label>
										<div className='mx-4'>
											<Form.Check
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
										<Form.Label className='mx-3'>¿Por qué?</Form.Label>
										<div
											className='mx-4'
											style={{ width: 'calc(100% - 40px)', margin: '0 20px' }}>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
									</Form.Group>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label
											style={{ width: 'calc(70% - 40px)', margin: '0 10px' }}>
											¿Se llevó a RX?
										</Form.Label>
										<div className='mx-4'>
											<Form.Check
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
										<Form.Label className='mx-3'>¿Por qué?</Form.Label>
										<div
											className=' mx-4'
											style={{ width: 'calc(100% - 40px)', margin: '0 20px' }}>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className='mt-3'>
								<Card.Header className='fw-600'>Consecuencias</Card.Header>
								<Card.Body>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label
											style={{ width: 'calc(70% - 40px)', margin: '0 10px' }}>
											¿Perdida del concentimiento?
										</Form.Label>
										<div className='mx-4'>
											<Form.Check
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
										<Form.Label className='mx-3'>¿Por qué?</Form.Label>
										<div
											className=' mx-4'
											style={{ width: 'calc(100% - 40px)', margin: '0 20px' }}>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
									</Form.Group>

									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label>¿Hematoma?</Form.Label>
										<div className='mx-4'>
											<Form.Check
												inline
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												inline
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
									</Form.Group>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label>¿Herida?</Form.Label>
										<div className='mx-4'>
											<Form.Check
												inline
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												inline
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
									</Form.Group>
									<Form.Group className='d-flex align-items-center mt-3'>
										<Form.Label>¿Factura?</Form.Label>
										<div className='mx-4'>
											<Form.Check
												inline
												type='radio'
												label='Sí'
												name='radioOptions'
												id='radioOption1'
											/>
											<Form.Check
												inline
												type='radio'
												label='No'
												name='radioOptions'
												id='radioOption2'
											/>
										</div>
									</Form.Group>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className='mt-3'>
								<Card.Header className='fw-600'>Personal de turno</Card.Header>
								<Card.Body>
									<Form.Group className=''>
										<div className='mx-4'>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
										<div className=' mx-4 mt-2'>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
										<div className=' mx-4 mt-2'>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
										<div className='mx-4 mt-2'>
											<Form.Control
												type='text'
												placeholder='Escribe aquí...'
											/>
										</div>
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

export default AccidentReport;
