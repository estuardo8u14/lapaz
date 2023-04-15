import { Link } from '@material-ui/core';
import React from 'react';

function Belongings() {
	return (
		<div>
			<h4 class='mont-font fw-700 font-md mb-5'>Recepción paciente</h4>

			<div class='col-xl-10 offset-xl-1 col-lg-8 pt-3'>
				<div class='order-details'>
					<div class='table-content table-responsive mb-5 card border-1 bg-lightgrey p-lg-3 p-4'>
						<table class='table order-table bg-lightgrey order-table-2 mb-0'>
							<thead>
								<tr>
									<th class='border-0'>Detalles</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class='text-grey-700 fw-500 font-xsss'>
										Nombre
										<strong>
											<span>:</span> Juan Alberto Pérez García
										</strong>
									</th>
									<th class='text-grey-700 fw-500 font-xsss'>
										Última visita
										<strong>
											<span>:</span> 14/08/2021
										</strong>
									</th>
								</tr>
								<tr>
									<th class='text-grey-700 fw-500 font-xsss'>
										DPI
										<strong>
											<span>:</span> 3019748690101
										</strong>
									</th>
									<th class='text-grey-700 fw-500 font-xsss'>
										Fecha de nacimiento
										<strong>
											<span>:</span> 14/08/2000
										</strong>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='row pb-5'>
				<label lass='mont-font fw-500 font-xss'>
					Lista las pertenencias del paciente:
				</label>
				<textarea></textarea>
			</div>
			<div className='row pb-5'>
				<input type='file' />
			</div>
			<div className='row'>
				<table>
					<thead>
						<tr>
							<th>Listado segun admisiones previas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Item 1</td>
						</tr>
						<tr>
							<td>Item 2</td>
						</tr>
						<tr>
							<td>Item 3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Belongings;
