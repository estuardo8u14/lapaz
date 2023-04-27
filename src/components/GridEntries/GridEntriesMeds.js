import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import MedicationSelect from '../MedicationControl/MedicationSelect ';

export default function GridEntriesMeds() {
	const [inputFields, setInputFields] = useState([{ name: '' }]);
	const addFields = (e) => {
		let newfield = { name: '' };
		setInputFields([...inputFields, newfield]);
	};

	const [selectedOption, setSelectedOption] = useState('');

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const removeFields = (index) => {
		let data = [...inputFields];
		data.splice(index, 1);
		setInputFields(data);
	};

	const handleKeypress = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			addFields();
			window.scrollTo(0, 1590);
		}
	};

	return (
		<>
			<div class='row'>
				<h4 class='mont-font fw-600 font-md mb-3 mb-0'>Registros Tx</h4>
			</div>

			<div class='col-xl-12 mt-0'>
				<div class='page-title'>
					<form>
						{inputFields.map((input, index) => {
							return (
								<>
									<div class='row'>
										<div class='col-lg-10 mb-3 pt-3'>
											<div
												className='form-gorup'
												key={index}>
												<textarea
													type='text'
													name='name'
													value={input.name}
													onKeyDown={handleKeypress}
													onChange={(event) => handleFormChange(index, event)}
													placeholder='Registro de tratamiento...'
													class='form-control-motivo'
												/>
											</div>
										</div>
										<div class='col-lg-2 pt-4'>
											<div className='form-gorup'>
												<div class='col-lg-2'>
													<Button
														type='button'
														variant='contained'
														onClick={() => removeFields(index)}>
														Borrar
													</Button>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}

						<div class='col-lg-12 pt-2'>
							<div className='form-gorup'>
								<div class='col-lg-12 mb-5'>
									<Button
										variant='contained'
										type='button'
										onClick={addFields}>
										Agregar más
									</Button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
