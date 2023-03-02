import React from 'react';
import { Radio } from '@material-ui/core';

function Covid() {
	return (
		<div>
			<div class='row'>
				<div class='col-lg-12 mb-0 mt-0'>
					<div class='form-gorup'>
						<label class='me-3 form-check-label fw-900 font-xsss text-grey-700'>
							Vacunas{' '}
						</label>
						<table class='table'>
							<thead>
								<tr>
									<th>Dosis</th>
									<th>Vacuna</th>
									<th>Fecha</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Primera</td>
									<td>
										<Radio color='warning' />
									</td>
									<td>
										<input type='date'></input>
									</td>
								</tr>
								<tr>
									<td>Segunda</td>
									<td>
										<Radio color='warning' />
									</td>
									<td>
										<input type='date'></input>
									</td>
								</tr>
								<tr>
									<td>Tercera</td>
									<td>
										<Radio color='warning' />
									</td>
									<td>
										<input type='date'></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Covid;
