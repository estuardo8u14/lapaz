import React from 'react'
import logo from '../assets/img/logolargo1.png';
import './Home.css';
import SearchBarSuper from "../components/SearchBar/SearchBarSuper";
//import BookData from "../assets/data/Data.json";
import fakeData1 from "../assets/data/Data1.json";
//import fakeData2 from "../assets/data/Data.json";
import { Typography } from '@material-ui/core';
// import Table2 from "../components/Tables/Table2";
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
//import Dropdown from 'react-dropdown';
import {useLocation} from 'react-router-dom';


export default function Home2() {
  const { state } = useLocation();
    return (
      <div className='Home'>
        <div class="row">
          <div class="col-lg-12 mb-3">
              <div class="form-gorup">
              <img src={logo} className="logolargo1" alt="logolargo1" />
              </div>        
          </div>
      </div>
        <div className='row'>
          <Typography className='fs-4'>Centro Hospitalario</Typography>
          
        </div>
        <div className='row mt-3'>
        
        <lable className="mont-font fw-700 font-xsss" id="sucursal" variant="info">
          Sucursal: {state.sucursal}
        </lable>

        </div>
        <div className='row mt-3 mb-5 '>
        
        <lable className="mont-font fw-700 font-xsss" id="user" variant="info">
          Usuario: {state.user}
        </lable>

        </div>
        <div className='col'>
        {/* <Link to="/Admisiones" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-user-plus btn-round-md bg-blue-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Enfermeria" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-activity btn-round-md bg-mini-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Medico" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-eye btn-round-md bg-gold-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link> */}
        </div>
        <SearchBarSuper placeholder="Ingresa una busqueda aquí..." data={fakeData1}/>
        {/* <Table2/>
        <Link to="/" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button><i className='feather-user-plus btn-round-md bg-blue-gradiant me-3'></i>Buscar Pacientes</Button></Link> */}
      </div>
    )
  
}