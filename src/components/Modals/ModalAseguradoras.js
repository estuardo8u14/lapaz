import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Card, CardContent, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		position: 'absolute',
		width: 450,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
export default function ModalAseguradoras() {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const options = ['', '', '', '', ''];
	const zonas = [
		'Salud Siempre',
		'Aseguradora General',
		'Seguros El Roble',
		'Seguros G&T',
		'Provesa',
		'BI Empresarial',
		'Empresa Electrica',
	];
	const lugarpob = ['PSM', 'GENCare', 'Mediflex'];

	const [valuezonas, setValuezonas] = React.useState(zonas[0]);
	const [valuelug, setValuelug] = React.useState(options[0]);

	const [inputValuezona, setInputValuezona] = React.useState('');
	const [inputValuelug, setInputValuelug] = React.useState('');

	return (
		<div>
			<Button
				style={{ width: '153px' }}
				variant='contained'
				color='warning'
				onClick={handleOpen}>
				Actualizar
			</Button>
			<Modal
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'
				open={open}
				onClose={handleClose}>
				<div
					style={modalStyle}
					className={classes.paper}>
					<Card
						sx={{ maxWidth: 340, display: 'flex', justifyContent: 'center' }}>
						<CardActionArea>
							<CardContent>
								<h2 className='fw-monoscpase fw-500'>Aseguradoras</h2>
								{/* <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                            <label class="mont-font fw-600 font-xssss">Seguro paciente:</label>
                                            <input type="text" name="comment-name" class="form-control" />
                                        </div>        
                                    </div>
                                </div> */}

								<div class='row'>
									<div class='col-lg-3 mt-3 mb-3'>
										<div class='form-gorup'>
											<Autocomplete
												value={valuezonas}
												onChange={(event, newValuezonas) => {
													setValuezonas(newValuezonas);
												}}
												inputValuezona={inputValuezona}
												onInputChange={(event, newInputValuezona) => {
													setInputValuezona(newInputValuezona);
												}}
												id='controllable-states-demo'
												options={zonas}
												sx={{ width: 300 }}
												renderInput={(params) => (
													<TextField
														{...params}
														label='Seguro:'
													/>
												)}
											/>
										</div>
									</div>
								</div>
								<div class='row'>
									<div class='col-lg-12 mb-3'>
										<div class='form-gorup'>
											<Autocomplete
												value={valuelug}
												onChange={(event, newValuelug) => {
													setValuelug(newValuelug);
												}}
												inputValuelug={inputValuelug}
												onInputChange={(event, newInputValuelug) => {
													setInputValuelug(newInputValuelug);
												}}
												id='controllable-states-demo'
												options={lugarpob}
												sx={{ width: 300 }}
												renderInput={(params) => (
													<TextField
														{...params}
														label='Tipo de póliza'
													/>
												)}
											/>
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-12 mb-3'>
										<div class='form-gorup'>
											<label class='mont-font fw-600 font-xssss'>
												Número de póliza:
											</label>
											<input
												type='text'
												name='comment-name'
												class='form-control'
											/>
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-12 mb-3'>
										<div class='form-gorup'>
											<label class='mont-font fw-600 font-xssss'>
												Número de certificado:
											</label>
											<input
												type='text'
												name='comment-name'
												class='form-control'
											/>
										</div>
									</div>
								</div>
								<Button
									className='me-7'
									onClick={handleClose}
									variant='contained'>
									Aceptar
								</Button>
								<Button
									className='ms-5'
									onClick={handleClose}
									variant='contained'>
									Cancelar
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Modal>
		</div>
	);
}
