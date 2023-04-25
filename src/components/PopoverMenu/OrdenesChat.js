import React, { Fragment, useState, useEffect } from 'react';
import HeaderAdmision from '../Header/HeaderAdmision';
import ChatComponent from '../Chat/ChatComponent';
import OrderChatComponent from '../Chat/OrderChatComponent';
import GridType from '../Chat/GridType';
import GridType2 from '../Chat/GridType2';
import ScaleFalls from '../Enfermeria/ScalesEvaluations/ScaleFalls';
import ScaleFalls1 from '../Enfermeria/ScalesEvaluations/ScaleFalls1';
import ScaleFallsBootstap from '../Enfermeria/ScalesEvaluations/ScaleFallsBootstap';
import AccidentReport from '../Enfermeria/ScalesEvaluations/AccidentReport';

// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function OrdenesChat() {
	useEffect(() => {
		window.scrollTo(0, 40);
	}, []);
	return (
		<Fragment>
			<HeaderAdmision />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4'>
								<div class='row pt-5 pb-5'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500'>
												<i class='fa fa-exclamation-circle'></i>{' '}
												<a
													class='expand-btn text-grey-500 fw-700'
													href='/'>
													Inicio /
												</a>{' '}
												<a
													class='expand-btn text-grey-500 fw-900'
													href='/Edit'>
													{' '}
													Juan Perez
												</a>
											</p>
										</div>
									</div>

									{/* <div class='row'>
										<div class='col-lg-12 mb-5 mt-3'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div> */}
									{/* <ChatComponent /> */}
									<OrderChatComponent />
									<GridType />
									<GridType2 />
									{/* <div className='pt-5'>
										<ScaleFalls />
									</div>
									<div className='pt-5'>
										<ScaleFalls1 />
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
