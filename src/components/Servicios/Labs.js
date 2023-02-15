import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import ModalAdmision from "../Modals/ModalAdmision";
// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";


export default function Labs() {
   
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
                                    <FormControl className='col-lg-5 pt-3 ms-3'>
                                        <InputLabel id="demo-simple-select-label">Listado de laboratorios</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select">
                                            <MenuItem value="value1">Hemograma</MenuItem>
                                            <MenuItem value="value2">Urinálisis</MenuItem>
                                            <MenuItem value="value3">Heces por Parásito</MenuItem>
                                            <MenuItem value="value4">Perfil Renal</MenuItem>
                                            <MenuItem value="value5">Perfil Hepático</MenuItem>
                                            <MenuItem value="value6">Perfil Tirodeo</MenuItem>
                                            <MenuItem value="value7">Panel básico metabólico</MenuItem>
                                            {/* <MenuItem value="value3">Sala Operaciones</MenuItem> */}
                                            {/* <MenuItem value="value4">RN en Hospital</MenuItem>
                                            <MenuItem value="value5">Paquete</MenuItem> */}
                                        </Select>
                                        {/* <select type="text" class="pl-7 mx-3 mont-font fw-600 font-xsss mb-1"  name="uname" required >
                                            <option value="value1">Emergencia</option>
                                            <option value="value2" >Interno</option>
                                            <option value="value3" selected>IGSS</option>
                                            <option value="value4">RN en Hospital</option>
                                            <option value="value5" >Paquete</option>
                                        </select> */}
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