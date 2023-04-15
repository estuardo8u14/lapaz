import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Button } from '@material-ui/core';

const AuthProcedure = () => {
	return (
		<div class='col-lg-12 mt-4 mb-3'>
			<h4 class='mont-font fw-700 font-md mb-5'>
				Autorización de procediminetos
			</h4>
			<form class='input-group'>
				<div className='me-5'>
					<label>
						Datos del paciente:
						<input
							class='form-control'
							type='text'
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Datos del responsable:
						<input
							class='form-control'
							type='text'
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Tipo de procedimiento:
						<input
							class='form-control'
							type='text'
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Fecha:
						<input
							class='form-control'
							type='date'
						/>
					</label>
				</div>
				<br />
				<div className='me-5'></div>
				<label>
					Firma:
					<input
						class='form-control'
						type='text'
					/>
				</label>
			</form>
		</div>
	);
};

export default AuthProcedure;
