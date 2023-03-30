import React, { Fragment } from "react";
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
//import HeaderEnfermeria from "../../components/Header/HeaderEnfermeria";
// import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, CardMedia, CardActionArea  } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import Board from "@lourenci/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "./Enfermeria.css";
// import HeaderAdmisiones from '../../components/Header/HeaderAdmisiones';
//import KanbanOrdenes from '../../components/Kanban/KanbanOrdenes';
import Board from "../../components/Kanban/Board/Board";
import HeaderEnfermeria from "../../components/Header/HeaderEnfermeria";

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

export default function Enfermeria() {
  return (
    <Fragment>
      <HeaderEnfermeria />
      <div className="main-content right-chat-inactive bg-white">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12 cart-wrapper mb-4 mt-5">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card bg-greyblue border-0 p-4 mb-5">
                      <p class="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500">
                        <i class="fa fa-exclamation-circle"></i> Información
                        General Ordenes Médicas
                      </p>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="page-title">
                      <h4 class="mont-font fw-600 font-md mb-lg-2 mb-0">
                        Ordenes médicas (General)
                      </h4>
                      {/* <UncontrolledBoard /> */}
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
