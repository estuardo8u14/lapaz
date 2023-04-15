import React, { Fragment } from 'react';
import HeaderEnfermeria from '../../components/Header/HeaderEnfermeria';
import HeaderNurseryNoPatient from '../../components/Header/HeaderNurseryNoPatient';
import NurseAllOrders from '../../components/Enfermeria/NurseAllOrders';

export default function NurseOrders() {
	return (
		<Fragment>
			<HeaderNurseryNoPatient />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4 mt-5'>
								<div class='row'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500'>
												<i class='fa fa-exclamation-circle'></i> Información
												General Ordenes Médicas
											</p>
										</div>
									</div>
									<div class='col-xl-12 pb-3'>
										<div class='page-title'>
											<h2 class='mont-font fw-900 font-md mb-lg-2 mb-0'>
												Ordenes asignadas
											</h2>
										</div>
									</div>
									<NurseAllOrders />
									{/* aqui tabla con ordenes */}
								</div>

								{/* <Document
									file='\public\assets\data\CRoja.pdf'
									renderMode='canvas'
									options={{
										cMapUrl: 'cmaps/',
										cMapPacked: true,
										disableAutoFetch: false,
									}}>
									<Page pageNumber={1} />
								</Document> */}
								{/* <iframe
									className='pt-5'
									title='This is a unique title'
									src='../../assets/data/CRoja.pdf'
									width='100%'
									height='600'></iframe> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
