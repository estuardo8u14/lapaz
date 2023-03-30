import React, { Fragment, useEffect, useState } from 'react';
import './MedicoCoex.css';
import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
import { Button } from 'semantic-ui-react';
import ModalCuponCoex from '../../components/Modals/ModalCuponCoex';
import { Link } from 'react-router-dom';
import ModalEditCuponCoex from '../../components/Modals/ModalEditCuponCoex';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';

export default function TablaCuponesCoex() {
	return (
		<Fragment>
			<HeaderAdmisiones />
			<div class='row pt-2'>
				<div class='col-xl-12 col-lg-12'>
					<div>
						<table className='tablacoex'>
							<tr>
								<th>ID</th>
								<th>Fecha</th>
								<th>Hora</th>
								<th>Nombre</th>
								<th>Seguro</th>
								<th>Tipo de seguro</th>
								<th>Cúpon</th>
								<th>Monto</th>
							</tr>
							<tr>
								<td>1</td>
								<td>21/03/2023</td>
								<td>10:00AM</td>
								<td className='fw-bold'>Juan Pérez</td>
								<td>SS</td>
								<td>SS+</td>
								<td className='izquierda'>
									<div class='col-lg-12'>
										<ModalEditCuponCoex />
									</div>
								</td>
								<td className='fw-bold'>Q80</td>
							</tr>
							<tr>
								<td>2</td>
								<td>21/03/2023</td>
								<td>10:00AM</td>
								<td className='fw-bold'>Juan Pérez</td>
								<td>SS</td>
								<td>SS+</td>
								<td className='izquierda'>
									<div class='col-lg-12'>
										<ModalEditCuponCoex />
									</div>
								</td>
								<td className='fw-bold'>Q80</td>
							</tr>
							<tr>
								<td>3</td>
								<td>21/03/2023</td>
								<td>10:00AM</td>
								<td className='fw-bold'>Juan Pérez</td>
								<td>SS</td>
								<td>SS+</td>
								<td className='izquierda'>
									<div class='col-lg-12'>
										<ModalEditCuponCoex />
									</div>
								</td>
								<td className='fw-bold'>Q80</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
