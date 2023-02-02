import React, { Component } from 'react'
import logo from '../assets/img/logolargo.png';
import './Home.css';
import SearchBar from "../components/SearchBar/SearchBar";
//import BookData from "../assets/data/Data.json";
import fakeData1 from "../assets/data/Data1.json";
import { Typography } from '@material-ui/core';
// import Table2 from "../components/Tables/Table2";
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
import Dropdown from 'react-dropdown';



export default class Home2 extends Component {
  
  render() {
    const options = [
      'Zona 14', 'Zona 10'
    ];
    const defaultOption = options[0];

    return (
      <div className='Home'>
        <img src={logo} className="logolargo" alt="logolargo" />
        <div className='row'>
          <Typography className='fs-4'>Centro Hospitalario</Typography>
          
        </div>
        <div className='row'>
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Centro" />;
        </div>
        <div className='col'>
        {/* <Link to="/Admisiones" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-user-plus btn-round-md bg-blue-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Enfermeria" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-activity btn-round-md bg-mini-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Medico" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-eye btn-round-md bg-gold-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link> */}
        </div>
        <SearchBar placeholder="Ingresa una busqueda de médicos aquí..." data={fakeData1} />
        {/* <Table2/>
        <Link to="/" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button><i className='feather-user-plus btn-round-md bg-blue-gradiant me-3'></i>Buscar Pacientes</Button></Link> */}
      </div>
    )
  }
}
