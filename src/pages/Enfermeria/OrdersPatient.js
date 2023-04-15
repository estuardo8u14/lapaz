import React, { Fragment } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
//import HeaderEnfermeria from "../../components/Header/HeaderEnfermeria";
// import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, CardMedia, CardActionArea  } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import Board from "@lourenci/react-kanban";
import '@asseinfo/react-kanban/dist/styles.css';
import './Enfermeria.css';
// import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
//import KanbanOrdenes from '../../components/Kanban/KanbanOrdenes';
import Board from '../../components/Kanban/Board/Board';
import HeaderEnfermeria from '../../components/Header/HeaderEnfermeria';
import { Document, Page, pdfjs } from 'react-pdf';
import FillableTest from '../../components/Enfermeria/FillableTest';
import PdfForm from '../../components/Enfermeria/FillableTest';
import { Link } from 'react-router-dom';
import SignsEditableTable from '../../components/Tables/SignsEditableTable';
import Belongings from '../../components/Tables/Belongings';
import AuthProcedure from '../../components/Enfermeria/AuthProcedure';
import HeaderNurseryPatient from '../../components/Header/HeaderNurseryPatient';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const board = {
//     columns: [
//       {
//         id: 1,
//         title: "Pendientes",
//         cards: [
//           {
//             id: 1,
//             title: "Orden 1",
//             description: "Riesgo de déficit de líquidos"
//           },
//           {
//             id: 2,
//             title: "Orden 2",
//             description: "Sulfato de magnesio 5 g"
//           },
//           {
//             id: 3,
//             title: "Orden 3",
//             description: "Laxis, I Ampolla IV cada doce horas."
//           }
//         ]
//       },
//       {
//         id: 2,
//         title: "En curso",
//         cards: [
//           {
//             id: 9,
//             title: "Orden 9",
//             description: "Valorar reflejos del paciente, diuresis y frecuencia respiratoria"
//           }
//         ]
//       },
//       {
//         id: 3,
//         title: "Finalizado",
//         cards: [
//           {
//             id: 10,
//             title: "Orden 10",
//             description: "Administración de oxígeno"
//           },
//           {
//             id: 11,
//             title: "Orden 11",
//             description: "Conectar monitor cardíaco"
//           }
//         ]
//       }
//     ]
//   };

//   function UncontrolledBoard() {
//     return (
//       <Board
//         allowRemoveLane
//         allowRenameColumn
//         allowRemoveCard
//         onLaneRemove={console.log}
//         onCardRemove={console.log}
//         onLaneRename={console.log}
//         initialBoard={board}
//         allowAddCard={{ on: "top" }}
//         onNewCardConfirm={draftCard => ({
//           id: new Date().getTime(),
//           ...draftCard
//         })}
//         onCardNew={console.log}
//       />
//     );
//   }

export default function OrdersPatient() {
	return (
		<Fragment>
			<HeaderNurseryPatient />
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
												General Ordenes Médicas Paciente: Juan Pérez
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
									<div class='col-xl-10 offset-xl-1 col-lg-8 pt-3'>
										<div class='order-details'>
											<div class='table-content table-responsive mb-5 card border-1 bg-lightgrey p-lg-3 p-4'>
												<table class='table order-table bg-lightgrey order-table-2 mb-0'>
													<thead>
														<tr>
															<th class='border-0'>Detalles</th>
														</tr>
														<tr>
															<Link to='/PdfConsultaMedica'>
																<th className=''>
																	<i className='feather-file-text'> Imprimir</i>
																</th>
															</Link>
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
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Ciudad
																<strong>
																	<span>:</span> Guatemala
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																Email
																<strong>
																	<span>:</span> johnperez@gmail.com
																</strong>
															</th>
														</tr>
														<tr>
															<th class='text-grey-700 fw-500 font-xsss'>
																Teléfono
																<strong>
																	<span>:</span> 41067268
																</strong>
															</th>
															<th class='text-grey-700 fw-500 font-xsss'>
																NIT
																<strong>
																	<span>:</span> 15443528-5
																</strong>
															</th>
														</tr>
													</tbody>
													<tfoot>
														<tr class='order-total'>
															<Link to='/Edit'>
																<th className='pt-1'>Editar</th>
															</Link>
															<td class='text-right text-grey-700 font-xsss fw-700'>
																<span class='order-total-ammount'></span>
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									<Board />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
