import React, { useState } from "react";
import "./SearchBar.css";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function SearchBar({ placeholder, data }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Información General: <br></br> Última visita: 17/02/1998 <br></br> Código del paciente: 3019749690101<br></br> Seguro: Salud Siempre
    </Tooltip>
  );
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  

  return (
    <>
      <div className="search">
      <div className='containerrr'>
        <div className='input-wrap'>
          <i className="feather-search"></i>
          <input 
            onChange={handleFilter}
            value={wordEntered}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Ingresa busqueda..."
          />
          <i 
            onClick={clearInput}
            className="feather-x"
          ></i>
          <Link to="/Admisiones" className="nav-content-bttn open-font"><i className="mx-3 feather-plus-circle btn-round-md bg-blue-gradiant" variant=""></i></Link>
        </div>
      </div>
        <div className="searchInputs">
          
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                 <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                   <p>{value.first_name} {value.last_name}  </p>
                   <p className="tipo">{value.gender}</p>
                   <OverlayTrigger
                   placement="right"
                   delay={{ show: 200, hide: 400 }}
                   overlay={renderTooltip}
                 ><Link to="/Admisiones" ><Button style={{marginRight: '10px', paddingRight: '10px', paddingBottom: '10px', maxWidth: '50px', maxHeight: '10px', minWidth: '30px', minHeight: '5px'}} variant=""><i className="feather-edit-3"></i></Button></Link></OverlayTrigger>
                 </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;