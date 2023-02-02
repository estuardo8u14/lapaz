import "./Table1.css";
import fakeData from "../../assets/data/Data1.json";
import * as React from "react";
import { useTable } from "react-table";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Table2() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Información General: <br></br> Última visita: 17/02/1998 <br></br> Código del paciente: 3019749690101<br></br> Seguro: Salud Siempre
    </Tooltip>
  );
    const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nombre",
        accessor: "first_name",
      },
      {
        Header: "Apellido",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Tipo",
        accessor: "gender",
      },
      {
        Header: "Estudios",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="containerr">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr class="table-row" {...row.getRowProps()} >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  
                ))}
                <td><OverlayTrigger
                  placement="right"
                  delay={{ show: 200, hide: 400 }}
                  overlay={renderTooltip}
                ><Link to="/Admisiones" className="nav-content-bttn open-font"><Button variant="contained"><i className="feather-edit-3"></i></Button></Link></OverlayTrigger></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
