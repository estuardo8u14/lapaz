import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect} from 'react';
import Cardio from "./Cardio";
import ImgDx from "./ImgDx";
import Labs from "./Labs";





export default function Servicios() {
    const [service, setService] = useState("");
    const [LabsContentVisible, setLabsContentVisible] = useState(false);
    const [ImgContentVisible, setImgContentVisible] = useState(false);
    const [CardioContentVisible, setCardioContentVisible] = useState(false);

    useEffect(() => {
        service === "Labs"
          ? setLabsContentVisible(true)
          : setLabsContentVisible(false);
        service === "Img" ? setImgContentVisible(true) : setImgContentVisible(false);
        service === "Cardio" ? setCardioContentVisible(true) : setCardioContentVisible(false);
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
                                    <MenuItem value="Labs">Laboratoríos</MenuItem>
                                    <MenuItem value="Img">Imágenes diagnósticas</MenuItem>
                                    <MenuItem value="Cardio">Cardiología</MenuItem>
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
                    {LabsContentVisible && <Labs/>}
                    {ImgContentVisible && <ImgDx/>}
                    {CardioContentVisible && <Cardio/>}
                </div>
            </div>
        </>
    );
}