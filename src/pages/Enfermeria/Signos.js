import React, { Component, Fragment } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderEnfermeria from "../../components/Header/HeaderEnfermeria";
import SimpleModal from '../../components/Modals/SimpleModal';


export default class Signos extends Component {
  render() {
    return (
        <Fragment> 
          <HeaderEnfermeria/>
          <div className="main-content right-chat-inactive bg-white">
              <div className="middle-sidebar-bottom">
                  <div className="middle-sidebar-left pe-0" >
                      <div className="row">
                          <div className="col-xl-12 cart-wrapper mb-4">
                              <div className="row">
                                  <div className="col-lg-12 mb-3">
                                      <div className="card p-md-5 p-4 bg-mini-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                                          <div className="bg-pattern-div"></div>
                                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Enfermería - Signos Vitales <span className="fw-700 ls-3 text-black-500 font-xsssss mt-2 d-block">Código del paciente: 319743890101</span></h2>
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-sm-12">
                                      <div class="card bg-greyblue border-0 p-4 mb-5">
                                          <p class="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500"><i class="fa fa-exclamation-circle"></i> Signos vitales</p>
                                      </div>
                                  </div>

                                  <div class="col-xl-6 col-lg-6">
                                      <div class="page-title">
                                          <h4 class="mont-font fw-600 font-md mb-lg-5 mb-4">Signos vitales del paciente</h4>
                                          <div class="row">
                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Nombre del paciente: Juan Pérez</label>       
                                                      </div>        
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Código del paciente: 319743890101</label>         
                                                      </div>        
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-lg-12 mb-5">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Código admisión: CL-3242023</label>         
                                                      </div>        
                                                  </div>
                                              </div>
                                          <form action="#">
                                                <div class="row">
                                                    <label class="mx-5 mb-2 mont-font fw-600 font-xsss">PA (mmHg)</label>
                                                    <div class="col-lg-2 mb-3 ">
                                                        <div class="form-gorup"> 
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>   
                                                    </div>
                                                    <div class="col-sm-1">
                                                        <label class="mt-2 mont-font fw-600 font-md">/</label>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 mb-3 me-4">
                                                        <div class="form-gorup">
                                                            <input type="text" name="comment-name" class="form-control" />
                                                        </div>      
                                                    </div>
                                                </div>
                                                <div class="row">

                                                  <div class="col-lg-2 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">F/C</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                  <div class="col-lg-2 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">F/R</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>

                                                  <div class="col-lg-2 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Temp</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                  <div class="col-lg-2 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">SatO2</label>
                                                          <input type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-lg-12 mb-3">
                                                      <div class="form-gorup">
                                                          <label class="mont-font fw-600 font-xssss">Notas</label>
                                                          <textarea type="text" name="comment-name" class="form-control" />
                                                      </div>        
                                                  </div>
                                                </div>
                                          </form>
                                          

                                      </div>
                                  </div>
                                  <div class="col-xl-5 offset-xl-1 col-lg-6">
                                      <div class="order-details">
                                          <h4 class="mont-font fw-600 font-md mb-5">Detalles Signos</h4>
                                          <div class="table-content table-responsive mb-5 card border-0 bg-greyblue p-lg-5 p-4">
                                              <table class="table order-table order-table-2 mb-0">
                                                  <thead>
                                                      <tr>
                                                          <th class="border-0">Resumen</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <th class="text-grey-500 fw-500 font-xsss">PA 
                                                              <strong><span>:</span> N/A</strong>
                                                          </th>
                                                          <th class="text-grey-500 fw-500 font-xsss">F/C
                                                              <strong><span>:</span> N/A</strong>
                                                          </th>
                                                          
                                                      </tr>
                                                      <tr>
                                                          <th class="text-grey-500 fw-500 font-xsss">F/R 
                                                              <strong><span>:</span> N/A</strong>
                                                          </th>
                                                          <th class="text-grey-500 fw-500 font-xsss">T° 
                                                              <strong><span>:</span> N/a</strong>
                                                          </th>
                                                      </tr>
                                                      <tr>
                                                          <th class="text-grey-500 fw-500 font-xsss">PaO2 
                                                              <strong><span>:</span> N/A</strong>
                                                          </th>
                                                          <th class="text-grey-500 fw-500 font-xsss">Notas
                                                              <strong><span>:</span> N/A</strong>
                                                          </th>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                  <tr class="cart-subtotal">
                                                          <th>Pre-Guardar</th>
                                                          <td class="text-right text-grey-700 font-xsss fw-700"><SimpleModal/></td>
                                                      </tr>
                                                      <tr class="order-total">
                                                          <th>Guardar y Finalizar</th>
                                                          <td class="text-right text-grey-700 font-xsss fw-700"><span class="order-total-ammount"><SimpleModal/></span></td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
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