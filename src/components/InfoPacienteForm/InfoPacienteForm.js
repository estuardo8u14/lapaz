import React from 'react';
import ModalDir from '../Modals/ModalDir';

export default function ModalCodigoPaciente() {
	return (
		<>
			<div class='col-xl-12 mt-5'>
				<div class='page-title'>
					<form action='#'>
						<div class='row'>
							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									<label class='mont-font fw-600 font-xssss'></label>
									<input
										type='text'
										placeholder='Primer Nombre *'
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
									<input
										type='text'
										placeholder='Fecha de nancimiento *'
										onFocus={(e) => (e.target.type = 'date')}
										onBlur={(e) => (e.target.type = 'text')}
										name='comment-name'
										class='form-control'
									/>
								</div>
							</div>

							<div class='col-lg-6 mb-3'>
								<div class='form-gorup'>
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
									<label class='mont-font fw-600 font-xssss'></label>
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
										<input
											type='text'
											placeholder='Dirección Residencia *'
											name='comment-name'
											class='form-control'></input>
									</div>
								</div>
								<div class='col-lg-3 mb-3'>
									<div class='form-gorup pt-0'>
										<ModalDir />
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
