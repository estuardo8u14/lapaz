import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Card, CardContent, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ModalPuntoVenta from './ModalPuntoVenta';

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
export default function ModalCuponCoex() {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant='contained'
				color='warning'
				onClick={handleOpen}>
				Crear Cupón COEX
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
						sx={{
							maxWidth: 340,
							display: 'flex',
							justifyContent: 'center',
						}}>
						<CardActionArea>
							<CardContent>
								<h3 className='fw-monoscpase fw-500 mb-3'>
									Cúpon Consulta Externa
								</h3>

								<label class='mont-font fw-500 font-xssss'>
									Especialidad: Ginecología
								</label>
								{/* <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                            <label class="mont-font fw-600 font-xssss">Seguro paciente:</label>
                                            <input type="text" name="comment-name" class="form-control" />
                                        </div>        
                                    </div>
                                </div> */}

								<div class='row'>
									<div class='col-lg-3 mb-1'>
										<div class='form-gorup'></div>
									</div>
								</div>
								<div class='row'>
									<div class='col-lg-6 mb-1'>
										<div class='form-gorup'>
											<label class='mont-font fw-500 font-xssss'>
												Médico: María Gómez
											</label>
										</div>
									</div>
									<div class='col-lg-6 mb-1'>Póliza: 956479</div>
								</div>

								<div class='row'>
									<div class='col-lg-6 mb-5'>
										<div class='form-gorup'>
											<label class='mont-font fw-600 font-xssss'>
												Fecha y hora: 15/03/2023
											</label>
											<input
												type='date'
												placeholder='Editar'
												name='comment-name'
												class='form-control'
											/>
										</div>
									</div>
									<div class='col-lg-6 mb-5'>Tipo de Seguro: SS</div>
								</div>

								<div class='row'>
									<div class='col-lg-6 mb-1'>
										<div class='form-gorup'>
											<label class='mont-font fw-500 font-xssss'>
												Total a pagar: <p className='fw-bold'>Q80</p>
											</label>
										</div>
									</div>
									<div class='col-lg-6 mb-1'>
										<ModalPuntoVenta onClick={handleClose} />
									</div>
								</div>
								<div class='row'>
									<div class='col-lg-12 mb-5 mt-3'>
										<div class='form-gorup'>
											<div class='linea'></div>
										</div>
									</div>
								</div>

								<div class='row'>
									<label class='mont-font fw-500 font-xssss pt-1'>
										Observaciones
									</label>

									<div class='form-check text-left mb-0'>
										<textarea
											type='text'
											name='comment-name'
											class='form-control'
										/>
									</div>
								</div>

								<div class='row'>
									<label class='mont-font fw-500 font-xssss pt-5'>
										Cargar archivos
									</label>
									<form action='#'>
										<div class='row'>
											<div class='col-lg-12 pt-1 mb-3'>
												<div class='form-check text-left mb-0'>
													<input type='file'></input>
												</div>
											</div>

											<div class='clearfix'></div>
										</div>
									</form>
									<Button
										onClick={handleClose}
										variant='contained'>
										Crear
									</Button>
								</div>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Modal>
		</div>
	);
}
