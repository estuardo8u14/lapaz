import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import ModalAdmision from "../Modals/ModalAdmision";

// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function ImgDx() {
  return (
    <>
      <div class="col-xl-12 mt-5">
        <div class="page-title">
          <div class="row">
            <div class="col-lg-12 mb-5 mt-2">
              <div class="form-gorup">
                <div class="linea"></div>
              </div>
            </div>
          </div>
          <h2 class="mont-font fw-600 font-md pt-1 pb-3">
            Imagénes diagnósticas
          </h2>
          <form action="#">
            <div class="col">
              <div class="col-lg-12 mb-3">
                <div class="form-gorup">
                  <div class="row">
                    <FormControl className="col-lg-4 ms-3 pt-3">
                      <InputLabel id="demo-simple-select-label">
                        Listado de imagénes diagnósticas
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="value1">Rayos X</MenuItem>
                        <MenuItem value="value2">
                          Tomografías computarizadas
                        </MenuItem>
                        <MenuItem value="value3">
                          Estudios de medicina nuclear
                        </MenuItem>
                        <MenuItem value="value4">
                          Imágenes por resonancia magnética
                        </MenuItem>
                        <MenuItem value="value5">Ecografía</MenuItem>

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

                    <FormControl className="col-lg-4 ms-3 pt-3">
                      <InputLabel id="demo-simple-select-label">
                        Región
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="value1">Cabeza</MenuItem>
                        <MenuItem value="value2">Cuello</MenuItem>
                        <MenuItem value="value3">Tórax</MenuItem>
                        <MenuItem value="value4">Abdomen</MenuItem>
                        <MenuItem value="value5">
                          Extremidades superiores
                        </MenuItem>
                        <MenuItem value="value5">
                          Extremidades inferiores
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className="col-lg-2 ms-3 pt-3">
                      <InputLabel id="demo-simple-select-label">
                        Sub-región
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="value1">sub1</MenuItem>
                        <MenuItem value="value2">sub2</MenuItem>
                        <MenuItem value="value3">sub3</MenuItem>
                        <MenuItem value="value4">sub4</MenuItem>
                        <MenuItem value="value5">sub5</MenuItem>
                        <MenuItem value="value6">sub6</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 mb-5 mt-5">
                <div class="form-gorup">
                  <div class="linea"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <h4 class="mont-font fw-600 font-md mb-0 pt-1">
                Cargar archivos
              </h4>
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
                    <div class="linea"></div>
                  </div>
                </div>
              </div>
            </div>
            <ModalAdmision />
          </form>
        </div>
      </div>
    </>
  );
}
