import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect} from 'react';
import Emergencia from "./Emergencia";
import Encamamiento from "./Encamamiento";
import SalaOperaciones from "./SalaOperaciones";




export default function Hospitalizacion() {
    const [service, setService] = useState("");
    const [EmergenciaContentVisible, setEmergenciaContentVisible] = useState(false);
    const [EncamamientoContentVisible, setEncamamientoContentVisible] = useState(false);
    const [SalaOperacionesContentVisible, setSalaOperacionesContentVisible] = useState(false);

    useEffect(() => {
        service === "Emergencia"
          ? setEmergenciaContentVisible(true)
          : setEmergenciaContentVisible(false);
        service === "Encamamiento" ? setEncamamientoContentVisible(true) : setEncamamientoContentVisible(false);
        service === "So" ? setSalaOperacionesContentVisible(true) : setSalaOperacionesContentVisible(false);
      }, [service]);
    
      const handleOnChange = (e) => {
        setService(e.target.value);
      }; 

    return (
        <>
            <div class="col-xl-12 mt-5">
                <div class="page-title">
                    <form action="#">
                    <div class="col">
                        <div class="col-lg-12 mb-3">
                            <div class="form-gorup">
                            <FormControl className="col-lg-3 pt-3">
                                <InputLabel id="demo-simple-select-label">Tipo de admisión</InputLabel>
                                <Select
                                onChange={handleOnChange}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                    <MenuItem value="Emergencia">Emergencia</MenuItem>
                                    <MenuItem value="Encamamiento">Encamamiento</MenuItem>
                                    <MenuItem value="So">Sala de operaciones</MenuItem>
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
                                           
                    </form>
                    {EmergenciaContentVisible && <Emergencia/>}
                    {EncamamientoContentVisible && <Encamamiento />}
                    {SalaOperacionesContentVisible && <SalaOperaciones />}
                </div>
            </div>
        </>
    );
}