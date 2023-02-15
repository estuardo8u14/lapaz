import React, { Component} from 'react'
import logo from '../assets/img/logolargo1.png';
import './Home.css';
import SearchBar from "../components/SearchBar/SearchBar";
//import BookData from "../assets/data/Data.json";
import fakeData from "../assets/data/Data.json";
//import Table1 from "../components/Tables/Table1";
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
import {  Typography } from '@material-ui/core';
// import Dropdown from 'react-bootstrap/Dropdown';


export default class Home extends Component {
  
  render() {
    // const options = [
    //   'Zona 14', 'Zona 10'
    // ];
    // const defaultOption = options[0];
    
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
        
        <lable id="" variant="info">
          Zona 14
        </lable>

        </div>
        <div className='row mt-3'>
        
        <lable id="" variant="info">
          Usuario: Oscar Robles
        </lable>

        </div>
        <div className='col'>
        {/* <Link to="/Admisiones" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-user-plus btn-round-md bg-blue-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Enfermeria" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-activity btn-round-md bg-mini-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Medico" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-eye btn-round-md bg-gold-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link> */}
        </div>
        <SearchBar placeholder="Ingresa una busqueda de médicos aquí..." data={fakeData} />
        {/* <Table2/>
        <Link to="/" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button><i className='feather-user-plus btn-round-md bg-blue-gradiant me-3'></i>Buscar Pacientes</Button></Link> */}
      </div>
    )
  }
}
