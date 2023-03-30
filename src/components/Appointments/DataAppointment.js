import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
	Button,
	Card,
	CardContent,
	CardActionArea,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ModalPuntoVenta from '../Modals/ModalPuntoVenta';
import ModalCuponCoex from '../Modals/ModalCuponCoex';

export default function DataAppointment() {
	const [values, setValue] = useState('');
	const [montoSSContentVisible, setMontoSSContentVisible] = useState(false);
	const [montoRContentVisible, setMontoRContentVisible] = useState(false);
	const [montoGContentVisible, setMontoGContentVisible] = useState(false);
	const [tipocita, SetTipoCita] = useState('TipoCita');

	useEffect(() => {
		tipocita === 'Salud Siempre'
			? setMontoSSContentVisible(true)
			: setMontoSSContentVisible(false);
		tipocita === 'Roble'
			? setMontoRContentVisible(true)
			: setMontoRContentVisible(false);
		tipocita === 'General'
			? setMontoGContentVisible(true)
			: setMontoGContentVisible(false);
	}, [tipocita]);

	const handleOnChange = (e) => {
		SetTipoCita(e.target.value);
	};

	return (
		<div class='col-xl-12'>
			<div class='page-title'>
				<h4 class='mont-font fw-600 font-md pt-3 pb-3'>
					Información del paciente
				</h4>
				<form action='#'>
					<div class='row'>
						<div class='col-lg-12 mt-4 mb-3'>
							<div class='form-gorup'>
								<FormControl className='col-lg-12'>
									<InputLabel id='demo-simple-select-label'>
										Tipo de cita{' '}
									</InputLabel>
									<Select
										value={tipocita}
										onChange={handleOnChange}
										labelId='demo-simple-select-label'
										id='demo-simple-select'>
										<MenuItem value='value0'>N/A</MenuItem>
										<MenuItem value='Salud Siempre'>Salud Siempre</MenuItem>
										<MenuItem value='Roble'>Roble</MenuItem>
										<MenuItem value='General'>General</MenuItem>
									</Select>
								</FormControl>
								{/* <input
                  required
                  type="text"
                  placeholder="Tipo de cita"
                  name="comment-name"
                  class="form-control"
                /> */}
							</div>
						</div>
					</div>

					<div class='row'>
						<div class='col-lg-12 mb-3'>
							<div class='form-gorup'>
								<label class='mont-font fw-600 font-xssss'>
									Póliza: 674867-9
								</label>
								<input
									type='text'
									placeholder='Póliza'
									name='comment-name'
									class='form-control'
								/>
							</div>
						</div>
					</div>

					<div class='row'>
						<div class='col-lg-6 mb-3'>
							<div class='form-gorup'>
								<input
									type='text'
									placeholder='Propiedades'
									name='comment-name'
									class='form-control'
								/>
							</div>
						</div>

						<div class='col-lg-6 mb-3'>
							<div class='form-gorup'>
								<input
									type='text'
									placeholder='Número de autorización'
									name='comment-name'
									class='form-control'
								/>
							</div>
						</div>
						<div class='col-lg-6 mb-3'>
							<div class='form-gorup'>
								<h6 class='mont-font fw-600 font-md pt-3 pb-3'>
									{montoSSContentVisible && (
										<>
											<p>Monto: Q80</p>
											<ModalCuponCoex />
										</>
									)}
									{montoRContentVisible && (
										<>
											<p>Monto: Q120</p>
											<ModalCuponCoex />
										</>
									)}
									{montoGContentVisible && (
										<>
											<p>Monto: Q100</p>
											<ModalCuponCoex />
										</>
									)}
								</h6>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
