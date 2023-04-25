import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
	Button,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	ButtonBase,
} from '@material-ui/core';

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
export default function ModalEmergencia() {
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
				color='red'
				onClick={handleOpen}>
				Editar
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
						sx={{ maxWidth: 300, display: 'flex', justifyContent: 'center' }}>
						<CardActionArea>
							<CardContent>
								<Typography
									gutterBottom
									variant='h4'
									component='div'>
									Orden:
								</Typography>
								{/* <Typography
									gutterBottom
									variant='h6'
									component='div'>
									Nombre del paciente:
								</Typography> */}
								<input
									required
									type='text'
									placeholder='Orden'
									name='comment-name'
									class='form-control mb-2'
								/>

								<input
									required
									type='text'
									placeholder='Tipo'
									name='comment-name'
									class='form-control mb-2'
								/>
								<input
									required
									type='text'
									placeholder='Doctor'
									name='comment-name'
									class='form-control mb-2'
								/>

								<input
									required
									type='text'
									placeholder='Estado'
									name='comment-name'
									class='form-control mb-2'
								/>

								<span class='text-right text-grey-700 font-xsss fw-700 order-total-ammount'>
									<div className=''>
										<Button
											variant='contained'
											onClick={handleClose}>
											Aceptar
										</Button>
									</div>
								</span>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Modal>
		</div>
	);
}
