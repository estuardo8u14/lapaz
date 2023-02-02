import React, { Component } from 'react'
import logo from '../assets/img/logolargo.png';
import './Home.css';
import SearchBar from "../components/SearchBar/SearchBar";
//import BookData from "../assets/data/Data.json";
import fakeData from "../assets/data/Data.json";
import Table1 from "../components/Tables/Table1";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


export default class Home extends Component {
  
  render() {
    return (
      <div className='Home'>
        <img src={logo} className="logolargo" alt="logolargo" />
        <div className='col'>
        {/* <Link to="/Admisiones" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-user-plus btn-round-md bg-blue-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Enfermeria" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-activity btn-round-md bg-mini-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link>
        <Link to="/Medico" className="nav-content-bttn open-font h-auto pt-2 pb-2"><Button className='feather-eye btn-round-md bg-gold-gradiant me-3' variant='outlined' style={{ minWidth: '20px', minHeight: '0px'}}></Button></Link> */}
        </div>
        <SearchBar placeholder="Ingresa una busqueda de pacientes aquí..." data={fakeData} />
        <Table1/>
      </div>
    )
  }
}
