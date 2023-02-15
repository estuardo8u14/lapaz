import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import ModalAdmision from "../Modals/ModalAdmision";


// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";


export default function Cardio() {
   
    return (
        <>
            <div class="col-xl-12 mt-5">
                <div class="page-title">
                    <div class="row">
                        <div class="col-lg-12 mb-5 mt-2">
                            <div class="form-gorup">
                            <div class='linea'></div>
                            </div>        
                        </div>                
                    </div>
                    <form action="#">
                    <div class="col">                                   
                            <div class="col-lg-12 mb-3">
                                <div class="form-gorup">
                                <div class="row">  
                                    <FormControl className='col-lg-4 ms-3 pt-3'>
                                        <InputLabel id="demo-simple-select-label">Exámen diagnostico</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select">
                                            <MenuItem value="value1">Electrocardiograma</MenuItem>
                                            <MenuItem value="value2">Ecocardiograma</MenuItem>
                                            <MenuItem value="value3">Spect Cardíaco</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl className='col-lg-4 ms-5 pt-3'>
                                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select">
                                            <MenuItem value="value1">Transtoracico</MenuItem>
                                            <MenuItem value="value2">Transesofágico</MenuItem>
                                        </Select>
                                        
                                    </FormControl> 
                                   
                                </div>        
                            </div>
                        </div>                           
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mb-5 mt-5">
                            <div class="form-gorup">
                            <div class='linea'></div>
                            </div>        
                        </div>                
                    </div>
                    
                    <div class="row">
                    <h4 class="mont-font fw-600 font-md mb-0 pt-1">Cargar archivos</h4>
                                            <form action="#">                       
                                                <div class="row">
                                                        <div class="col-lg-12 pt-1 mb-3">
                                                            <div class="form-check text-left mb-0">
                                                                <input type="file"></input>
                                                            </div>
                                                        </div>
                                               
                                                    <div class="clearfix"></div>
                                                </div>
                                          </form>                               
                                            
                                          <div class="row">
                                                    <div class="col-lg-12 mb-5 mt-2">
                                                      <div class="form-gorup">
                                                        <div class='linea'></div>
                                                      </div>        
                                                    </div>                
                                                  </div>
                    </div>
                    <ModalAdmision/>                                                 
                    </form>
                </div>
            </div>
        </>
    );
}