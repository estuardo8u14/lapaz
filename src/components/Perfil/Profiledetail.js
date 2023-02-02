import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@material-ui/core';
import React,{Component} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Profiledetail extends Component {
    render() {
        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-block p-4">
                    <h4 className="fw-700 mb-3 font-xsss text-grey-900">Resumen</h4>
                    <div class="row">
                        <div class="col-lg-6 mb-3">
                            <div class="form-gorup">
                                <label class="mont-font fw-600 font-xssss">Médico Cabecera:</label>
                                <label class="mont-font fw-900 font-xssss">Gabriel De Léon</label>
                            </div>        
                        </div>

                        <div class="col-lg-6 mb-3">
                            <div class="form-gorup">
                                <label class="mont-font fw-600 font-xssss">Teléfono: </label>
                                <label class="mont-font fw-900 font-xssss"> (+502) 41067255</label>
                            </div>        
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-3">
                            <div class="form-gorup">
                                <label class="mont-font fw-600 font-xssss">Otros Médicos:</label>
                                <label class="mont-font fw-900 font-xssss">Oscar Robles</label>
                            </div>        
                        </div>

                        <div class="col-lg-6 mb-3">
                            <div class="form-gorup">
                                <label class="mont-font fw-600 font-xssss">Teléfono:</label>
                                <label class="mont-font fw-900 font-xssss">(+502) 58457255</label>
                            </div>        
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-5 mb-3">
                            <div class="form-gorup">
                                <label class="mont-font fw-600 font-xssss">Tipo de sangre:</label>
                                <label class="mont-font fw-900 font-xssss">O+</label>
                            </div>        
                        </div>
                    </div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Alergías</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        En caso el paciente fuera alergico a algun alimento o medicamento. Especificar en caso si se presenten alergías.
                        </Typography>
                        </AccordionDetails>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Medicamentos:</label>
                                    <label class="mont-font fw-900 font-xssss">Anti-inflamatorios</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Comidas:</label>
                                    <label class="mont-font fw-900 font-xssss">No</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Sustancias del ambiente:</label>
                                    <label class="mont-font fw-900 font-xssss">Polvo</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Sustancias con efectos tópicos:</label>
                                    <label class="mont-font fw-900 font-xssss">No</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Otros:</label>
                                    <label class="mont-font fw-900 font-xssss">N/A</label>
                                </div>        
                            </div>
                        </div>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Alimentos</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Marcar en caso el paciente especifique algúna dieta especifica.
                        </Typography>
                        </AccordionDetails>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Carnes:</label>
                                    <label class="mont-font fw-900 font-xssss">No</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Frutas:</label>
                                    <label class="mont-font fw-900 font-xssss">No</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Vegetales:</label>
                                    <label class="mont-font fw-900 font-xssss">No</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Vegetariano (sí/no):</label>
                                    <label class="mont-font fw-900 font-xssss">Sí</label>
                                </div>        
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-lg-11 mb-3">
                                <div class="form-gorup">
                                    <label class="mont-font fw-600 font-xssss mx-2">Otros:</label>
                                    <label class="mont-font fw-900 font-xssss">N/A</label>
                                </div>        
                            </div>
                        </div>
                    </Accordion>
                    
                </div>
                <div className="card-body border-top-xs d-flex">
                    <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-0">Seguro privado <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Aseguradoras El Roble</span></h4>
                </div>

                <div className="card-body d-flex pt-0">
                    <i className="feather-eye text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-0">Visible <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Tienes permiso para ver a este paciente</span></h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Hospital La Paz, Zona 14 </h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="feather-users text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1"><Button>Revisar expediente</Button></h4>

                </div>
            </div>
        );
    }
}

export default Profiledetail;