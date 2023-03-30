import React, { useState } from "react";
import "./SearchBarSuperTel.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SearchBarSuperTel({ placeholder, data }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Información General: <br></br> Fecha nacimento: 17/02/1998 <br></br>Edad:
      25 <br></br> DPI: 3019749690101<br></br> Nombre Padre: Jose Pérez<br></br>{" "}
      Nombre Madre: María Gracía<br></br> Fecha última visita: 27/01/2023
    </Tooltip>
  );
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.last_name.toLowerCase().includes(searchWord.toLowerCase())
      );
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
        <div className="containerrrr ms-3 mt-3">
          <div className="input-wrap">
            <i className="busca feather-search"></i>
            <input
              onChange={handleFilter}
              value={wordEntered}
              type="text"
              name="product-search"
              id="product-search"
              placeholder="Ingresa busqueda..."
            />
            <i onClick={clearInput} className="cancel feather-x"></i>
            <Link to="/NuevoPaciente" className="nav-content-bttn open-font">
              <i
                className="mx-3 feather-plus-circle btn-round-md bg-blue-gradiant"
                variant=""
              ></i>
            </Link>
          </div>
        </div>
        <div className="searchInputs"></div>

        {filteredData.length !== 0 && (
          <div className="contenedorResultados">
            <h4 className="hr-lines fw-700 text-black">Filtros</h4>
            <div className="filtros mb-3 mt-3">
              <a className="" href="/Tablas">
                Todos(9)
              </a>
              <a className="mx-4" href="/Tablas">
                Admisiones(4)
              </a>
              <a className="mx-4" href="/Tablas">
                Laboratorios(1)
              </a>
              <a className="mx-4" href="/Tablas">
                Consulta externa(3)
              </a>
              <a className="mx-4" href="/Tablas">
                Rayos X(1)
              </a>
            </div>
            <h4 className="hr-lines fw-700 text-black">Zona 10</h4>

            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <>
                  <div>
                    <a
                      className="dataItem mt-3"
                      href={value.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-user"></i>
                      <Link to={"/Tablas"}>
                        <p className="text-black font-md fw-700">
                          {value.first_name} {value.middle_name}{" "}
                          {value.last_name} {value.second_last_name}
                        </p>
                      </Link>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 200, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Link to="/Edit">
                          <Button
                            style={{
                              marginRight: "10px",
                              paddingRight: "10px",
                              paddingBottom: "10px",
                              maxWidth: "50px",
                              maxHeight: "10px",
                              minWidth: "30px",
                              minHeight: "5px",
                            }}
                            variant=""
                          >
                            <i className="feather-edit-3"></i>
                          </Button>
                        </Link>
                      </OverlayTrigger>
                    </a>
                    <div className="filtros mb-3 mt-0">
                      <a className="me-5" href="/Tablas">
                        Admisiones(2)
                      </a>
                      <a className="me-4" href="/Tablas">
                        Laboratorios(4)
                      </a>
                      <a className="mx-4" href="/Tablas">
                        Consulta externa(2)
                      </a>
                      <a className="mx-4" href="/Tablas">
                        Imágenes diagnósticas(4)
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
            <h4 className="hr-lines fw-700 text-black">Zona 14</h4>

            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <>
                  <div>
                    <a
                      className="dataItem mt-3"
                      href={value.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-user"></i>
                      <p className="font-md fw-700">
                        {value.first_name} {value.middle_name} {value.last_name}{" "}
                        {value.second_last_name}
                      </p>
                    </a>
                    <div className="filtros mb-3 mt-0">
                      <a className="me-5" href="/Tablas">
                        Admisiones(1)
                      </a>
                      <a className="me-4" href="/Tablas">
                        Laboratorios(1)
                      </a>
                      <a className="mx-4" href="/Tablas">
                        Consulta externa(2)
                      </a>
                      <a className="mx-4" href="/Tablas">
                        Rayos X(1)
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBarSuperTel;
