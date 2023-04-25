import React, { useState } from 'react';
import {
	Button,
	ButtonGroup,
	TextField,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PopoverMenuChat from '../PopoverMenu/PopoverMenuChat';

const useStyles = makeStyles((theme) => ({
	root: {
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
		flexGrow: 1,
		overflowY: 'auto',
		padding: theme.spacing(2),
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	input: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
}));

const ChatComponent = () => {
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
				<List>
					{orders.map((order, index) => (
						<ListItem key={index}>
							<ListItemText
								primary={order.type}
								secondary={order.message}
							/>
						</ListItem>
					))}
				</List>
			</div>
			<div className={classes.menu}>
				<ButtonGroup>
					<Button
						className='me-5'
						color={currentOrderType === 'Evolucion' ? 'primary' : 'default'}
						onClick={() => handleOrderTypeClick('Evolucion')}>
						Evolución
					</Button>
					<Button
						className='me-5'
						color={currentOrderType === 'Orden' ? 'Orden' : 'Orden'}
						onClick={() => handleOrderTypeClick('Orden')}>
						Orden
					</Button>
					<Button
						className='me-5'
						color={currentOrderType === 'Medicamento' ? 'primary' : 'default'}
						onClick={() => handleOrderTypeClick('Medicamento')}>
						Medicamento
					</Button>
					<Button
						className='me-5'
						color={currentOrderType === 'Laboratorio' ? 'primary' : 'default'}
						onClick={() => handleOrderTypeClick('Laboratorio')}>
						Laboratorio
					</Button>
					<Button
						className='me-5'
						color={currentOrderType === 'Examen' ? 'primary' : 'default'}
						onClick={() => handleOrderTypeClick('Examen')}>
						Examen
					</Button>
				</ButtonGroup>
			</div>
			<form
				className={classes.input}
				onSubmit={handleSendOrder}>
				<PopoverMenuChat />
				<TextField
					name='message'
					label='Escribe tu orden aquí'
					variant='outlined'
					fullWidth
					autoComplete='off'
					disabled={!currentOrderType}
				/>
				<Button
					type='submit'
					color='primary'
					variant='contained'
					disabled={!currentOrderType}>
					Send
				</Button>
			</form>
		</div>
	);
};

export default ChatComponent;
