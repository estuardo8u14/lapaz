import React, { Fragment, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Hospitalizacion from '../../components/Hospitalizacion/Hospitalizacion';
import Servicios from '../../components/Servicios/Servicios';

export default function InfoPacienteEmergencia() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [tipoadmision, setTipoadmision] = useState('');
	const [hospitalizacionContentVisible, setHospitalizacionContentVisible] =
		useState(false);
	const [serviciosContentVisible, setServiciosContentVisible] = useState(false);

	// const [showHospitalization, setShowHospitalization] = useState(true);

	useEffect(() => {
		tipoadmision === 'hospitalizacion'
			? setHospitalizacionContentVisible(true)
			: setHospitalizacionContentVisible(false);
		tipoadmision === 'servicios'
			? setServiciosContentVisible(true)
			: setServiciosContentVisible(false);
	}, [tipoadmision]);

	const handleOnChange = (e) => {
		e.preventDefault();
		setTipoadmision(e.currentTarget.value);
	};

	return (
		<Fragment>
			<div class='row pt-5'>
				<h4 class='mont-font fw-600 font-md pt-3 pb-3'>Emergencia</h4>
				<div class='col-xl-12 col-lg-12'>
					<div class='page-title'>
						<div class='row'>
							<div class='col-lg-12 mb-3 mt-3'>
								<div class='form-gorup'>
									<div class='linea'></div>
								</div>
							</div>
						</div>
						<div class='row'>
							<div class='col-lg-6 mb-3'>
								<Button
									value={'hospitalizacion'}
									onClick={handleOnChange}
									variant='contained'
									fullWidth>
									Hospitalización
								</Button>
							</div>
							<div class='col-lg-6'>
								<Button
									value={'servicios'}
									onClick={handleOnChange}
									variant='contained'
									fullWidth>
									Servicios
								</Button>
							</div>
							<div class='row'>
								<div class='col-lg-12 mb-3 mt-3'>
									<div class='form-gorup'>
										<div class='linea'></div>
									</div>
								</div>
							</div>
						</div>
						{hospitalizacionContentVisible && <Hospitalizacion />}
						{serviciosContentVisible && <Servicios />}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
