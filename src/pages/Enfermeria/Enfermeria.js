import React, { Component, Fragment } from 'react';
//import Leftnav from "../../components/LeftNav/Leftnav";
//import logo from '../../assets/img/logolargo.png';
import HeaderEnfermeria from "../../components/Header/HeaderEnfermeria";
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, CardMedia, CardActionArea  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Enfermeria extends Component {
    
    
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
                                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Enfermería - Ordenes</h2>
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-sm-12">
                                      <div class="card bg-greyblue border-0 p-4 mb-5">
                                          <p class="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500"><i class="fa fa-exclamation-circle"></i> Información General Ordenes Médicas</p>
                                      </div>
                                  </div>

                                  <div class="col-xl-6 col-lg-6">
                                      <div class="page-title">
                                          <h4 class="mont-font fw-600 font-md mb-lg-5 mb-4">Ordenes</h4>
                                      </div>
                                      <div class="row">
                                        <Accordion className='bg-lightblue'>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>Orden Médica - Dr. Robles</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography>
                                                    Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                </Typography>
                                                </AccordionDetails>
                                                
                                                <Button onClick={""} sx={{justifyContent: "flex-end"}} variant='contained'><i className='feather-check'>Orden finalizada</i></Button>
                                            </Accordion>
                                      </div>
                                      <div class="row">
                                        <Accordion className='bg-lightblue mt-3'>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>Orden Médica - Dr. Hanz</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography>
                                                    Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                </Typography>
                                                </AccordionDetails>
                                                <Button sx={{justifyContent: "block"}} variant='contained'><i className='feather-check'></i>Orden Finalizada</Button>
                                            </Accordion>
                                      </div>
                                      <div class="row">
                                        <Accordion className='bg-lightblue mt-3'>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>Orden Médica - Dr. Juarez</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography>
                                                    Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                </Typography>
                                                </AccordionDetails>
                                                <Button sx={{justifyContent: "flex-end"}} variant='contained'><i className='feather-check'></i>Orden Finalizada</Button>
                                            </Accordion>
                                      </div>
                                      <div class="row" >
                                        <Accordion className='bg-lightblue mt-3'>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>Orden Médica - Dr. Aguilar</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography>
                                                    Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                </Typography>
                                                </AccordionDetails>
                                                <Button onClick={""} sx={{justifyContent: "flex-end"}} variant='contained'><i className='feather-check'></i>Orden Finalizada</Button>
                                            </Accordion>
                                      </div>
                                      <div class="row">
                                        <Accordion className='bg-lightblue mt-3'>
                                                <AccordionSummary 
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>Orden Médica - Dr. Barrientos</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails >
                                                <Typography>
                                                    Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                </Typography>
                                                </AccordionDetails>
                                                <Button onClick={""} sx={{justifyContent: "flex-end"}} variant='contained'><i className='feather-check'></i>Orden Finalizada</Button>
                                            </Accordion>
                                      </div>
                                  </div>
                                  <div class="col-xl-5 offset-xl-1 col-lg-6">
                                      <div class="order-details">
                                          <div class="checkout-payment card border-0 mb-3 bg-greyblue p-lg-5 p-4">
                                             
                                                  <div class="payment-group mb-4">
                                                    <h4 class="mont-font fw-600 font-md mb-5">Ordenes completadas</h4>
                                                    <div class="row">
                                                        {/* agregar ordenes completadas rows check */}
                                                        <Card sx={{ maxWidth: 340 }}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                component="video"
                                                                height="130"
                                                                image="/assets/videos/exito3_2.mp4"
                                                                alt="exito"
                                                                autoPlay
                                                                />
                                                                <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    Orden Médica - Dr. Barrientos
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                Tomar signos vitales del paciente Juan Pérez y llevar a rayos (femur izquierdo)
                                                                </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Card>
                                                    </div> 
                                                  </div>
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