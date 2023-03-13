import { Radio } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router';
import ModalAdRapida from '../Modals/ModalAdRapida';
import ModalAutoFill from '../Modals/ModalAutoFill';
import ModalDir from '../Modals/ModalDir';

export default function ModalCodigoPaciente(props) {
	const location = useLocation();
	const propsData = location.state;
	return (
		<>
			<div class='col-xl-12 mt-2'>
				<div class='page-title'>
					<h4 class='mont-font fw-600 font-md pt-3 pb-3'>
						Información del paciente
					</h4>
					<form action='#'>
						<div class='row'>
							<ModalAdRapida />
							<div class='col-lg-6 mt-2 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Nombre: ${propsData.component}`}</label>
										</div>
									)}
									<input
										required
										type='text'
										placeholder='Primer Nombre *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mt-2 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`2ndo Nombre: ${propsData.content}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Segundo nombre'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
						</div>
						<div class='row'>
							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Apellido: ${propsData.component1}`}</label>
										</div>
									)}

									<input
										type='text'
										placeholder='Primer apellido *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`2ndo Apellido: ${propsData.content2}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Segundo apellido *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Fecha de nacimiento: ${propsData.content3}`}</label>
										</div>
									)}
									<input
										placeholder='Fecha de nacimiento *'
										onFocus={(e) => (e.target.type = 'date')}
										onBlur={(e) => (e.target.type = 'text')}
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Nacionalidad: ${propsData.content4}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Nacionalidad'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
						</div>
						<div class='row'>
							<div class='col-lg-3 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`CUI: ${propsData.content5}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='CUI / DPI *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-3 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Pasaporte: ${propsData.content6}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Pasasporte'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Estado civil: ${propsData.content7}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Estado civil'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-3 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Sexo: ${propsData.content8}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Sexo'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
							<div class='col-lg-3 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Teléfono: ${propsData.content9}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Teléfono *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									{propsData && (
										<div>
											<label class='mont-font fw-600 font-xssss'>{`Correo electrónico: ${propsData.content10}`}</label>
										</div>
									)}
									<input
										type='text'
										placeholder='Correo electrónico *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>
						</div>
						<div class='row'>
							<div class='row'>
								<div class='col-lg-9 mb-3'>
									<div class='form-gorup'>
										{propsData && (
											<div>
												<label class='mont-font fw-600 font-xssss'>{`Dirección Residencia: ${propsData.content11}`}</label>
											</div>
										)}
										<input
											type='text'
											placeholder='Dirección Residencia *'
											name='comment-name'
											class='form-control'></input>
									</div>
								</div>
								<div class='col-lg-3 mb-3'>
									<div class='form-gorup pt-2'>
										<ModalDir />
									</div>
								</div>
							</div>

							<div class='col-lg-12 mb-3 pt-1'>
								<div class='form-check text-left mb-3'>
									<Radio color='warning' />
									<label class='pt-1 form-check-label fw-600 font-xsss text-grey-700'>
										Paciente con capacidades especiales
									</label>
								</div>
								<div class='col-lg-12 mb-3'>
									<div class='form-gorup pt-1'>
										<ModalAutoFill />
										<p className='ms-3 pt-2'>
											Autofill: Muestra los pacientes auto-registrados con la
											capacidad de corregir datos
										</p>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
