import { useState, React } from 'react';
import logo from '../../assets/img/logolargo.png';
import './Login.css';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [user, setUser] = useState(null);
	const handleUserChange = (e) => {
		setUser(e.target.value);
		console.log(user);
	};

	const [sucursal, setSucursal] = useState(null);
	const handleSucursalChange = (e) => {
		setSucursal(e.target.value);
		console.log(sucursal);
	};

	const navigate = useNavigate();

	const handlerInput = () => {
		navigate('/Home', { state: { user: user, sucursal: sucursal } });
	};

	return (
		<div className='Login'>
			<div class='col-xl-4 offset-xl-4 mt-5'>
				<div class='order-details'>
					<div class='table-content table-responsive mb-1 card border-1 bg-lightgrey p-lg-3 '>
						<img
							src={logo}
							className='logolargo'
							alt='logolargo'
						/>
						<p className='mont-font fw-700 font-md mt-5'>Inicio de Sesión</p>
						<div class='card border-0 mt-1 bg-greyblue p-lg-5 p-4'>
							<div class='col '>
								<div class='row'>
									<div className='col-lg-4 mb-3'>
										<label class='mont-font fw-700 font-xssss'>Usuario </label>
									</div>
									<div className='col-lg-5 mb-3'>
										<input
											onChange={handleUserChange}
											value={user}
											name='name'
											id='name'
											type='text'
										/>
									</div>
								</div>
								<div class='row'>
									<div className='col-lg-4 mb-3'>
										<label class='mont-font fw-700 font-xssss'>
											Contraseña{' '}
										</label>
									</div>
									<div className='col-lg-5 mb-3'>
										<input
											type='password'
											name='uname'
											required
										/>
									</div>
								</div>
								<div class='row'>
									<div class='col-lg-4 mb-3'>
										<label class='text-left mont-font fw-800 font-xssss'>
											Sucursal{' '}
										</label>
									</div>
									<div class='col-lg-5 mb-3'>
										<select
											onChange={handleSucursalChange}
											value={sucursal}
											type='text'
											class='mont-font fw-600 font-xsss'
											required>
											<option value='Zona 1'>Zona 1</option>
											<option value='Zona 10'>Zona 10</option>
											<option value='Zona 14'>Zona 14</option>
											<option value='Clínica Privada'>Clínica Privada</option>
										</select>
									</div>
								</div>
							</div>

							<div className='row'>
								<div className='col-lg-12 mt-3'>
									{/* <Link to={{pathname: "/Home", state: {user: {user}}}}> */}
									<Button
										style={{
											borderRadius: 35,
											background:
												'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
											padding: '18px 36px',
											fontSize: '12px',
											color: 'white',
										}}
										variant='contained'
										onClick={() => {
											handlerInput();
										}}>
										Iniciar sesión
									</Button>
									{/* </Link>                                   */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
