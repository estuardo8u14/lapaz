// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Button, Card, CardContent, CardActionArea } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

// function rand() {
// 	return Math.round(Math.random() * 20) - 10;
// }
// function getModalStyle() {
// 	const top = 50 + rand();
// 	const left = 50 + rand();
// 	return {
// 		top: `${top}%`,
// 		left: `${left}%`,
// 		transform: `translate(-${top}%, -${left}%)`,
// 	};
// }
// const useStyles = makeStyles((theme) => ({
// 	modal: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	paper: {
// 		position: 'absolute',
// 		width: 450,
// 		backgroundColor: theme.palette.background.paper,
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(2, 4, 3),
// 	},
// }));
// export default function ModalAutoFill() {
// 	const classes = useStyles();
// 	const [modalStyle] = React.useState(getModalStyle);
// 	const [open, setOpen] = React.useState(false);
// 	const handleOpen = () => {
// 		setOpen(true);
// 		valuepacientes;
// 	};
// 	const handleClose = () => {
// 		setOpen(false);
// 	};
// 	const options = ['', '', '', '', ''];

// 	const pacientes = ['Juan Pérez', 'Mauricio Rodríguez', 'Pedro Sánchez'];

// 	const [valuepacientes, setValuepacientes] = React.useState(pacientes[0]);
// 	const [inputValuepacientes, setInputValuepacientes] = React.useState('');

// 	return (
// 		<div>
// 			<Button
// 				variant='contained'
// 				color='warning'
// 				onClick={handleOpen}>
// 				Rellenar información
// 			</Button>
// 			<Modal
// 				aria-labelledby='simple-modal-title'
// 				aria-describedby='simple-modal-description'
// 				open={open}
// 				onClose={handleClose}>
// 				<div
// 					style={modalStyle}
// 					className={classes.paper}>
// 					<Card
// 						sx={{ maxWidth: 340, display: 'flex', justifyContent: 'center' }}>
// 						<CardActionArea>
// 							<CardContent>
// 								<h2 className='fw-monoscpase fw-500'>Selecciona paciente</h2>
// 								{/* <div class="row">
//                                     <div class="col-lg-12 mb-3">
//                                         <div class="form-gorup">
//                                             <label class="mont-font fw-600 font-xssss">Seguro paciente:</label>
//                                             <input type="text" name="comment-name" class="form-control" />
//                                         </div>
//                                     </div>
//                                 </div> */}

// 								<div class='row'>
// 									<div class='col-lg-3 mt-3 mb-3'>
// 										<div class='form-gorup'>
// 											<Autocomplete
// 												value={valuepacientes}
// 												onChange={(event, newValuepacientes) => {
// 													setValuepacientes(newValuepacientes);
// 												}}
// 												inputValuepacientes={inputValuepacientes}
// 												onInputChange={(event, newInputValuepacientes) => {
// 													setInputValuepacientes(newInputValuepacientes);
// 												}}
// 												id='controllable-states-demo'
// 												options={pacientes}
// 												sx={{ width: 300 }}
// 												renderInput={(params) => (
// 													<TextField
// 														{...params}
// 														label='Paciente:'
// 													/>
// 												)}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<Link to='/Admisiones'>
// 									<Button
// 										onClick={handleClose}
// 										variant='contained'>
// 										Rellenar
// 									</Button>
// 								</Link>
// 							</CardContent>
// 						</CardActionArea>
// 					</Card>
// 				</div>
// 			</Modal>
// 		</div>
// 	);
// }

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
export default function ModalAutoFill() {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const dashboardData = {
		component: 'Juan  ',
		content: 'Antonio',
		component1: 'Pérez',
		content2: 'García',
		content3: '14/02/1998',
		content4: 'Guatemalteco',
		content5: '3019748690101',
		content6: 'N/A',
		content7: 'Soltero',
		content8: 'Masculino',
		content9: '41067286',
		content10: 'johnperez@ejemplo.com',
		content11: 'Blvd Jacatan 31-25 z.21 Villas de Juan Perez Casa 34',
	};

	const zonas = [
		'Juan Antonio Pérez Gracía',
		'Mauricio Peña Godoy',
		'Pedro Manuel Sánchez Aguilar',
	];

	const [valuezonas, setValuezonas] = React.useState(zonas[0]);

	const [inputValuezona, setInputValuezona] = React.useState('');

	return (
		<div>
			<Button
				variant=''
				onClick={handleOpen}>
				AutoFill
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
								<h2 className='fw-monoscpase fw-500'>Pacientes:</h2>
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
														label='Paciente:'
													/>
												)}
											/>
										</div>
									</div>
								</div>

								<Link
									to='/Admisiones'
									state={dashboardData}>
									<Button
										onClick={handleClose}
										variant='contained'>
										Rellenar
									</Button>
								</Link>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Modal>
		</div>
	);
}
