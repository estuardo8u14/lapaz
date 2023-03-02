import { Button } from '@material-ui/core';
import React, { useState } from 'react';

export default function GridEntries2() {
	const [inputFields, setInputFields] = useState([{ name: '' }]);
	const addFields = (e) => {
		let newfield = { name: '' };
		setInputFields([...inputFields, newfield]);
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

	const handleKeypress = (e, index) => {
		if (e.keyCode === 13) {
			addFields();
			window.scrollTo(0, 1590);
		}
		if (e.keyCode === 18) {
			removeFields(index);
		}
	};

	return (
		<>
			<div class='row'>
				<div class='col-lg-12 mb-5 mt-0'>
					<div class='form-gorup'>
						<div class='linea'></div>
					</div>
				</div>
			</div>

			<div class='row'>
				<h4 class='mont-font fw-600 font-md mb-lg-5 mb-0'>
					Historial de la enfermedad
				</h4>
			</div>
			<div class='col-xl-12 mt-0'>
				<div class='page-title'>
					<form>
						<div class='row'>
							{inputFields.map((input, index) => {
								return (
									<>
										<div class='row'>
											<div class='col-lg-10 mb-3'>
												<div
													className='form-gorup'
													key={index}>
													<textarea
														type='text'
														name='name'
														value={input.name}
														onKeyDown={(event) => handleKeypress(index, event)}
														onChange={(event) => handleFormChange(index, event)}
														placeholder='Historia de la enfermedad'
														class='form-control-motivo'
													/>
												</div>
											</div>
											<div class='col-lg-2 pt-3'>
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
						</div>
						<div class='col-lg-12 pt-2 mb-5'>
							<div className='form-gorup'>
								<div class='col-lg-12'>
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
