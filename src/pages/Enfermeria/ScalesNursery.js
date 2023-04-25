import React, { Fragment } from 'react';
import HeaderNurseryPatient from '../../components/Header/HeaderNurseryPatient';
import { Link } from 'react-router-dom';
import ScaleUlceras from '../../components/Enfermeria/ScalesEvaluations/ScaleUlceras';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
import ScaleFallsBootstap from '../../components/Enfermeria/ScalesEvaluations/ScaleFallsBootstap';
import AccidentReport from '../../components/Enfermeria/ScalesEvaluations/AccidentReport';
import PatientSearch from '../../components/Enfermeria/ScalesEvaluations/PatientSearch';

export default function ScalesNursery() {
	return (
		<Fragment>
			<HeaderAdmisiones />
			<div className='main-content right-chat-inactive bg-white'>
				<div className='middle-sidebar-bottom'>
					<div className='middle-sidebar-left pe-0'>
						<div className='row'>
							<div className='col-xl-12 cart-wrapper mb-4 mt-5'>
								<div class='row'>
									<div class='col-sm-12'>
										<div class='card bg-greyblue border-0 p-4 mb-5'>
											<p class='mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500'>
												<i class='fa fa-exclamation-circle'></i> Escalas y
												evaluaciones
											</p>
										</div>
									</div>
									{/* <div class='col-xl-12'>
										<div class='page-title'>
											<h4 class='mont-font fw-600 font-md mb-lg-2 mb-0'>
												Ordenes médicas (General)
											</h4>
											<UncontrolledBoard />
										</div>
									</div> */}
									<PatientSearch />

									<ScaleUlceras />
									<div class='row'>
										<div class='col-lg-12 mb-2 mt-5'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>

									<div className='pt-3 mb-3'>
										<ScaleFallsBootstap />
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-3 mt-2'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<div className='pt-2'>
										<AccidentReport />
									</div>
									<div class='row'>
										<div class='col-lg-12 mb-5 mt-2'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									{/* <SignsEditableTable />
									<div class='row'>
										<div class='col-lg-12 mb-5 mt-5'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
									<Belongings />
									<div class='row'>
										<div class='col-lg-12 mb-5 mt-5'>
											<div class='form-gorup'>
												<div class='linea'></div>
											</div>
										</div>
									</div>
								</div>
								<PdfForm /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
