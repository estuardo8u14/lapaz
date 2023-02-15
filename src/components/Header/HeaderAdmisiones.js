import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logomid.png';
import SearchBarSuper from '../SearchBar/SearchBarSuper';
import fakeData1 from '../../assets/data/Data1.json';

class HeaderAdmisiones extends Component {
	state = {
		isOpen: false,
		isActive: false,
		isNoti: false,
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
	toggleActive = () => this.setState({ isActive: !this.state.isActive });
	toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

	render() {
		const navClass = `${this.state.isOpen ? ' nav-active' : ''}`;
		const buttonClass = `${this.state.isOpen ? ' active' : ''}`;
		const searchClass = `${this.state.isActive ? ' show' : ''}`;

		return (
			<div className='nav-header bg-white shadow-xs border-0'>
				<div className='nav-top'>
					<Link to='/'>
						<img
							src={logo}
							alt='logomid'
						/>
					</Link>
					<span
						onClick={this.toggleActive}
						className='me-2 menu-search-icon mob-menu'>
						<i className='feather-search text-grey-900 font-sm btn-round-md bg-greylight'></i>
					</span>
					<button
						onClick={this.toggleOpen}
						className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
				</div>

				<form
					action='#'
					className='barritacontenedor'>
					<SearchBarSuper data={fakeData1} />
					{/* <div className="form-group mb-0 icon-input">
                        <i className="feather-search font-sm text-grey-400"></i>
                        <input type="text" placeholder="Escribe para buscar en todas partes ..." className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w750 theme-dark-bg" />
                    </div> */}
				</form>
				<NavLink
					activeClassName='active'
					to='/'
					className='p-2 text-center ms-3 menu-icon center-menu-icon'>
					<i className='feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 '></i>
				</NavLink>
				<nav className={`navigation scroll-bar ${navClass}`}>
					<div className='container ps-0 pe-0'>
						<div className='nav-content'>
							<div className='row'></div>
							<div className='nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-1 mt-1'>
								<div className='row mb-3'>
									<form
										action='#'
										className='float-left header-search ms-3'>
										<div className='form-group mb-0 icon-input'>
											<i className='feather-search font-sm text-grey-400'></i>
											<input
												type='text'
												placeholder='Buscar en servicios...'
												className='bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w200 theme-dark-bg'
											/>
										</div>
									</form>
								</div>
								<div className='nav-caption fw-600 font-xssss text-grey-500'>
									<span>Página </span>Principal Admisiones
								</div>
								<ul className='mb-1 top-content'>
									<li className='logo d-none d-xl-block d-lg-block'></li>
									<li>
										<Link
											to='/Admisiones'
											className='nav-content-bttn open-font'>
											<i className='feather-plus btn-round-md bg-blue-gradiant me-3'></i>
											<span>Nuevo Paciente</span>
										</Link>
									</li>
									{/* <li><Link to="/Admision" className="nav-content-bttn open-font"><i className="feather-users btn-round-md bg-blue-gradiant me-3"></i><span>Admisión</span></Link></li> */}
									{/* <li><Link to="/AdmisionAtencion" className="nav-content-bttn open-font"><i className="feather-users btn-round-md bg-blue-gradiant me-3"></i><span>Admisión A</span></Link></li> */}
									<li>
										<Link
											to='/Enfermeria'
											className='nav-content-bttn open-font'>
											<i className='feather-paperclip btn-round-md bg-blue-gradiant me-3'></i>
											<span>Ordenes Médicas</span>
										</Link>
									</li>
									{/* <li><Link to="/Medico" className="nav-content-bttn open-font"><i className="feather-file-text btn-round-md bg-blue-gradiant me-3"></i><span>Notas de Evolución</span></Link></li>
                                    <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-git-branch btn-round-md bg-blue-gradiant me-3"></i><span>Laboratorio</span></Link></li>
                                    <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-eye btn-round-md bg-blue-gradiant me-3"></i><span>Diagnosticos</span></Link></li>
                                    <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-alert-octagon btn-round-md bg-blue-gradiant me-3"></i><span>SOP</span></Link></li>
                                    <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-plus btn-round-md bg-blue-gradiant me-3"></i><span>Encamamiento</span></Link></li> */}
								</ul>
							</div>

							<div className='nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1'>
								<div className='nav-caption fw-600 font-xssss text-grey-500'>
									<span></span> Cuenta
								</div>
								<ul className='mb-3'>
									<li className='logo d-none d-xl-block d-lg-block'></li>
									<li>
										<Link
											to='/'
											className='nav-content-bttn open-font h-auto pt-2 pb-2'>
											<i className='font-sm feather-settings me-3 text-grey-500'></i>
											<span>Ajustes</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>

				<div className={`app-header-search ${searchClass}`}>
					<form className='search-form'>
						<div className='form-group searchbox mb-0 border-0 p-1'>
							<input
								type='text'
								className='form-control border-0'
								placeholder='Buscar...'
							/>
							<i className='input-icon'>
								<ion-icon
									name='search-outline'
									role='img'
									className='md hydrated'
									aria-label='search outline'></ion-icon>
							</i>
							<span className='ms-1 mt-1 d-inline-block close searchbox-close'>
								<i
									className='ti-close font-xs'
									onClick={this.toggleActive}></i>
							</span>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default HeaderAdmisiones;
