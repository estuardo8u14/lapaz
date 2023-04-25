import React, { Fragment, useState } from 'react';
import {
	Button,
	ButtonGroup,
	TextField,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	menu: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	chatBox: {
		border: '1px solid grey',
		height: '350px',
		flexGrow: 1,
		overflowY: 'auto',
		padding: theme.spacing(2),
		borderBottom: `1px solid ${theme.palette.divider}`,
		borderRadius: theme.spacing(1),
	},
	input: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	chatBoxItem: {
		borderRadius: theme.spacing(1),
		padding: theme.spacing(2),
		maxWidth: '70%',
		display: 'inline-block',
		'&.Orden': {
			backgroundColor: '#f07a7a',
		},
		'&.Medicamento': {
			backgroundColor: '#7af0e2',
		},
		'&.Laboratorio': {
			backgroundColor: '#adf07a',
		},
		'&.Examen': {
			backgroundColor: '#ecf07a',
		},
	},
}));

const OrderChatComponent = () => {
	const classes = useStyles();
	const [orders, setOrders] = useState([]);
	const [currentOrderType, setCurrentOrderType] = useState('');

	const handleOrderTypeClick = (type) => {
		setCurrentOrderType(type);
	};

	const handleSendOrder = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const message = form.elements['message'].value.trim();
		if (currentOrderType && message) {
			setOrders([...orders, { type: currentOrderType, message }]);
			setCurrentOrderType('');
			form.reset();
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.chatBox}>
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{orders.map((order, index) => (
						<ListItem
							alignItems='flex-start'
							key={index}>
							<div className={`${classes.chatBoxItem} ${order.type}`}>
								<ListItemText
									primary={
										<Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='subtitle2'
												color='text.primary'>
												{order.type}:
											</Typography>
										</Fragment>
									}
									secondary={
										<Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='h6'
												color='text.primary'>
												{order.message}
											</Typography>
										</Fragment>
									}
								/>
							</div>
						</ListItem>
					))}
				</List>
			</div>
			<div className={classes.menu}>
				<ButtonGroup>
					<Button
						style={{
							borderRadius: '12px',
							borderColor: '#ffff',
							backgroundColor: '#f07a7a',
							color: '#ffff',
						}}
						className='me-5'
						color={currentOrderType === 'Orden' ? 'red' : 'default'}
						onClick={() => handleOrderTypeClick('Orden')}>
						<img
							style={{
								height: '50px',
								width: '50px',
							}}
							src='\assets\images\ordenes.png'
							alt='Ordenes'
						/>
					</Button>
					<Button
						style={{
							borderRadius: '12px',
							borderColor: '#ffff',
							backgroundColor: '#7af0e2',
							color: '#ffff',
						}}
						className='me-5'
						color={currentOrderType === 'Medicamento' ? 'secondary' : 'default'}
						onClick={() => handleOrderTypeClick('Medicamento')}>
						<img
							style={{
								height: '50px',
								width: '50px',
							}}
							src='\assets\images\meds.png'
							alt='Prescripcion'
						/>
					</Button>
					<Button
						style={{
							borderRadius: '12px',
							borderColor: '#ffff',
							backgroundColor: '#adf07a',
							color: '#ffff',
						}}
						className='me-5'
						color={currentOrderType === 'Laboratorio' ? 'secondary' : 'default'}
						onClick={() => handleOrderTypeClick('Laboratorio')}>
						<img
							style={{
								height: '50px',
								width: '50px',
							}}
							src='\assets\images\lab.png'
							alt='Laboratorio'
						/>
					</Button>
					<Button
						style={{
							borderRadius: '12px',
							borderColor: '#ffff',
							backgroundColor: '#ecf07a',
							color: '#ffff',
						}}
						className='me-5'
						color={currentOrderType === 'Examen' ? 'secondary' : 'default'}
						onClick={() => handleOrderTypeClick('Examen')}>
						<img
							style={{
								height: '50px',
								width: '50px',
							}}
							src='\assets\images\exam.png'
							alt='Imagenes'
						/>
					</Button>
				</ButtonGroup>
			</div>
			<form
				className={classes.input}
				onSubmit={handleSendOrder}>
				{/* <PopoverMenuChat /> */}
				<TextField
					style={{ borderColor: 'black', borderWidth: '2px' }}
					name='message'
					label='Escribe tu orden aquí...'
					variant='outlined'
					fullWidth
					autoComplete='off'
					disabled={!currentOrderType}
				/>
				<Button
					className='ms-2'
					type='submit'
					color='primary'
					variant='contained'
					disabled={!currentOrderType}>
					Enviar
				</Button>
			</form>
		</div>
	);
};

export default OrderChatComponent;
