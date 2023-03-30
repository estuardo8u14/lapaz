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
				<h4 class='mont-font fw-600 font-md pt-3 pb-1'>
					Valor Consulta o Copago
				</h4>
				<form action='#'>
					<div class='row'>
						<div class='col-lg-12 mb-1'>
							<label class='mont-font fw-600 font-xs pt-3 pb-3'>
								Total a pagar: Q80.00
							</label>
						</div>
					</div>
					<div class='row'>
						<div class='col-lg-12 mb-1'>
							<h6 class='mont-font fw-600 font-xs pt-3 pb-3'>
								Saldo a favor: Q0.00
							</h6>
						</div>
					</div>
					<div class='row'>
						<div class='col-lg-12 mt-2 mb-3'>
							<h6 class='mont-font fw-600 font-xs pt-3 pb-3'>
								Diferencial: Q0.00
							</h6>
						</div>
					</div>
					<div class='col-lg-6 mb-3'>
						<div class='form-gorup pb-3'>
							<label class='mont-font fw-600 font-xs pt-3'>Nit:</label>
							<input
								type='text'
								name='comment-name'
								class='form-control'
							/>
						</div>
						<ModalPuntoVenta />
					</div>
				</form>
			</div>
		</div>
	);
}
