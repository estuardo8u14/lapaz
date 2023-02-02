import React, { Component, Fragment } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderAdmisiones from "../../components/Header/HeaderAdmisiones";
import {Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleModal from '../../components/Modals/SimpleModal';


export default class Admisiones extends Component {
    state = {
        date: ""
      };
     
      componentDidMount() {
        this.getDate();
      };
     
      getDate = () => {
        var today = new Date(),
        date = today.getFullYear() + '-' + today.getDate() + '-0' + (today.getMonth() + 1) ;
        this.setState({ date });
      };

  render() {
    return (
        <Fragment> 
          <HeaderAdmisiones/>
          <div className="main-content right-chat-inactive bg-white">
              <div className="middle-sidebar-bottom">
                  <div className="middle-sidebar-left pe-0" >
                      <div className="row">
                          <div className="col-xl-12 cart-wrapper mb-4">
                              <div className="row">
                                  <div className="col-lg-12 mb-3">
                                      <div className="card p-md-5 p-4 bg-blue-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                                          <div className="bg-pattern-div"></div>
                                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Admisiones <span className="fw-700 ls-3 text-black-500 font-xsssss mt-2 d-block">Codigo del paciente: 319743890101</span></h2>
                                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0"> <span className="fw-700 ls-3 text-black-500 font-xsssss mt-2 d-block">Codigo admisión: CL-3462023</span></h2>
                                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0"><p className="fw-700 ls-3 text-black-500 font-xsssss mt-2 d-block">Fecha actual: (Y-d-m) : {this.state.date}</p></h2>
                                      </div>

                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-sm-12">
                                      <div class="card bg-greyblue border-0 p-4 mb-5">
                                          <p class="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500"><i class="fa fa-exclamation-circle"></i> Información - General /<a class="expand-btn text-grey-500 fw-700" href="/Admisiones">  Ingresa huella al guardar</a></p>
                                      </div>
                                  </div>

                                  <div class="col-xl-6 col-lg-6">
                                      <div class="page-title">
                                          <h4 class="mont-font fw-600 font-md mb-lg-5 mb-4">Información del paciente</h4>
                                          <form action="#">
                                              <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Primer nombre</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Segundo nombre</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Primer apellido</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Segundo apellido</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                              </div>

                                              <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">DPI</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Fecha de nacimiento</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                              </div>

                                              <div class="row">
                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Nacionalidad</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Ciudad</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                              </div>

                                              <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Estado civil</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Sexo</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="row">
                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Nit</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>

                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Pasaporte</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Afiliación IGSS</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Profesión</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Lugar de trabajo</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Email</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Celular</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Teléfono</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Teléfono del trabajo</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Lugar de nacimiento</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-check text-left mb-3">
                                                          <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                                          <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >Paciente Inválido</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <h4 class="mont-font fw-600 font-md mb-2">Vacunas Covid</h4>
                                                <div class="form-check text-left mb-2 mt-2">
                                                    <input type="checkbox" class="form-check-input mt-2" id="exampleCheck2" />
                                                    <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >1 Dosis</label>
                                                </div>
                                                <div class="form-check text-left mb-2 mt-2">
                                                    <input type="checkbox" class="form-check-input mt-2" id="exampleCheck2" />
                                                    <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >2 Dosis</label>
                                                </div>
                                                <div class="form-check text-left mb-5 mt-2">
                                                    <input type="checkbox" class="form-check-input mt-2" id="exampleCheck2" />
                                                    <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >3 Dosis</label>
                                                </div>

                                                <h4 class="mont-font fw-600 font-md mb-lg-5 mb-2">Dirección Residencia</h4>
                                                <div class="row">
                                                    <div class="col-lg-12 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Dirección anterior:</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Calle</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Zona</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Avenida/Manzana</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Colonia/Residencial</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-4 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">No. Casa o Apto.</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-8 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Edificio</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>
                                                  <div class="row">
                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Departamento</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>

                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Municipio</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>
                                                </div>

                                                <h4 class="mont-font fw-600 font-md mb-lg-5 mb-2">Dirección de Trabajo</h4>
                                                <div class="row">
                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Calle</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Zona</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Avenida/Manzana</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-3 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Colonia/Residencial</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-lg-4 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">No. Casa o Apto.</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-6 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Edificio</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                  <div class="col-lg-2 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Oficina</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>
                                                  <div class="row">
                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Departamento</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>

                                                    <div class="col-lg-6 mb-3">
                                                        <div class="form-gorup">
                                                            <label class="mont-font fw-600 font-xssss">Municipio</label>
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>        
                                                    </div>
                                                </div>
                                                <h4 class="mont-font fw-600 font-md mb-lg-5 mb-2">Información Extra</h4>
                                                <div class="row">
                                                    <Accordion>
                                                        <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        >
                                                        <Typography>Información Familiares</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                        <Typography>
                                                        Anotar información relevante sobre familiares del paciente.
                                                        </Typography>
                                                        </AccordionDetails>
                                                        <div class="col">
                                                            <div class="col-lg-12 mb-3">
                                                                <div class="form-gorup">
                                                                    <label class="mont-font fw-600 font-xssss">Nombre Padre</label>
                                                                    <input type="text" name="comment-name" class="form-control" />
                                                                </div>        
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="col-lg-12 mb-3">
                                                                <div class="form-gorup">
                                                                    <label class="mont-font fw-600 font-xssss">Nombre Madre</label>
                                                                    <input type="text" name="comment-name" class="form-control" />
                                                                </div>        
                                                            </div>
                                                        </div>
                                                    </Accordion>
                                                </div>

                                                <div class="row">
                                                    <Accordion>
                                                        <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        >
                                                        <Typography>Información Factura</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                        <Typography>
                                                        Anotar información relacionada al nombre y dirección de facturación.
                                                        </Typography>
                                                        </AccordionDetails>
                                                        <div class="col">
                                                            <div class="col-lg-12 mb-3">
                                                                <div class="form-gorup">
                                                                    <label class="mont-font fw-600 font-xssss">Nombre Factura</label>
                                                                    <input type="text" name="comment-name" class="form-control" />
                                                                </div>        
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="col-lg-12 mb-3">
                                                                <div class="form-gorup">
                                                                    <label class="mont-font fw-600 font-xssss">Ciudad</label>
                                                                    <input type="text" name="comment-name" class="form-control" />
                                                                </div>        
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 mb-3">
                                                            <div class="form-check text-left mb-3">
                                                                <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                                                <label class="pt--1 form-check-label fw-600 font-xsss text-grey-700" >Paciente solicita que nos comuniquemos con él para ofertas y/o promociones</label>
                                                            </div>
                                                        </div>

                                                    </Accordion>
                                                </div>


                                          </form>
                                          

                                      </div>
                                  </div>
                                  <div class="col-xl-5 offset-xl-1 col-lg-6">
                                      <div class="order-details">
                                          <h4 class="mont-font fw-600 font-md mb-5">Detalles del admisión</h4>
                                          <div class="table-content table-responsive mb-5 card border-5 bg-lightbrown p-lg-5 p-4">
                                              <table class="table order-table bg-lightgreen order-table-2 mb-0">
                                                  <thead>
                                                      <tr>
                                                          <th class="border-0">Resumen</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <th class="text-grey-700 fw-500 font-xsss">Nombre 
                                                              <strong><span>:</span> Julio Ramírez</strong>
                                                          </th>
                                                          <th class="text-grey-700 fw-500 font-xsss">Última visita 
                                                              <strong><span>:</span> 14/08/2021</strong>
                                                          </th>
                                                          
                                                      </tr>
                                                      <tr>
                                                          <th class="text-grey-700 fw-500 font-xsss">DPI 
                                                              <strong><span>:</span> 3019748690101</strong>
                                                          </th>
                                                          <th class="text-grey-700 fw-500 font-xsss">Fecha de nacimiento 
                                                              <strong><span>:</span> 14/08/2000</strong>
                                                          </th>
                                                      </tr>
                                                      <tr>
                                                          <th class="text-grey-700 fw-500 font-xsss">Ciudad 
                                                              <strong><span>:</span> Guatemala</strong>
                                                          </th>
                                                          <th class="text-grey-700 fw-500 font-xsss">Afilación IGSS
                                                              <strong><span>:</span> Sí</strong>
                                                          </th>
                                                      </tr>
                                                      <tr>
                                                          <th class="text-grey-700 fw-500 font-xsss">Teléfono 
                                                              <strong><span>:</span> 41067268</strong>
                                                          </th>
                                                          <th class="text-grey-700 fw-500 font-xsss">Estado civil
                                                              <strong><span>:</span> Soltero</strong>
                                                          </th>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr class="order-total">
                                                          <th>Guardar y Finalizar</th>
                                                          <td class="text-right text-grey-700 font-xsss fw-700"><span class="order-total-ammount"><SimpleModal/></span></td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                          <div class="checkout-payment card border-0 mb-3 bg-greyblue p-lg-5 p-4">
                                              <form action="#" class="payment-form">
                                                  <div class="payment-group mb-4">
                                                    <h4 class="mont-font fw-600 font-md mb-5">Información adicional</h4>
                                                    <div class="row">
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Médico Cabecera</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Teléfono</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros Médicos</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Teléfono</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-8 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Tipo de sangre</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>

                                                        <div class="payment-radio">
                                                          <input type="radio" value="bank" name="huellas-method" id="bank" />
                                                          <label class="payment-label fw-600 font-xsss text-grey-900 ms-2" >Paciente sin Huellas registradas</label>
                                                      </div>
                                                      <div class="payment-info" data-method="bank" >
                                                          <p class="font-xssss lh-24 text-grey-500 ps-4">En caso el paciente no contara con huellas registraddas en el sístema</p>
                                                      </div>
                                                  </div>
                                                  
                                                  <div class="payment-group mb-0">
                                                      <div class="payment-radio">
                                                          <input type="radio" value="cash" name="ss-methodd" id="cash" />
                                                          <label class="payment-label fw-600 font-xsss text-grey-900 ms-2" >
                                                              Salud Siempre
                                                          </label>
                                                      </div>
                                                      <div class="payment-info cash hide-in-default" data-method="cash">
                                                          <p class="font-xssss lh-24 text-grey-500 ps-4">Marcar en caso el paciente cuente con el seguro Salud Siempre.</p>
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
                                                                <label class="mont-font fw-600 font-xssss">Medicamentos</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Comidas</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Sustancias del ambiente</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Sustancias con efectos tópicos</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros</label>
                                                                <input type="text" name="comment-name" class="form-control" />
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
                                                                <label class="mont-font fw-600 font-xssss">Carnes</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Frutas</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Vegetales</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Vegetariano (sí/no)</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="col-lg-11 mb-3">
                                                            <div class="form-gorup">
                                                                <label class="mont-font fw-600 font-xssss">Otros</label>
                                                                <input type="text" name="comment-name" class="form-control" />
                                                            </div>        
                                                        </div>
                                                    </div>
                                                </Accordion>
                                                <Accordion disabled>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    >
                                                    <Typography>Salud Siempre</Typography>
                                                    </AccordionSummary>
                                                </Accordion>
                                              </form>
                                          </div>
                                          <div class="clearfix"></div>

                                          

                                          

                                      </div>
                                  </div>

                              </div>
                          </div>    
                      </div>
                  </div>
              </div>
          </div>
        </Fragment>
    );
  }
}