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

export default function DataAppointmentEdit() {
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
					Valor Consulta o Copago
				</h4>
				<form action='#'>
					<div class='row'>
						<div class='col-lg-12 mt-4 mb-3'>
							<h6 class='mont-font fw-600 font-md pt-3 pb-3'>Total a pagar:</h6>
							<h6 class='mont-font fw-600 font-md pt-3 pb-3'>80</h6>
							<label
								type='text'
								placeholder='Propiedades'
								name='comment-name'
								class='form-control'
							/>
						</div>
					</div>

					<div class='row'>
						<div class='col-lg-6 mb-3'>
							<div class='form-gorup'>
								<h6 class='mont-font fw-600 font-md pt-3 pb-3'>
									Total a pagar:
								</h6>
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
